import Image from "next/image";
import React from "react";
import Button from "../Button";

const Digital = () => {
  return (
    <div className="w-full grid place-items-center py-8 px-4">
      <div className="md:w-[60%] gap-8 flex justify-between">
        <div className="grid gap-2 md:w-1/2 place-items-left ">
          <div>
            <h4 className="font-semibold text-hover-Text">Go Digital</h4>
            <h2 className="text-3xl font-bold py-2">
              A digital team for your business{" "}
            </h2>
            <p className="md:w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              porro hic velit vero! Placeat provident cumque iure impedit
              praesentium. Iure!
            </p>
          </div>

          <Button btnText="Contact us" isIcon={true} />
        </div>
        <div className=" grid place-items-center ">
          <div className="">
            <Image
              src="/logo.gif"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
