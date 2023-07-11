import React from "react";
import {
  FaArrowRight,
  FaCalendarWeek,
  FaChevronRight,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";

const Builts = () => {
  return (
    <div className="grid place-items-center gap-8 py-8 p-4 laptop:w-[1000px]">
      <div className="grid place-items-center gap-4 ">
        <h2 className="text-2xl font-semibold">What do we offer?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          commodi.
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
      <div className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 ">
        {[...Array(6)].map((card, x) => (
          <div
            key={x}
            className="text-sm bg border-[1px] border-gray-200  rounded ">
            <div className="p-4 grid gap-[8px]">
              <div className="font-bold">Username something</div>
              <div className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem,
                ipsum dolor Lorem ipsum dolor sit amet.
              </div>
              <div className="flex place-items-center gap-2 font-bold">
                <span className="w-4 h-4 bg-gradient-to-r from-pink-300 to-indigo-200 rounded-full"></span>
                username
              </div>
            </div>
            <div className="grid p-4 gap-4 bg-gray-200/75">
              <span className="flex place-items-center gap-2">
                somethin-user <FaUserAlt />
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
