import React from "react";
import { InterBase } from "../../../../base/base-interface";

interface ButtonProps extends InterBase {
  onClick?: () => void;
  className: string;
  isLoading: boolean;
 
}

function Button({ onClick, className, isLoading, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
