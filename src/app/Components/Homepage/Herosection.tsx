import Image from "next/image";
import React from "react";
import Button from "../Button";

const Herosection = () => {
  return (
    <div className="w-full py-8   p-4 bg-gradient-to-r from-black to-slate-900 grid place-items-center box-border text-center gap-4 relative">
      <div className="laptop:w-[1000px] flex align-items-center justify-center relative">
        <div className="laptop:w-1/2 text-white text-left relative z-20  flex flex-col gap-4  box-border">
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
        <div className="w-1/2 laptop:relative absolute left-0 top-0 z-10">
          <Image
            src={"./herobackground.svg"}
            width={500}
            height={500}
            alt={"Heroimage"}
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
