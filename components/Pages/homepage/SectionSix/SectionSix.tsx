import React from "react";
import Container from "../../../../layout/Container";
import { Layer } from "../../../Global/Icons/svg/Layer";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import HeadPhone from "../../../Global/Icons/svg/HeadPhone";
import { Code } from "../../../Global/Icons/svg/Code";
import { Gift } from "../../../Global/Icons/svg/Gift";

export function SectionSix({
  title,
  subTitle,
  features
}: {
    title: string;
    subTitle: string;
    features: any
  }) {
  
  // const featureOne = features?.[0];
  // const featureTwo = features?.[0];
  // const featureThree = features?.[0];

  return (
    <div className="bg-[#f1e6fa]">
      <div className="sec-outer-clip py-14 bg-[#F5ECFD] px-4 lg:px-0 lg:py-20 lg:mt-20 overflow-hidden">
        <Container>
          <div className="mt-8 lg:mt-0 w-full lg:rounded-xl  lg:flex md:grid-cols-2 justify-between ">
            <div className="space-y-12 lg:max-w-[600px] max-w-full mb-5 lg:mb-0">
              <BodyHeader subHeader={subTitle} header={title} />

              <FeatureCard icon={<Gift />} title={features?.[0].title} dec={features?.[0].desc} />
            </div>

            <div className="max-w-[550px] space-y-8 lg:space-y-12 lg:mt-12">
              <FeatureCard
                icon={<HeadPhone />}
                title={features?.[1].title}
                dec={features?.[1].desc}
              />

              {/* <FeatureCard
                icon={<Code />}
                title="Easy Integration"
                dec="One API for offline and online payments processing across 150+ countries"
              /> */}

              <FeatureCard icon={<Layer />} title={features?.[2].title} dec={features?.[2].desc} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  dec,
}: {
  icon: React.ReactNode;
  title: string;
  dec: string;
}) => {
  return (
    <div className="space-y-2 w-full lg:max-w-[450px]">
      <span className="bg-[#fcfbfc] text-[#A627A1] inline-block border rounded-lg p-3.5 border-[#d4d4d4]">
        {icon}
      </span>
      <h2 className="text-neutral-800 font-semibold text-lg: lg:text-xl">{title}</h2>
      <p className="text-zinc-700">{dec}</p>
    </div>
  );
};
