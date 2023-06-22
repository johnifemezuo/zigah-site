import React from 'react'

function Pulse() {
  return (
    <span className="absolute -bottom-2 -right-2 flex h-[15px] lg:h-[20px] w-[15px] lg:w-[20px]">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-[15px] lg:h-[20px] w-[15px] lg:w-[20px] bg-sky-500"></span>
    </span>
  );
}

export default Pulse