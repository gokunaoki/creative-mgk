import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../styles/reset.css";
import { AppProps } from "next/app";
import Head from "../components/head";
import { ThemeProvider } from "styled-components";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
