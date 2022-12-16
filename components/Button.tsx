import React from "react";

type Props = {
  children: string | React.ReactElement;
  btn: 1 | 2 | 3 | 4 | 5 | 6;
};

const Button = ({ children, btn }: Props) => {
  return (
    <button
      className={` ${btn === 1 ? "px-2" : "px-6"} 
    py-4 rounded-3xl ${
      btn === 1 || btn === 2
        ? "bg-purple hover:bg-lightPurple"
        : btn === 3
        ? "bg-[#F9FAFE] hover:bg-lightGray"
        : btn === 4
        ? "bg-red hover:bg-peach"
        : btn === 5
        ? "bg-[#373B53] hover:bg-blackoc text-steel"
        : "bg-[#F9FAFE] hover:bg-steel"
    }`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
