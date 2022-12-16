import React from "react";

type Props = {
  id: string;
  name: string;
  amountPaid: string;
  dueDate: string;
};

const InvoiceTablet = ({ id, name, amountPaid, dueDate }: Props) => {
  return (
    <>
      <p className="font-bold text-black text-[15px]">
        <span className="text-steel">#</span>
        {id}
      </p>

      <p className="font-medium text-steel text-[15px] leading-[24px] capitalize">
        {dueDate}
      </p>
      <p className="font-medium text-steel text-[15px]">{name}</p>
      <p className="font-bold text-[22px] leading-6">{amountPaid}</p>
      <div className="h-10 w-[104px] bg-[#33D89F]/20 flex items-center justify-center gap-2 rounded-md">
        <div className="w-2 h-2 rounded-full bg-[#33D89F]"></div>
        <p className="font-bold capitalize text-[15px] text-[#33D89F] pt-1">
          paid
        </p>
      </div>
    </>
  );
};

export default InvoiceTablet;
