"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import blog from "./dummydata";

const page = () => {
  const blogItem = blog;

  const [index, setIndex] = useState<number>(0);
  const [counter, setCounter] = useState(0); // New state to keep track of iteration count

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < blogItem.length) {
        setIndex(counter);
        setCounter((prevCounter: number) => prevCounter + 1); // Update counter for the next iteration
      } else {
        clearInterval(interval); // Stop the interval when all elements have been processed
      }
    }, 10000);

    // Clean up the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [blogItem, counter]);

  console.log(index);

  return (
    <div className="w-full grid place-items-center relative box-border ">
      <div className="desktop:w-[1200px] w-full py-8   tablet:flex grid gap-8 box-border">
        <img
          src={`${blog[index].image}`}
          alt={blog[index].title}
          className="min-h-[400px] max-w-[600px] w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        />
        <div className="tablet:w-1/2 flex flex-col px-4 gap-4 ">
          <div className="flex gap-4 items-center text-sm text-gray-600 leading-[130%]">
            <span>{blog[index].date}</span>
            <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
            <span>{blog[index].readTime}</span>
          </div>
          <h2 className="text-lg font-semibold leading-[130%]">
            {blog[index].title}
          </h2>
          <p className="text-gray-600 leading-[130%]">
            {blog[index].description}
          </p>
          <div className="grid gap-[10px]">
            {blog[index].creator.map((creator, index) => (
              <div className="flex items-center gap-4" key={index}>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <h2 className="text-sm font-semibold">{creator}</h2>
                  <p className="text-[12px]">contributor pos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center border-t border-px border-gray-300">
        <div className="desktop:w-[1200px] py-8 px-4 box-border grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3  ">
          {blogItem.map((blog: any) => (
            <Link
              key={blog.title}
              href={`/blog/${blog.title}`}
              className="shadow-[0px_0px_4px_2px_#b0b0b0]  hover:shadow-[2px_2px_2px_2px_#b0b0b0] p-2 rounded-xl grid transition-all ease-in-out group "
            >
              <div className="grid gap-2">
                <div className="w-full h-[200px] rounded overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_4px_0_gray]">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="font-semibold">{blog.title}</h2>
                <p className="text-sm">{blog.description}</p>
                <div className="flex gap-4 items-center text-[10px] font-semibold text-gray-600 leading-[130%]">
                  <span>{blog.date}</span>
                  <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
                  <span className="bg-gradient-to-tr from-sky-400 to-blue-400  rounded-full px-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {blog.readTime} read
                  </span>
                </div>
                <div className="flex items-center">
                  {blog.creator.map((creator: string, index: number) => (
                    <div
                      key={index}
                      style={{ transform: `translateX(-${index * 10}px)` }}
                      className={`h-6 w-6 bg-gradient-to-tr from-red-400 via-pink-300 to-indigo-300 rounded-full relative translate-x-0 shadow-[0_0_4px_0_white] border-px  border-white `}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
