// types
import type { AppProps } from 'next/app';
// styles
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      // <ChakraProvider>
      <Component {...pageProps} />
      // </ChakraProvider>
   );
}

export default MyApp;
