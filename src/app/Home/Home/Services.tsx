import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ThreeDCardDemo } from "./Card";

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
        "We focus on intuitive navigation, clear calls-to-action, and engaging layouts. Interactive designs",
    },
    {
      heading: " CMS",
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
        "In today’s competitive digital marketing is essential. We  strategy  to business goals.",
    },
  ];

  return (
    <section className="w-full h-full grid place-items-center  relative  ">
      <div className="w-full h-full absolute grid grid-cols-3 divide-x divide-black/25 divide-dashed border-x border-1 border-dashed border-black/25">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full h-fit px-4 grid gap-8 relative">
        <h2 className="text-3xl font-bold text-left ">
          Website Design and Development
        </h2>
        <div className="w-full grid h-fit md:grid-cols-2 lg:grid-cols-3  gap-8">
          {servicesData.map((service, index) => (
            <ThreeDCardDemo title={service.heading} des={service.description} />
            // <div
            //   key={index}
            //   className="bg-white grid gap-4 p-4 rounded-lg shadow-md relative hover:bg-gray-200 ">
            //   <div className="w-full flex items-center justify-between">
            //     <h3 className="text-lg font-semibold ">{service.heading}</h3>

            //     </div>
            //   </div>

            //   <p className="w-fit text-gray-700">{service.description}</p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
