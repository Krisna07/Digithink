import Image from "next/image";
import React from "react";
import Button from "../Button";

const Digital = () => {
  return (
    <div className="tablet:w-full laptop:w-[1000px] gap-8  flex justify-between relative">
      <div className="grid gap-2  tablet:w-1/2 place-items-left relative z-20 ">
        <div className="grid  text-left leading-[130%]">
          <h4 className="font-semibold text-hover-Text">Go Digital</h4>
          <h2 className="text-3xl font-bold ">
            A digital team for your business{" "}
          </h2>
          <p className="md:w-5/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            porro hic velit vero! Placeat provident cumque iure impedit
            praesentium. Iure!
          </p>
          <div className="w-fit grid gap-2 grid-cols-4">
            <div className="w-20 h-20 bg-slate-200 rounded-full grid place-items-center text-[40px] font-bold">
              D
            </div>
            <div className="w-20 h-20 bg-slate-200 rounded-full grid place-items-center text-[40px] font-bold">
              I
            </div>
            <div className="w-20 h-20 bg-slate-200 rounded-full grid place-items-center text-[40px] font-bold">
              G
            </div>
            <div className="w-20 h-20 bg-slate-200 rounded-full grid place-items-center text-[40px] font-bold">
              I
            </div>
          </div>
        </div>

        <Button
          label="Contact us"
          variant={"default"}
          size={"sm"}
          className="h-fit"
        />
      </div>
      <div className="  place-items-center hidden tablet:grid ">
        <div className="">
          <Image
            src="/logo.gif"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Digital;
