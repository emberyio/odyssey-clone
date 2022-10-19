import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Luigi&rsquo;s Italian Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Lou and his wife Steph, together with all the team at Luigi&rsquo;s
            Italian Restaurant, are committed to provide quality and friendly
            service to locals &amp; holiday makers alike.'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
