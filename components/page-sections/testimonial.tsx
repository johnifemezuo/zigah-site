import React, { FC } from "react";
import Image from "next/image";
import { Testimonial as ITestimonial } from "../../types/home";
import { NEXT_PUBLIC_ZIGAH_APP_URL } from "../../utils/api/apis";

interface TestimonialSectionProps {
  testimonials: ITestimonial[];
}

const Testimonial: FC<TestimonialSectionProps> = ({
  testimonials,
}: TestimonialSectionProps) => (
  <div className="my-5 py-5">
    <div className="container">
      <div className="my-5">
        <div className="text-center">
          <small className="secondary">WHAT PEOPLE ARE SAYING</small>
          <h1 className="primary fw-bold">Don&apos;t take our word for it.</h1>
        </div>

        <div className="d-xl-flex d-md-flex d-sm-block align-items-start gap-5 mt-2 mb-5 overflow-scroll">
          {testimonials.map((el: ITestimonial, index: number) => (
            <div
              key={index}
              className="card bg-warning bg-opacity-10 border-2 col-sm-4 mt-4 line-height p-4 primary rounded rounded-3"
            >
              <div className="d-flex mt-3 mb-4">
                <div className="col-sm-5">
                  <Image
                    src={el.company.url}
                    alt="logo"
                    width="100%"
                    height="30%"
                    sizes="50vw"
                    quality={100}
                  />
                </div>
              </div>

              <small>{el.comment}</small>
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-end align-items-center w-100 gap-3">
                  <small className="col-auto">{el.name}</small>
                  <div className="col-sm-1">
                    <Image
                      className="rounded rounded-circle border"
                      src={el.picture.url}
                      alt="woman holding ipad"
                      width="100%"
                      height="100%"
                      sizes="50vw"
                      quality={100}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brown my-5 py-5 px-4 no-hassle">
        <div className="d-lg-flex d-md-block d-sm-block justify-content-center gap-5 mt-2 mb-3">
          <div className="col-lg-5 col-sm-12 col-md-9">
            <h1 className="text-light mt-4">
              Exchange and pay in your local currency, hassle free!
            </h1>
            <div className="text-light my-3">
              Create and account and get access to foreign currencies from all
              over the world.
            </div>
            <a href={`${NEXT_PUBLIC_ZIGAH_APP_URL}/auth/sign-up`}>
              <button className="btn btn-light primary mt-3" type="button">
                Get Started
              </button>
            </a>
          </div>

          <div className="col-sm-5" />
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
