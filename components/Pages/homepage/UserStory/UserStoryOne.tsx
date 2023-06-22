import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import {
  StyledLongText,
  StyledUserSubHead,
} from "../../../../styles/styled-components/Styled-component";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";
import { NeedUserStoryInterface } from "../../../../util/interface/userStoryInterface";

function UserStoryOne({ userData }: any) {
  const {
    name,
    title,
    description,
    productImg,
    userImg,
  }: NeedUserStoryInterface = userData;

  gsap.registerPlugin(ScrollTrigger);
  const userOne: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const userOneCurrent = userOne.current;
    const article = userOneCurrent.querySelector(".articles");
    const articleImg = userOneCurrent.querySelector(".articleImg");

    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: [article, articleImg],
        toggleActions: "play none none none",
        start: "10px 95%",
        // scrub: 0.5,
      },
    });

    tl.fromTo(articleImg, { y: 50 }, { y: 0, opacity: 1 }).fromTo(
      article,
      { y: 50 },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <div
        ref={userOne}
        className="articles  lg:flex lg:space-x-12 items-end relative mt-12 lg:mt-0 "
      >
        <div className="articleImg lg:w-[650px] h-[240px] lg:h-[550px] rounded-2xl overflow-hidden">
          <Image
            src={userImg.data.attributes.url}
            alt="ziga-user"
            width={300}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="articles w-full mt-3 lg:mt-0 space-y-4">
          <div>
            <h1
              className="userStroke
    lg:text-5xl
    text-3xl
    font-bold
        mb-4"
            >
              {name}
            </h1>
            <StyledUserSubHead>{title}</StyledUserSubHead>
          </div>
          <StyledLongText>
            <p className="lg:columns-2 lg:gap-8">{description}</p>
          </StyledLongText>

          <div className="grid grid-cols-3 lg:space-y-0 gap-2  lg:gap-8">
            {productImg.data.map((item: any, i: any) => (
              <div
                key={i}
                className=" h-[12vh] lg:h-[17vh] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.attributes.url}
                  alt="ziga-user"
                  width={320}
                  height={280}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStoryOne;
