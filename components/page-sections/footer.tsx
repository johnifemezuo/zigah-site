/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import React from 'react';
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks,
} from 'react-mailchimp-subscribe';
import { mailchimpUrl } from '../../pages/api/service';

const Footer = () => {
  const MAILCHIMP_URL = mailchimpUrl;
  const [email, setEmail] = React.useState<string>('');

  const createFormData = (): EmailFormFields => {
    const Data = { EMAIL: email };
    return Data;
  };

  return (
    <section className="border-top border-1">
      <div className="container pt-5">
        <div className="mb-5">
          <img src="/assets/ziga-logo-wide.png" alt="ziga logo" />
        </div>
        <div className=" d-xl-flex d-md-block align-items-start justify-content-between gap-5 mb-5">
          <div className="col-sm-10 col-md-10 col-lg-5 mb-5">
            <div className="primary fw-bold">Subscribe</div>
            <div className="primary">
              Be the first to get all the latest insight & updates from ziga
            </div>
            <MailchimpSubscribe
              url={MAILCHIMP_URL}
              render={(props) => {
                const {
                  subscribe,
                  status,
                  message,
                }: FormHooks<EmailFormFields> = props;
                if (status === 'sending') {
                  setEmail('');
                }
                return (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      subscribe(createFormData());
                    }}
                  >
                    <div className="d-flex align-item-center mt-3 gap-2">
                      <input
                        className="form-control border rounded-0 bg-transparent"
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btn btn-primary" type="submit">
                        SUBMIT
                      </button>
                    </div>

                    {status && (
                      <div>
                        <small>{status}</small>
                        <small>
                          :<>{message}</>
                        </small>
                      </div>
                    )}
                  </form>
                );
              }}
            />
          </div>

          <div className="col-sm-10 col-md-10 col-lg-2 mb-5">
            <div className="primary">
              <div className="fw-bold">Sitemap</div>
              <div className="my-1">
                <Link href="/" passHref>
                  <a href="/">Home</a>
                </Link>
              </div>
              <div className="my-1">
                <Link href="/terms-of-service" passHref>
                  <a href="/terms-of-service">Terms of use</a>
                </Link>
              </div>
              <div className="my-1">
                <Link href="/privacy-policy" passHref>
                  <a href="/privacy-policy">Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-10 col-lg-2 mb-5">
            <div className="primary">
              <div className="fw-bold">Reach Us</div>
              <div className="my-1">support@ziga.co</div>
              <div className="my-1">+234 812 334 288</div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-sm-6">
            <img src="/assets/footer-logo.png" alt="footer" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
