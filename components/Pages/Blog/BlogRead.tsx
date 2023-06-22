import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../../layout/Container";
import {
  BlogInterface,
  ReadOnlyBlogInterface,
} from "../../../util/interface/blogInterface";
import Aurora from "../../Global/Aurora/Aurora";
import RightIcon from "../../Global/Icons/svg/RightIcon";
import BLogCardBig from "../homepage/InsightSection/BLogCardBig";
import BlogProfile from "./BlogProfile";
import BlogSocials from "./BlogSocials";

function BlogRead({ pageData, allBlog }: any) {
  const filteredBlog = allBlog.filter(
    (item: ReadOnlyBlogInterface) => item.id !== pageData.id
  );

  

  return (
    <Container>
      <main className="lg:py-20 py-12">
        {/* ARITCLE */}

        <header className=" space-y-12 relative">
          <h1 className="text-3xl text-center leading-snug lg:text-5xl font-semibold">
            {pageData.attributes.title}
          </h1>
          <div className="mt-6 z-30 relative place-content-center grid lg:mt-16 lg:flex--between lg:items-center lg:max-w-3xl max-w-xs text-center space-y-5 lg:space-y-0 mx-auto">
            <BlogProfile
              profileImg={
                pageData.attributes.authorProfile.data.attributes.url
              }
              author={pageData.attributes.author}
              date={pageData.attributes.date}
            />

            <BlogSocials />
          </div>

          <Aurora />
        </header>

        {/* ARITCLE */}
        <div className="lg:mt-16 mt-12">
          <div className="px-6 lg:px-0">
            <Image
              src={pageData.attributes.img.data.attributes.url}
              width={1200}
              height={700}
            />
          </div>
          <section
            className="markdown-styles lg:px-12 py-8"
            dangerouslySetInnerHTML={{
              __html: pageData.attributes.article,
            }}
          />
        </div>
      </main>

      <div className="py-12 border-t border-border">
        <div className="flex--between">
          <h2 className="text-3xl lg:text-5xl font-bold ">Related Posts</h2>
          <Link href="/blog">
            <a className="flex lg:text-lg hover:text-primary-magenta transitions items-center space-x-2">
              <span>Read More</span>
              <span>
                {" "}
                <RightIcon />
              </span>
            </a>
          </Link>
        </div>

        <div className="grid mt-6 lg:mt-12 lg:gap-8 lg:grid-cols-3">
          {filteredBlog.map((blogBigCard: ReadOnlyBlogInterface, i: number) => {
            return (
              <BLogCardBig
                key={i}
                title={blogBigCard.attributes.title}
                desc={blogBigCard.attributes.desc}
                author={blogBigCard.attributes.author}
                date={blogBigCard.attributes.date}
                img={blogBigCard.attributes.img.data.attributes.url}
                id={blogBigCard.id} article={""}              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default BlogRead;
