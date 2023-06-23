import React from "react";
import Container from "../../../../layout/Container";
import FadIn from "../../../../util/animation/FadIn";
import HeroIllustration from "./HeroIllustration";
import HeroInput from "./HeroInput";
import Image from "next/image";

function HeroSection({desc}: {desc: string}) {
  return (
    <div className="mt-16 lg:py-20 py-12 lg:mt-20  bg-[#F3F5FB] h-[820px] lg:h-screen relative overflow-hidden">
      <Container>
        <div className=" w-full bg-red">
          <div className=" lg:mt-12 mt-0 lg:max-w-[600px] px-4
           lg:px-0 relative z-30 lg:space-y-6 space-y-4">
            <FadIn
              var1={{ y: 130 }}
              var2={{ y: 0 }}
              scrollTriggerProps={{ toggleActions: "none none none reset" }}
            >
              <h1 className="bigText md:text-[6vh] text-4xl leading-snug lg:text-[5.9vh] text-primary-blue font-extrabold">
                Welcome to Zigah send money <span className="heroStroke ">Across Borders</span> with ease
              </h1>
            </FadIn>
            <FadIn
              var1={{ y: 130 }}
              var2={{ y: 0 }}
              param={"+=0.6"}
              scrollTriggerProps={{ toggleActions: "none none none reset" }}
            >
              <p className=" lg:text-left text-[#4F4F4F] text-sm lg:text-base">
              {desc}
              </p>
            </FadIn>

            <FadIn var1={{ y: 130 }} var2={{ y: 0 }} param={"+=0.8"}>
              <HeroInput />
            </FadIn>

            <div className="pt-6 lg:pt-28 w-full  ">
              <p className="text-zinc-600 text-sm lg:text-base">Trusted by companies across the world</p>

              <div className="lg:w-full space-x-3 lg:space-x-0 mx-auto flex--items flex-wrap justify-between gap-4 mt-5 ">
                <img src={`/img/fincra.png`} className="w-24 lg:w-24" />
                <img src={`/img/msb.png`} className="w-24 lg:w-18" />
                <img src={`/img/microsoft.png`} className="w-24 lg:w-auto" />
              </div>
            </div>
          </div>

          <HeroIllustration />

          {/* <Aurora /> */}
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
