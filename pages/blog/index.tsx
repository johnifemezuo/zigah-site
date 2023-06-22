import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import Blogs from "../../components/Pages/Blog/Blogs";
import { fetchData } from "../../util/hooks/useFetch";
import { ReadOnlyBlogInterface } from "../../util/interface/blogInterface";

function BlogIndex() {
  return (
    <>
      <Head>
        <title>Zigah | Blog</title>
      </Head>

      <div>
        {/* <Blogs allBlog={allBlog} /> */}
      </div>
    </>
  );
}

export default BlogIndex;
