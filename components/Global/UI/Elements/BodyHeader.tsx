import React from "react";
import { TBase } from "../../../../base/base-interface";

type BodyHeaderProps = {
  subHeader?: string;
  header?: string;
} & TBase;

function BodyHeader({ header, subHeader }: BodyHeaderProps) {
  return (
    <div className=" space-y-2 lg:space-y-4">
      {subHeader && <p className="text-gray text-sm lg:text-lg uppercase text-primary-magenta">{subHeader}</p>
      }
      <h1 className="max-w-[900px] font-semibold  text-2xl text-primary-blue lg:text-4xl leading-12">{header}</h1>
    </div>
  );
}

export default BodyHeader;


// We officially have our MSB license in Canada!!! This is a massive massive deal! It means we can integrate with global Rails ourselves