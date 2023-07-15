"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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
  const menuRefs = navItems.map(() => useRef(null));
  const setWidth = (ref: any) => {
    return ref.current ? ref.current.getBoundingClientRect().width + "px" : "0";
  };

  const [btmbdr, setBtmbdr] = useState(0);
  const [path, setPath] = useState<string>("./");
  const [active, setActive] = useState<number>();

  const [barW, setBarW] = useState(setWidth(menuRefs[0]));

  const handleOptionClick = (index: number) => {
    const width = setWidth(menuRefs[index]);

    const position = menuRefs[index] ? menuRefs[index].current.offsetLeft : 0;
    setBarW(width);
    setBtmbdr(position);
  };
  const router = usePathname();

  useEffect(() => {
    const currentPath = `.${router}`;
    setPath(currentPath);
    const thisNav = navItems.find((item) => item.link === currentPath);
    const activeIndex = thisNav ? navItems.indexOf(thisNav) : -1;
    setActive(activeIndex);
    setBarW(setWidth(menuRefs[activeIndex]));
    const position = menuRefs[activeIndex].current.offsetLeft;
    setBtmbdr(position);
  }, [handleOptionClick]);

  useEffect(() => {});
  // useEffect(() => {
  //   console.log(active);
  // }, [active]);

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
        <div className="flex w-fit text-black gap-2 relative">
          {navItems.map((menu) => (
            <Link href={menu.link}>
              {" "}
              <div
                key={menu.navTitle}
                onClick={() => handleOptionClick(navItems.indexOf(menu))}
                ref={menuRefs[navItems.indexOf(menu)]}
                className={`p-2 hover:text-gray-500 cursor-default text-sm font-semibold  ${
                  navItems.indexOf(menu) == active ? "text-red-800" : ""
                } `}>
                {menu.navTitle}
              </div>
            </Link>
          ))}

          <div
            style={{ width: `${barW}`, left: `${btmbdr}px` }}
            className={`h-[2px] absolute bottom-0 bg-gray-800  `}></div>
        </div>
        <div>
          <Button
            variant={"default"}
            label={"Sign up"}
            color={"primary"}
            className={undefined}
            size="sm"
            icon={null}
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
