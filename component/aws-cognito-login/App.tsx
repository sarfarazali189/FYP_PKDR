import { useEffect, useState } from "react";
import { Web3AuthCore } from "@web3auth/core";
import { Web3Auth } from "@web3auth/web3auth";
import Link from 'next/link'
import { Auth } from  "@aws-amplify/auth";
import * as React from 'react';
//import Check from "../../pages/Check";

import { useRouter } from 'next/router'

import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { polygonMumbaiPRC } from "./RPC/polygon-mumbai";
import Checkuser from "../../pages/Checkuser";
import Cookies from "js-cookie";


const clientId = "BAA4FWUihMGqfS8KcHdaDWZIPxqYtVPtgKBsU2V2KFpmIZGQfHrddtn3fSmsVnWheKMlljgcj3lYY-O_2R3MSyc"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [username, setusername] = React.useState<string>();




  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3AuthCore({
          chainConfig: polygonMumbaiPRC,
          enableLogging: true,
          sessionTime: 3000
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: "testnet",
            uxMode: "redirect",
            whiteLabel: {
              name: "PKDR Finance Server",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
            },

            loginConfig: {
              jwt: {
                name: "Custom AWS Cognito Login via Google",
                verifier: "pkdr-test",
                typeOfLogin: "jwt",
                clientId: "74qh6dc32eau2n57pe2j1513so", //use your app client id you will get from aws cognito app
              },
            },
          },
          loginSettings: {
            //   mfaLevel: "mandatory",
            sessionTime: 3000,
          },
        });
        web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);

        await web3auth.init();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();

  }, []);



  const login = async () => {

    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        mfaLevel: "mandatory",
        loginProvider: "jwt",
        extraLoginOptions: {
          domain: "https://pkdrfinancetest.auth.us-west-2.amazoncognito.com",
          verifierIdField: "email",
          response_type: "token",
          scope: "email profile openid",
        },
      }

    );
    
    
    document.cookie = `identity=${"k191305@nu.edu.pk"}`; 
    localStorage.setItem("login","true")

    
    setProvider(web3authProvider);

  //  const user = await web3auth.getUserInfo();
    

//  localStorage.setItem("login",user.idToken)

    
    

    
  

  };





  


  const getInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }

    const user = await web3auth.getUserInfo();
    console.log(user);
    setusername(user.email);
//    console.log("usermail",username);

  };
/*
  const a=process.env. NEXT_PUBLIC_UserPoolId
  const d=process.env.NEXT_PUBLIC_accessKeyId
  const e=process.env.NEXT_PUBLIC_secretAccessKey
  const f=process.env.NEXT_PUBLIC_region


  const router = useRouter()
  var AWS = require('aws-sdk');

  AWS.config.update({
      accessKeyId: d,
      secretAccessKey: e,
      region: f
  });


  var params2 = {
      UserPoolId: a,
      Username: "alisjaikh189@gmail.com"
     
  };
  const admincheck=()=>{
    var client = new AWS.CognitoIdentityServiceProvider();

    client.adminGetUser(params2, function(err: any, data: any) {
        if (err) {
            console.log("Error",err);
            router.push('/register')
          
        } else {
            console.log("user",data);
            //resolve(data);
        }
    })

}
*/
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    
    setProvider(null);
    const cname="identity"
    localStorage.setItem("login","false")

    Cookies.remove(cname);

    const windowFeatures = "left=auto,top=auto,width=auto,height=auto";
    window.open(
      "https://pkdrfinancetest.auth.us-west-2.amazoncognito.com/logout?client_id=74qh6dc32eau2n57pe2j1513so&logout_uri=http://localhost:3000&redirect_uri=http://localhost:3000"
    );
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const authenticateUserInfo = await web3auth.authenticateUser();
    console.log(authenticateUserInfo);
  }



  const loggedInView = (
    <div>


      <Checkuser/>
      <button onClick={getInfo} type="button" className="btn btn-outline-secondary btn-lg px-4" >
        Get User Info
      </button>


      <br />
      <br />


      <br />
      <br />
      <button onClick={logout} type="button" className="btn btn-outline-secondary btn-lg px-4">
        Log Out
      </button>
      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>
    </div>
  );

  const unloggedInView = (




    < div className="px-4 py-5 my-5 text-center" >
   
    
    <h1 className="display-5 fw-bold">PKDRFINANCE</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">
        Quickly design and customize responsive mobile-first sites with Bootstrap,
        the world’s most popular front-end open source toolkit, featuring Sass
        variables and mixins, responsive grid system, extensive prebuilt
        components, and powerful JavaScript plugins.
      </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={login}  type="button" className="btn btn-outline-secondary btn-lg px-4">
          Login 
        </button>
        <button  onClick={login}  type="button" className="btn btn-outline-secondary btn-lg px-4">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  

   // <button onClick={login} className="card">
    //  Sign up
  //  </button>
  );



  
  return (

  
    <div className="container">
      <br /><br />

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>
    </div>
  );
}

export default App;




