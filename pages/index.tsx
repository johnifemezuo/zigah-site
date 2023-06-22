import type { NextPage } from "next";
import Head from "next/head";
import GetStarted from "../components/Pages/homepage/GetStarted/GetStarted";
import HeroSection from "../components/Pages/homepage/HeroSection/HeroSection";
import TrustedBy from "../components/Pages/homepage/TrustedBy/TrustedBy";
import React from "react";
import SectionThree from "../components/Pages/homepage/SectionThree/SectionThree";
import { SectionFour } from "../components/Pages/homepage/SectionFour/SectionFour";
import { SectionFive } from "../components/Pages/homepage/SectionFive  /SectionFive";
import { SectionSix } from "../components/Pages/homepage/SectionSix/SectionSix";
import GetInTouch from "../components/Pages/homepage/GetInTouch/GetInTouch";
import { CustomerReviews } from "../components/Pages/homepage/CustomerReviews/CustomerReviews";
import { HOME_QUERY, USER_REVIEW } from "../base/query/graphql-queries";
import { useQuery } from "@apollo/client";
import { IHomePage } from "../base/interface/graph.interface";
import { PageLoading } from "../components/Global/Loading/PageLoading";
import ZigahNotBank from "../components/Pages/homepage/ZigahNotBank/ZigahNotBank";


const HomeIndex: NextPage = () => {

  const { data, loading } = useQuery(HOME_QUERY);
  const { data:userReview, loading:isLoading } = useQuery(USER_REVIEW);
  const homeInfo = data?.homepages[0] as IHomePage;
  const allLoading = loading || isLoading;

  return (
    <>
      <Head>
        <title>Zigah | Welcome</title>
      </Head>

      {allLoading ? (
        <PageLoading />
      ) : (
        <div>
          <HeroSection desc={homeInfo?.heroDescription} />
          <TrustedBy title={homeInfo?.sectionOneTItle} desc={homeInfo?.sectionOneDesc} />
          <GetStarted
            title={homeInfo?.sectionTwoTitle}
            desc={homeInfo?.sectionTwoDesc}
            subTitle={homeInfo?.sectionTwoSubTitle}
          />
          <SectionThree title={homeInfo?.sectionThreeTitle} desc={homeInfo?.sectionThreeDesc} />

            {/* <ZigahNotBank /> */}
            
          {/* <SectionFour
            title={homeInfo?.sectionFourTitle}
            desc={homeInfo?.sectionFourDesc}
            imgOne={homeInfo?.sectionFourImageOne?.url}
            imgTwo={homeInfo?.sectionFourImageTwo?.url}
          /> */}
          <SectionFive title={homeInfo?.sectionFiveTitle} desc={homeInfo?.sectionFiveDesc} />
          <SectionSix
            subTitle={homeInfo?.sectionSixSubTitle}
            title={homeInfo?.sectionSixTitle}
            features={homeInfo?.productFeatures}
          />
          {/* <UserStory userStory={userStory}/>
      <HowWeHelpSection moreInfo={homeInfo} />
      <MoreInfo moreInfo={homeInfo} />
      <InsightSection blogData={blog} />*/}
          <CustomerReviews reviews={userReview} />
          <GetInTouch />
        </div>
      )}
    </>
  );
};

export default HomeIndex;

