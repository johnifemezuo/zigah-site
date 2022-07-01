import React from 'react';

const Schedule = () => (
  <section>
    <div className="container py-5">
      <small className="secondary">GET IN TOUCH</small>
      <h1>Schedule quick session</h1>

      <div className="my-5">
        <h2 className="fw-normal d-lg-flex d-md-block d-sm-block gap-3 align-items-center">
          <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
            <div className="mb-3">Hey, my name is</div>
          </span>
          <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
            <input
              className="form-control mb-3 bg-transparent border-bottom-secondary-input"
              type="text"
              placeholder="Type here"
            />
          </span>
          <span className="col-lg-3 col-md-12 col-sm-12 w-auto">
            <div className="mb-3">and I want to</div>
          </span>
          <select className="form-control bg-transparent border-bottom-secondary-input">
            <option>Select dropdown</option>
          </select>
        </h2>
        <h2 className="fw-normal d-lg-flex d-md-block d-sm-block my-5 gap-3 align-items-center">
          <span className="col-lg-4 col-md-12 col-sm-12 w-auto">
            Get in touch with me at
          </span>
          <input
            className="col-lg-4 col-md-12 col-sm-12 w-auto form-control bg-transparent border-bottom-secondary-input"
            type="text"
            placeholder="Type here"
          />
        </h2>
        <button className="btn btn-primary" type="button">
          SCHEDULE SESSION
        </button>
      </div>
    </div>
  </section>
);

export default Schedule;
