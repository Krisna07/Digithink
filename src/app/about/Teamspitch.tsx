"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Teamspitch = () => {
  const teamspitchObj = [
    {
      name: "Michale",
      title: "Listen what Michale say",
      des: "lorem is a kind sota thing. I can move with the policy of the comapony so freely that I respire. Digi is a think to not think less. I guess I am a rocket man",
      color: "bg-red-200",
    },
    {
      name: "Ronaldo",
      title: "Never too late to Start",
      des: "I start to think, and then I sink Into the paper like I was ink When I’m writing, I’m trapped in between the lines I escape when I finish the rhyme.",
      color: "bg-indigo-200",
    },
    {
      name: "Messi",
      title:
        "Have you ever seen a man whose toe blown off, I mean like a flower",
      des: "One aspect that makes rap music so special is that one song alone can include a multitude of messages by the artist. In comparison to traditional types of music, a rapper is able ",
      color: "",
    },
  ];
  const menuRefs = [useRef(null), useRef(null), useRef(null)];

  const setWidth = (ref: any) => {
    return ref.current ? ref.current.getBoundingClientRect().width + "px" : "0";
  };

  const [btmbdr, setBtmbdr] = useState(0);
  const [left, setLeft] = useState(0);
  const [barW, setBarW] = useState(setWidth(menuRefs[0]));

  const handleOptionClick = (index: number) => {
    const width = setWidth(menuRefs[index]);

    const position = menuRefs[index].current.offsetLeft;
    setBarW(width);
    setBtmbdr(position);
    setLeft(index * 100);
  };

  useEffect(() => {
    setBarW(setWidth(menuRefs[0]));
  }, []);

  return (
    <div className="tablet:flex grid items-start gap-4 p-4 box-border">
      <div className="box-border rounded overflow-hidden shadow-[0_0_2px_0_gray]">
        <div className="tablet:w-[600px] tablet:h-[400px] w-full h-[300px] bg-gray-200"></div>
      </div>
      <div className="tablet:w-[600px] grid gap-8 overflow-hidden">
        <div className="flex gap-4 relative border-b-[1px]">
          <span
            className="opacity-80 py-2 p-4 hover:opacity-100 transition-all font-semibold"
            onClick={() => handleOptionClick(0)}
            ref={menuRefs[0]}>
            Ronaldo
          </span>
          <span
            className="opacity-80 py-2 p-4 hover:opacity-100 transition-all font-semibold"
            onClick={() => handleOptionClick(1)}
            ref={menuRefs[1]}>
            Messi
          </span>
          <span
            className="opacity-80 py-2 p-4 hover:opacity-100 transition-all font-semibold"
            onClick={() => handleOptionClick(2)}
            ref={menuRefs[2]}>
            Michale
          </span>
          <span
            style={{ width: barW, left: btmbdr }}
            className="w-auto h-px bg-gray-800 absolute bottom-0 transition-all ]"></span>
        </div>
        <div
          style={{ left: `-${left}%` }}
          className="w-full flex  relative transition-all">
          {teamspitchObj.map((pitch) => (
            <div className="min-w-[100%] grid gap-4">
              <h2 className="font-bold text-xl">{pitch.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                nesciunt expedita quis corrupti libero sint doloremque earum
                totam deleniti a?
              </p>
              <span className="flex gap-4 place-items-center w-auto text-sm">
                Book a meeting <FaChevronRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teamspitch;
