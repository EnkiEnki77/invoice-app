import Head from "next/head";
import React from "react";
import GoBack from "../components/GoBack";
import Header from "../components/Header";

type Props = {};

const viewInvoice = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col bg-lightBg relative">
      <Header />
      <GoBack />
      {/* <Status/> */}
      {/* <InvoiceInfo/> */}
      {/* <ActionBar/> */}
    </div>
  );
};

export default viewInvoice;
