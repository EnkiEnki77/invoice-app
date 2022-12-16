import React from "react";

type Props = {
  id: string;
  name: string;
  amountPaid: string;
  dueDate: string;
};

const InvoiceMobile = ({ id, name, amountPaid, dueDate }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between basis-1/2">
        <p className="font-bold text-black text-[15px]">
          <span className="text-steel">#</span>
          {id}
        </p>
        <div className="md:flex md:gap-[37px]">
          <p className="font-medium text-steel text-[15px] leading-[24px] capitalize">
            {dueDate}
          </p>
          <p className="font-bold text-[22px] leading-6">{amountPaid}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between basis-1/2 items-end">
        <p className="font-medium text-steel text-[15px]">{name}</p>
        <div className="h-10 w-[104px] bg-[#33D89F]/20 flex items-center justify-center gap-2 rounded-md">
          <div className="w-2 h-2 rounded-full bg-[#33D89F]"></div>
          <p className="font-bold capitalize text-[15px] text-[#33D89F] pt-1">
            paid
          </p>
        </div>
      </div>
    </>
  );
};

export default InvoiceMobile;
