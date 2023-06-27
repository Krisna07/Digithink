import React from "react";

import Button from "./Button";

interface CardProps {
  cardTitle: string;
  cardDes: string;
  cardIcon: any;
}

const Card = ({ cardTitle, cardDes, cardIcon }: CardProps) => {
  return (
    <div className="grid place-items-center h-full gap-4 p-4 ">
      <div className="text-[32px] p-4 bg-slate-400 rounded-full text-white">
        {cardIcon ? cardIcon : ""}
      </div>
      <div className="text-center">
        <h2 className="font-bold text-lg">{cardTitle}</h2>
        <p>{cardDes}</p>
      </div>
    </div>
  );
};

export default Card;
