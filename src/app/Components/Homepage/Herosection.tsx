import React from "react";
import Button from "../Button";

const Herosection = () => {
  return (
    <div className="w-full  py-40  p-4 bg-gradient-to-r from-black to-slate-900 grid place-items-center box-border text-center gap-4">
      <div className=" text-white  grid gap-4 place-items-center box-border">
        <h1 className="tablet:text-6xl text-3xl md:text-[80px] font-bold text-center leading-[120%]">
          We Help You Take A Step <br /> In Digitial
        </h1>
        <Button variant={"ghost"} label={"Learn More"} size={"sm"} />
      </div>
    </div>
  );
};

export default Herosection;
