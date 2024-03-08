import React from "react";
import Herosection from "../homeComp/Herosection";
import Digital from "../homeComp/Digital";

const HomePage = () => {
  return (
    <div className="grid place-items-center">
      <div className="w-full h-screen grid place-items-center">
        <div className="fixed z-[10] ">
          <Herosection />
        </div>
      </div>
      <div className="w-full bg-gray-100 z-[20]">
        <Digital />
      </div>
    </div>
  );
};

export default HomePage;
