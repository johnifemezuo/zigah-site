import Image from "next/image";
import React from "react";
import Container from "../../../../layout/Container";
import BodyHeader from "../../../Global/UI/Elements/BodyHeader";

function ZigahNotBank() {
  return (
    <Container>
      <div className="px-5 mt-12 lg:mt-0 lg:px-0">
        <div className="lg:space-x-20 lg:flex justify-between">
          <div className="max-w-[600px]">
            <BodyHeader header={"WHY ZIGA IS NOT A BANK"} />
            <p className="text-lg text-zinc-600">{""}</p>

            <div className="mt-12">
              <h3 className="text-xl font-medium">
                ZIGA: Your Global Money Transfer Solution, Not a Bank!
              </h3>
              <p className="mt-3 text-zinc-600">
                At ZIGA, we want to make it clear that we&apos;re not a bank. We specialise in
                providing a seamless platform for sending money from Nigeria to any country,
                directly to your local bank account. Unlike a bank, we focus solely on facilitating
                secure and efficient cross-border transactions, ensuring your hard-earned money
                reaches its destination hassle-free.
              </p>
            </div>
          </div>

          <div className=" h-[180px] mt-8 lg:mt-0 lg:w-full rounded-xl overflow-hidden lg:h-[350px] w-full">
            <Image src={"/img/we.png"} width={1000} height={550} objectFit="cover" />
          </div>
        </div>

        <div className="lg:flex lg:space-x-12">
          <div className="mt-12">
            <h3 className="text-xl font-medium">
              Why Choose ZIGA? We&apos;re Not a Bank, We&apos;re a Money Transfer Expert!
            </h3>
            <p className="mt-3 text-zinc-600">
              At ZIGA, we pride ourselves on being a specialized money transfer service, distinct
              from traditional banks. While banks offer a wide range of financial services, we have
              honed our expertise in international remittances. Our dedicated platform is designed
              to simplify the process of sending money abroad, providing you with faster
              transactions, competitive exchange rates, and a user-friendly experience tailored
              specifically for global money transfers.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-medium">
              ZIGA: Streamlining Money Transfers, Without the Complexity of a Bank
            </h3>
            <p className="mt-3 text-zinc-600">
              When it comes to sending money internationally, ZIGA offers a straightforward solution
              without the complexities associated with traditional banks. We&apos;re not burdened
              with the multitude of services that banks provide, allowing us to focus solely on
              making your cross-border transactions as efficient and secure as possible. With ZIGA,
              you can enjoy the benefits of a specialised money transfer service dedicated to
              simplifying global remittan
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ZigahNotBank;
