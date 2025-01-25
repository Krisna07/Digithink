"use client";

import Image from "next/image";
import React from "react";
import { CardItem, CardBody, CardContainer } from "./3dcard";
import { FaArrowRight } from "react-icons/fa";

interface card {
  title?: string;
  des?: string;
}
export function ThreeDCardDemo({ title, des }: card) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-600 dark:border-white/[0.2] border-black/[0.1] w-auto h-fit rounded-xl border  p-4 ">
        <div className="w-full flex items-center justify-between">
          <CardItem
            translateZ="50"
            className="text-l font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <div className="relative w-fit h-fit">
            <div className=" relative p-2 bg-gray-200 top-0 right-0 rounded-full hover:-top-1 hover:-right-1 z-10 hover:rotate-[-45deg] transition-all">
              <FaArrowRight />
            </div>
            <div className="absolute min-w-full min-h-full  top-0 right-0  bg-yellow-400 rounded-full z-[1]"></div>
          </div>
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm w-[30ch] mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
