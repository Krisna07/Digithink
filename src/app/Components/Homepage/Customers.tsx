"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";

const Customers = () => {
  const cardRef: any = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          return setVisible(true);
        } else {
          setVisible(false);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  const customerList = [
    {
      id: 1,
      name: "App and Co.Inc.",
      description:
        "Innovators of cutting-edge technology, including the iconic iPhone, iPad, and Mac.",
    },
    {
      id: 2,
      name: "Acme Corporation",
      description: "A leading provider of widgets and gadgets.",
    },
    {
      id: 3,
      name: " Innovators Ltd.",
      description: "Pioneers in cutting-edge technology solutions.",
    },
    {
      id: 4,
      name: "Global  Inc.",
      description: "Your trusted partner in worldwide logistics and shipping.",
    },
  ];

  return (
    <div className="laptop:w-[1000px] grid gap-4 p-8 skew-y-[2deg]">
      <div>
        <h2 className="text-2xl font-bold">
          Customers satisfaction is our{" "}
          <span className="hover:underline">Goal</span>
        </h2>
        <p>
          We have carried out projects that push us to the limit. New challenges
          are what we thrive on.
        </p>
      </div>
      <div
        className="customers w-full"
        ref={cardRef}>
        <div className="w-full grid laptop:grid-cols-4 tablet:grid-cols-2 gap-[20px]">
          {customerList.map((item, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(${visible ? "0" : -(100 * index)}%)`,
              }}
              className="grid place-items-left text-black text-left bg-gray-200 overflow-hidden rounded-lg hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 hover:shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)]">
              <div className="w-fit ">
                <h2 className="text-xl font-bold px-4 py-2 bg-gray-300 ">
                  {item.name}
                </h2>
                <p className="text-sm px-4 py-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
