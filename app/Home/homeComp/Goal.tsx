import React from "react";

import Button from "../../Components/Button";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Goal = () => {
  return (
    <div className="laptop:w-fit p-4 rounded  grid  gap-[20px] px-[20px] bg-gradient-to-r from-white/[.5] to-blue-100/[.5]  place-items-center">
      <div className="w-full h-fit grid tablet:place-items-center  ">
        <div className="text-xl text-left tablet:text-center  grid place-items-center">
          <h2 className="w-full font-bold text-[32px] leading-[130%] inline">
            We Go In{" "}
            <span className="text-transparent textStroke">DIRECTION</span> That
            Defines Your{" "}
            <span className=" text-transparent textStroke">GOAL</span>
          </h2>
        </div>
        <div className="grid gap-[20px] place-items-center  ">
          <p className="font-semibold text-left tablet:text-center text-sm max-w-[50ch]">
            Explore our innovative solutions that help you navigate in the
            ever-changing digital landscape.
          </p>

          <Link
            href={"/about"}
            className="w-full grid tablet:place-items-center">
            {" "}
            <Button
              label="Learn more"
              className={""}
              variant={"primary"}
              size="sm"
              rightIcon={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goal;
