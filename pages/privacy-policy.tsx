/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import { NextPage } from 'next';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Layout } from '../components';
import { PrivacyPolicy as Privacy } from '../types/home';
import { IPrivacyResponse } from '../types/response';
import { FetchPrivacyServices } from './api/home';

export const getServerSideProps = async () => {
  const res: IPrivacyResponse<Privacy[]> = await FetchPrivacyServices();
  const { privacyPolicies } = res;

  return {
    props: {
      privacy: privacyPolicies,
    },
  };
};

interface PrivacyPolicyPageProps {
  privacy: Privacy[];
}

const PrivacyPolicy: NextPage<PrivacyPolicyPageProps> = ({
  privacy,
}: PrivacyPolicyPageProps) => {
  return (
    <Layout pagename="Ziga | Privacy Policy">
      <section>
        <div className="container mt-5">
          <h1 className="primary display-3 fw-bold">Privacy policy</h1>
          <div className="primary my-3">
            Read all about our privacy policy to understand how we protect your
            personal information.
          </div>
          <div className="border-bottom-secondary-input py-3 my-5">
            <div className="d-flex justify-content-between">
              <div className="primary">
                <span>UPDATED </span>
                <>
                  {new Date(privacy[0].updatedAt)
                    .toDateString()
                    .toLocaleUpperCase()}
                </>
              </div>
            </div>
          </div>

          <div>
            <div className="primary my-5 content-styles">
              {ReactHtmlParser(privacy[0].content.html)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
