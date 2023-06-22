import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Styledheader,
  StyledLongText,
} from "../../../../styles/styled-components/Styled-component";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";
import { NeedGetstartedInterface } from "../../../../util/interface/getStartedInterface";

function GetStartedSteps({
  title,
  img,
  desc,
  className,
  num,
}: NeedGetstartedInterface) {
  gsap.registerPlugin(ScrollTrigger);
  const steps: any = useRef(null);

  // // ANIMATION
  useIsomorphicLayoutEffect(() => {
    const stepCurrent = steps.current;
    const stepsText = stepCurrent.querySelector(".stepsText");
    const stepImg = stepCurrent.querySelector(".stepImg");

    const tl = gsap.timeline({
      defaults: { opacity: 0, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: stepsText,
        toggleActions: "play none none none",
        start: "20px 95%",
      },
    });

    tl.fromTo(
      stepsText,
      { y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
    tl.fromTo(stepImg, { x: 50 }, { x: 0, opacity: 1 }, "-=1");
  }, []);

  return (
    <div ref={steps} className="mt-12">
      <div
        className={`flex  lg:flex-row flex-col-reverse lg:w-[1100px]  mx-auto lg:items-center lg:justify-between ${className}`}
      >
        <div className="stepsText space-y-2 mt-6 lg:mb-0 lg:max-w-[600px] text-center">
          <Styledheader>{title}</Styledheader>
          <StyledLongText>{desc}</StyledLongText>
        </div>

        <div className="bg-[#E8A3EC] stepImg grid place-content-cente p-6 lg:p-12  relative rounded-full linear-light w-[200px] mx-auto lg:mx-0 h-[200px] lg:w-[380px] lg:h-[380px]">
          <span
            className="rounded-full 
    w-12 lg:w-24 lg:h-24 h-12 
    grid 
    place-content-center 
    text-xl lg:text-4xl 
    font-semibold 
    absolute 
    left-0 top-0 
    text-center
    bg-[#E186E4]
    text-white"
          >
            {num}
          </span>

          <div className="relative   w-[283px]">
            <img
              src={img.data.attributes.url}
              alt={title}
              className="w-[155px] md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedSteps;
