import gsap, { Power3 } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../../util/animation/global";

function Aurora() {
  const tl = gsap.timeline();
  const bobble1: any = useRef();
  const bobble2: any = useRef();

  useIsomorphicLayoutEffect(() => {
    tl.to([bobble1.current, bobble2.current], {
      css: { visibility: "visible" },
    });

    tl.from(bobble1.current, { scale: 0.5 }).to(bobble1.current, {
      x: 500,
      repeat: -1,
      ease: Power3.easeInOut,
      duration: 2,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <div
        ref={bobble1}
        className="absolute top-0 z-0 w-full left-0 translate-y-36 lg:translate-y-0 lg:-ml-[25vw]"
      >
        <Image src="/img/bob2.svg" width={900} height={900} />
      </div>
      <div
        ref={bobble2}
        className="absolute -translate-y-36 w-full lg:-translate-y-[35vh] -ml-[30vh] lg:translate-x-[58vh] top-0 z-0 left-0 lg:-mt-[42vh]"
      >
        <Image src="/img/bob1.svg" width={700} height={900} />
      </div>
    </>
  );
}

export default Aurora;
