import React, {useState} from 'react';
import { Web3AuthCore } from "@web3auth/core";
import { SafeEventEmitterProvider } from "@web3auth/base";

export const Context = React.createContext<any>(null);

const Store = (props: any)=>{
//     const [web3auth, setWeb3auth] = useState<Web3AuthCore | null>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  let web3auth :any
    return (
 
        <Context.Provider value={{web3auth,provider}}>{props.children}</Context.Provider>
      );
}

export default Store;