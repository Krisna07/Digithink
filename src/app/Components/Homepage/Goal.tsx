import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";

const Goal = () => {
  return (
    <div className="w-full grid place-items-center py-[40px]">
      <div className="laptop:w-[1000px] grid tablet:grid-cols-2 gap-[20px] px-[20px]">
        <div className="text-xl flex">
          <div className="font-bold text-[32px]">
            We Go In{" "}
            <span className="textStroke text-transparent ">DIRECTION</span> That
            Defines Your
            <span className="textStroke text-transparent flex items-center gap-[10px]">
              GOAL <span className="text-black "> {<FaArrowRight />} </span>
            </span>
          </div>
        </div>
        <div className="grid gap-[20px] ">
          <p className="font-semibold">
            Some of the fundamental and the direction we follow are always. You
            got all our 100% attention for the task. Take the lorem and give the
            epsum.
          </p>
          <Button
            label="Learn more"
            className={""}
            variant={"default"}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Goal;
