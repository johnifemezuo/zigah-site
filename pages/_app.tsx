import { AppProps } from "next/app";
import Head from "next/head";
import { FC, useState } from "react";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../base/request/apolloClient";

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
