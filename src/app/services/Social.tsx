"use client";
import React, { useState } from "react";

const Social = ({ social, classn }: any) => {
  const [des, setDes] = useState<string>(social.shortDes);
  return (
    <div
      key={social.name}
      // onMouseOver={() => setDes(social.des)}
      // onMouseLeave={() => setDes(social.shortDes)}
      className="w-full h-full  relative after:w-[60%] after:h-[60%] after:bg-yellow-600 after:absolute after:-top-2 after:-left-2 after:z-[10] "
    >
      <div className="flex flex-col gap-4 items-center relative   box-border shadow-sm bg-white text-black p-4  transition-all hover:scale-[1.05] z-20">
        <div
          className={`${classn} w-full flex items-center justify-between text-[20px] font-semibold`}
        >
          {social.name}{" "}
          <div className="text-[32px] text-yellow-900">{social.icon}</div>
        </div>
        <div>{des}</div>
      </div>
    </div>
  );
};

export default Social;
