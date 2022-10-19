import { gql } from "graphql-request";

const StoryOnes = gql`
  {
    storyOnes {
      slug
      title
      description
      content {
        html
      }
      contentTwo {
        html
      }
      imageOne {
        url
      }
      imageTwo {
        url
      }
    }
  }
`;

const StoryTwos = gql`
  {
    storyTwos {
      slug
      title
      description
      infoOne {
        html
      }
      infoTwo {
        html
      }
      imageOne {
        url
      }
      imageTwo {
        url
      }
      imageThree {
        url
      }
    }
  }
`;

const TermsOfService = gql`
  {
    termAndConditions {
      updatedAt
      slug
      content {
        html
      }
    }
  }
`;

const PrivacyPolicy = gql`
  {
    privacyPolicies {
      updatedAt
      slug
      content {
        html
      }
    }
  }
`;

const Testimonial = gql`
  {
    testimonials {
      name
      comment
      company {
        url
      }
      picture {
        url
      }
    }
  }
`;

export { StoryOnes, StoryTwos, TermsOfService, PrivacyPolicy, Testimonial };
