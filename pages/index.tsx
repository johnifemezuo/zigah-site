import type { NextPage } from "next";
import React from "react";
import { Layout } from "../components";
import Blog from "../components/page-sections/blog";
import HelpingBusiness from "../components/page-sections/helping-business";
import Hero from "../components/page-sections/hero";
import MoreInfo from "../components/page-sections/more-info";
import Quote from "../components/page-sections/quote";
import StoryOne from "../components/page-sections/story-one";
import StoryTwo from "../components/page-sections/story-two";
import Testimonial from "../components/page-sections/testimonial";
import { IBlogProps } from "../types/blog";
import { Testimonial as TestimonialType } from "../types/home";
import {
  IPostsResponse,
  IStoryOneResponse,
  IStoryTwoResponse,
  ITestimonialResponse,
} from "../types/response";
import { StoryOne as IStoryOne, StoryTwo as IStoryTwo } from "../types/stories";
import {
  FetchStoryOneServices,
  FetchStoryTwoServices,
  FetchTestimonialsServices,
} from "./api/home";
import { FetchPostsService } from "./api/posts";

interface HomePageProps {
  blogs: IBlogProps[];
  storyOne: IStoryOne[];
  storyTwo: IStoryTwo[];
  testimonials: TestimonialType[];
}

export const getServerSideProps = async () => {
  const BlogRes: IPostsResponse<IBlogProps[]> = await FetchPostsService();
  const StoryOneRes: IStoryOneResponse<IStoryOne[]> =
    await FetchStoryOneServices();
  const StoryTwoRes: IStoryTwoResponse<IStoryTwo[]> =
    await FetchStoryTwoServices();
  const TestimonialRes: ITestimonialResponse<TestimonialType[]> =
    await FetchTestimonialsServices();

  return {
    props: {
      blogs: BlogRes.blogs,
      storyOne: StoryOneRes.storyOnes,
      storyTwo: StoryTwoRes.storyTwos,
      testimonials: TestimonialRes.testimonials,
    },
  };
};

const Home: NextPage<HomePageProps> = ({
  blogs,
  storyOne,
  storyTwo,
  testimonials,
}: HomePageProps) => (
  <Layout pagename="Ziga | Home">
    <Hero />
    <Quote />
    <StoryOne storyOnes={storyOne} />
    <StoryTwo storyTwo={storyTwo} />
    <MoreInfo />
    <HelpingBusiness />
    {testimonials && testimonials.length > 0 && (
      <Testimonial testimonials={testimonials} />
    )}
    <Blog blogs={blogs} />
  </Layout>
);

export default Home;
