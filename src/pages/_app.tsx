import { AppPropsWithLayout } from "@/app/interface/home-page.interface";
import DashboardLayout from "@/app/layout/dashboard-layout";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>Reservation App</title>
        <meta name="description" content="Reservation App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Component.getLayout ? (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      ) : (
        <ChakraProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </ChakraProvider>
      )}
    </>
  );
}

export default App;
