import Container from "../../../../layout/Container";
import VerifiedCard from "../../../Global/UI/Card/VerifiedCard";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";
import React from "react";

function SectionThree({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#ebe8d9]">
      <div className="py-20 lg:py-28 lg:mb-[13vh] bg-[#F2F0E6] sec-clip">
        <Container>
          <div className="px-6 lg:px-0 z-40 mt-12 lg:mt-0">
            <div className="space-y-6 mt-6 lg:mt-0">
              <BodyHeader header={title} />
              <p className="text-lg text-zinc-600">{desc}</p>

              <div className="grid lg:grid-cols-3 gap-9 mt-12 lg:pt-6">
                <div>
                  <VerifiedCard h1={"Deposits"} h2={"Fund you account with"} />
                  <div className="mt-12">
                    <h3 className="text-xl font-medium">
                      ZIGA: Your Global Money Transfer Solution, Not a Bank!
                    </h3>
                    <p className="mt-3 text-zinc-600">
                      At ZIGA, we want to make it clear that we&apos;re not a bank. We specialise in
                      providing a seamless platform for sending money from Nigeria to any country,
                      directly to your local bank account. Unlike a bank, we focus solely on
                      facilitating secure and efficient cross-border transactions, ensuring your
                      hard-earned money reaches its destination hassle-free.
                    </p>
                  </div>
                </div>

                <div>
                  <VerifiedCard h1={"Transfer"} h2={"Make faster transaction"} />
                  <div className="mt-12">
                    <h3 className="text-xl font-medium">
                      Why Choose ZIGA? We&apos;re Not a Bank, We&apos;re a Money Transfer Expert!
                    </h3>
                    <p className="mt-3 text-zinc-600">
                      At ZIGA, we pride ourselves on being a specialized money transfer service,
                      distinct from traditional banks. While banks offer a wide range of financial
                      services, we have honed our expertise in international remittances. Our
                      dedicated platform is designed to simplify the process of sending money
                      abroad, providing you with faster transactions, competitive exchange rates,
                      and a user-friendly experience tailored specifically for global money
                      transfers.
                    </p>
                  </div>
                </div>

                <div>
                  <VerifiedCard h1={"Instant settlement"} h2={"Fund you account with"} />
                  <div className="mt-12">
                    <h3 className="text-xl font-medium">
                      ZIGA: Streamlining Money Transfers, Without the Complexity of a Bank
                    </h3>
                    <p className="mt-3 text-zinc-600">
                      When it comes to sending money internationally, ZIGA offers a straightforward
                      solution without the complexities associated with traditional banks.
                      We&apos;re not burdened with the multitude of services that banks provide,
                      allowing us to focus solely on making your cross-border transactions as
                      efficient and secure as possible. With ZIGA, you can enjoy the benefits of a
                      specialised money transfer service dedicated to simplifying global remittan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <img src="/img/img3.png" alt="zigah" />
            </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default SectionThree;
