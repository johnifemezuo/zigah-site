import React from "react";

interface TextInputProps {
  placeholder: string;
  className: string;
}

function TextInput({ placeholder,className, ...props }: TextInputProps){
  return (
    <input type="text" {...props} className={className} placeholder={placeholder} />
  );
}

export default TextInput;
