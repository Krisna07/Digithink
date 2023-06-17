"use client";

import { ChevronRight } from "lucide";
import { ArrowRight, ChevronRightIcon, ChevronsRight } from "lucide-react";
import React, { useState } from "react";

interface btnProps {
  btnText: string;
  isIcon: boolean;
  icon: any;
  variant: String;
}

const Button = ({ btnText, isIcon, icon, variant }: btnProps) => {
  const primaryBtn =
    "w-fit px-4 py-2 bg-primary-Btn rounded-[8px] border-none hover:text-hover-Text outline-none flex items-center  gap-2";
  const secondaryBtn =
    "w-fit px-4 py-2 bg-secondary-Btn rounded-[8px] border-none text-hover-text hover:text-text-color outline-none";

  const [isHover, setHover] = useState<boolean>(false);

  return (
    <button
      className={`${variant ? variant : primaryBtn}`}
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
    >
      {btnText}
      {icon ? icon : ""}
      {isIcon ? (
        <div>{!isHover ? <ChevronRightIcon /> : <ArrowRight />}</div>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
