"use client";
import React from "react";
import { urlFor } from "../../../sanity/lib/image";

const Blogpage = ({ Blog }: any) => {
  // const relatableBlog = blog.filter((item) => item.title !== Blog.title);
  // console.log(Blog);

  return (
    <div className="w-full h-[100vh] fixed top-0 grid place-items-center bg-white py-20 overflow-auto z-20">
      {Blog && (
        <div className="laptop:w-[1000px] text-justify bg-gradient-to-r from-white to-gray-100 py-8 px-4 grid gap-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold">{Blog.title}</h2>
            <div className="flex items-center font-[500] text-sm gap-2">
              <div className="flex items-center gap-2">
                {Blog.creator.map((creator: string, index: number) => (
                  <div
                    key={index}
                    style={{ left: `-${index * 10}px` }}
                    className={`h-10 w-10 bg-gradient-to-t from-red-400 to-indigo-300 rounded-full relative shadow-[0_0_4px_0_white] border-px hover:left-0 border-white`}
                  ></div>
                ))}
              </div>
              <div className="leading-[120%]">
                {Blog.creator.map((creator: string, index: number) => (
                  <div key={index}>{creator}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full max-h-[500px] overflow-hidden bg-gradient-to-r from-green-500 to-green-600">
            {Blog.image ? (
              <img
                src={urlFor(Blog.image).url()}
                alt={Blog.title}
                className="object-cover w-full h-full"
              />
            ) : (
              ""
            )}
          </div>
          <div className="grid gap-4">
            <div>
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p>{Blog.blogBody.introduction}</p>
            </div>
            {Blog.blogBody.sections.map((section: any, index: number) => (
              <div key={index}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
            <div>
              <h2 className="text-xl font-semibold">Conclusion</h2>
              <p>{Blog.blogBody.conclusion}</p>
            </div>
          </div>
        </div>
      )}
      {/* <div className="flex">
        {relatableBlog &&
          relatableBlog.map((blog: any) => (
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
      </div> */}
    </div>
  );
};

export default Blogpage;
