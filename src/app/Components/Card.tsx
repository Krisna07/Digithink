import React from "react";

import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";

interface CardProps {
  cardTitle: string;
  cardDes: string;
  cardIcon: any;
}

const Card = ({ cardTitle, cardDes, cardIcon }: CardProps) => {
  return (
    <div className="grid place-items-center h-full gap-4 p-4 ">
      <div className="text-[32px] p-4 text-black rounded-full shadow-[0_0_4px_0_gray] text-white">
        {cardIcon ? cardIcon : ""}
      </div>
      <div className="text-center">
        <h2 className="font-bold text-lg">{cardTitle}</h2>
        <p>{cardDes}</p>
      </div>
      <Button
        label="More"
        variant={"primary"}
        size={"sm"}
        icon={<FaChevronDown />}
        className={""}
      />
    </div>
  );
};

export default Card;
