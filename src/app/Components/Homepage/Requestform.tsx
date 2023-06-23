"use client";
import { Circle, XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import Button from "../Button";

function Requests(request: string) {
  const [reqselect, setReqSeelct] = useState<boolean>(false);
  return (
    <div
      key={request}
      className="w-fit px-4 py-2 font-semibold bg-gray-200 cursor-pointer rounded-full  flex gap-4 items-center justify-center text-[16px]"
      onClick={() => setReqSeelct(!reqselect)}
    >
      {request}
      {!reqselect ? (
        <Circle size={"16px"} />
      ) : (
        <XCircleIcon size={"16px"} color={"red"} />
      )}
    </div>
  );
}

const Requestform = () => {
  const requestType = [
    "Design",
    "Web Developement",
    "web services",
    "social media",
    "google ads",
    "marketing",
    "merchendising",
    "questions",
    "T/Cs",
    "privacy",
  ];
  return (
    <div className="w-full grid place-items-center">
      <div className="laptop:w-[1000px] py-8 grid place-items-center gap-8 p-4">
        <div className="grid place-items-center gap-8">
          <h2 className="text-3xl font-bold">Submit your request here</h2>
          <div className="flex gap-4  flex-wrap items-center justify-center">
            {requestType.map((request) => Requests(request))}
          </div>
        </div>
        <form className="laptop:w-[60%] tablet:w-[80%] w-full  grid gap-4">
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
            <textarea className="rounded-lg bg-gray-200 px-4 py-2" />
          </label>
          <Button label="Submit" variant={"primary"} size="sm" className={""} />
        </form>
      </div>
    </div>
  );
};

export default Requestform;
