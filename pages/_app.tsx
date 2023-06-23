import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import apolloClient from "../base/request/apolloClient";
import Layout from "../layout/Layout";
import "../styles/globals.css";

// eslint-disable-next-line react/function-component-definition
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const AltComponent = Component as any;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
     user-scalable=0"
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <Layout>
          <AltComponent {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
