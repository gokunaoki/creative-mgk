import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../styles/reset.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Creative MGK</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
