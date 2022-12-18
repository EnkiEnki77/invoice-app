import React from "react";

type Props = {};

const Status = (props: Props) => {
  return (
    <div className="w-full px-6 max-w-[500px] bg-white h-[90px] rounded-lg flex items-center justify-between">
      <p className="text-[15px] text-steel/80">Status</p>
      <div className="h-10 w-[104px] bg-[#33D89F]/20 flex items-center justify-center gap-2 rounded-md">
        <div className="w-2 h-2 rounded-full bg-[#33D89F]"></div>
        <p className="font-bold capitalize text-[15px] text-[#33D89F] ">paid</p>
      </div>
    </div>
  );
};

export default Status;
