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
      title: 'Eco-Friendly App',
      description: 'Developed a mobile app that encourages eco-friendly habits and tracks carbon footprint.',
      username: 'ecoguru123',
      userIconColor: 'from-green-400 to-teal-300',
      additionalInfo: 'Mobile App',
    },
    {
      title: 'Online Learning Platform',
      description: 'Built a web platform for online courses with interactive quizzes and video lectures.',
      username: 'learnitall',
      userIconColor: 'from-blue-400 to-indigo-300',
      additionalInfo: 'Web Development',
    },
    {
      title: 'Health and Fitness Tracker',
      description: 'Created a fitness tracking app that helps users monitor their workouts and nutrition.',
      username: 'fitfreak99',
      userIconColor: 'from-red-400 to-pink-300',
      additionalInfo: 'Mobile App',
    },
    {
      title: 'E-commerce Website',
      description: 'Designed and developed an e-commerce website for selling fashion and accessories.',
      username: 'shopaholic_shop',
      userIconColor: 'from-yellow-400 to-orange-300',
      additionalInfo: 'Web Development',
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'Developed a tool to analyze social media trends and track engagement metrics.',
      username: 'socialinsights',
      userIconColor: 'from-indigo-400 to-purple-300',
      additionalInfo: 'Data Analysis',
    },
    {
      title: 'Food Delivery App',
      description: 'Built a food delivery app with real-time tracking and multiple payment options.',
      username: 'foodie_deliveries',
      userIconColor: 'from-orange-400 to-red-300',
      additionalInfo: 'Mobile App',
    },
  ];
  
  return (
    <div className="grid place-items-center gap-8 py-8 p-4 laptop:w-[1000px]">
      <div className="grid place-items-center gap-4 ">
        <h2 className="text-2xl font-semibold">What do we offer?</h2>
        <p>
          We offer the best avialable solution for your business. 
        </p>
        <div className="flex gap-4">
          <span className="px-[8px] py-[4px] font-semibold hover:bg-gray-200 hover:text-black rounded-lg flex gap-2 items-center text-sm text-white bg-gray-600">
            View all our works
            <span>
              <FaChevronRight />
            </span>
          </span>
          <span className="px-[8px] py-[4px] font-semibold rounded-lg flex gap-2 items-center text-sm bg-gray-200">
            Official Releases <FaCalendarWeek />
          </span>
        </div>
      </div>
      <div className="grid gap-4 h-full tablet:grid-cols-2 laptop:grid-cols-3 ">
        {projects.map((project, x) => (
          <div
            key={x}
            className="text-sm bg border-[1px] border-gray-200  rounded ">
            <div className="p-4 grid gap-[8px]">
              <div className="font-bold">{project.title}</div>
              <div className="">
                {project.description}
              </div>
              <div className="flex place-items-center gap-2 font-bold">
                <span className="w-4 h-4 bg-gradient-to-r from-pink-300 to-indigo-200 rounded-full"></span>
                {project.additionalInfo}
              </div>
            </div>
            <div className="grid p-4 gap-4 bg-gray-200/75">
              <span className="flex place-items-center gap-2">
                {project.username} <FaUserAlt />
              </span>
              <span className="font-semibold flex w-fit gap-2 py-[4px] px-[8px] hover:bg-gray-200 shadow-[0_0_2px_0_gray] rounded-lg place-items-center">
                Lunch
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
