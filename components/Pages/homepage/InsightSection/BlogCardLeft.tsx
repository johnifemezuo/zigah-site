import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledLongText } from "../../../../styles/styled-components/Styled-component";
import { BlogI } from "../../../../util/interface/blogInterface";

function BlogCardLeft({ title, desc, author, date, img, id }: BlogI) {
  return (
    <>
      <div className="lg:flex  lg:space-x-8 items-center  ">
        <div className="overflow-hidden shadow-2xl rounded-2xl lg:w-[260px] lg:h-[22vh] h-[20vh]">
          <Image
            src={img}
            alt={title}
            width={1100}
            height={1000}
            layout="responsive"
          />
        </div>

        <div className="space-y-2 mt-4 lg:mt-0 lg:w-[22vw]  relative text-ellipsis overflow-hidden">
          <div className="flex mb-2 md:mb-4 text-xs lg:text-sm items-center font-medium text-gray uppercase justify-between">
            <p>{author}</p> <p>{date}</p>
          </div>
          <Link href={`/blog/${id}/`}>
            <a className="font-bold  transitions hover:text-primary-blue/60 text-primary-blue text-xl lg:text-[2.5vh] ">
              {title}
            </a>
          </Link>
          <div className="lg:h-[130px] overflow-hidden h-[90px] ellipsis">
            <StyledLongText>{desc}</StyledLongText>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCardLeft;
