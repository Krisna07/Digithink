"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Button from "../Button";
// import { FaPhoneAlt } from "react-icons/fa";
// import Link from "next/link";

const Digital = () => {
  const [position, setPosition] = useState<number>();
  const [direction, setDirection] = useState<number>();
  // const directions = [1, 2, 3, 4];
  useEffect(() => {
    let min = 1;
    let max = 4;
    const RandomPos = Math.floor(Math.random() * 100);
    const RandomDir = Math.floor(Math.random() * (max - min) + min);
    setInterval(() => {
      setDirection(RandomDir);
      setPosition(RandomPos);
    }, 2000);
  });

  return (
    <div className="w-full grid place-items-center relative h-screen ">
      {/* <div
        className={`w-full h-full absolute bg-gray-200 transition-all top-[${position}px]`}
      >
        <div className="w-[200px] h-[300px] shadow bg-white p-4  ">
          <div className="w-full h-full  border-2 border-blue-300 hover:scale-[1.02] transition-all"></div>
        </div>
      </div> */}
      <div className="md:w-[1000px] grid gap-2 text-left place-items-center tablet:text-left  tablet:place-items-start relative z-20  p-4 rounded ">
        <div className="grid gap-2 leading-[120%]">
          {/* <h4 className="font-semibold text-hover-Text">Go Digital</h4> */}
          <h2 className="text-3xl font-bold ">
            A digital team for your business{" "}
          </h2>
          <p className="text-sm max-w-[50ch] ">
            We
            <span className="underline italic font-bold text-blue-800 px-1">
              value
            </span>
            the need and business of oir client. We
            <span className="underline italic font-bold text-red-800 px-1">
              focus
            </span>
            more on bringing the client and their customers together. <br />
          </p>
          <div className="w-fit grid gap-2 grid-cols-4"></div>
        </div>
        {/* <div className="w-[200px] h-[150px] bg-gray-200 rounded-full"></div>
        <div className="w-[200px] h-[150px] bg-gray-200 rounded-full"></div>
        <div className="w-[200px] h-[150px] bg-gray-200 rounded-full"></div>
        <div className="w-[200px] h-[150px] bg-gray-200 rounded-full"></div>
        <div className="w-[200px] h-[150px] bg-gray-200 rounded-full"></div> */}

        {/* <Link href={"/contact"}>
          {" "}
          <Button
            label="Contact us"
            variant={"default"}
            size={"sm"}
            className="h-fit"
            icon={<FaPhoneAlt />}
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Digital;
