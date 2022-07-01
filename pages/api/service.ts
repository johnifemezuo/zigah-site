/* eslint-disable camelcase */
import { GraphQLClient } from 'graphql-request';

// Reason: For preventing `maybe be undefined error`
export declare const process: {
  env: {
    NEXT_PUBLIC_CMS_URL: string;
    NEXT_PUBLIC_MAILCHIMP_URL: string;
  };
};

const cms_url = process.env.NEXT_PUBLIC_CMS_URL;
const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

const GraphCMSCLient = new GraphQLClient(cms_url);

export { mailchimpUrl };
export default GraphCMSCLient;
