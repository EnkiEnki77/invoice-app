import React from "react";

type Props = {};

const InvoiceInfoTotals = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <p className="text-[15px] font-bold">Banner Design</p>
          <p className="text-[15px] font-bold text-blueGray">1 x £ 156.00</p>
        </div>
        <p className="text-[15px] font-bold">£ 156.00</p>
      </div>

      <div>
        <div>
          <p className="text-[15px] font-bold">Email Design</p>
          <p className="text-[15px] font-bold text-blueGray">2 x £ 200.00</p>
        </div>
        <p className="text-[15px] font-bold">£ 400.00</p>
      </div>

      <div>
        <p className="text-[15px] text-white font-medium">Grand Total</p>
        <p className="text-[24px] text-white font-bold">£ 556.00</p>
      </div>
    </div>
  );
};

export default InvoiceInfoTotals;
