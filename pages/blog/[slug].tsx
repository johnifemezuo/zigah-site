/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Layout } from "../../components";
import { IBlogProps } from "../../types/blog";
import { IPostResponse, IPostsResponse } from "../../types/response";
import { FetchPostService, FetchPostsService } from "../api/posts";

interface Props {
  post: IBlogProps;
  similar: IBlogProps[];
}

type ContextType = GetServerSidePropsContext;

export const getServerSideProps = async (context: ContextType) => {
  const { params } = context;
  const slug = String(params?.slug);

  const res: IPostResponse<IBlogProps> = await FetchPostService({ slug });
  const { blog } = res;

  const similar: IPostsResponse<IBlogProps[]> = await FetchPostsService({
    tag: blog.tag,
  });
  const { blogs } = similar;

  return {
    props: {
      post: blog,
      similar: blogs,
    },
  };
};

const Slug: NextPage<Props> = ({ post, similar }: Props) => {
  return (
    <Layout pagename={post.title}>
      <section>
        <div className="container mt-5">
          <h1 className="primary">{post.title}</h1>
          <div className="border-bottom-secondary-input py-3 my-5">
            <div className="d-flex justify-content-between">
              <div className="primary">{post.author}</div>
              <div className="primary">
                {new Date(post.createdAt).toDateString().toLocaleUpperCase()}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Image
              src={post.headerImage.url}
              alt="blog post"
              width="100%"
              height="30%"
              sizes="50vw"
              objectFit="cover"
              quality={100}
            />
          </div>

          <div className="d-lg-flex d-md-block d-sm-block gap-5 justify-content-center gap-5">
            <div>
              <div className="primary my-5">
                {ReactHtmlParser(post.content.html)}
              </div>
            </div>
            <div className="col-sm-3 mt-5">
              {similar.length > 0 &&
                similar.slice(0, 3).map((el: IBlogProps, index: number) => (
                  <div
                    className="card border-0 rounded-0 mb-3 bg-transparent"
                    key={index}
                  >
                    <Image
                      className="border-bottom-secondary"
                      src={el.headerImage.url}
                      alt="blog post"
                      width="100%"
                      height="250px"
                      objectFit="cover"
                      quality={100}
                    />
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <small className="text-muted">{el.author}</small>
                      <small className="primary">
                        {new Date(el.createdAt)
                          .toDateString()
                          .toLocaleUpperCase()}
                      </small>
                    </div>
                    <div>
                      <h5 className="fw-normal">{el.title}</h5>
                    </div>
                    <div className="primary my-3">
                      <Link
                        href={{
                          pathname: "/blog/[slug]",
                          query: {
                            slug: el.slug,
                          },
                        }}
                      >
                        <a>Read Article</a>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="container border-left-0 border-right-0 border-top border-bottom py-5 mb-5">
            <div className="text-muted">NEXT ARTICLE</div>
            <h1 className="primary">
              <Link
                href={{
                  pathname: "/blog/[slug]",
                  query: {
                    slug: similar.find(
                      (el: IBlogProps) => el.slug !== post.slug,
                    )?.slug,
                  },
                }}
              >
                {similar.find((el: IBlogProps) => el.slug !== post.slug)?.title}
              </Link>
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Slug;
