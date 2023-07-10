import Image from "next/image";
import React from "react";
import Button from "../Button";

const Digital = () => {
  return (
    <div className="tablet:w-full tablet:w-[500px] gap-8   grid place-items-center relative">
      <div className="grid gap-2 text-left tablet:text-center  tablet:place-items-center relative z-20 ">
        <div className="grid gap-4  leading-[130%]">
          <h4 className="font-semibold text-hover-Text">Go Digital</h4>
          <h2 className="text-3xl font-bold ">
            A digital team for your business{" "}
          </h2>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            porro hic velit vero! Placeat provident cumque iure impedit
            praesentium. Iure!
          </p>
          <div className="w-fit grid gap-2 grid-cols-4">
           
          </div>
        </div>

        <Button
          label="Contact us"
          variant={"default"}
          size={"sm"}
          className="h-fit"
        />
      </div>
     
    </div>
  );
};

export default Digital;
