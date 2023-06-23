import { useQuery } from "@apollo/client";
import Head from "next/head";
import { ABOUT_US } from "../../base/query/graphql-queries";
import { PageLoading } from "../../components/Global/Loading/PageLoading";
import AboutUs from "../../components/Pages/About/AboutUs";

function AboutUsIndex() {
  const { data, loading } = useQuery(ABOUT_US);
  const aboutUs = data?.aboutUsPages?.[0];

  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      {loading ? <PageLoading /> : <AboutUs aboutInfos={aboutUs} />}
    </>
  );
}

export default AboutUsIndex;
