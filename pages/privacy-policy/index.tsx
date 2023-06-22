import Head from "next/head";
import React from "react";
import Policy from "../../components/Pages/Policy/Policy";
import { useQuery } from "@apollo/client";
import { PRIVACY_POLICY } from "../../base/query/graphql-queries";
import { PageLoading } from "../../components/Global/Loading/PageLoading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrivacyIndex() {

  const { data,loading } = useQuery(PRIVACY_POLICY);

  return (
    <>
      <Head>
        <title>Privacy Polic</title>
      </Head>

      {loading ? <PageLoading /> : <Policy policyData={data?.privacyPolicies[0]} />}
    </>
  );
}


export default PrivacyIndex;
