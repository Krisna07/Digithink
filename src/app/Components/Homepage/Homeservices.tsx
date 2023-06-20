import React from "react";
import Button from "../Button";
import { AppWindow, Cpu } from "lucide-react";
const Homeservices = () => {
  const services = [
    {
      title: "Digital Marketing",
      des: "Yes we do the digital marketing for your business. We can handle the soical media profiles and help you reach out the potential costumers",
      icon: <Cpu />,
    },
    {
      title: "Ad Management",
      des: "Our team is expertise in ad managment. We can help you with all platforms that can host your ad campagin. Google, meta , titok , etc you name it.",
      icon: <AppWindow />,
    },
    {
      title: "Web Developement",
      des: "We can built the website and application for your app from scratch. From code to web builder we do it all",
      icon: <Cpu />,
    },
    {
      title: "Web customisations",
      des: "We do customisations for the web sites and applications. We can help improve SEO and perfomance of your website. We also providethe service for web upgrade and migration. ",
      icon: <Cpu />,
    },
  ];
  return (
    <div className="w-full grid place-items-center py-8 px-4 bg-text-color text-background-color">
      <div className="md:w-[60%] grid gap-4">
        <h4 className="font-semibold ">our services</h4>
        <h2 className="text-3xl font-bold py-2">We will help you all way in</h2>
        <p className="md:w-4/6">
          We bet you the most possible Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum id aliquam, beatae consequatur adipisci nihil
          assumenda voluptates recusandae reprehenderit. Accusamus.
        </p>
        <div className="services w-full flex items-center justify-between  wrap">
          <div className="grid md:grid-cols-2 lg:grid-col-4  gap-4 ">
            {services.map((service) => (
              <div
                className="bg-accent-color h-full rounded p-2 text-background-color flex flex-col justify-between gap-2   "
                key={service.title}
              >
                <div className="w-full flex justify-between items-center text-xl font-semibold ">
                  <h2>{service.title}</h2>
                  <span className="text-[40px]">{service.icon}</span>
                </div>
                <p>{service.des}</p>
                <Button btnText="More" isIcon={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeservices;
