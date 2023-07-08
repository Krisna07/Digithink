import React from "react";

import {
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaDesktop,
  FaDigitalOcean,
  FaPaintBrush,
  FaShareAlt,
} from "react-icons/fa";
import { BiMedal, BiShareAlt, BiWallet } from "react-icons/bi";

import { TfiBrush } from "react-icons/tfi";
import { useState, useRef, useEffect } from "react";

import Card from "../Card";
import Button from "../Button";
const Homeservices = () => {
  const services = [
    {
      title: "Strategy",
      des: "We develop comprehensive social media strategies tailored to your business goals. Our expert team will help you navigate the ever-changing landscape of social media platforms to maximize your online presence and reach your target audience.",
      icon: <FaChartLine />,
    },
    {
      title: "Web Design",
      des: "Our talented designers transform your ideas into captivating and user-friendly website interfaces. We focus on creating visually appealing designs that enhance the overall user experience and leave a lasting impression on your visitors.",
      icon: <FaDesktop />,
    },
    {
      title: "Web Development",
      des: "Turn your vision into a fully functional website with our professional web development services. From building your first website to developing complex web applications, our skilled developers ensure clean and efficient code that brings your ideas to life.",
      icon: <FaCode />,
    },
    {
      title: "UI/UX Design",
      des: "Our UI/UX design experts specialize in crafting intuitive and seamless user interfaces. By understanding your target audience and their needs, we create visually appealing designs with a focus on usability, resulting in a delightful user experience.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Social Media Management",
      des: "Let us handle your social media presence while you focus on growing your business. We develop tailored social media strategies, curate engaging content, and manage your social media accounts to increase brand awareness and drive meaningful engagement.",
      icon: <FaShareAlt />,
    },
    {
      title: "Digital Marketing",
      des: "Our digital marketing services encompass a wide range of strategies to promote your business effectively. From search engine optimization (SEO) to pay-per-click (PPC) advertising and email marketing, we employ the right tactics to boost your online visibility and attract valuable leads.",
      icon: <FaBullhorn />,
    },
  ];

  return (
    <div className="laptop:w-[1000px] grid gap-4">
      <h4 className="w-full text-left font-semibold ">our services</h4>
      <h2 className="text-3xl text-left font-bold py-2">
        We have all the{" "}
        <span className="text-transparent textStroke ">Contents</span> &nbsp;{" "}
        <br />
        covered for the{" "}
        <span className="text-transparent textStroke">Internet</span>
      </h2>
      <p className="laptop:w-3/6 text-left">
        We are a web agency specializing in creating stunning and functional
        websites that captivate your audience and drive results.
      </p>
      <div className="services w-full flex items-center justify-between  wrap">
        <div
          className={`grid tablet:grid-cols-2 laptop:grid-cols-2 py-4 px-1 relative transition-all  overflow-hidden 
           gap-[20px]
            `}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className={`w-fit h-full relative transition-all ease-in-out bg-[#FFF] rounded-[20px] shadow-[0_0_3px_0px_gray] hover:shadow-[0_0_4px_0_gray]`}
            >
              <Card
                cardTitle={service.title}
                cardDes={service.des}
                cardIcon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full grid place-items-center">
        <Button
          label="Learn more"
          variant={"primary"}
          size="sm"
          className={undefined}
        />
      </div>
    </div>
  );
};

export default Homeservices;
