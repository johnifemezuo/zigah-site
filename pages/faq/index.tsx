import { useQuery } from "@apollo/client";
import Head from "next/head";
import { FAQS } from "../../base/query/graphql-queries";
import { PageLoading } from "../../components/Global/Loading/PageLoading";
import Faq from "../../components/Pages/Faq/Faq";

function FaqIndex() {
  const { data: faqs, loading } = useQuery(FAQS);

  return (
    <div>
      <Head>
        <title>Faq</title>
      </Head>

      {loading ? <PageLoading /> : <Faq faqData={faqs?.faqs} />}
    </div>
  );
}

export default FaqIndex;
