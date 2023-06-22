import { Disclosure } from "@headlessui/react";
import React from "react";
import { StyledLongText } from "../../../styles/styled-components/Styled-component";
import DownIcon from "../Icons/svg/DownIcon";

interface FaqI {
  title: string;
  desc: string;
}

function FaqDrop({ title, desc }: FaqI) {
  return (
    <>
      <Disclosure as="div" className="mt-2 transitions">
        {({ open }) => (
          <>
            <Disclosure.Button className="border flex transitions card-shadow-xl w-full justify-between rounded-lg bg-[#f7f8fb] md:px-8  md:py-6 px-4 py-4 text-left text-sm font-medium border-gray-light">
              <span
                className={`lg:text-xl md:text-lg  ${
                  open ? "text-primary-magenta" : "text-gray-dark"
                }`}
              >
                {title}
              </span>
              <span
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500 transitions`}
              >
                <DownIcon />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="shadow-lg mt-2 rounded-md py-6 bg-white px-4 lg:px-8 pt-4  text-sm  transitions ">
              <StyledLongText>{desc}</StyledLongText>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default FaqDrop;
