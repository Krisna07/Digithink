"use client";
import React, { useEffect, useRef, useState } from "react";

const Teams = () => {
  const leftRef = useRef(null);

  window.addEventListener("resize", handleResize);
  const getLeft = (item: any) => {
    return item.current ? item.current.getBoundingClientRect().left : 0;
  };
  const [left, setLeft] = useState(`${getLeft(leftRef)}px`);
  console.log(left);
  async function handleResize() {
    setLeft(await getLeft(leftRef));
  }
  useEffect(() => {
    return setLeft(getLeft(leftRef));
  }, []);
  console.log(left);
  return (
    <div className="w-full bg-gray-200 py-8 grid place-items-center overflow-hidden">
      <div
        className="laptop:w-[1000px] px-4 grid gap-4"
        ref={leftRef}>
        <h2 className="font-semibold text-sm text-gray-600">Our Stories</h2>
        <h2 className="text-lg font-semibold">
          Tales{" "}
          <span className="text-gray-600">
            of innovative minds creating wonders
          </span>{" "}
        </h2>
        <p className="laptop:w-[800px] text-sm">
          From groundbreaking inventions to artistic brilliance, be inspired by
          the limitless power of human creativity. Join us on this journey of
          resilience, passion, and ingenuity, shaping a future where imagination
          knows no bounds.
        </p>
      </div>
      <div className="relative  w-fit px-4 grid gap-4 ">
        <div className=" relative overflow-x-scroll grid items-center justifuy-center">
          <div
            style={{ left: left }}
            className={`relative flex items-center gap-4 py-4`}>
            {[...Array(20)].map((team, x) => (
              <div
                className="min-w-[230px] bg-white rounded-lg grid gap-4"
                key={x}>
                <div className="flex items-center gap-4 py-2 px-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-200 to-indigo-600 rounded-full"></div>
                  <div className="grid">
                    <span className="font-semibold">name of </span>
                    <span className="text-sm">position</span>
                  </div>
                </div>
                <div className="text-sm bg-slate-100 px-4 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  architecto nemo impedit dolorum officiis sapiente voluptate
                  reiciendis ratione. Illo, corrupti.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
