"use client";
import { Menu, Parentheses, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";

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
    {
      navTitle: "Services",
      link: "/services",
    },
    {
      navTitle: "Projects",
      link: "/projects",
    },
    {
      navTitle: "About us",
      link: "/about",
    },
    {
      navTitle: "Blog",
      link: "/blog",
    },
    // {
    //   navTitle: "News",
    //   link: "/news",
    // },
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
  const [active, setActive] = useState<number>();
  const [barW, setBarW] = useState(setWidth(menuRefs[0]));

  const handleOptionClick = async (index: number) => {
    const width = setWidth(menuRefs[index]);
    setPath(`${router}`);
    const position = (await menuRefs[index])
      ? menuRefs[index].current.offsetLeft
      : 0;
    setBarW(width);
    setBtmbdr(position);
    const thisNav = navItems.find((item) => path.includes(`${item.link}`));
    const activeIndex = thisNav ? navItems.indexOf(thisNav) : -1;
    setActive(index ? index : 0);
  };

  useEffect(() => {
    navItems.forEach((item) => {
      if (path.includes(item.link)) {
        const activeThis = navItems.indexOf(item);
        handleOptionClick(activeThis);
      }
    });
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setopen(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="desktop:w-fit m-[0_auto] w-full tablet:rounded-xl mt-4 sticky top-0  tablet:px-4 min-h-fit transition-all ease-in-out text-black  z-[90] bg-gray-300  shadow-lg   py-[4px] bg-secondary-Btn grid  place-items-center ">
      <div className="hidden relative z-[90] desktop:w-[1024px] tablet:w-full tablet:flex items-center justify-between">
        <div className="w-full">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
        </div>
        <div className="flex w-fit text-black gap-2 relative mr-4">
          {navItems.map((menu) => (
            <Link href={menu.link} key={menu.navTitle}>
              <div
                key={menu.navTitle}
                onClick={() => handleOptionClick(navItems.indexOf(menu))}
                ref={menuRefs[navItems.indexOf(menu)]}
                className={`p-2 hover:text-gray-500 cursor-default text-sm font-semibold transition-all whitespace-nowrap  ${
                  navItems.indexOf(menu) == active ? "text-red-800" : ""
                } `}
              >
                {menu.navTitle}
              </div>
            </Link>
          ))}

          <div
            style={{ width: `${barW}px`, left: `${btmbdr}px` }}
            className={`h-[2px] absolute bottom-0 bg-gray-800 transition-all  `}
          ></div>
        </div>
        <Button
          label={"Contact Us"}
          variant={"default"}
          size={"sm"}
          icon={<FaPaperPlane />}
          className="whitespace-nowrap"
        />
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
              className={`w-full p-2 hover:text-emerald-900 hover:bg-accent-color cursor-default font-semibold  ${
                navItems.indexOf(menu) == active ? "text-red-800" : ""
              }`}
              onClick={() => (isopen ? setopen(!isopen) : "")}
            >
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
