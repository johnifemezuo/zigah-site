import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../../../layout/Container";
import Button from "../../../Global/UI/Button/Button";

function GetInTouch() {
  return (
    <div className="relative rounded-none lg:h-[450px]  overflow-hidden">
      <img src={`/img/getintouchimg.png`} className="object-contain w-full  z-0" />
      <div className="bg-black/50 absolute inset-0">
        <Container>
          <div className="relative lg:space-y-8  space-y-3  mt-12 z-30 lg:mt-24 px-4 lg:px-0">
            <h3 className=" text-sm mg:text-lg uppercase  lg:text-2xl text-primary-cyan">
              Get in touch
            </h3>
            <h1 className="text-white text-lg font-bold md:text-3xl lg:text-5xl pb-3">
              Schedule quick session
            </h1>

            <div className="space-x-6">
              <a href={`https://app.zigah.co/auth/sign-up`}>
                <Button isLoading={false} className="bg-primary-blue text-white rounded-full">
                  Start sending money
                </Button>
              </a>

              <a href="/book-session">
                <Button isLoading={false} className="btn btn-white rounded-full">
                  Schedule Now
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default GetInTouch;
