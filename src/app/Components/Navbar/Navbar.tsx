"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
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
    <div className="w-full shadow-lg px-4 py-2 bg-secondary-Btn grid place-items-center">
      <div className="hidden  w-[80%] md:flex items-center justify-between">
        <div className="">
          <div className="w-[50px] h-[50px] bg-hover-Text rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the author"
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
            btnText="Signin"
            isIcon={true}
            icon={undefined}
            variant={""}
          />
        </div>
      </div>
      <div className="w-full md:hidden px-4 box-border grid gap-4 overflow-hidden">
        <div className="w-full box-border flex items-center justify-between">
          <div className="w-[50px] h-[50px] bg-hover-Text rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the author"
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
          <Button
            btnText="Signin"
            isIcon={true}
            icon={undefined}
            variant={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
