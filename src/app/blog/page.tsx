import React from "react";
import {
  FaArrowCircleUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="desktop:w-[1200px] py-8 px-4 box-border tablet:flex grid gap-12">
        <div className="tablet:w-1/2 h-[400px] rounded-lg py-16 px-20 bg-gray-800 grid place-items-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 rounded-[30%] grid place-items-center relative text-xl text-sky-300">
            <FaArrowUp className="rotate-[45deg] absolute top-[30%] right-[30%]" />
            <FaArrowLeft className="rotate-[45deg] absolute top-[30%] left-[30%]" />
            <FaArrowDown className="absolute bottom-[30%]" />
          </div>
        </div>
        <div className="tablet:w-1/2 flex flex-col gap-4 ">
          <div className="flex gap-4 items-center text-sm text-gray-600 leading-[130%]">
            <span>13 july 2023</span>
            <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
            <span>20 min read</span>
          </div>
          <h2 className="text-lg font-semibold leading-[130%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            error.
          </h2>
          <p className="text-gray-600 leading-[130%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea
            sequi, necessitatibus rerum reprehenderit natus voluptatibus esse
            asperiores atque amet.
          </p>
          <div className="grid gap-[10px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold"> contributor name</h2>
                <p className="text-[12px]">contributor pos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold"> contributor name</h2>
                <p className="text-[12px]">contributor pos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
