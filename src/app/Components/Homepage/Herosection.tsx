import Image from "next/image";
import React from "react";
import Button from "../Button";

const Herosection = () => {
  return (
    <div className="w-full py-8   p-4 bg-gradient-to-r from-black to-slate-900 grid place-items-center box-border text-center gap-4 relative">
      <div className="laptop:w-[1000px] grid tablet:grid-cols-2 relative">
        <div className=" text-white text-left relative z-20  flex flex-col gap-4  box-border">
          <h1 className=" text-3xl  font-bold  leading-[120%]">
            We Help You Take A Step In Digitial
          </h1>
          <p>
            Our team with the excellent work ae alwasyes on tje merhis theris
            iskabchr so that we shoud ne ayl least me a so sometime payraise of
            course they both told him they cannot inscreadte the paysue some
            people salary has cut{" "}
          </p>
          <Button
            variant={"ghost"}
            label={"Learn More"}
            size={"sm"}
            className="h-fit"
          />
        </div>
        <div className=" laptop:relative  h-full  absolute top-[0px] tablet:right-0 z-10">
          <Image
            src={"./herobackground.svg"}
            width={400}
            height={400}
            alt={"Heroimage"}
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
