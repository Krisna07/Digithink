import Image from "next/image";
import React from "react";
import Button from "../Button";

const Herosection = () => {
  return (
    <div className="laptop:w-[1000px] grid place-items-center tablet:grid-cols-2 relative">
      <div className="w-fit text-white text-left relative z-20  flex flex-col gap-4  box-border">
        <h2 className="font-semi-bold">DigiThink Media</h2>
        <h1 className=" text-3xl w-fit  font-bold  leading-[120%] text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[#6D6D6D]">
          We Help You Take A Step In Digitial
        </h1>
        <p>
          Our team with the excellent work ae alwasyes on tje merhis theris
          iskabchr so that we shoud ne ayl least me a so sometime payraise of
          course they both told him they cannot inscreadte the paysue some
          people salary has cut{" "}
        </p>
        <Button
          variant={"primary"}
          label={"Learn More"}
          size={"sm"}
          className="h-fit"
          icon={""}
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
  );
};

export default Herosection;
