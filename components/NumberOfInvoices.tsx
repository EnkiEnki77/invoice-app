import React from "react";

type Props = {};

const NumberOfInvoices = (props: Props) => {
  return (
    <div className="flex flex-col gap">
      <h2 className="font-bold text-xl">Invoices</h2>
      <p className="font-medium text-xs text-steel">No invoices</p>
    </div>
  );
};

export default NumberOfInvoices;
