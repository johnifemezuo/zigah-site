import Link from "next/link";
import React from "react";
import Container from "../../../layout/Container";
import Aurora from "../../Global/Aurora/Aurora";
import Button from "../../Global/UI/Button/Button";

function PageNotFound() {
  return (
    <div>
      <Container>
        <div className="md:grid space-y-28 relative ">
          <div className="bg-white/40 grid lg:mb-20 py-44 mb-20 lg:mt-[12vh] place-content-center mx-auto w-full pt-[10vh] lg:h-[600px] px-6 lg:px-0 relative z-10 rounded-2xl ">
            <h1 className="text-center py-4 text-6xl lg:text-10xl md:text-3xl  text-linear font-extrabold leading-10">
              404
            </h1>

            <p className="text-primary-blue mb-6 text-xl lg:text-3xl text-center">
              Page Not Found
            </p>

              <Link href="/">
                <Button
                  isLoading={false}
                  className="btn hover:bg-primary-blue hover:text-white text-center bg-[#F3F6FD]"
                >
                  Back To Homepage
                </Button>
              </Link>
          </div>

          <Aurora />
        </div>
      </Container>
    </div>
  );
}

export default PageNotFound;
