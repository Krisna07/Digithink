import React from "react";

const Blogpage = ({ blog }:any) => {
  return (
    <div className="w-full h-[100vh] fixed top-0 grid place-items-center bg-white py-20 overflow-auto z-20">
      <div className="laptop:w-[1000px] bg-gradient-to-r from-white to-gray-100 py-8 px-4 grid gap-8 rounded-lg">
        <div>
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <div className="flex items-center font-[500] text-sm">
            <div className="flex items-center">
              {blog.creator.map((creator, index) => (
                <div
                  key={index}
                  style={{ left: `-${index * 10}px` }}
                  className={`h-10 w-10 bg-gradient-to-t from-red-400 to-indigo-300 rounded-full relative shadow-[0_0_4px_0_white] border-px hover:left-0 border-white`}
                ></div>
              ))}
            </div>
            <div className="leading-[120%]">
              {blog.creator.map((creator, index) => (
                <div key={index}>{creator}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] bg-gradient-to-r from-green-500 to-green-600"></div>
        <div className="grid gap-4">
          <div>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>{blog.blogBody.introduction}</p>
          </div>
          {blog.blogBody.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
          <div>
            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>{blog.blogBody.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
