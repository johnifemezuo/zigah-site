import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MemberI } from "../../../base/member-interface";
import LinkedIn from "../../Global/Icons/svg/LinkedIn";

function EmployeeCard({ name, role, img, link }: MemberI) {
  return (
    <Link href={link}>
      <a target="_blank">
        <div className="relative overflow-hidden lg:w-[300px] lg:h-[350px] rounded-md">
          <div className="">
            <Image src={img} width={500} height={600} objectFit="cover" />
          </div>

          <div className="board-linear flex items-end absolute inset-0">
            <div className="w-full text-left ">
              <p className="mb-2 pl-3 md:pl-5 text-sm md:text-xl text-white/90 lg:text-xl">
                {role}
              </p>
              <div className="flex  justify-between bg-[#112261] w-full ">
                <div className="text-white pl-3 md:pl-5 py-2 md:py-4  md:pt-5">
                  <h2 className="font-semibold md:text-xl">{name}</h2>
                </div>
                <span className="text-white md:block hidden bg-[#1D3385] p-6">
                  <LinkedIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default EmployeeCard;
