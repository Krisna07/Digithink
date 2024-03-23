"use client";
import { Menu, Parentheses, X } from "lucide-react";
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
      link: "/",
    },
    // {
    //   navTitle: "Services",
    //   link: "/services",
    // },
    {
      navTitle: "Projects",
      link: "/projects",
    },
    {
      navTitle: "About us",
      link: "/about",
    },
    // {
    //   navTitle: "Contact us",
    //   link: "/contact",
    // },
    {
      navTitle: "Blog",
      link: "/blog",
    },
  ];

  const [isopen, setopen] = useState<boolean>();
  const menuRefs: any = navItems.map(() => useRef(null));
  const setWidth = (ref: any) => {
    const width = ref?.current?.getBoundingClientRect().width || 0;
    return width;
  };
  const router = usePathname();

  const [btmbdr, setBtmbdr] = useState(0);
  const [path, setPath] = useState<string>(`./`);
  const [active, setActive] = useState<number>(0);

  const [barW, setBarW] = useState(setWidth(menuRefs[0]));

  const handleOptionClick = async (index: number) => {
    const width = setWidth(menuRefs[index]);
    setPath(`${router}`);
    const position = (await menuRefs[index])
      ? menuRefs[index].current.offsetLeft
      : 0;
    setBarW(width);
    setBtmbdr(position);
    const thisNav = navItems.find((item) => `.${item.link}` === path);
    const activeIndex = thisNav ? navItems.indexOf(thisNav) : -1;
    setActive(index ? index : 0);
  };

  useEffect(() =>
    navItems.forEach((item) => {
      if (item.link === router) {
        const activeThis = navItems.indexOf(item);
        handleOptionClick(activeThis);
      }
    }),
  );

  return (
    <div className="w-full min-h-fit transition-all text-black sticky z-[90] bg-gray-100/75  shadow-lg  px-4 py-[4px] bg-secondary-Btn grid place-items-center">
      {/* <div className="absolute h-full bg-gray-100 w-full z-[80] "></div> */}
      <div className="hidden relative z-[90] desktop:w-[1024px] tablet:w-full tablet:flex items-center justify-between">
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
            <Link
              href={menu.link}
              key={menu.navTitle}>
              <div
                key={menu.navTitle}
                onClick={() => handleOptionClick(navItems.indexOf(menu))}
                ref={menuRefs[navItems.indexOf(menu)]}
                className={`p-2 hover:text-gray-500 cursor-default text-sm font-semibold transition-all  ${
                  navItems.indexOf(menu) == active ? "text-red-800" : ""
                } `}>
                {menu.navTitle}
              </div>
            </Link>
          ))}

          <div
            style={{ width: `${barW}px`, left: `${btmbdr}px` }}
            className={`h-[2px] absolute bottom-0 bg-gray-800 transition-all  `}></div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-fit tablet:hidden relative- z-[90] px-4 box-border grid gap-4 overflow-hidden">
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
              <a href={menu.link}> {menu.navTitle}</a>
            </div>
          ))}
          <Button
            label="Contact"
            variant={"default"}
            size="sm"
            className={""}
            icon={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
