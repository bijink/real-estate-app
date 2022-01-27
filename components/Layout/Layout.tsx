import Head from "next/head";
import { Box } from "@chakra-ui/react";
// Types
import type { LayoutProps } from './Layout.types';


const Layout = ({ children }: LayoutProps) => (
   <>
      <Head>
         <title>Real Estate</title>
      </Head>
      <Box maxWidth={'1280px'} m={'auto'} >
         <header>
            Navbar
         </header>
         <main>
            {children}
         </main>
         <footer>
            Footer
         </footer>
      </Box>
   </>
);

export default Layout;
