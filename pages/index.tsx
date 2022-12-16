import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Invoice from "../components/Invoice";
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

  type invoiceType =
    | { id: string; dueDate: string; amountPaid: string; name: string }[]
    | never[];

  const invoices: invoiceType = [
    {
      id: "RT3080",
      dueDate: "Due  19 Aug 2021",
      amountPaid: "£ 1,800.90",
      name: "Jensen Huang",
    },
  ];
  return (
    <div
      className={`flex min-h-screen flex-col bg-lightBg relative ${
        invoices.length === 0 ? "gap-[102px]" : "gap-8"
      }`}
    >
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
      <div className="pt-[104px] flex px-6 mx-auto w-full md:px-12">
        <NumberOfInvoices />
        <Filter width={width} />
        <Button btn={1}>{width > 768 ? "New invoice" : "New"}</Button>
      </div>
      {invoices.length === 0 ? (
        <div className="mx-auto flex flex-col items-center w-full gap-5 max-w-[217px] md:max-w-[242px]">
          <div className="w-[193px] md:w-[241px] h-[160px] md:h-[200px] relative mb-4">
            <Image
              className=""
              src={EmptyInvoice.src}
              fill
              alt="Empty invoice"
            />
          </div>
          <h2 className="text-center font-bold text-[22px]">
            There is nothing here
          </h2>
          <p className="max-w-[221px] text-center font-medium text-[15px] text-steel leading-[15px]">
            Create an invoice by clicking the{" "}
            <b className="text-[15px] text-steel leading-[15px]">New</b> button
            and get started
          </p>
        </div>
      ) : (
        <div className="flex flex-col px-6 lg:max-w-[730px] md:px-12">
          {invoices.map((invoice) => (
            <Invoice
              id={invoice.id}
              name={invoice.name}
              dueDate={invoice.dueDate}
              amountPaid={invoice.amountPaid}
              width={width}
              key={invoice.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
