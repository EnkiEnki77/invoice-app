import Head from "next/head";
import React from "react";
import GoBack from "../components/GoBack";
import Header from "../components/Header";
import Status from "../components/Status";
import InvoiceInfo from "../components/InvoiceInfo";
import ActionBar from "../components/ActionBar";

type Props = {};

const viewInvoice = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col bg-lightBg relative gap-14">
      <Header />
      <div className="px-6 gap-4 flex flex-col">
        <GoBack />
        <Status />
        <InvoiceInfo />
      </div>
      <ActionBar />
    </div>
  );
};

export default viewInvoice;
