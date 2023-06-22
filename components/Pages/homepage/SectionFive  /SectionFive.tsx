import Link from "next/link";
import Container from "../../../../layout/Container";
import Button from "../../../Global/UI/Button/Button";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import React from "react";

export function SectionFive({ title, desc }: { title: string;  desc: string}) {
  return (
    <div className="py-14  lg:mt-20 overflow-hidden">
      <Container>
        <div className="w-full lg:rounded-xl px-4 py-12 lg:px-20 lg:py-20 bg-light-gray grid md:flex--items h-[650px]">
          <div className="space-y-12 lg:max-w-[500px] max-w-full">
            <BodyHeader header={title} />
            {/* <p className="lg:text-lg text-zinc-600">
              {desc}
            </p> */}

            <Link href="/about-us">
              <Button
                className="bg-primary-blue  text-[#fff] rounded-full mt-6 lg:mt-12"
                isLoading={false}
              >
                Learn more about our mission
              </Button>
            </Link>
          </div>

          <div className="grid h-[300px] bg-white mt-8 rounded-full overflow-hidden w-full lg:w-[890px] lg:h-[560px] lg:absolute 2xl:-right-[200px] 3xl:-right-[100px] 4xl:-right-[0px] lg:-right-[500px]">
            <img
              src="/img/countries.png"
              className="relative w-[350px] lg:w-[550px] h-[250px] lg:h-[400px] mt-7  lg:mt-20 ml-12 lg:ml-16"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
