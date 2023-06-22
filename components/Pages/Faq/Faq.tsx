import React from "react";
import Container from "../../../layout/Container";
import { StyledLongText } from "../../../styles/styled-components/Styled-component";
import FadIn from "../../../util/animation/FadIn";
import Aurora from "../../Global/Aurora/Aurora";
import FaqDrop from "../../Global/FaqDrop/FaqDrop";

function Faq({ faqData }: any) {

  return (
    <div className="lg:mt-20 mt-12">
      <Container>
        <div className=" md:grid space-y-8 relative md:items-center justify-between">
          <div className=" lg:flex--between w-full pt-[5vh] px-6 lg:px-0 relative z-10 lg:space-x-12 space-y-5 lg:text-left text-center">
            <FadIn var1={{ x: -80 }} var2={{ x: 0 }}>
              <h1 className="md:text-[6vh] lg:w-[30vw]  lg:text-left text-center text-4xl leading-snug lg:text-[5.9vh]  text-primary-blue font-extrabold">
                FAQ
              </h1>
            </FadIn>
            <FadIn var1={{ x: 80 }} var2={{ x: 0 }} param={"+=1"}>
              <StyledLongText>
                <span className="lg:w-[500px]">
                  Get insight by reading the answers to the questions you might have.
                </span>
              </StyledLongText>
            </FadIn>
          </div>

          <Aurora />
        </div>
      </Container>

      <div className="w-full lg:h-[700px]">
        <Container>
          <FadIn var1={{ y: 80 }} var2={{ y: 0 }} param="+=1">
            <div className="px-6 lg:px-0 my-20 md:my-[9vh] relative  w-full  grid lg:grid-cols-2 gap-6">
              {faqData?.map((faq: any, i: number) => ( 
                <FaqDrop
                  key={i}
                title={faq?.question}
                desc={
                  faq?.answer
                }
              />
               ))}
            </div>
          </FadIn>
        </Container>
      </div>
    </div>
  );
}

export default Faq;
