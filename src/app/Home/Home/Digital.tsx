"use client";

import React, { useEffect, useState } from "react";
import { ThreeDCardDemo } from "./Card";
import { FaChevronRight, FaInfo, FaNetworkWired } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import Image from "next/image";
import Button from "@/app/Components/Button";
interface digiComp {
  title: string;
  heading: string;
  des: string;
  icon: IconType;
  image: string;
}

const DigiItems = (items: digiComp) => {
  return;
  <div></div>;
};
const Digital = () => {
  const AgencySpecials = [
    {
      title: "Projects",
      headings: "We handle the projects ",
      des: "",
      icon: "",
      image: "",
    },
    {},
  ];
  return (
    <div className="w-full grid place-items-center relative">
      <div className="w-full h-full absolute grid grid-cols-3 divide-x divide-black/25 divide-dashed border-x border-1 border-dashed border-black/25">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full grid  w-full gap-4 ">
        <div className="grid  overflow-y-auto">
          <div className="w-full  min-h-[600px]  grid md:grid-cols-[40%_60%]  place-items-center  leading-[120%] relative">
            <div className="grid gap-2 px-2">
              <h2 className="font-semibold flex items-center gap-2">
                <span className="text-sm p-1 bg-gray-400 rounded">
                  <FaInfo />
                </span>
                Business
              </h2>
              <h2 className="text-3xl font-bold leading-[100%]">
                A digital <span className="text-gray-600">team</span> <br />{" "}
                suitable for your <br />
                <span className="text-gray-600">business</span>
              </h2>
              <p className="text-sm max-w-[50ch]">
                We
                <span className="font-bold text-gray-800 px-1">value</span>
                the need and business of our client. We
                <span className="font-bold text-gray-600 px-1">focus</span>
                more on bringing the client and their customers together. <br />
              </p>
              <div className="w-fit flex gap-2  text-sm flex items-center gap-2 border-b">
                <span className="text-indigo-600 ">see details </span>
                about how we do things for business
              </div>
            </div>
            <div className="relative h-full w-full grid place-items-center">
              <Image
                src={"/Homepage/cafe.jpg"}
                width={500}
                height={500}
                alt="business"
                className="w-full rounded opacity-75 shadow-[0_0_4px_0_gray] hover:opacity-[1]"
              />
            </div>
          </div>
          <div className="w-full  min-h-[600px]  grid md:grid-cols-[40%_60%]  place-items-center  leading-[120%] relative">
            <div className="grid gap-2 px-2">
              <h2 className="font-semibold flex items-center gap-2">
                <span className="text-sm p-1 bg-gray-400 rounded">
                  <FaInfo />
                </span>
                Projects
              </h2>
              <h2 className="text-3xl font-bold leading-[100%]">
                We handle <span className="text-gray-600">projects</span> <br />
                with visible
                <br />
                <span className="text-gray-600">progress</span>
              </h2>
              <p className="text-sm max-w-[50ch]">
                We respect the ideas and suggestions from our customers.
                Tracking of the progress of the user never been easy. Provide
                your reviews and insights on projects.
              </p>
              <div className="w-fit flex gap-2  text-sm flex items-center gap-2 border-b">
                <span className="text-indigo-600 ">browse </span>
                our user based application
              </div>
            </div>
            <div className="relative h-full w-full grid place-items-center">
              <Image
                src={"/Homepage/cafe.jpg"}
                width={500}
                height={500}
                alt="business"
                className="w-full rounded opacity-75 shadow-[0_0_4px_0_gray]"
              />
            </div>
          </div>
        </div>

        <div className="sticky right-0 w-full">
          <div>
            <div className="sticky"> {/* <ThreeDCardDemo />{" "} */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
