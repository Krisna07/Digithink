import React from "react";

import { FaCode, FaDigitalOcean } from "react-icons/fa";
import { BiMedal, BiShareAlt, BiWallet } from "react-icons/bi";

import { TfiBrush } from "react-icons/tfi";
import { useState, useRef, useEffect } from "react";

import Card from "../Card";
import Button from "../Button";
const Homeservices = () => {
  const services = [
    {
      title: "Strategy",
      des: "Yes we do the digital marketing for your business. We can handle the soical media profiles and help you reach out the potential costumers",
      icon: <FaDigitalOcean />,
    },
    {
      title: "Branding",
      des: "Our team is expertise in ad managment. We can help you with all platforms that can host your ad campagin. Google, meta , titok , etc you name it.",
      icon: <BiMedal />,
    },
    {
      title: "Web Developement",
      des: "We can built the website and application for your app from scratch. From code to web builder we do it all",
      icon: <FaCode />,
    },
    {
      title: "UI/UX Design",
      des: "We do customisations for the web sites and applications. We can help improve SEO and perfomance of your website. We also providethe service for web upgrade and migration. ",
      icon: <TfiBrush />,
    },
    {
      title: "Social Media",
      des: "We do customisations for the web sites and applications. We can help improve SEO and perfomance of your website. We also providethe service for web upgrade and migration. ",
      icon: <BiShareAlt />,
    },
    {
      title: "Ecommerce",
      des: "We do customisations for the web sites and applications. We can help improve SEO and perfomance of your website. We also providethe service for web upgrade and migration. ",
      icon: <BiWallet />,
    },
  ];

  return (
    <div className="laptop:w-[1000px] grid gap-4">
      <h4 className="w-full text-left font-semibold ">our services</h4>
      <h2 className="text-3xl text-left font-bold py-2">
        We will help you all way in
      </h2>
      <p className="laptop:w-3/6 text-left">
        We are a web agency specializing in creating stunning and functional
        websites that captivate your audience and drive results.
      </p>
      <div className="services w-full flex items-center justify-between  wrap">
        <div
          className={`grid tablet:grid-cols-2 laptop:grid-cols-3 p-4 relative transition-all  overflow-hidden 
           gap-[20px]
            `}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className={`w-fit h-full relative transition-all ease-in-out bg-white rounded-lg hover:shadow-[0_0_4px_0_gray]`}
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
          size="lg"
          className={undefined}
        />
      </div>
    </div>
  );
};

export default Homeservices;
