import React from "react";
import Container from "../../../layout/Container";
import { StyledLongText } from "../../../styles/styled-components/Styled-component";
import FadIn from "../../../util/animation/FadIn";
import Aurora from "../../Global/Aurora/Aurora";
import GetInTouch from "../homepage/GetInTouch/GetInTouch";
import parse from "html-react-parser";
import { format } from "date-fns";

function Terms({ termsData }: any) {

  const result = format(new Date(termsData?.updatedAt), "MM/dd/yyyy");
  
  return (
    <div className="mt-12 lg:mt-20">
      <Container>
        <div className="md:grid space-y-28 relative md:items-center justify-between">
          <div className=" lg:flex--between w-full pt-[10vh] px-6 lg:px-0 relative z-10 lg:space-x-12 space-y-5 lg:text-left text-center">
            <FadIn var1={{ x: -80 }} var2={{ x: 0 }}>
              <div>
                <h1 className="md:text-[6vh] lg:w-[30vw]  lg:text-left text-center text-4xl leading-snug lg:text-[5.9vh]  text-primary-blue font-extrabold">
                  {termsData?.title}
                </h1>
                <p className="lg:w-[500px]">{`Updated on ${result}`}</p>
              </div>
            </FadIn>
            <FadIn var1={{ x: 80 }} var2={{ x: 0 }} param={"+=0.4"}>
              <StyledLongText>{termsData?.desc}</StyledLongText>
            </FadIn>
          </div>

          <Aurora />
        </div>

        <FadIn var1={{ y: 80 }} var2={{ y: 0 }} param="+=1">
          <div className="my-20 bg-white py-12 rounded-xl px-6 lg:px-16 relative card-shadow-xl lg:my-[12vh]">
            <section className="markdown-styles">
              {parse(termsData?.article?.html)}
            </section>
          </div>
        </FadIn>
      </Container>
    </div>
  );
}

export default Terms;
