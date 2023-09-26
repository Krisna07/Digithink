import { spawn } from "child_process";
import React from "react";
import {
  FaArrowRight,
  FaCalendarWeek,
  FaChevronRight,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";

const Builts = () => {
  const projects = [
    {
      title: "Corporate Website Redesign",
      description:
        "Revamped the online presence of a leading corporation with a modern website design and improved user experience.",
      username: "digitalpros",
      userIconColor: "from-green-400 to-teal-300",
      additionalInfo: "Web Design",
      buttonAction: "Visit Website",
      CEOName: ["John Smith"],
    },
    {
      title: "E-commerce Platform Development",
      description:
        "Designed and developed a custom e-commerce platform for a growing online store, boosting sales and customer engagement.",
      username: "webmasters",
      userIconColor: "from-blue-400 to-indigo-300",
      additionalInfo: "E-commerce Solutions",
      buttonAction: "Explore Store",
      CEOName: ["Emily Johnson"],
    },
    {
      title: "Mobile App Development",
      description:
        "Crafted a feature-rich mobile app for a startup, enhancing their digital presence and expanding their user base.",
      username: "appexperts",
      userIconColor: "from-red-400 to-pink-300",
      additionalInfo: "Mobile App Development",
      buttonAction: "Download App",
      CEOName: ["Michael Brown", "Sophia Davis"], // Joint CEOs
    },
    {
      title: "Content Management System Integration",
      description:
        "Integrated a robust CMS into a client's website, allowing for easy content updates and improved SEO capabilities.",
      username: "contentmasters",
      userIconColor: "from-yellow-400 to-orange-300",
      additionalInfo: "Web Development",
      buttonAction: "Manage Content",
      CEOName: ["David Wilson"],
    },
    {
      title: "Digital Marketing Campaign",
      description:
        "Launched a successful digital marketing campaign, increasing brand visibility and driving targeted traffic to the client's site.",
      username: "digitalmarketers",
      userIconColor: "from-indigo-400 to-purple-300",
      additionalInfo: "Digital Marketing",
      buttonAction: "View Results",
      CEOName: ["Sarah Anderson", "James Smith"], // Joint CEOs
    },
    {
      title: "UI/UX Design for SaaS",
      description:
        "Crafted an intuitive and user-friendly UI/UX design for a Software as a Service (SaaS) product, enhancing user retention.",
      username: "saasdesigners",
      userIconColor: "from-orange-400 to-red-300",
      additionalInfo: "UI/UX Design",
      buttonAction: "Try Demo",
      CEOName: ["Linda Miller"],
    },
  ];

  return (
    <div className="grid place-items-center gap-8 py-8 p-4 laptop:w-[1000px]">
      <div className="grid place-items-center gap-4 ">
        <h2 className="text-2xl font-semibold">What do we offer?</h2>
        <p>We offer the best avialable solution for your business.</p>
        <div className="flex gap-4">
          <span className="px-[8px] py-[4px] font-semibold hover:bg-gray-200 hover:text-black rounded-lg flex gap-2 items-center text-sm text-white bg-gray-600">
            View all our works
            <span>
              <FaChevronRight />
            </span>
          </span>
          <span className="px-[8px] py-[4px] font-semibold rounded-lg flex gap-2 items-center text-sm bg-gray-200">
            Official Announcements <FaCalendarWeek />
          </span>
        </div>
      </div>
      <div className="grid gap-4 h-full tablet:grid-cols-2 laptop:grid-cols-3 ">
        {projects.map((project, x) => (
          <div
            key={x}
            className="h-full grid text-sm bg border-[1px] border-gray-200  rounded ">
            <div className="p-4  relative overflow-hidden z-20">
              <div className="grid min-h-[150px] gap-[8px] relative z-20">
                <div className="font-bold">{project.title}</div>
                <div className="">{project.description}</div>
                <div className="flex place-items-center gap-2 font-bold">
                  <span className="w-4 h-4 bg-gradient-to-r from-pink-300 to-indigo-200 rounded-full"></span>
                  {project.additionalInfo}
                </div>
              </div>
              <div
                className={`w-full h-full absolute bg-gradient-to-tr ${project.userIconColor} scale-[2]  top-[70%]  -right-20 rotate-[-20deg] z-10`}></div>
            </div>
            <div className="grid p-4 gap-4 bg-gray-200/75">
              <span className="flex place-items-center gap-2">
                <div
                  className={
                    project.CEOName.length > 1
                      ? "grid text-[12px] leading-[120%]"
                      : ""
                  }>
                  {project.CEOName.map((ceo) => (
                    <span>{ceo}</span>
                  ))}
                </div>{" "}
                <FaUserAlt />
              </span>
              <span className="font-semibold flex w-fit gap-2 py-[4px] px-[8px] hover:bg-gray-200 shadow-[0_0_2px_0_gray] rounded-lg place-items-center">
                {project.buttonAction}
                <span className="rotate-[-45deg]">
                  <FaArrowRight />
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Builts;
