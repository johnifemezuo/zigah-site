import Image from "next/image";
import React from "react";

function BlogProfile({ date, profileImg,author }: any) {
  
  return (
    <div className=" flex space-x-6 items-center">
      <div className="rounded-full border-4 border-primary-blue/20 p-1.5 bg-primary-blue/20 shadow-xl overflow-hidden w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
        <Image src={profileImg} width={100} height={100} />
      </div>
      <div className="space-y-3 grid text-left">
        <h3 className="text-base lg:text-xl font-semibold">
          {author}
        </h3>
        <h3 className="flex  text-xs space-x-2 lg:text-base text-[#4C5069]">
          <span>{date}</span>
          <span>-</span>
          <span>6 min read</span>
        </h3>
      </div>
    </div>
  );
}

export default BlogProfile;
