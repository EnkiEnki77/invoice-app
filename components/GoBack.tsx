import Image from "next/image";
import React from "react";
import chevronLeft from "../public/assets/chevron-left.png";

type Props = {};

const GoBack = (props: Props) => {
  return (
    <div className="pt-[104px] flex gap-6 px-6 items-center">
      <Image className="w-2 h-3" src={chevronLeft} alt="" />
      <p className="font-bold text-[15px]">Go back</p>
    </div>
  );
};

export default GoBack;
