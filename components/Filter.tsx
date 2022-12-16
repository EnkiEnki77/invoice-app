import Image from "next/image";
import React from "react";
import chevronDownArrow from "../public/assets/chevron.png";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="flex items-center justify-end pr-[18px] flex-grow gap-3">
      <p className="text-[15px] font-bold">Filter</p>
      <Image src={chevronDownArrow} alt="" />
    </div>
  );
};

export default Filter;
