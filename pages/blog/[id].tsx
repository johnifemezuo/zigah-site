/* eslint-disable react/prop-types */
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import BlogRead from "../../components/Pages/Blog/BlogRead";
import { ReadOnlyBlogInterface } from "../../util/interface/blogInterface";

function ArticlePreview() {
  return (
    <>
      {/* <Head>
        <title>{post.attributes.title}</title>
        <meta name="zigah articles" content={post.attributes.title} />
      </Head> */}

      <div>
        {/* <BlogRead pageData={post} allBlog={allBlog} /> */}
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function getStaticProps({ params }: any) {
//   const singlePageData = await axios.get(
//     `https://zigah-cms.herokuapp.com/api/blogs/${params.id}?populate=*`
//   );

//   const allBlog = await fetchData("blogs");

//   return {
//     props: {
//       post: singlePageData.data.data,
//       allBlog,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const postResponse = await axios.get(
//     "https://zigah-cms.herokuapp.com/api/blogs"
//   );

//   const paths = postResponse.data.data.map((post: ReadOnlyBlogInterface) => {
//     return { params: { id: `${post.id}` } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default ArticlePreview;
