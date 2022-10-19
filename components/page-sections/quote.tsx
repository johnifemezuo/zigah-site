import React from "react";

const Quote = () => (
  <div className="container d-flex align-items-center flex-column text-center pb-5">
    <div className="col-sm-3">
      <img
        src="/assets/light-bulb.png"
        alt="woman holding ipad"
        width="30%"
        height="10%"
        sizes="10vw"
      />
    </div>

    <h1
      className="display-3 fw-normal pt-5 px-5 mt-5 heading-line-height quote-text"
      style={{ fontSize: "3.5rem" }}
    >
      We simplify the process of exchanging your local currency for any foreign
      currency of your choice.
    </h1>
  </div>
);

export default Quote;
