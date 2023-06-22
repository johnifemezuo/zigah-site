import gsap, { Power3 } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";

function HeroIllustration() {
  const bouncing = useRef(null);
  const bouncing2 = useRef(null);
  const bouncing3 = useRef(null);

  // useIsomorphicLayoutEffect(() => {
  //   const tl = gsap.timeline({ default: { opacity: 1 } });

  //   tl.fromTo(
  //     [bouncing.current, bouncing2.current],
  //     {
  //       y: 10,
  //       ease: Power3.easeInOut,
  //     },
  //     {
  //       y: -20,
  //       duration: 1.8,
  //       ease: Power3.easeInOut,
  //       stagger: 0.2,
  //       repeat: -1,
  //       yoyo: true,
  //     }
  //   );

  //   tl.fromTo(
  //     bouncing3.current,
  //     { x: 50, duration: 1.8, ease: Power3.easeInOut },
  //     { x: -20, yoyo: true }
  //   );
  // }, []);

  return (
    <>
      <img
        src={`/img/Globe.png`}
        alt="Glob image"
        className="5xl:w-[1190px] 3xl:w-[1100px] xl:w-[1090px] z-20  absolute 3xl:-right-[17%] lg:-bottom-20 lg:-right-[22%] 4xl:-bottom-[40%] 3xl:-bottom-[45%] -bottom-[30%] min-w-[550px] md:w-auto 2xl:-bottom-[37%] 5xl:-bottom-[35%] bg-transparent"
      />

      <img
        src={`/img/globe-1.png`}
        alt=""
        className="w-[40px] lg:w-auto  absolute -left-5 -top-0 bg-transparent"
      />

      <img src={`/img/globe-2.png`} alt="" className=" absolute left-28 top-12 bg-transparent" />

      <img
        src={`/img/globe-3.png`}
        alt=""
        className="hidden md:block absolute right-[30%] top-16 bg-transparent"
      />
      <img
        src={`/img/globe-4.png`}
        alt=""
        className=" absolute right-[20%] top-20 bg-transparent"
      />
      <img
        src={`/img/globe-5.png`}
        alt=""
        className=" absolute right-[10%] top-12 bg-transparent hidden md:block"
      />
      <img src={`/img/globe-6.png`} alt="" className=" absolute left-16 bottom-28 bg-transparent" />
      {/* <div
        ref={bouncing}
        className="absolute right-0 top-0 w-[160px] lg:w-auto -mt-[6vh] -mr-[vh]"
      >
        <Image src={`/img/heroconvert.svg`} width={240} height={230} />
      </div>

      <div
        ref={bouncing3}
        className="absolute right-0 bottom-0 lg:w-auto w-[180px] lg:-mr-[5vh] -mr-[0vh] mb-[12vh] lg:mb-[18vh]"
      >
        <Image src={`/img/herosent.svg`} width={230} height={270} />
      </div>

      <div
        ref={bouncing2}
        className="absolute  left-0 lg:w-auto  w-[250px] bottom-0 -mb-[17vh] lg:-mb-[17vh] ml-[vh] lg:ml-[4vh]"
      >
        <Image src={`/img/Herotrans.svg`} width={300} height={300} />
      </div> */}
    </>
  );
}

export default HeroIllustration;
