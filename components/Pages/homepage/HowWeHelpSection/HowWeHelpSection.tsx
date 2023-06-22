import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import _ from "lodash";
import Image from "next/image";
import React, { useRef } from "react";
import { StyledLongText } from "../../../../styles/styled-components/Styled-component";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";

function HowWeHelpSection({ moreInfo }: any) {
  const subheader: string = _.result(moreInfo, "attributes.moreInfoSubheader");
  const header: string = _.result(moreInfo, "attributes.moreInfoheader");
  const desc: string = _.result(moreInfo, "attributes.moreInfodescription");

  gsap.registerPlugin(ScrollTrigger);
  const sectionTwo: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const sectionCurrent = sectionTwo.current;
    const sectionH1 = sectionCurrent.querySelector(".sectionH1");
    const sectionDesc = sectionCurrent.querySelector(".sectionDesc");

    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: [sectionH1, sectionDesc],
        toggleActions: "play none none reset",
        start: "20px 90%",
      },
    });

    tl.fromTo(
      sectionH1,
      { x: -40 },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(sectionDesc, { x: 50 }, { x: 0, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <div ref={sectionTwo} className=" lg:overflow-hidden lg:mt-20 relative ">
      <div className="grid  lg:grid-cols-2">
        <div className="relative">
          <div className="w-full lg:h-[500px] h-[250px] overflow-hidden ">
            <Image
              src={`/img/connectworld.png`}
              alt="Zigah-wide"
              height={800}
              width={1000}
              layout="responsive"
            />
          </div>
          <div className=" absolute inset-0 z-30 bg-black/30 lg:text-right">
            <div className="sectionH1 lg:mt-[16vh] mt-[12vh] pl-6 lg:pl-0 lg:pr-20">
              <h3 className=" lg:text-[2vh] text-sm lg:text-base uppercase mb-4 text-primary-magenta font-medium">
                {subheader}
              </h3>
              <h1 className="font-bold capitalize text-white text-2xl lg:text-5xl  lg:w-[500px] tex-right md:text-3xl lg:float-right">
                {header}
              </h1>
            </div>
          </div>
          <div className="absolute  top-0 lg:mt-[12vh] lg:ml-[23vh] left-0 z-0">
            <Image src={`/img/coin1.svg`} width={100} height={100} />
          </div>{" "}
          <div className="absolute lg:mt-[40vh] lg:ml-[12vh] top-0 left-0 z-0">
            <Image src={`/img/coin2.svg`} width={80} height={80} />
          </div>{" "}
          <div className="absolute lg:mt-[60vh] lg:ml-[50vh]  top-0 left-0 z-0">
            <Image src={`/img/Dollar.svg`} width={80} height={80} />
          </div>{" "}
          <div className="absolute lg:mt-[50vh] lg:ml-[77vh] top-0 left-0 z-0">
            <Image src={`/img/Pound.svg`} width={80} height={80} />
          </div>
          <div className="bg-blur absolute inset-0 blur-lg"></div>
        </div>

        <div className=" linear-light px-6 py-9 lg:px-0 lg:pt-[16vh] ">
          <StyledLongText>
            <p className="sectionDesc lg:float-left leading-6 lg:pl-20 lg:w-[650px] lg:text-lg">
              {desc}
            </p>
          </StyledLongText>
        </div>
      </div>
    </div>
  );
}

export default HowWeHelpSection;
