import React from "react";
import Button from "../Button";

const Customers = () => {
  return (
    <div className="w-full grid place-items-center p-4 py-16 gap-4 bg-black text-white skew-y-[-2deg]">
      <div className="md:w-[60%] grid gap-4 skew-y-[2deg]">
        <h2 className=" text-2xl font-bold text-left">
          Customers satisfaction is our{" "}
          <span className=" hover:underline">Goal</span>
        </h2>
        <p>
          We have carried out the project that keep oushing us to the limit. New
          challenges are our type.
        </p>
        <div className="customers w-full">
          <div className="w-full grid md:grid-cols-4  gap-[20px]">
            {[...Array(4)].map((items, x) => (
              <div
                key={x}
                className="grid place-items-left text-black  gap-8 bg-gray-200 p-4 rounded-lg hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all hover:shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)]"
              >
                <div className="w-fit">
                  {" "}
                  <h2 className="text-xl font-bold">Name Of the business</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum placeat id in dolorum veritatis eligendi nesciunt ab
                    unde ullam fugit.
                  </p>
                </div>
                <Button btnText="View shop" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
