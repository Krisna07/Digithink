import React from "react";

const Customers = () => {
  return (
    <div className="w-full grid place-items-left p-4 gap-4">
      <h2 className=" text-2xl font-bold text-left">
        Customers satisfaction is our{" "}
        <span className="text-accent-color hover:underline">Goal</span>
      </h2>
      <div className="w-40 h-40 bg-gray-300 p-4 rounded hover:scale-[1.01] hover:shadow-lg"></div>
    </div>
  );
};

export default Customers;
