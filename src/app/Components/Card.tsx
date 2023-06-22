import React from "react";

import Button from "./Button";

interface CardProps {
  cardTitle: string;
  cardDes: string;
  cardIcon: any;
  btntext: string;
}

const Card = ({ cardTitle, cardDes, cardIcon, btntext }: CardProps) => {
  return (
    <div className="grid place-items-left gap-4 p-4 bg-gray-300 rounded-lg">
      <div className="flex items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="font-bold">{cardTitle}</h2>
          <p>{cardDes}</p>
        </div>
        <div className="text-[80px]">{cardIcon ? cardIcon : ""}</div>
      </div>
      <Button
        variant={"default"}
        size="default"
        label={btntext}
        className={undefined}
      />
    </div>
  );
};

export default Card;
