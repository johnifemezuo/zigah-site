import React from "react";

import { useCarousel } from "./useCarousel";
import { NextButton } from "./style";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export function CarouselItem({ children, width }: { children: React.ReactNode; width: string }) {
  return (
    <div
      className=" inline-flex justify-center items-center h-auto bg-transparent text-white"
      style={{ width: width }}
    >
      {children}
    </div>
  );
}

export function Carousel({ children }: { children: React.ReactNode }) {
  const { activeIndex, setPaused, updateIndex, handlers } = useCarousel({ children });

  return (
    <div className="">
      <div className="flex--items justify-between">
        <div className="flex-items space-x-3 ">
          <NextButton onClick={() => updateIndex(activeIndex - 1)}>
            <MdArrowLeft size={22} />
          </NextButton>

          <NextButton onClick={() => updateIndex(activeIndex + 1)}>
            <MdArrowRight size={22} />
          </NextButton>
        </div>
      </div>

      <div className="overflow-hidden mt-4" {...handlers}>
        <div
          className="whitespace-nowrp flex gap-8 transition-transform duration-500"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ transform: `translateX(-${activeIndex * 50}%)` }}
        >
          {React.Children.map(children, (child: any, index: any) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>

        <div className="flex--items space-x-2 mt-8">
          {React.Children.map(children, (child, index) => (
            <span
              key={index}
              className={`cursor-pointer h-2 w-4   p-1 text-zinc-700 grid place-content-center ${
                index === activeIndex ? "bg-primary-magenta" : "bg-white"
              }`}
              onClick={() => updateIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
