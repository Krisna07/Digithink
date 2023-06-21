import React from "react";

const Customers = () => {
  return (
    <div className="w-full grid place-items-center p-4 py-8 gap-4 bg-hover-Text text-background-color">
      <div className="md:w-[60%] grid gap-4">
        <h2 className=" text-2xl font-bold text-left">
          Customers satisfaction is our{" "}
          <span className=" hover:underline">Goal</span>
        </h2>
      </div>
    </div>
  );
};

export default Customers;
