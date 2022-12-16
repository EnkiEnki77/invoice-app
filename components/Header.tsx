import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo-invoice.png";
import lightDark from "../public/assets/dark-light-icon.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex bg-[#373B53] w-full fixed top-0 h-[72px]">
      <div className="w-[72px] h-full">
        <Image src={logo} alt="logo" />
      </div>
      <div className="h-full flex-grow pr-6 flex justify-end items-center">
        <Image src={lightDark} className="h-5" alt="light dark button" />
      </div>
      <div className="h-full w-20 flex justify-center items-center border-l border-l-[#979797]/30">
        <Image
          src=""
          alt="profile image"
          width={32}
          height={32}
          className="rounded-full border border-white"
        />
      </div>
    </div>
  );
};

export default Header;
