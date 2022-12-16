import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Filter from "../components/Filter";
import Header from "../components/Header";
import NumberOfInvoices from "../components/NumberOfInvoices";
import EmptyInvoice from "../public/assets/Email campaign_Flatline 2.png";

const Home: NextPage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const defaultSize = () => {
      setWidth(window.innerWidth);
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    defaultSize();
    window.addEventListener("resize", handleResize);
  }, [width]);

  const invoices = [];
  return (
    <div className="flex min-h-screen flex-col bg-lightBg relative gap-[102px]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div className="pt-[104px] flex px-6 mx-auto w-full md:max-w-[730px]">
        <NumberOfInvoices />
        <Filter width={width} />
        <Button btn={1}>{width > 768 ? "New invoice" : "New"}</Button>
      </div>
      <div className="px-20 flex flex-col items-center gap-5">
        <div className="w-[193px] h-[160px] relative mb-4">
          <Image className="" src={EmptyInvoice.src} fill alt="Empty invoice" />
        </div>
        <h2 className="text-center font-bold text-[22px]">
          There is nothing here
        </h2>
        <p className="text-center font-medium text-[15px] text-steel leading-[15px]">
          Create an invoice by clicking the{" "}
          <b className="text-[15px] text-steel leading-[15px]">New</b> button
          and get started
        </p>
      </div>
    </div>
  );
};

export default Home;
