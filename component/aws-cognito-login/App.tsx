import { useEffect, useState } from "react";
import { Web3AuthCore } from "@web3auth/core";
import { Web3Auth } from "@web3auth/web3auth";
import * as React from 'react';
import {WALLET_ADAPTERS,CHAIN_NAMESPACES,  SafeEventEmitterProvider,} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { polygonMumbaiPRC } from "./RPC/polygon-mumbai";
import Checkuser from "../../pages/Checkuser";
import Cookies from "js-cookie";
import Userinfo from "../../pages/Userinfo";
import Landingpage from "../../pages/Landingpage";
import { Context } from "../../src/context/Web3store/Store";
const clientId = "BAA4FWUihMGqfS8KcHdaDWZIPxqYtVPtgKBsU2V2KFpmIZGQfHrddtn3fSmsVnWheKMlljgcj3lYY-O_2R3MSyc"; // get from https://dashboard.web3auth.io
function App(this: any) {
  const [web3auth, setWeb3auth] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  //let provider=React.useContext(Context).provider;

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
    localStorage.setItem("login","true")
    //document.cookie = `identity=${"k191281@nu.edu.pk"}`; 
    setProvider(web3authProvider);
    React.useContext(Context).web3auth=web3auth;

  };


  const getInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    //const user = await web3auth.getUserInfo();
    //console.log(user); 
    //let x =await JSON.parse(localStorage.openlogin_store)
    //document.cookie = `identity=${x["email"]}`; 
    
    //console.log("email",x["email"])
  };

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

  const loggedInView = (
    <>  <Checkuser   />
    <Userinfo/>
    <div>
 
 

      <button onClick={getInfo} type="button" className="btn btn-outline-secondary btn-lg px-4" >
        Get User Info
      </button>
     <br /><br /><br />    <br />
      <button onClick={logout} type="button" className="btn btn-outline-secondary btn-lg px-4">
        Log Out
      </button>
      <br /><br /><br /> <br /><br /> <br /> <br />  
      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div></div>
<div className="patient-container"></div></>
  );

  const unloggedInView = (
    <>    <section id="hero">
    <div
      className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Secure and easy way for your future </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">                    
Buy, sell, and swap PKDR in minutes
Verify your identity, add a payment method — like a debit card or bank account — and you’re good to go.</p>
        <div className="flex justify-center md:justify-start">
        <button   onClick={login}  type="button" className=" mr-6 py-1 hover:bg-brightRedLigh  bg-brightRed btn  rounded-full btn-lg px-7"> Login </button>
        <button  onClick={login}  type="button" className="py-1 hover:bg-brightRedLigh  bg-brightRed btn  rounded-full btn-lg px-7">  Sign Up </button>
        </div></div>
      <div className="md:w-1/2">
        <img src="img/bank.png"  />
      </div> </div>  </section>
<Landingpage/></>);
  return (
    <div className="container">
      <br /><br />
      <div className="grid">{provider ? loggedInView : unloggedInView}</div>
    </div>
  );
}
export default App;
