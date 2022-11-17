import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Amplify from "@aws-amplify/core";
import {  Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
// import styles from '../styles/Home.module.css'
import App from '../component/aws-cognito-login/App'
import React, { useEffect, useState } from 'react';

import awsExports from "../src/aws-exports";


import awsconfig from '../src/aws-exports'
Amplify.configure({ ...awsExports, ssr: true });


const Home: NextPage = () => {
 async function checkuser() {
    const user=await Auth.currentAuthenticatedUser()
    console.log('user',user)
    
 }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<b><h3 >Welcome To PKDRFINANCE</h3></b>
     <App />

    
    </div>
  )
}

export default Home
