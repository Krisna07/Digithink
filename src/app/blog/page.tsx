'use client'
import React, {useState, useEffect} from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";
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
        setCounter(prevCounter => prevCounter + 1); // Update counter for the next iteration
      } else {
        clearInterval(interval); // Stop the interval when all elements have been processed
      }
    }, 10000);
  
    // Clean up the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [blogItem, counter])
 


  console.log(index)

  return (
    <div className="w-full  fixed grid place-items-center relative ">
      <div className="desktop:w-[1200px] py-8 px-4 box-border tablet:flex grid gap-12">
      <img src={blog[index].image} alt={blog[index].title} className="h-[400px] max-w-[600px]  transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"  />
        <div className="tablet:w-1/2 flex flex-col gap-4 ">
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
            {blog[index].creator.map((creator, index)=>
            <div className="flex items-center gap-4" key={index}>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold">{creator}</h2>
                <p className="text-[12px]">contributor pos</p>
              </div>
            </div>)}
            
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center border-t border-px border-gray-300">
        <div className="desktop:w-[1200px] py-8 px-4 box-border grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3  ">
          {blogItem.map((blog: any) => (
            <Link
              key={blog.title}
              href={`/blog/${blog.title}`}>
              <div className="grid gap-2">
                <div className="w-full h-[200px] rounded overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_4px_0_gray]">
                {blog.image? <img src={blog.image} alt={blog.title} className="min-h-full max-w-[100%]  transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"  /> : ''}


                </div>
                <h2 className="font-semibold">{blog.title}</h2>
                <p className="text-sm">{blog.description}</p>
                <div className="flex gap-4 items-center text-[10px] font-semibold text-gray-600 leading-[130%]">
                  <span>{blog.date}</span>
                  <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
                  <span>{blog.readTime} read</span>
                </div>
                <div className="flex items-center">
                  {blog.creator.map((creator: string, index: number) => (
                    <div
                      key={index}
                      style={{ left: `-${index * 10}px` }}
                      className={`h-10 w-10 bg-gradient-to-t from-red-400 to-indigo-300 rounded-full relative shadow-[0_0_4px_0_white] border-px hover:left-0 border-white`}></div>
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
