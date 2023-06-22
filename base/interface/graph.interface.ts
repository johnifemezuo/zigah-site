export type ILocationArea = {
  iconImage: { id: string; url: string; __typename: string };
  name: string;
};

export type ISocials = {
  link: string;
  socialName: string;
  __typename: string;
};


interface IImage {
  url: string;
  id: string;
  __typename: string;
}

export interface IHomePage {
  customerReviewDesc: string;
  customerReviewTitle: string;
  heroDescription: string;
  locationAreas: ILocationArea[];
  sectionFiveDesc: string;
  sectionFiveTitle: string;
  sectionFourImageOne: IImage;
  sectionFourImageTwo: IImage;
  sectionOneDesc: string;
  sectionOneTItle: string;
  sectionSixSubTitle: string;
  productFeatures: [
    {
      title: string;
      desc: string;
      __typename: string;
    }
  ];
  sectionSixTitle: string;
  sectionThreeDesc: string;
  sectionThreeTitle: string;
  sectionFourDesc: string;
  sectionFourTitle: string;
  sectionTwoDesc: string;
  sectionTwoSubTitle: string;
  sectionTwoTitle: string;
  socials: ISocials[];
}


export interface IReviews {
  name: string;
  role: string;
  review: string;
  userImg: IImage;
}