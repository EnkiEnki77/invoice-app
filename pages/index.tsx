import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Filter from "../components/Filter";
import Header from "../components/Header";
import NumberOfInvoices from "../components/NumberOfInvoices";

const Home: NextPage = () => {
  const invoices = [];
  return (
    <div className="flex min-h-screen flex-col bg-lightBg relative ">
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
      <div className="pt-[104px] flex px-6">
        <NumberOfInvoices />
        <Filter />
        <Button btn={1}>New</Button>
      </div>
      <div className="px-6">
        {/* <Image/> */}
        {/* <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the
          <b>New</b> button and get started
        </p> */}
      </div>
    </div>
  );
};

export default Home;
