"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Components/Button";

const page = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="grid place-items-center box-border  gap-8">
      <div className="w-full grid place-items-center relative p-8">
        <div className="laptop:w-[1000px] flex items-center justify-center">
          <div className="w-full grid gap-4 ">
            <h2 className="text-lg  font-semibold">Contcat</h2>
            <p className="tablet:w-4/6">
              The light drops deep as does my teddy. I never nuzzle, 'cause to
              nuzzle is the mate of ready. Beyond the walls of bananas, life is
              defined. I think of buildings when I'm in a Devon state of mind.
            </p>
            <Button
              className={""}
              label="Contact"
              size={"sm"}
              variant={"default"}
              icon={undefined}
            />
          </div>
          <Image
            src={"/contact.png"}
            width={500}
            height={500}
            alt=""
            className=" tablet:grid hidden place-items-center"
          />
        </div>
      </div>
      <form
        className="laptop:w-[1000px]  w-full grid item-center text-center gap-4 bg-gray-100 p-4 rounded shadow"
        onSubmit={handleSubmit}
        method="POST">
        <h2 className=" text-lg font-semibold">Contact Us</h2>
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
