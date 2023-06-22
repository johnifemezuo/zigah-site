import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import {
  StyledLongText,
  StyledUserSubHead,
} from "../../../../styles/styled-components/Styled-component";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";

function UserStorySecond({ userData }: any) {
  const { name, title, description, productImg, userImg } = userData;

  gsap.registerPlugin(ScrollTrigger);
  const userTwo: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const userTwoCurrent = userTwo.current;
    const article = userTwoCurrent.querySelector(".articlesTwo");
    const articleImg = userTwoCurrent.querySelector(".articleImgTwo");

    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.6, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: [article, articleImg],
        toggleActions: "play none none none",
        start: "10px 95%",
        // scrub: 0.5,
      },
    });

    tl.fromTo(articleImg, { y: 50 }, { y: 0, opacity: 1 })
    .fromTo(
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
      <div ref={userTwo} className="articleImg lg:space-y-8 space-y-4  ">
        <div className="lg:flex items-end lg:space-x-8 articleImgTwo">
          <div className=" lg:w-[300px] w-full h-[230px] rounded-2xl overflow-hidden">
            <Image
              src={userImg.data.attributes.url}
              alt="ziga-user"
              width={450}
              height={400}
            />
          </div>

          <div className="mt-4">
            <h1 className="userStroke lg:text-5xl text-3xl font-bold mb-4">
              {name}
            </h1>
            <StyledUserSubHead>{title}</StyledUserSubHead>
          </div>
        </div>

        <div className="w-full space-y-8 articlesTwo">
          <StyledLongText>{description}</StyledLongText>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {productImg.data.map((item: any, i: number) => (
              <div
                key={i}
                className=" h-[15vh] lg:h-[20vh] rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.attributes.url}
                  alt="ziga-user"
                  width={300}
                  height={260}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStorySecond;
