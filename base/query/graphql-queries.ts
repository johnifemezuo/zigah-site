import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
  query {
    homepages {
      heroDescription
      sectionOneTItle
      sectionOneDesc
      sectionTwoTitle
      sectionTwoSubTitle
      sectionTwoDesc
      sectionThreeTitle
      sectionThreeDesc
      sectionThreeTitle
      sectionThreeDesc
      sectionFourDesc
      sectionFourTitle
      sectionFourImageOne {
        id
        url
      }
      sectionFourImageTwo {
        id
        url
      }
      sectionFiveTitle
      sectionFiveDesc
      sectionSixTitle
      sectionSixSubTitle
      customerReviewTitle
      customerReviewDesc
      productFeatures {
        title
        desc
      }
      socials {
        socialName
        link
      }
      locationAreas {
        name
        iconImage {
          id
          url
        }
      }
    }
  }
`;

export const USER_REVIEW = gql`
  query {
    customerReviews {
      name
      role
      review
      userImg {
        id
        url
      }
    }
  }
`;

export const COMPANY_LOCATION = gql`
  query {
    locationAreas {
      name
      iconImage {
        id
        url
      }
    }
  }
`;

export const FAQS = gql`
  query {
    faqs {
      question
      answer
    }
  }
`;

export const COMPANY_SOCIALS = gql`
  query {
    socials {
      socialName
      link
    }
  }
`;

export const ABOUT_US = gql`
  query {
    aboutUsPages {
      headerOne
      infoOne
      headerTwo
      infoTwo
      image {
        id
        url
      }
      advisors {
        title
        link
        name
        image {
          id
          url
        }
      }
      teamMembers {
        title
        link
        name
        image {
          id
          url
        }
      }
    }
  }
`;

export const TERMSOFUSE = gql`
  query {
    termsOfuses {
      title
      desc
      updatedAt
      article {
        html
      }
    }
  }
`;

export const PRIVACY_POLICY = gql`
  query {
    privacyPolicies {
      title
      updatedAt
      article {
        html
      }
    }
  }
`;

export const POSTDETAIL_QUERY = gql`
  query getPost($slug: String) {
    post(where: { slug: $slug }) {
      createdAt
      date
      id
      category
      publishedAt
      except
      slug
      title
      content
      rates
      techie
      author {
        name
        image {
          id
          url
        }
        socials
      }
      subcategory
      updatedAt
      image {
        id
        url
      }
      mentionedProducts {
        title
        image {
          url
          id
        }
        publishedAt
        link
        buttonText
        description
      }
    }
  }
`;


