import React from "react";
import InvoiceMobile from "./InvoiceMobile";
import InvoiceTablet from "./InvoiceTablet";

type Props = {
  id: string;
  name: string;
  amountPaid: string;
  dueDate: string;
  width: number;
  status?: string;
};

const Invoice = ({ id, name, amountPaid, dueDate, status, width }: Props) => {
  return (
    <div className="w-full  h-[134px] md:h-[72px] md:gap-[47px] p-6 bg-white flex md:items-center md:justify-between rounded-lg">
      {width < 768 ? (
        <InvoiceMobile
          id={id}
          name={name}
          amountPaid={amountPaid}
          dueDate={dueDate}
        />
      ) : (
        <InvoiceTablet
          id={id}
          name={name}
          amountPaid={amountPaid}
          dueDate={dueDate}
        />
      )}
    </div>
  );
};

export default Invoice;
