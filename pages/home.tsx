import type { NextPage } from 'next'
import Head from 'next/head'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import App from '../component/aws-cognito-login/App'
import Navbar from '../component/Navbar'
const HomePage: NextPage = () => {
  return (
    <div >
   
     <App />
     <p>Hi from home</p>
    
    </div>
  )
}

export default HomePage
