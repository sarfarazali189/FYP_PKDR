import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {  Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
// import styles from '../styles/Home.module.css'
import App from '../component/aws-cognito-login/App'
import Navbar from '../component/Navbar'
const HomePage: NextPage = () => {
  return (
    <div >
   
     
<b><h3 >AWS-Cognito + Google</h3></b>
     <App />
     <p>Hi from home</p>
    
          <button  onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>
          sign in with Google
          </button>
          <button  onClick={() => Auth.federatedSignIn()}>
          sign in 
          </button>
    </div>
  )
}

export default HomePage
