import React from 'react';

const Hero = () => {
  const [email, setEmail] = React.useState<string>('');

  const handleGetStarted = () => {
    if (!email) {
      return;
    }
    window.location.replace(`https://app.zigah.co/auth/sign-up?email=${email}`);
  };

  return (
    <section className="jumbotron p-0 m-0 vh-100 w-100 hero">
      <div className="container d-xl-flex d-md-block d-sm-block gap-5 h-100 w-100 justify-content-between">
        <div className="col-lg-5 col-md-10 col-sm-12 mt-5 pt-5">
          <h1 className="display-4 mt-5 fw-normal primary">
            Move money{' '}
            <span className="secondary-outline">
              across different countries
            </span>{' '}
            swiftly &amp; securely.
          </h1>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-5 d-flex align-bottom primary align-self-end mt-4">
          <div className="mb-5">
            <div className="ml-5 mb-4">
              With ziga you can exchange and pay in your local currency, grow
              your financial credibility, get access to local & international
              payment options and financial institutions free of charge for your
              business
            </div>
            <div className="position-relative border-main py-2 px-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleGetStarted();
                }}
              >
                <input
                  className="form-control border-0 bg-transparent"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="col-5 btn btn-primary get-started-button"
                  type="submit"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
