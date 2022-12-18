import React from "react";
import InvoiceInfoTotals from "./InvoiceInfoTotals";

type Props = {};

const InvoiceInfo = (props: Props) => {
  return (
    <div className="p-6 rounded-lg bg-white flex flex-col gap-[30px]">
      <div>
        <p className="font-bold text-[15px]">
          <span className="text-[15px] text-steel">#</span>XM9141
        </p>
        <p className="font-medium text-steel/80 text-[15px]">Graphic design</p>
      </div>

      <div>
        <p className="font-medium text-steel/80 text-[15px]">
          19 Union Terrace
        </p>
        <p className="font-medium text-steel/80 text-[15px]">London</p>
        <p className="font-medium text-steel/80 text-[15px]">E1 3EZ</p>
        <p className="font-medium text-steel/80 text-[15px]">United Kingdom</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        <div>
          <p className="font-medium text-steel/80 text-[15px]">Invoice Date</p>
          <p className="font-bold  text-[20px]">21 Aug 2021</p>
        </div>

        <div className="self-end">
          <p className="font-medium text-steel/80 text-[15px]">Payment Due</p>
          <p className="font-bold  text-[20px]">20 Sep 2021</p>
        </div>

        <div className="col-start-2 col-span-full row-span-full">
          <p className="font-medium text-steel/80 text-[15px]">Bill To</p>
          <p className="font-bold  text-[20px]">Alex Grim</p>
          <div className="pt-1">
            <p className="font-medium text-steel/80 text-[15px]">
              84 Church Way
            </p>
            <p className="font-medium text-steel/80 text-[15px]">Bradford</p>
            <p className="font-medium text-steel/80 text-[15px]">BD1 9PB</p>
            <p className="font-medium text-steel/80 text-[15px]">
              United Kingdom
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-medium text-steel/80 text-[15px]">Sent to </p>
        <p className="font-bold  text-[20px]">alexgrim@mail.com</p>
      </div>

      <InvoiceInfoTotals />
    </div>
  );
};

export default InvoiceInfo;
