import React from "react";

type Props = {};

const InvoiceInfoTotals = (props: Props) => {
  return (
    <div className="bg-lightBg pt-6 rounded-lg overflow-hidden flex flex-col gap-6 md:basis-full">
      <div className="flex px-6 justify-between items-center">
        <div>
          <p className="text-[15px] font-bold">Banner Design</p>
          <p className="text-[15px] font-bold text-blueGray">1 x £ 156.00</p>
        </div>
        <p className="text-[15px] font-bold">£ 156.00</p>
      </div>

      <div className="flex px-6 justify-between items-center">
        <div>
          <p className="text-[15px] font-bold">Email Design</p>
          <p className="text-[15px] font-bold text-blueGray">2 x £ 200.00</p>
        </div>
        <p className="text-[15px] font-bold">£ 400.00</p>
      </div>

      <div className="flex px-6 justify-between bg-[#373B53] h-20 items-center">
        <p className="text-[15px] text-white font-medium">Grand Total</p>
        <p className="text-[24px] text-white font-bold">£ 556.00</p>
      </div>
    </div>
  );
};

export default InvoiceInfoTotals;
