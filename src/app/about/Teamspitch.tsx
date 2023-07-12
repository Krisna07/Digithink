"use client";
import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";

const Teamspitch = () => {
  const teamspitchObj = [
    {
      name: "Michale",
    },
    {
      name: "Ronaldo",
    },
    {
      name: "Messi",
    },
  ];
  const menuRefs = [useRef(null), useRef(null), useRef(null)];
  const menuRef = useRef(undefined);
  //   useEffect(() => {
  //     const menupos = menuRef ? menuRef.current.getBoundingClientRect() : "";
  //     console.log(menupos);
  //   }, []);
  return (
    <div className="tablet:flex grid items-start gap-4 p-4 box-border">
      <div className=" box-border rounded overflow-hidden shadow-[0_0_2px_0_gray]">
        <div className="tablet:w-[600px] tablet:h-[400px] w-full h-[300px] bg-gray-200 "></div>
      </div>
      <div className="tablet:w-[600px] grid gap-8 overflow-hidden">
        <div className="flex gap-4 relative border-b-[1px] ">
          <span
            className="opacity-[0.8] w-fit py-2 p-4 hover:opacity-1 transition-all font-semibold"
            refs={menuRefs[0]}>
            Ronaldo
          </span>
          <span
            className="opacity-[0.8] w-fit py-2 p-4 hover:opacity-1 transition-all font-semibold"
            refs={menuRefs[1]}>
            Messi
          </span>
          <span
            className="opacity-[0.8] w-fit py-2 p-4 hover:opacity-1 transition-all font-semibold"
            refs={menuRefs[2]}>
            Michale
          </span>

          <span className="w-[100px] h-px bg-gray-800 absolute bottom-0 left-[0px]"></span>
        </div>
        <div className="w-full flex">
          <div className="grid gap-4">
            <h2 className="font-bold text-xl">
              something miniheading should be{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              nesciunt expedita quis corrupti libero sint doloremque earum totam
              deleniti a?
            </p>
            <span className="flex gap-4 place-items-center w-fit text-sm">
              book a meeting <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamspitch;
