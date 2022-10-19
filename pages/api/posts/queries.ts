import { gql } from "graphql-request";

const Posts = gql`
  {
    blogs(orderBy: createdAt_DESC) {
      createdAt
      title
      slug
      headerImage {
        url
      }
      author
      content {
        html
      }
      tag
    }
  }
`;

const Post = gql`
  query BlogsQuery($slug: String!) {
    blog(where: { slug: $slug }) {
      createdAt
      title
      slug
      headerImage {
        url
      }
      author
      content {
        html
      }
      tag
    }
  }
`;

export { Posts, Post };
