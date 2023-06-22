import { useAtom } from "jotai";
import React from "react";
import { reviewTopButton } from "../../../lib/store/siteAtom";
import UpIcon from "../Icons/svg/UpIcon";

const TopButton = () => {
  const [useRevealButton] = useAtom(reviewTopButton);

  return (
    <a href="#top">
      <div
        className={`"rounded-ful cursor-pointer z-30 p-6 bg-gray-dark text-white transitions   fixed bottom-9 right-0" ${useRevealButton
          ? "translate-x-0 opacity-1"
          : "-translate-x-12 opacity-0"}`}
    >
        <UpIcon />
      </div>
    </a>
  );
};

export default TopButton;
