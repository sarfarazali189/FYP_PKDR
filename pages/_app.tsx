import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import  { withSSRContext } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
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
import Head from "next/head";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>

    </>
  )

}

export default MyApp



