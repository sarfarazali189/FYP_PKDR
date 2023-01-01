import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import  { withSSRContext } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import Footer from '../component/Footer';
const { Auth } = withSSRContext();
import awsExports from "../src/aws-exports";
import Amplify from 'aws-amplify';
Amplify.configure({ ...awsExports, ssr: true });;
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import ErrorBoundary from '../component/ErrorBoundary';

const ComponentWithNoSSR = dynamic(
  () => import('../component/Navbar'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  return(
    <>
      <ErrorBoundary>
    <ComponentWithNoSSR />
    <Component {...pageProps} />
    <Footer/>
    </ErrorBoundary>

    </>
  )

}

export default MyApp



