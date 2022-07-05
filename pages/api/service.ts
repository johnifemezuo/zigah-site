/* eslint-disable camelcase */
import { GraphQLClient } from 'graphql-request';

// Reason: For preventing `maybe be undefined error`
export declare const process: {
  env: {
    NEXT_PUBLIC_CMS_URL: string;
    NEXT_PUBLIC_MAILCHIMP_URL: string;
  };
};

const cms_url = 'https://api-eu-west-2.graphcms.com/v2/cl3vhs4qrf6et01xk6knydxwq/master';

const mailchimpUrl =
  'https://zigah.us11.list-manage.com/subscribe/post?u=d3a42abf9499e3c35ab69653d&amp;id=45ad34ce81';

const GraphCMSCLient = new GraphQLClient(cms_url);

export { mailchimpUrl };
export default GraphCMSCLient;
