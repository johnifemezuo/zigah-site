import React from "react";
import { TBase } from "../base/base-interface";


function Container({ children }: TBase) {
  return <div className="container">{children}</div>;
}

export default Container;
