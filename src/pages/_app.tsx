import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../styles/reset.css";
import { AppProps } from "next/app";
import Head from "../components/head";
import { ThemeProvider } from "styled-components";
import * as gtag from "../../utils/gtag";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
