import React from "react";
import Aurora from "../Aurora/Aurora";
import spinner from "../Icons/png/spinner.png";
import Image from "next/image";

export function PageLoading() {
    return (
      <div className="">
        <div className="w-full grid space-x-6 h-screen space-y-2 place-content-center text-center  ">
          <Image src={spinner} width={100} height={100} alt="Loading..." className="lg:w-16 w-16 h-16 lg:h-16 mx-auto" />
        </div>
        <Aurora />
      </div>
    );
}