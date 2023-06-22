import Link from "next/link";
import React from "react";
function SliderCard({ desc, image, title, role }: { desc: string; image: string; title: string; role: string}) {
  return (
    <div className="p-4 h-[250px] w-full  rounded-lg relative bg-white shadow-md">
      <div className="flex--items space-x-4">
        <img
          alt={image}
          src={image}
          className="bg-zinc-400 p-1 w-12 rounded-full  h-12 object-cover overflow-hidden  "
        />
        <div>
          <p className="font-semibold text-zinc-600">{title}</p>
          <p className="font-light italic text-sm text-zinc-600">{role}</p>
        </div>
      </div>

      <div className="mt-7 italic">
        <p className=" text-zinc-600 w-[300px]">{desc}</p>
      </div>
    </div>
  );
}

export default SliderCard;
