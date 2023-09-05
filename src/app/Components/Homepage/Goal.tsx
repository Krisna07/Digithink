import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

const Goal = () => {
  return (
    <div className="laptop:w-[1000px] grid tablet:grid-cols-2 gap-[20px] px-[20px]">
      <div className="text-xl text-left grid place-items-center">
        <h2 className="w-full font-bold text-[32px] leading-[130%] inline">
          We Go In{" "}
          <span className="text-transparent textStroke">DIRECTION</span> That
          Defines Your{" "}
          <span className=" text-transparent textStroke">GOAL</span>
        </h2>
      </div>
      <div className="grid gap-[20px] text-left ">
        <p className="font-semibold text-sm">
          Explore our innovative solutions that help you navigate in the
          ever-changing digital landscape.
        </p>

        <Link href={"/about"}>
          {" "}
          <Button
            label="Learn more"
            className={""}
            variant={"primary"}
            size="sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default Goal;
