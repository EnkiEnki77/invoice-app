import React from "react";

type Props = {};

const InvoiceInfo = (props: Props) => {
  return (
    <div className="p-6 rounded-lg bg-white">
      <div>
        <p>
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

      <div>
        <div>
          <p className="font-medium text-steel/80 text-[15px]">Invoice Date</p>
          <p className="font-bold  text-[22px]">21 Aug 2021</p>
        </div>

        <div>
          <p className="font-medium text-steel/80 text-[15px]">Payment Due</p>
          <p className="font-bold  text-[22px]">20 Sep 2021</p>
        </div>

        <div>
          <p className="font-medium text-steel/80 text-[15px]">Bill To</p>
          <p className="font-bold  text-[22px]">Alex Grim</p>
          <div>
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

        <div>
          <p className="font-medium text-steel/80 text-[15px]">Sent to </p>
          <p className="font-bold  text-[22px]">alexgrim@mail.com</p>
        </div>

        <InvoiceInfoTotals />
      </div>
    </div>
  );
};

export default InvoiceInfo;
