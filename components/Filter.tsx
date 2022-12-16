import Image from "next/image";
import React from "react";
import chevronDownArrow from "../public/assets/chevron.png";

type Props = {
  width: number;
};

const Filter = ({ width }: Props) => {
  return (
    <div className="flex items-center justify-end pr-[18px] md:pr-10 flex-grow gap-3">
      <p className="text-[15px] font-bold">
        {width < 768 ? "Filter" : "Filter by status"}
      </p>
      <Image src={chevronDownArrow} alt="" />
    </div>
  );
};

export default Filter;
