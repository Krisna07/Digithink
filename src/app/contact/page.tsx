"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  //   const inputs = e.target.elements;
  //   const data = {};

  //   for (let i = 0; i < inputs.length; i++) {
  //     if (inputs[i].name) {
  //       data[inputs[i].name] = inputs[i].value;
  //     }
  //   }

  //   fetch(FORM_ENDPOINT, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Form response was not ok");
  //       }

  //       setSubmitted(true);
  //     })
  //     .catch((err) => {
  //       // Submit the form manually
  //       e.target.submit();
  //     });
  // };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="grid place-items-center box-border bg-gradient-to-b from-gray-500 to-white gap-8">
      <div className="w-full bg-gradient-to-t from-red-500 to-red-300 grid place-items-center relative p-8">
        <div className="grid gap-4 laptop:w-[1000px]">
          <h2 className="text-lg  font-semibold">Contcat</h2>
          <p className="w-4/6">
            The light drops deep as does my teddy. I never nuzzle, 'cause to
            nuzzle is the mate of ready. Beyond the walls of bananas, life is
            defined. I think of buildings when I'm in a Devon state of mind.
          </p>
        </div>
        {/* <div className="w-[500px] h-[500px] bg-red-500 top-0 animate-pulse rounded-full"></div> */}

        <Image
          src={"/contact.png"}
          width={500}
          height={500}
          alt=""
          className="absoulte right-0  rounded-full bg-red-500"
        />
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
