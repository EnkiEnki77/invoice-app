import Image from "next/image";
import React from "react";
import plus from "../public/assets/plus.png";

type Props = {
  children: string;
  btn: 1 | 2 | 3 | 4 | 5 | 6;
};

const Button = ({ children, btn }: Props) => {
  return (
    <button
      className={`text-[15px] font-bold flex cursor-pointer items-center gap-2 md:gap-4 rounded-[24px] h-[48px] px-6 ${
        btn === 1
          ? "pl-2 pr-[14px] bg-purple rounded-[24px]"
          : btn === 2
          ? " bg-purple hover:bg-lightPurple text-white"
          : btn === 3
          ? " bg-[#F9FAFE] hover:bg-lightGray text-blueGray"
          : btn === 5 && " bg-red hover:bg-peach text-white"
      }
    }`}
      type="submit"
    >
      {btn === 1 ? (
        <>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Image src={plus} className="w-[10px] h-[10px]" alt="" />
          </div>
          <p className="text-white font-bold text-xs font-spartan">
            {children}
          </p>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
