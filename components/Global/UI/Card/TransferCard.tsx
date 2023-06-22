import React from 'react'
import Pulse from '../Pulse';

export function TransferCard({name, flag, amount1, amount2, day}: any) {
  return (
    <div className=" -right-36 w-[250px] lg:w-[300px] bg-white shadow-lg rounded-md p-3 lg:p-5 flex--items space-x-2 lg:space-x-4">
      <img src={flag} className="bg-light-gray rounded-full p-2 w-9 lg:w-12 h-9 lg:h-12" />
      <div className="">
        <h3 className="text-zinc-700 font-medium text-sm lg:text-base">{name}</h3>
        <p className="flex--items text-sm text-zinc-500 space-x-4">
          <span>Sent</span>
          <span className="bg-zinc-200 rounded-full flex w-1 p-1 mt-0.5 h-1"></span>
          <span>{day}</span>
        </p>
      </div>

      <div className="absolute top-4 right-4 ">
        <p className="font-medium text-sm">{amount1}</p>
        {amount2 && <p className="text-xs text-right text-zinc-600">{amount2}</p>}
      </div>

      <Pulse />
    </div>
  );
}
