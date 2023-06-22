import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MemberI } from "../../../base/member-interface";
import LinkedIn from "../../Global/Icons/svg/LinkedIn";

function BoardCard({ name, role, img, link }: MemberI) {
  return (
    <Link href={link}>
      <a target="blank">
        <div className="relative overflow-hidden lg:w-[300px] lg:h-[350px] rounded-2xl">
          <div className="">
            <Image src={img} width={500} height={600} objectFit="cover" />
          </div>

          <div className="flex items-end px-4 md:px-6 pb-2 md:pb-4 justify-between  board-linear  absolute inset-0">
            <div className="text-white">
              <h2 className="font-bold md:text-xl">{name}</h2>
              <p className="mb-2 text-xs md:text-base">{role}</p>
            </div>
            <span className="hidden md:block text-white mb-2">
              <LinkedIn />
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BoardCard;
