import React from 'react';

const MoreInfo = () => (
  <div className="help-business my-5 py-5">
    <div className="container">
      <div className="my-5">
        <div className="text-center">
          <small className="secondary help-business-btw">
            WE BUILT THIS FOR YOU
          </small>
          <h1 className="text-light fw-bold mt-2 mb-3">
            Here&apos;s how ziga
            <span style={{ fontWeight: '100' }}>&trade;</span>
            helps businesses
          </h1>
        </div>

        <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block justify-content-center align-items-start gap-5 mt-2 mb-4">
          <div className="col-sm-5 text-light mt-4 line-height">
            ziga is a platform that eases the stress that comes with sending and
            receiving money in local and foreign currencies. Business owners are
            able to purchase currencies of their choice from a structured,
            reliable and cost-friendly platform. Cross-Border exchanges are safe
            with ziga and Business to Business transactions can be done swiftly.
            <br />
            <br />
            With ziga, Nigerian business owners like Chilotam who are into
            importation of goods can conveniently make payments to their foreign
            suppliers in naira, and the-
          </div>
          <div className="col-sm-5 text-light mt-4 line-height">
            -receiver of said money is able to receive it in their local
            currency. Rather than constantly searching for third parties to
            carry out this transaction, ziga will provide a safe and swift
            method for Chilotam to pay her suppliers. This will eliminate delays
            and uncertainties that come with making payments to stakeholders.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MoreInfo;
