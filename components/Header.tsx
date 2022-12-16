import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo-invoice.png";
import lightDark from "../public/assets/dark-light-icon.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="flex bg-[#373B53] w-full fixed top-0 h-[72px] md:h-20 lg:flex-col lg:left-0 
    lg:h-full lg:w-[103px] lg:rounded-r-[27px]"
    >
      <div className="w-[72px]  h-full md:w-20 lg:w-full lg:h-[103px]">
        <Image src={logo} className="h-full w-full" alt="logo" />
      </div>
      <div className="h-full lg:h-0 lg:flex-col lg:pb-8 lg:pr-0 flex-grow pr-6 flex justify-end items-center">
        <Image src={lightDark} className="h-5" alt="light dark button" />
      </div>
      <div className="h-full w-20 md:w-24 lg:w-full lg:h-[88px] flex justify-center items-center border-l lg:border-t border-[#979797]/30">
        <Image
          src=""
          alt="profile image"
          width={32}
          height={32}
          className="rounded-full border border-white"
        />
      </div>
    </header>
  );
};

export default Header;
