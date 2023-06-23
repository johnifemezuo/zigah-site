import { useQuery } from "@apollo/client";
import Head from "next/head";
import { TERMSOFUSE } from "../../base/query/graphql-queries";
import { PageLoading } from "../../components/Global/Loading/PageLoading";
import Terms from "../../components/Pages/Terms/Terms";

function TermsIndex() {
  const { data, loading } = useQuery(TERMSOFUSE);

  return (
    <>
      <Head>
        <title>Terms Of Use</title>
      </Head>

      {loading ? <PageLoading /> : <Terms termsData={data?.termsOfuses?.[0]} />}
    </>
  );
}

export default TermsIndex;
