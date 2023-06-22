import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import _ from "lodash";
import Image from "next/image";
import React, { useRef } from "react";
import Container from "../../../../layout/Container";
import { StyledLongText } from "../../../../styles/styled-components/Styled-component";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";

function MoreInfo({ moreInfo }: any) {
  const subheader: string = _.result(moreInfo, "attributes.moreInfo2SubHeader");
  const header: string = _.result(moreInfo, "attributes.moreInfo2header");
  const desc: string = _.result(moreInfo, "attributes.moreInfo2description");

  gsap.registerPlugin(ScrollTrigger);
  const sectionThree: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const section2Current = sectionThree.current;
    const sectionH2 = section2Current.querySelector(".sectionH2");
    const sectionDesc2 = section2Current.querySelector(".sectionDesc2");

    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: [sectionH2, sectionDesc2],
        toggleActions: "play none none reset",
        start: "20px 90%",
      },
    });

    tl.fromTo(
      sectionH2,
      { x: -40 },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(sectionDesc2, { x: 50 }, { x: 0, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <div
      ref={sectionThree}
      className="bg-[#F9F9F9] py-16 px-6 lg:px-0 overflow-hidden relative lg:py-44"
    >
      <Container>
        <div className="lg:grid relative z-30 grid-cols-2 lg:items-center gap-12">
          <div className="mb-4 lg:mb-0 sectionH2">
            <h3 className=" lg:text-[2vh] text-sm lg:text-base uppercase mb-4 text-primary-magenta font-medium ">
              {subheader}
            </h3>

            <h1 className="lg:leading-snug  text-xl lg:text-4xl font-semibold text-primary-blue ">
              {header}
            </h1>
          </div>

          <StyledLongText>
            <span className=" sectionDesc2 lg:w-[700px] leading-7  text-gray-dark">
              {desc}
            </span>
          </StyledLongText>
        </div>
      </Container>
      <div className="bg-[#f9f9f9cc] z-20 absolute inset-0 w-full h-full"></div>
      <div className="absolute  bottom-0 right-0 translate-x-20  -rotate-45">
        <Image src={`/img/logo.svg`} width={700} height={400} />
      </div>
    </div>
  );
}

export default MoreInfo;
