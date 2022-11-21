import '../styles/globals.css'
import React from 'react';
import  { withSSRContext } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import Navbar from '../component/Navbar';
const { Auth } = withSSRContext();
//import Amplify from "@aws-amplify/core";
//import config from '../aws-exports';
//Amplify.configure({
  //...config, ssr: true
//});

import awsExports from "../src/aws-exports";
import Amplify from 'aws-amplify';
Amplify.configure({ ...awsExports, ssr: true });;
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <><Navbar /><Component {...pageProps} /></>
  )

}

export default MyApp



