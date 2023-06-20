import React from "react";
import Button from "../Button";

const Herosection = () => {
  return (
    <div className="w-full h-[800px]  p-4 bg-gradient-to-r from-indigo-500 to-slate-500 grid place-items-center box-border text-center gap-4">
      <div className="md:w-[60%] w-full  grid gap-4 place-items-left box-border">
        <h1 className="text-6xl md:text-[100px] font-bold text-left leading-[150%]">
          We Help <br /> You Take A Step <br /> In Digitial
        </h1>
        <Button btnText="View our work" />
      </div>
    </div>
  );
};

export default Herosection;
