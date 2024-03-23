"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Button from "../Button";
// import { FaBookOpen } from "react-icons/fa";

const Herosection = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [word, setWord] = useState<boolean>(true);
  const [rotate, setRotate] = useState<boolean>(false);
  useEffect(() => {
    setInterval(() => setLoad(true), 200);
    if (!rotate) {
      setTimeout(() => setWord(!word), 50);
    } else {
      setWord(true);
    }
    setTimeout(() => setRotate(true), 1000);
  });

  return (
    <div className="w-fit h-screen  top-0  grid place-items-center  relative">
      <div className="text-[40px] md:text-[100px] relative h-fit">
        <div
          className={` leading-[90%] text-red-600 font-[800] relative transition-bottom duration-700 ${
            !load ? "-bottom-[100px]" : "bottom-0"
          }`}
        >
          We Are Digithink
        </div>
        <div className=" leading-[90%] text-yellow-600 font-[800] relative inline-flex gap-8">
          <div className="relative">
            <div
              className={`${word ? "opacity-1" : "opacity-0"} ${
                rotate ? "skew-x-[20deg]" : ""
              } transition-all  top-0 md:h-[50px] h-[20px] overflow-hidden  absolute `}
            >
              We Are Digithink
            </div>
            <div className={`opacity-0 transition-all bg-gray-200 relative  `}>
              We Are Digithink
            </div>
            <div
              className={`${word ? "opacity-1" : "opacity-0"} ${
                rotate ? "-skew-x-[20deg]" : ""
              } transition-all md:h-[50px] h-[20px]  md:-bottom-2 bottom-[-4px] overflow-hidden absolute `}
            >
              <div className="h-[100px] md:top-[-50px] top-[-20px] relative">
                {" "}
                We Are Digithink
              </div>
            </div>
          </div>
        </div>
        <div
          className={` leading-[90%] text-sky-600 font-[800] relative transition-all duration-700 ${
            !load ? "-top-[100px]" : "top-0"
          }`}
        >
          We Are Digithink
        </div>
      </div>

      {/* <div className="w-fit text-white text-left tablet:text-center relative z-20  flex flex-col items-left tablet:items-center justify-center gap-4  box-border">
        <h2 className="font-semi-bold tablet:block hidden">DigiThink Media</h2>
        <h1 className="    w-full  font-bold  leading-[120%] text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[#6D6D6D]">
          We Help You Take A Step In Digitial
        </h1>
        <p className="max-w-[80ch] tablet:block hidden">
          Our team consistently delivers excellent work and consistently
          performs at the highest level. There is no risk involved, so we should
          be due for a well-deserved pay raise. However, they both told him they
          cannot increase the pay, as some people's salaries have been reduced.
        </p>

        <Button
          variant={"ghost"}
          label={"Learn More"}
          size={"sm"}
          icon={<FaBookOpen />}
          className="h-fit"
        />
      </div> */}
      {/* <div className=" laptop:relative  h-full  absolute top-[0px] tablet:right-0 z-10">
        <Image
          src={"./herobackground.svg"}
          width={400}
          height={400}
          alt={"Heroimage"}
        />
      </div> */}
    </div>
  );
};

export default Herosection;
