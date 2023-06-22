import React from 'react'
import Container from '../../../layout/Container'
import { StyledLongText } from '../../../styles/styled-components/Styled-component';
import FadIn from '../../../util/animation/FadIn';
import { ReadOnlyBlogInterface } from '../../../util/interface/blogInterface';
import Aurora from '../../Global/Aurora/Aurora';
import BLogCardBig from '../homepage/InsightSection/BLogCardBig';

function Blogs({allBlog}: ReadOnlyBlogInterface[] | any) {
  return (
    <Container>
      <div>
        <div className="md:grid space-y-28 relative md:items-center justify-between">
          <div className=" lg:flex--between w-full pt-[10vh] px-6 lg:px-0 relative z-10 lg:space-x-12 space-y-5 lg:text-left text-center">
            <FadIn var1={{ x: -80 }} var2={{ x: 0 }}>
              <h1 className="md:text-[6vh] lg:w-[30vw]  lg:text-left text-center text-4xl leading-snug lg:text-[5.9vh]  text-primary-blue font-extrabold">
                ARTICLES
              </h1>
            </FadIn>
            <FadIn var1={{ x: 80 }} var2={{ x: 0 }} param={"+=0.4"}>
              <StyledLongText>
                <span className="lg:w-[500px] inline-block">
                  Get usefull insight on our upto date post
                </span>
              </StyledLongText>
            </FadIn>
          </div>

          <Aurora />
        </div>

        <div className="lg:mt-20 mt-12">
          <FadIn var1={{ y: 80 }} var2={{ y: 0 }} param="+=1">
            <div className="grid mt-6 p-6 space-y-9 lg:space-y-0 lg:p-12 bg-white lg:mt-12 lg:gap-8 lg:grid-cols-3">
              {allBlog.map((blogBigCard: ReadOnlyBlogInterface, i: number) => (
                <BLogCardBig
                  key={i}
                  title={blogBigCard.attributes.title}
                  desc={blogBigCard.attributes.desc}
                  author={blogBigCard.attributes.author}
                  date={blogBigCard.attributes.date}
                  img={blogBigCard.attributes.img.data.attributes.url}
                  id={blogBigCard.id}
                />
              ))}
            </div>
          </FadIn>
        </div>
      </div>
    </Container>
  );
}

export default Blogs