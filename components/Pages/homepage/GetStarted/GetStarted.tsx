/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Container from "../../../../layout/Container";
import { NeedGetstartedInterface } from "../../../../util/interface/getStartedInterface";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import GetStartedSteps from "./GetStartedSteps";
import Pulse from "../../../Global/UI/Pulse";
import Button from "../../../Global/UI/Button/Button";
import { TransferCard } from "../../../Global/UI/Card/TransferCard";

function GetStarted({ title, desc, subTitle }: { title: string; desc: string; subTitle: string }) {


  // const signUp: NeedGetstartedInterface = getStarted[0].attributes;
  // const sendMoney: NeedGetstartedInterface = getStarted[1].attributes;
  // const topUp: NeedGetstartedInterface = getStarted[2].attributes;

  return (
    <div className="pb-12 lg:py-28 lg:mb-[13vh] bg-getStartedBg">
      <Container>
        <div className="px-6 lg:px-0">
          <BodyHeader subHeader={subTitle} header={title} />

          <div className="lg:gap-52 md:gap-9 lg:mt-20 lg:space-y-8 md:grid md:grid-cols-2">
            <div className="relative mt-12 lg:mt-0 md:w-full rounded-lg w-full h-[400px] lg:h-[650px]">
              <img src="/img/sec2-img.png" className=" object-cover h-full w-full rounded-xl" />

              <div className="absolute -top-16 z-30 lg:top-0 mt-12 right-0 lg:-right-36 ">
                <TransferCard
                  name={"Mick Dishell"}
                  flag={"/img/france.png"}
                  amount1={"8.22 EUR"}
                  amount2={""}
                  day={"Tue"}
                />
              </div>

              <div className="absolute top-0 mt-36 lg:mt-44 -right-36 hidden lg:block">
                <TransferCard
                  name={"Godwin fabian"}
                  flag={"/img/usa.png"}
                  amount1={"12.22 EUR"}
                  amount2={"9.33 EUR"}
                  day={"Tue"}
                />
              </div>

              <div className="absolute bottom-4 mt-12 ml-4 lg:ml-0 md:-right-28 ">
                <TransferCard
                  name={"Dimson Stan"}
                  flag={"/img/usa.png"}
                  amount1={"7.02 EUR"}
                  amount2={"2.90"}
                  day={"Tue"}
                />
              </div>
            </div>

            <div className=" mt-8 lg:mt-0">
              <ul className="font-medium text-zinc-700 list-disc  text-base lg:text-lg text-zin-700 bg-light-gray px-6 py-4 lg:p-8 rounded-md lg:leading-loose">
                <li className="list-outside">
                  Connect with Loved Ones Abroad: Send Money Instantly with ZIGA
                </li>

                <li className="list-outside">
                  Experience a New Era in International Money Transfers with ZIGA
                </li>

                <li className="list-outside">
                  ZIGA: Transforming Lives, One Money Transfer at a Time
                </li>
              </ul>

              <Button
                className="bg-primary-cyan text-white rounded-full mt-6 lg:mt-12"
                isLoading={false}
              >
                Learn more about our mission
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GetStarted;
