// Types
import type { AppProps } from 'next/app';
// Styles
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>

         </Head>
         <ChakraProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ChakraProvider>
      </>
   );
}

export default MyApp;
