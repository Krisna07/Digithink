"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Link from "next/link";

interface Navtypes {
  navItems: [
    {
      navItems: String;
    },
  ];
}

const Navbar = () => {
  const navItems = [
    {
      navTitle: "Home",
      link: "./",
    },
    {
      navTitle: "Services",
      link: "./services",
    },
    {
      navTitle: "Projects",
      link: "./projects",
    },
    {
      navTitle: "About us",
      link: "./about",
    },
    {
      navTitle: "Contact us",
      link: "./contact",
    },
  ];

  const [isopen, setopen] = useState<boolean>();

  return (
    <div className="w-full text-black fixed z-[90] bg-gray-300  shadow-lg px-4 py-[10px] bg-secondary-Btn grid place-items-center">
      <div className="hidden  desktop:w-[1024px] tablet:w-full tablet:flex items-center justify-between">
        <div className="">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
        </div>
        <div className="flex w-fit text-black gap-2">
          {navItems.map((menu) => (
            <div
              key={menu.navTitle}
              className="p-2 hover:text-gray-500 cursor-default text-sm font-semibold">
              <Link href={menu.link}> {menu.navTitle}</Link>
            </div>
          ))}
        </div>
        <div>
          <Button
            variant={"default"}
            label={"Sign up"}
            color={"primary"}
            className={undefined}
            size="sm"
          />
        </div>
      </div>
      <div className="w-full tablet:hidden px-4 box-border grid gap-4 overflow-hidden">
        <div className="w-full box-border flex items-center justify-between">
          <div className="w-[50px] h-[50px] bg-hover-Text rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
          <div
            className="w-fit"
            onClick={() => setopen(!isopen)}>
            {!isopen ? (
              <Menu
                color="black"
                size={"40px"}
              />
            ) : (
              <X
                color="black"
                size={"40px"}
              />
            )}
          </div>
        </div>
        <div
          className={`w-full gap-2 overflow-hidden ${
            isopen ? "grid" : "hidden"
          }`}>
          {navItems.map((menu) => (
            <div
              key={menu.navTitle}
              className="w-full p-2 hover:text-background-color hover:bg-accent-color cursor-default font-semibold"
              onClick={() => (isopen ? setopen(!isopen) : "")}>
              <Link href={menu.link}> {menu.navTitle}</Link>
            </div>
          ))}
          <Button
            label="Signin"
            variant={"default"}
            size="sm"
            className={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
