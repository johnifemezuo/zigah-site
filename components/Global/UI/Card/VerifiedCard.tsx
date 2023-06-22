import { IoShieldCheckmarkSharp } from "react-icons/io5";
import React from "react";

function VerifiedCard({ h1, h2 }: {h1: string, h2: string}) {
  return (
    <div className="ring-offset-2 ring-2 md:w-[350px] bg-white border py-3 px-4 rounded-lg flex--items space-x-4">
      <span>
        <IoShieldCheckmarkSharp className="text-2xl text-blue-500 md:text-3xl" />
      </span>

      <div className="space-y-1 text-left">
        <h3 className="font-medium text-zinc-700">{h1}</h3>
        <p className="text-sm text-zinc-600">{h2}</p>
      </div>
    </div>
  );
}

export default VerifiedCard;
