export interface IHomeProps {
  timeline: {
    html: string;
  };
  title: string;
  about: {
    html: string;
  };
}

export interface TermsOfService {
  updatedAt: string;
  slug: string;
  content: {
    html: string;
  };
}

export interface PrivacyPolicy {
  updatedAt: string;
  slug: string;
  content: {
    html: string;
  };
}

export interface Testimonial {
  name: string;
  comment: string;
  company: {
    url: string;
  };
  picture: {
    url: string;
  };
}
