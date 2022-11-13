import { useEffect, useState } from "react";
import { Web3AuthCore } from "@web3auth/core";
import { Web3Auth } from "@web3auth/web3auth";
import Link from 'next/link'
import { Auth } from  "@aws-amplify/auth";

import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";


import { polygonMumbaiPRC } from "./RPC/polygon-mumbai";

const clientId = "BAA4FWUihMGqfS8KcHdaDWZIPxqYtVPtgKBsU2V2KFpmIZGQfHrddtn3fSmsVnWheKMlljgcj3lYY-O_2R3MSyc"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

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
    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }

    const user = await web3auth.getUserInfo();
    //const user1=await Auth.currentAuthenticatedUser()
    ///console.log('user',user1)
    console.log(user);

  };

  async function checkuserpkr() {
    const user=await Auth.currentAuthenticatedUser()
    console.log('user',user)
    
  }


  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();

    setProvider(null);
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
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <br />
      <br />

< Link href="/register">

  <a>Register</a>
</Link>

<button onClick={checkuserpkr}>checkuser</button>

      <br />
      <br />
      <button onClick={logout} className="card">
        Log Out
      </button>
      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>
    </div>
  );

  const unloggedInView = (
    <button onClick={login} className="card">
      Sign up
    </button>
  );

  return (
    <div className="container">
      <br />
      <br />

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>
    </div>
  );
}

export default App;