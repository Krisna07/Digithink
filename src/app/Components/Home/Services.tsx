import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      heading: "Responsive Design",
      description:
        "We ensure your website looks great on all devices—desktops, tablets, and smartphones.",
    },
    {
      heading: "User Experience (UX)",
      description:
        "We focus on intuitive navigation, clear calls-to-action, and engaging layouts.",
    },
    {
      heading: "Content Management Systems (CMS)",
      description:
        "Need to update your content frequently? We’ve got you covered with user-friendly CMS platforms.",
    },
    {
      heading: "E-Commerce Integration",
      description:
        "If you’re selling products online, we’ll set up secure payment gateways and product catalogs.",
    },
    {
      heading: "SEO Optimization",
      description:
        "We build websites with search engines in mind, so you can climb those rankings.",
    },
    {
      heading: "Digital Marketing",
      description:
        "In today’s competitive landscape, digital marketing is essential. Our experts will help you craft a strategy tailored to your business goals.",
    },
  ];

  return (
    <section className="w-full min-h-screen grid place-items-center py-10 bg-gray-100">
      <div className=" md:container lg:w-[1200px] mx-auto px-4 grid gap-8">
        <h2 className="text-3xl font-bold text-center ">
          Website Design and Development
        </h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white grid gap-4 p-4 rounded-lg shadow-md relative hover:bg-gray-200 ">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-lg font-semibold ">{service.heading}</h3>
                <div className="relative w-fit h-fit">
                  <div className=" relative p-2 bg-gray-200 top-0 right-0 rounded-full hover:-top-1 hover:-right-1 z-10 hover:rotate-[-45deg] transition-all">
                    <FaArrowRight />
                  </div>
                  <div className="absolute min-w-full min-h-full  top-0 right-0  bg-yellow-400 rounded-full z-[1]"></div>
                </div>
              </div>

              <p className="w-fit text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
