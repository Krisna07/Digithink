import React from "react";
import {
  FaArrowCircleUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import Blogpage from "./component/Blogpage";

const page = () => {
  const blog = [
    {
      title: "Marking for business",
      des: "A business can be more with correct marketing. Level up the business and economy",
      date: "12 July 2022",
      readTime: "6 min",
      creator: ["John Doe", "Emily Smith"],
    },
    {
      title: "The Power of Social Media Marketing",
      des: "Harnessing the potential of social media platforms to reach a wider audience and drive business growth.",
      date: "25 September 2022",
      readTime: "8 min",
      creator: ["Sarah Johnson", "David Wilson", "Linda Thompson"],
    },
    {
      title: "SEO Strategies for Higher Search Engine Rankings",
      des: "Effective techniques and best practices to optimize your website for search engines and improve visibility.",
      date: "5 October 2022",
      readTime: "10 min",
      creator: ["Michael Davis"],
    },
    {
      title: "The Art of Content Creation",
      des: "Insights into creating compelling and engaging content that resonates with your target audience.",
      date: "15 November 2022",
      readTime: "7 min",
      creator: ["Sophia Anderson", "Daniel Clark"],
    },
    {
      title: "The Importance of Branding in Business",
      des: "Exploring how effective branding can differentiate your business and build customer loyalty.",
      date: "8 January 2023",
      readTime: "9 min",
      creator: ["Olivia Johnson", "Christopher Lee"],
    },
    {
      title: "Email Marketing Best Practices",
      des: "Key strategies and tips for running successful email marketing campaigns to engage your audience.",
      date: "21 February 2023",
      readTime: "6 min",
      creator: ["Ava Thompson"],
    },
    {
      title: "The Rise of Influencer Marketing",
      des: "Understanding the power of influencer marketing and its impact on consumer behavior and brand promotion.",
      date: "10 March 2023",
      readTime: "8 min",
      creator: ["William Anderson", "Sophie Wilson"],
    },
    {
      title: "Effective Strategies for Lead Generation",
      des: "Proven techniques to attract and convert leads into customers for sustainable business growth.",
      date: "5 April 2023",
      readTime: "7 min",
      creator: ["Ethan Davis"],
    },
    {
      title: "The Future of E-commerce",
      des: "Exploring emerging trends and advancements shaping the future of online retail and e-commerce industry.",
      date: "18 May 2023",
      readTime: "10 min",
      creator: ["Mia Thompson", "Samuel Johnson", "Emily Clark"],
    },
    {
      title: "Mastering Social Media Advertising",
      des: "Insights into creating impactful social media ad campaigns to reach your target audience effectively.",
      date: "9 June 2023",
      readTime: "8 min",
      creator: ["Noah Wilson", "Abigail Anderson"],
    },
  ];

  return (
    <div className="w-full grid place-items-center relative ">
      <div className="desktop:w-[1200px] py-8 px-4 box-border tablet:flex grid gap-12">
        <div className="tablet:w-1/2 h-[400px] rounded-lg py-16 px-20 bg-gray-800 grid place-items-center relative">
          <hr className="w-[40%] h-[0.5px] bg-white rotate-[90deg] absolute" />
          <hr className="w-[80%] h-[0.5px] bg-white absolute" />
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 animate-pulse to-green-800 rounded-[30%] grid place-items-center relative text-xl text-sky-300">
            <FaArrowUp className="rotate-[45deg] absolute top-[30%] right-[30%]" />
            <FaArrowLeft className="rotate-[45deg] absolute top-[30%] left-[30%]" />
            <FaArrowDown className="absolute bottom-[30%]" />
          </div>
        </div>
        <div className="tablet:w-1/2 flex flex-col gap-4 ">
          <div className="flex gap-4 items-center text-sm text-gray-600 leading-[130%]">
            <span>13 july 2023</span>
            <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
            <span>20 min read</span>
          </div>
          <h2 className="text-lg font-semibold leading-[130%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            error.
          </h2>
          <p className="text-gray-600 leading-[130%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea
            sequi, necessitatibus rerum reprehenderit natus voluptatibus esse
            asperiores atque amet.
          </p>
          <div className="grid gap-[10px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold"> contributor name</h2>
                <p className="text-[12px]">contributor pos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-sm font-semibold"> contributor name</h2>
                <p className="text-[12px]">contributor pos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center border-t border-px border-gray-300">
        <div className="desktop:w-[1200px] py-8 px-4 box-border grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3  ">
          {blog.map((blog) => (
            <div
              key={blog.title}
              className="grid gap-2">
              <div className="w-full h-[300px] rounded overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_4px_0_gray]"></div>
              <h2 className="font-semibold">{blog.title}</h2>
              <p className="text-sm">{blog.des}</p>
              <div className="flex gap-4 items-center text-[10px] font-semibold text-gray-600 leading-[130%]">
                <span>{blog.date}</span>
                <div className="w-2 h-2 rounded-full bg-gray-600/50"></div>
                <span>{blog.readTime} read</span>
              </div>
              <div className="flex items-center">
                {blog.creator.map((creator, index) => (
                  <div
                    key={index}
                    style={{ left: `-${index * 10}px` }}
                    className={`h-10 w-10 bg-gradient-to-t from-red-400 to-indigo-300 rounded-full relative shadow-[0_0_4px_0_white] border-px hover:left-0 border-white`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Blogpage />
    </div>
  );
};

export default page;
