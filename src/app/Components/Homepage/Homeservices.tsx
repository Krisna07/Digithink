import React from "react";
import { FaBullhorn, FaCode, FaDesktop, FaShareAlt } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { SiGoogleads } from "react-icons/si";

import Card from "../Card";
const Homeservices = () => {
  const services = [
    {
      title: "Social Meida",
      des: "We do social media for the business. We can help you handle all the pisisbllities if the socuak media.",
      icon: <BiLike color="black" />,
    },
    {
      title: "Web Design",
      des: "We take the ideas from our customers and desiged it to interactive intefaces.",
      icon: <FaDesktop color="black" />,
    },
    {
      title: "Web Development",
      des: "We can help you create your fist website which will bring your game online. The code we do is more ",
      icon: <FaCode color="black" />,
    },
    {
      title: "Ads",
      des: "We take the ideas from our customers and desiged it to interactive intefaces.",
      icon: <SiGoogleads color="black" />,
    },
    {
      title: "Strategy",
      des: "We do social media for the business. We can help you handle all the pisisbllities if the socuak medua",
      icon: <FaShareAlt color="black" />,
    },
    {
      title: "Digital Marketing",
      des: "We take the ideas from our customers and desiged it to interactive intefaces.",
      icon: <FaBullhorn color="black" />,
    },
  ];

  return (
    <div className="laptop:w-[1000px] grid gap-4 place-items-center">
      <h4 className=" text-left font-semibold ">our services</h4>
      <h2 className="text-3xl text-left font-bold py-2">
        We have all the{" "}
        <span className="text-transparent textStroke ">Contents</span> &nbsp;{" "}
        <br />
        covered for the{" "}
        <span className="text-transparent textStroke">Internet</span>
      </h2>
      <p className="laptop:w-4/6 text-center">
        We are a web agency specializing in creating stunning and functional
        websites that captivate your audience and drive results.
      </p>
      <div className="services w-full flex items-center justify-between  wrap">
        <div
          className={`grid tablet:grid-cols-2 laptop:grid-cols-2 py-4 px-1 relative transition-all  overflow-hidden 
           gap-[20px]
            `}>
          {services.map((service) => (
            <div
              key={service.title}
              className={`w-fit h-full relative transition-all ease-in-out bg-[#FFF] rounded-[20px] shadow-[0_0_3px_0px_gray] hover:shadow-[0_0_4px_0_gray]`}>
              <Card
                cardTitle={service.title}
                cardDes={service.des}
                cardIcon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeservices;
