import React from 'react';

const HelpingBusiness = () => (
  <div className="my-5 py-5">
    <div className="my-5 py-5">
      <div className="container bg-main business py-5 my-5 px-5">
        <div className="my-5">
          <small className="text-light">DID YOU KNOW?</small>

          <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block justify-content-center align-items-start gap-5 mt-2 mb-3">
            <div>
              <h1 className="col-sm text-light mt-4">
                Businesses around the world would rather be paid in dollars or
                their local currency
              </h1>
              <a href="https://app.zigah.co/auth/sign-up">
                <button className="btn btn-light primary mt-3" type="button">
                  Get Started
                </button>
              </a>
            </div>

            <div className="col-sm-5 text-light mt-4 line-height">
              Obstacles can come in many forms of policies from the recieving
              country, and inaccessibility to the dollar. For a textile seller
              like Fadhili who imports textiles from different countries, this
              is a serious challange. With ziga, Fadhili has access to dollars
              and other foreign currencies that helps. ziga eliminates the
              redundancy of searching for scarce currencies due to it&apos;s
              easy cross-border cash charges.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HelpingBusiness;
