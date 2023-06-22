import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import Container from "../../../layout/Container";
import { StyledLongText } from "../../../styles/styled-components/Styled-component";
import FadIn from "../../../util/animation/FadIn";
import { useIsomorphicLayoutEffect } from "../../../util/animation/global";
import Aurora from "../../Global/Aurora/Aurora";
import TrustedBy from "../homepage/TrustedBy/TrustedBy";
import BoardCard from "./BoardCard";
import MeatTheTeam from "./MeatTheTeam";

function AboutUs({ aboutInfos }: any) {

  gsap.registerPlugin(ScrollTrigger);
  const aboutElement: any = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const elementCurent = aboutElement.current;
    const aboutTeams = elementCurent.querySelector(".aboutTeams");
    const boards = elementCurent.querySelector(".boards");

    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: "Power3.out" },
      scrollTrigger: {
        trigger: [aboutTeams, boards],
        toggleActions: "play none none reset",
        start: "20px 80%",
      },
    });

    tl.fromTo(
      aboutTeams,
      { y: -40 },
      {
        opacity: 1,
        y: 0,
      }
    )
    .fromTo(boards, { x: 50 }, { x: 0, opacity: 1 }, "+=1");
  }, []);

  console.log(aboutInfos)

  return (
    <div ref={aboutElement} className="mt-12 lg:mt-20">
      <Container>
        <div className="md:grid space-y-28 relative md:items-center justify-between lg:px-[4vw]">
          <FadIn var1={{ y: 120 }} var2={{ y: 0 }}>
            <div className=" w-full pt-[10vh] px-6 lg:px-0 relative z-10 space-y-5 lg:space-y-8 lg:text-left text-center">
              <h1 className="md:text-[4vh] text-center text-2xl leading-snug lg:text-[4vh]  text-primary-blue font-extrabold">
                {aboutInfos?.headerOne}
              </h1>
              <p className="text-center text-gray leading-7 text-sm md:text-base lg:text-lg">
                {aboutInfos?.infoOne}
              </p>
            </div>
          </FadIn>

          <Aurora />
        </div>

        <div className=" lg:flex--between lg:space-x-12 lg:mt-[12vh] mb-44">
          <div className=" w-full pt-[10vh] text-center px-6 lg:px-0 relative z-10  ">
            <FadIn var1={{ x: -120 }} var2={{ x: 0 }} param="+=1">
              <div className="space-y-5 lg:space-y-8 lg:text-left">
                <h1 className="md:text-[4vh]  text-2xl leading-snug lg:text-[4vh]  text-primary-blue font-extrabold">
                  {aboutInfos?.headerOne}
                </h1>
                <StyledLongText>{aboutInfos?.infoTwo}</StyledLongText>
              </div>
            </FadIn>
          </div>

          <FadIn var1={{ x: 120 }} var2={{ x: 0 }} param="+=1">
            <div className="shadow-2xl overflow-hidden lg:h-[450px] mt-6 lg:mt-0 lg:rounded-2xl">
              <img src={aboutInfos?.image?.[0]?.url} className="w-full h-full object-cover"  />
            </div>
          </FadIn>
        </div>

        {/* <TrustedBy /> */}
      </Container>

      <MeatTheTeam teamMembers={aboutInfos?.teamMembers} />

      <div className="bg-[#F0F0F0] ">
        <Container>
          <div className="py-20 px-6 lg:px-0 space-y-8 lg:space-y-0 lg:mt-0 lg:py-44  lg:space-x-12 lg:flex--between">
            <div className="lg:w-[300px] text-center lg:text-left  space-y-3">
              <h1 className="md:text-[5vh]  text-2xl leading-snug lg:text-[6vh]  text-primary-blue font-bold">
                Adversor Board
              </h1>
              <StyledLongText>
                Backed and advised by strong locals and global partners
              </StyledLongText>
            </div>
            <div className="grid grid-cols-2 boards lg:gap-12 gap-4">
              {aboutInfos?.advisors?.map((board: any, i: number) => (
                <BoardCard
                  key={i}
                  img={board.image.url}
                  name={board.name}
                  link={board.link}
                  role={board.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;
