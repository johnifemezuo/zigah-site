import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledLongText } from "../../../../styles/styled-components/Styled-component";
import { BlogI } from "../../../../util/interface/blogInterface";

function BLogCardBig({ title, desc, img, author, date, id }: BlogI) {
  return (
    <div className="mt-4 lg:mt-0 ">
      <div className="overflow-hidden shadow-2xl rounded-2xl w-full h-[20vh] lg:h-[23vh]">
        <Image src={img} width={800} height={700} />
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex items-center mb-2 lg:mb-4 font-medium text-gray uppercase justify-between text-xs lg:text-sm">
          <p>{author}</p> <p>{date}</p>
        </div>
        <Link href={`/blog/${id}`}>
          <a className="font-bold lg:pt-2  transitions hover:text-primary-blue/60 text-primary-blue text-xl lg:text-[2.7vh] ">
            {title}
          </a>
        </Link>
        <div className=" overflow-hidden  text-ellipsis">
          <StyledLongText>{desc}</StyledLongText>
        </div>
      </div>
    </div>
  );
}

export default BLogCardBig;
