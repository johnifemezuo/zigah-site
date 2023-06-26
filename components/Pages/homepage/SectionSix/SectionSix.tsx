import React from "react";
import Container from "../../../../layout/Container";
import { Gift } from "../../../Global/Icons/svg/Gift";
import HeadPhone from "../../../Global/Icons/svg/HeadPhone";
import PadlockIcon from "../../../Global/Icons/svg/PadlockIcon";
import UserProfile from "../../../Global/Icons/svg/UserProfile";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";

export function SectionSix({
  title,
  subTitle,
  features,
}: {
  title: string;
  subTitle: string;
  features: any;
}) {
  return (
    <div className="bg-[#f1e6fa]">
      <div className="sec-outer-clip py-14 bg-[#F5ECFD] px-4 lg:px-0 lg:py-20 lg:mt-20 overflow-hidden">
        <Container>
          <div className="mt-8 lg:mt-0 w-full lg:rounded-xl  lg:flex md:grid-cols-2 justify-between ">
            <div className=" space-y-12 lg:max-w-[800px] max-w-full mb-5 lg:mb-0">
              <BodyHeader subHeader={subTitle} header={title} />

              <div className="lg:flex space-y-8 lg:space-y-0 lg:space-x-12 pt-20 justify-between w-full">
                <FeatureCard
                  icon={<Gift className="w-6 lg:w-8 h-6 lg:h-8" />}
                  title={features?.[0].title}
                  dec={features?.[0].desc}
                />
                <FeatureCard
                  icon={<PadlockIcon className="w-6 lg:w-8 h-6 lg:h-6" />}
                  title={features?.[3].title}
                  dec={features?.[3].desc}
                />
              </div>
            </div>

            <div className="max-w-[550px] space-y-8 lg:space-y-12 lg:mt-12">
              <FeatureCard
                icon={<HeadPhone className="w-6 lg:w-8 h-6 lg:h-6" />}
                title={features?.[1].title}
                dec={features?.[1].desc}
              />

              <FeatureCard
                icon={<UserProfile className="w-6 lg:w-8 h-6 lg:h-6" />}
                title={features?.[2].title}
                dec={features?.[2].desc}
              />
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
      <h2 className="text-neutral-800 font-semibold text-lg lg:text-xl">
        {title}
      </h2>
      <p className="text-zinc-700">{dec}</p>
    </div>
  );
};
