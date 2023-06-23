import { useQuery } from "@apollo/client";
import Head from "next/head";
import { PRIVACY_POLICY } from "../../base/query/graphql-queries";
import { PageLoading } from "../../components/Global/Loading/PageLoading";
import Policy from "../../components/Pages/Policy/Policy";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrivacyIndex() {
  const { data, loading } = useQuery(PRIVACY_POLICY);

  return (
    <>
      <Head>
        <title>Privacy Polic</title>
      </Head>

      {loading ? (
        <PageLoading />
      ) : (
        <Policy policyData={data?.privacyPolicies[0]} />
      )}
    </>
  );
}

export default PrivacyIndex;
