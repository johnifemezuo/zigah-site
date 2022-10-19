/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IBlogProps } from "../../types/blog";

interface BlogSectionProps {
  blogs: IBlogProps[];
}

const Blog: FC<BlogSectionProps> = ({ blogs }: BlogSectionProps) => (
  <section>
    <div className="container d-flex flex-column align-items-center text-center">
      <small className="secondary">BLOGS</small>
      <h1 className="fw-bold my-3">Insights</h1>
      <div>Get the latest information about our business and people</div>
    </div>

    <div className="container">
      <div className="row my-5">
        {blogs.map((el: IBlogProps, index: number) => (
          <div
            className="col-xl-4 col-lg-4 col-md-4 col-sm-12 card border-0 rounded-0 mb-3 bg-transparent"
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
                {new Date(el.createdAt).toDateString().toLocaleUpperCase()}
              </small>
            </div>
            <div>
              <h4 className="fw-normal">{el.title}</h4>
            </div>
            <div className="primary my-3">
              <Link
                href={{ pathname: "/blog/[slug]", query: { slug: el.slug } }}
              >
                <a>Read Article</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
