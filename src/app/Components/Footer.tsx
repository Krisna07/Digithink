import { LocateIcon, LocateOffIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiDirections } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiDirectionAlt } from "react-icons/tfi";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full p-8 grid place-items-center text-white bg-slate-800">
      <div className="w-[1080px] flex  justify-between">
        <div className="flex justify-start">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            {" "}
            <Image
              src="/logo.gif"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-lg">Sydney</h3>
          <div className="grid gap-2 font-semibold">
            <span>xyz@email.com</span>
            <span>+9893000201</span>
            <span>Unit 1, Xyz Street</span>
            <span>Suburb, State 0000</span>
          </div>
          <span className="flex text-lg hover:bg-black px-4 py-2 text-white items-center gap-4 underline text-black fonr-semibold">
            View on map <LocateIcon />
          </span>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-lg">Melbounrne</h3>
          <div className="grid gap-2 font-semibold">
            <span>xyz@email.com</span>
            <span>+9893000201</span>
            <span>Unit 1, Xyz Street</span>
            <span>Suburb, State 0000</span>
          </div>
          <span className="flex text-lg hover:bg-black px-4 py-2 text-white items-center gap-4 underline text-black fonr-semibold">
            View on map <LocateIcon />
          </span>
        </div>
        <div className="grid place-items-left uppercase">
          <span className="uppercase">
            Want to be the smartest in our office ?
          </span>
          <span>
            <Button label="Apply now" variant={"default"} size="sm" />
          </span>
          <span className="uppercase underline font-semibold">
            Sign up for our newsletters
          </span>
          <div className="grid gap-2">
            <span>Follow us</span>
            <div className="flex text-[24px] gap-8">
              <FaInstagram /> <FaFacebook /> <FaLinkedin /> <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
