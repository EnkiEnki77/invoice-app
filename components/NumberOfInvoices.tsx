import React from "react";

type Props = {};

const NumberOfInvoices = (props: Props) => {
  return (
    <div className="flex flex-col gap">
      <h2 className="font-bold text-xl md:text-[32px]">Invoices</h2>
      <p className="font-medium text-[15px] text-steel/80 ">No invoices</p>
    </div>
  );
};

export default NumberOfInvoices;
