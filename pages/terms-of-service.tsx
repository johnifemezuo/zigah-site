/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import { NextPage } from "next";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Layout } from "../components";
import { TermsOfService as Terms } from "../types/home";
import { ITermsResponse } from "../types/response";
import { FetchTermServices } from "./api/home";

export const getServerSideProps = async () => {
  const res: ITermsResponse<Terms[]> = await FetchTermServices();
  const { termAndConditions } = res;

  return {
    props: {
      terms: termAndConditions,
    },
  };
};

interface TermsOfServicePageProps {
  terms: Terms[];
}

const TermsOfService: NextPage<TermsOfServicePageProps> = ({
  terms,
}: TermsOfServicePageProps) => {
  return (
    <Layout pagename="Ziga | Terms of Service">
      <section>
        <div className="container mt-5">
          <h1 className="primary display-3 fw-bold">Terms of Use</h1>
          <div className="primary my-3">
            Read our terms below to learn more about your rights and
            responsibilities as a ziga user.
          </div>

          <div className="border-bottom-secondary-input py-3 my-5">
            <div className="d-flex justify-content-between">
              <div className="primary">
                <span>UPDATED </span>
                <>
                  {new Date(terms[0].updatedAt)
                    .toDateString()
                    .toLocaleUpperCase()}
                </>
              </div>
            </div>
          </div>

          <div>
            <div className="primary my-5 content-styles">
              {ReactHtmlParser(terms[0].content.html)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
