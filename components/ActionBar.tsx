import React from "react";
import Button from "./Button";

type Props = {};

const ActionBar = (props: Props) => {
  return (
    <div className="w-full bg-white h-[90px] flex px-6 justify-between items-center">
      <Button btn={3}>Edit</Button>
      <Button btn={5}>Delete</Button>
      <Button btn={2}>Mark as Paid</Button>
    </div>
  );
};

export default ActionBar;
