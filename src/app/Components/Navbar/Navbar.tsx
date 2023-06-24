"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";

interface Navtypes {
  navItems: [
    {
      navItems: String;
    }
  ];
}

const Navbar = () => {
  const navItems = [
    {
      navTitle: "Home",
    },
    {
      navTitle: "Services",
    },
    {
      navTitle: "Projects",
    },
    {
      navTitle: "About us",
    },
    {
      navTitle: "Contact us",
    },
  ];

  const [isopen, setopen] = useState<boolean>();

  return (
    <div className="w-full fixed z-[90] bg-white  shadow-lg px-4 py-2 bg-secondary-Btn grid place-items-center">
      <div className="hidden  desktop:w-[1024px] tablet:w-full tablet:flex items-center justify-between">
        <div className="">
          <div className="w-[50px] h-[50px] bg-hover-Text rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
        </div>
        <div className="flex w-fit gap-2">
          {navItems.map((menu) => (
            <div
              key={menu.navTitle}
              className="p-2 hover:text-hover-Text cursor-default font-semibold"
            >
              {menu.navTitle}
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
          <div className="w-fit" onClick={() => setopen(!isopen)}>
            {!isopen ? (
              <Menu color="black" size={"40px"} />
            ) : (
              <X color="black" size={"40px"} />
            )}
          </div>
        </div>
        <div
          className={`w-full gap-2 overflow-hidden ${
            isopen ? "grid" : "hidden"
          }`}
        >
          {navItems.map((menu) => (
            <div
              key={menu.navTitle}
              className="w-full p-2 hover:text-background-color hover:bg-accent-color cursor-default font-semibold"
              onClick={() => (isopen ? setopen(!isopen) : "")}
            >
              {menu.navTitle}
            </div>
          ))}
          <Button label="Signin" variant={"default"} size="sm" className={""} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
