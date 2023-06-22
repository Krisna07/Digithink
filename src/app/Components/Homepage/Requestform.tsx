"use client";
import { Circle } from "lucide-react";
import React, { useState } from "react";
import Button from "../Button";

const Requestform = () => {
  const [select, setSelected] = useState<boolean>(false);
  const requestType = ["Design", "Web Developement"];
  return (
    <div className="w-full py-8 grid place-items-center gap-8 p-4">
      <div className="grid place-items-center gap-8">
        <h2>Submit your request here</h2>
        <div className="flex gap-4 md:w-[40%] flex-wrap items-center justify-center">
          {" "}
          {[...Array(8)].map((request, x) => (
            <div
              key={x}
              className="w-fit px-4 py-2 bg-gray-600 cursor-pointer rounded-full text-white flex gap-4 items-center justify-center text-[16px]"
              onClick={() => (select ? setSelected(true) : setSelected(false))}
            >
              Request name
              {!select ? (
                <Circle size={"16px"} />
              ) : (
                <Circle size={"16px"} color={"red"} />
              )}
            </div>
          ))}
        </div>
      </div>
      <form className="md:w-[40%] w-full  grid gap-4">
        <label htmlFor="email" className="grid gap-4 ">
          Username
          <input type="text" className="rounded-lg bg-gray-200 px-4 py-2" />
        </label>
        <label htmlFor="email" className="grid gap-4 ">
          Email
          <input type="text" className="rounded-lg bg-gray-200 px-4 py-2" />
        </label>{" "}
        <label htmlFor="email" className="grid gap-4 ">
          Message
          <textarea type="text" className="rounded-lg bg-gray-200 px-4 py-2" />
        </label>
      </form>
    </div>
  );
};

export default Requestform;
