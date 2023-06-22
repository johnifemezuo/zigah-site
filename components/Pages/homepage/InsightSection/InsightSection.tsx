/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";
import Container from "../../../../layout/Container";
import { useIsomorphicLayoutEffect } from "../../../../util/animation/global";
import { ReadOnlyBlogInterface } from "../../../../util/interface/blogInterface";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import BLogCardBig from "./BLogCardBig";
import BlogCardLeft from "./BlogCardLeft";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

function InsightSection({ blogData }: ReadOnlyBlogInterface | any) {
  if (!blogData) {
    return null;
  }

  const insightRef = useRef<any>();
  const blogSmallCards: ReadOnlyBlogInterface[] = blogData.slice(0, 2);
  const blogBigCard: ReadOnlyBlogInterface = blogData[2];

  gsap.registerPlugin(ScrollTrigger);
  
  useIsomorphicLayoutEffect(() => {
    const insightCurrent = insightRef.current;

       const insightLeft = insightCurrent.querySelector(".insightLeft");
       const insightRight = insightCurrent.querySelector(".insightRight");
    // ANIMATION

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.6, ease: Power3.easeInOut },
      scrollTrigger: {
        trigger: [insightLeft, insightRight],
        toggleActions: "play none none reset",
        start: "10px 90%",
        // scrub: 0.5,
      },
    });

    tl.fromTo(insightRight, { y: 50 }, { y: 0, opacity: 1 }).fromTo(
      insightLeft,
      { y: 50 },
      {
        opacity: 1,
        y: 0,
      },
      "-=1"
    );
  }, []);

  return (
    <div ref={insightRef} className="mt-[12vh]">
      <Container>
        <div className="px-6 lg:px-0">
          <div>
            <BodyHeader header="Insight" subHeader="Blog" />
          </div>

          <div className="mt-[10vh] lg:flex lg:space-x-12 items-center">
            <div className="insightLeft lg:space-y-6 space-y-6">
              {blogSmallCards.map(
                (item: ReadOnlyBlogInterface, index: number) => (
                  <BlogCardLeft
                    key={index}
                    title={item.attributes.title}
                    desc={item.attributes.desc}
                    img={item.attributes.img.data.attributes.url}
                    author={item.attributes.author}
                    date={item.attributes.date}
                    slug={item.attributes.slug}
                    id={item.id}
                  />
                )
              )}
            </div>

            <div className="insightRight">
              <BLogCardBig
                title={blogBigCard.attributes.title}
                desc={blogBigCard.attributes.desc}
                author={blogBigCard.attributes.author}
                date={blogBigCard.attributes.date}
                img={blogBigCard.attributes.img.data.attributes.url}
                id={blogBigCard.id}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InsightSection;
