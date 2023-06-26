import { useAtom } from "jotai";
import _ from "lodash";
import React, { useRef } from "react";
import Container from "../../../../layout/Container";
import { reviewTopButton } from "../../../../lib/store/siteAtom";
import { MdAccountBalance, MdLockPerson } from "react-icons/md";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TrustedBy({ title, desc }: { title: string;  desc: string}) {

  const [, setUseRevealButton] = useAtom(reviewTopButton);

  gsap.registerPlugin(ScrollTrigger);
  const element: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const elementCurent = element.current;
    // const header1 = elementCurent.querySelector(".theheder");
    // const logos = elementCurent.querySelector(".logos");
    // const desc = elementCurent.querySelector(".desc");

    // ANIMATION

    const callMe = () => setUseRevealButton(true);
    const callMeOff = () => setUseRevealButton(false);

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: Power3.easeInOut,  },
      scrollTrigger: {
        trigger: elementCurent,
        // toggleActions: "play none none reset",
        start: "60px 100%",
        // scrub: 0.5,
        // onLeaveBack: callMeOff,
      },
    });

    tl.fromTo(
      elementCurent,
      { y: 0, opacity: 0 },
      {
        opacity: 1,
        y: -90,
      },
       "-=1"
    )
  }, []);

  return (
    <div
      ref={element}
      className="overflow-hidden pb-12 lg:pb-20 px-6 lg:px-0 lg:mt-44  bg-[#FDF0FF] 5xl:max-w-[1660px] 4xl:max-w-[1600px] 2xl:max-w-[1420px] mt-24 lg:rounded-2xl mx-auto">
      <Container>
        <div className="text-center ">
          <img src="/img/bulb.png" className="-mt-7 w-12 lg:w-auto" />
          <div className="block lg:px-4  md:grid-cols-2  md:gap-44 pb-9 lg:grid ">
            <div className="space-y-6">
              <h1 className="leading-11 text-left  mt-9 lg:text-4xl text-2xl  text-[#1C224B] ">
                {title}
              </h1>
              <h1 className="  text-left lg:text-xl font-normal  leading-snug text-xl ">
                {desc}
              </h1>
            </div>

            <div className="grid gap-12 mt-8 lg:mt-0">
              <div className=" lg:text-xl pt-4 flex flex-col text-left gap-5 lg:gap-6 text-gray-800">
                <div className="space-y-3">
                  <img src="img/veri.png" className="w-12 lg:w-14" />

                  <p>We are Licensed by MSB (Money services business) Canada</p>
                </div>
                <div className="space-y-3 border-t  pt-4 lg:pt-8 border-zinc-400">
                  <MdLockPerson className="text-5xl  text-zinc-700" />
                  <p>
                    Zigah is registered as a money service business with the
                    Financial Transactions and Reports Analysis Centre of Canada
                    (FINTRAC) under registration number M23180753
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TrustedBy;
