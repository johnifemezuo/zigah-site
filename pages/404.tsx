import Head from "next/head";
import React from "react";
import PageNotFound from "../components/Pages/PageNotFound/PageNotFound";

function PageNotFoundIndex() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>{" "}
      </Head>

      <PageNotFound />
    </>
  );
}

export default PageNotFoundIndex;
