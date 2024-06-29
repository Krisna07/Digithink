"use client";
import React, { useState } from "react";

const Social = ({ social, classn }: any) => {
  const [des, setDes] = useState<string>(social.shortDes);
  return (
    <div
      key={social.name}
      // onMouseOver={() => setDes(social.des)}
      // onMouseLeave={() => setDes(social.shortDes)}
      className="w-full h-full flex flex-col gap-4 items-center   shadow-sm bg-white text-black p-4 rounded-lg transition-all hover:scale-[1.05]"
    >
      <div
        className={`${classn} w-full flex items-center justify-between text-[20px] font-semibold`}
      >
        {social.name} <div className="text-[32px]">{social.icon}</div>
      </div>
      <div>{des}</div>
    </div>
  );
};

export default Social;
