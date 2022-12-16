import React from "react";

type Props = {
  id: string;
  name: string;
  amountPaid: string;
  dueDate: string;
};

const Invoice = ({ id, name, amountPaid, dueDate }: Props) => {
  return (
    <div className="w-full h-[134px] p-6 bg-white">
      <div className="flex flex-col justify-between">
        <p className="font-bold text-black text-xs">
          <span className="text-steel">#</span>
          {id}
        </p>
        <div>
          <p className="font-medium text-steel text-xs capitalize">{dueDate}</p>
          <p className="font-bold text-base">{amountPaid}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between"></div>
    </div>
  );
};

export default Invoice;
