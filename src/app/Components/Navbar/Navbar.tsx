import React from "react";
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
  return (
    <div className="w-full shadow-lg px-4 py-2 bg-secondary-Btn grid place-items-center">
      <div className="w-[80%] flex items-center justify-between">
        <div className="">
          <div className="w-[50px] h-[50px] bg-hover-Text rounded-full flex items-center justify-center">
            D
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
          <Button btnText="Signin" isIcon={true} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
