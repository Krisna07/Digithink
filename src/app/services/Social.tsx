"use client";
import React, { useState } from "react";

const Social = ({ social, classn }: any) => {
  const [des, setDes] = useState<string>(social.shortDes);
  return (
    <div
      key={social.name}
      onMouseOver={() => setDes(social.des)}
      onMouseLeave={() => setDes(social.shortDes)}
      className="w-full flex flex-col items-center justify-between h-fit  shadow-sm bg-white text-black p-4 rounded-lg transition-all hover:scale-[1.05]"
    >
      <div className={`${classn} flex justify-between`}>
        {social.name} <div>{social.icon}</div>
      </div>
      <div>{des}</div>
    </div>
  );
};

export default Social;
