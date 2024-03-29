"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Teamspitch = () => {
  const teamspitchObj = [
    {
      name: "Michale",
      title: "Listen to What Michale Says",
      des: "I've had the privilege of working at our company, where creativity knows no bounds. The company's policies foster an environment of freedom and innovation. Being part of this team is a joy, and we take digital innovation seriously. I feel like I'm soaring to new heights in this field.",
      image: "/teamsVids/image1.jpg",
    },
    {
      name: "Ronald",
      title: "Never Too Late to Start",
      des: "Writing is my passion, and I'm dedicated to perfecting my craft. I find solace in the world of words, where creativity flows freely. Every piece I write is a journey, and I invite you to embark on it with me.",
      image: "/teamsVids/image2.jpg",
    },
    {
      name: "Mitchel",
      title: "Building Tomorrow's World, Today",
      des: "Technology is not just about gadgets; it's about shaping the future. As a software engineer, I thrive on the cutting edge of innovation, turning ideas into reality through code. Whether it's developing scalable solutions or embracing emerging technologies, I'm driven by the passion to create a better tomorrow. Join me as we revolutionize the digital landscape and pave the way for a brighter future.",
      image: "/teamsVids/image3.jpg",
    },
  ];

  const menuRefs: any = [useRef(null), useRef(null), useRef(null)];

  const setWidth = (ref: any) => {
    return ref.current ? ref.current.getBoundingClientRect().width + "px" : "0";
  };

  const [btmbdr, setBtmbdr] = useState(0);
  const [left, setLeft] = useState(0);
  const [barW, setBarW] = useState(setWidth(menuRefs[0]));
  const [index, setIndex] = useState(0);

  const handleOptionClick = (index: number) => {
    const width = setWidth(menuRefs[index]);

    const position = menuRefs[index].current
      ? menuRefs[index].current.offsetLeft
      : "";
    setBarW(width);
    setBtmbdr(position);
    setLeft(index * 100);
    setIndex(index);
  };

  useEffect(() => {
    setBarW(setWidth(menuRefs[0]));
  }, []);

  return (
    <div className="tablet:flex grid items-start gap-4 p-4 box-border">
      <div className="box-border tablet:max-w-[600px] rounded overflow-hidden shadow-[0_0_2px_0_gray]">
        <div
          style={{ left: `-${left}%` }}
          className="  w-full h-[300px] bg-gray-200 relative flex transition-all"
        >
          {teamspitchObj.map((image) => (
            <Image
              src={image.image}
              alt={"ímage"}
              key={image.image}
              width={"800"}
              height={"100"}
              className={`min-w-full h-auto object-cover transition-opacity duration-[1s] ${
                teamspitchObj.indexOf(image) * 100 === left
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="tablet:max-w-[600px] desktop:w-[600px] grid gap-8 overflow-hidden box-border">
        <div className="flex gap-4 relative border-b-[1px] box-border">
          {teamspitchObj.map((name) => (
            <span
              key={name.name}
              className={` py-2 p-4 hover:opacity-1 ${
                index == teamspitchObj.indexOf(name)
                  ? "opacity-1"
                  : "opacity-60"
              } transition-all font-semibold`}
              onClick={() => handleOptionClick(teamspitchObj.indexOf(name))}
              ref={menuRefs[teamspitchObj.indexOf(name)]}
            >
              {name.name}
            </span>
          ))}

          <span
            style={{ width: barW, left: btmbdr }}
            className="w-auto h-px bg-gray-800 absolute bottom-0 transition-all ]"
          ></span>
        </div>
        <div
          style={{ left: `-${left}%` }}
          className="w-full flex  relative transition-all box-border"
        >
          {teamspitchObj.map((pitch) => (
            <div className="min-w-[100%] grid gap-2" key={pitch.title}>
              <h2 className="font-bold text-xl">{pitch.title}</h2>
              <p>{pitch.des}</p>
              <span className="flex gap-2 h-fit place-items-center w-auto text-sm font-semibold bg-gray-200 hover:bg-gray-400 w-fit px-2 py-1 rounded-lg">
                Read more <FaChevronRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teamspitch;
