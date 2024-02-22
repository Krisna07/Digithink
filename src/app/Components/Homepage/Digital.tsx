import Image from "next/image";
import React from "react";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Digital = () => {
  return (
    <div className="tablet:w-full tablet:w-[500px] gap-8 grid place-items-center relative">
      <div className="grid gap-2 text-left tablet:text-left  tablet:place-items-start relative z-20 shadow-[0_0_2px_0_gray] p-4 rounded ">
        <div className="grid gap-2 leading-[120%]">
          <h4 className="font-semibold text-hover-Text">Go Digital</h4>
          <h2 className="text-3xl font-bold ">
            A digital team for your business{" "}
          </h2>
          <p className="text-sm max-w-[50ch]">
            We value the need and business of oir client. We focus more on
            bringing the client and their customers together. <br />
            Your goal is our goal
          </p>
          <div className="w-fit grid gap-2 grid-cols-4"></div>
        </div>

        <Link href={"/contact"}>
          {" "}
          <Button
            label="Contact us"
            variant={"default"}
            size={"sm"}
            className="h-fit"
            icon={<FaPhoneAlt />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Digital;
