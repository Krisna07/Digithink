"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Button from "../Components/Button";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaTiktok,
  FaSnapchatGhost,
  FaRedditAlien,
  FaArrowRight,
  FaKickstarter,
} from "react-icons/fa";
import Social from "./Social";

const page = () => {
  const sectionRefs = [
    useRef(null), // Ref for Herosection
    useRef(null), // Ref for Goal
    useRef(null), // Ref for Digital
    useRef(null), // Ref for Homeservices
    useRef(null), // Ref for Social
    useRef(null), // Ref for Customers
    useRef(null), // Ref for Requestform
  ];

  // const [sectionIntersecting, setSectionIntersecting] = useState(
  //   Array(sectionRefs.length).fill(false)
  // );

  // useEffect(() => {
  //   const observerOptions = {
  //     rootMargin: "-300px",
  //   };

  //   const sectionObservers = sectionRefs.map((ref, index) => {
  //     return new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //         setSectionIntersecting((prevState) => {
  //           const newState = [...prevState];
  //           newState[index] = true;
  //           return newState;
  //         });
  //         sectionObservers[index].unobserve(ref.current);
  //       }
  //     }, observerOptions);
  //   });

  //   sectionRefs.forEach((ref, index) =>
  //     sectionObservers[index].observe(ref.current)
  //   );

  //   return () => {
  //     sectionObservers.forEach((observer) => observer.disconnect());
  //   };
  // }, []);
  const sectioncss =
    "laptop:w-[1000px]  w-full flex items-center justify-center gap-8 p-4";
  const sectiongrid = "grid gap-4";
  const subheading = "text-lg font-semibold";
  const headings = "text-3xl font-semibold";

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      des: "We provide comprehensive Facebook marketing solutions, including managing ads, creating engaging posts, and offering personalized guidance to help businesses succeed on the platform.",
      shortDes:
        "Comprehensive Facebook marketing - ads, posts, guidance for success.",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      des: "Our Twitter marketing services encompass running targeted ad campaigns, managing Twitter profiles, and delivering one-on-one guidance to optimize engagement and growth on the platform.",
      shortDes:
        "Targeted ads, profile management, guidance for Twitter growth.",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      des: "We specialize in Instagram marketing, assisting clients in managing ads, creating compelling posts, and providing tailored strategies to increase brand visibility and engagement on the platform.",
      shortDes: "Instagram expertise - ads, posts, strategies for visibility.",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      des: "We specialize in LinkedIn marketing services. Our team manages LinkedIn advertising campaigns, creates engaging posts, and provides personalized guidance for leveraging the platform's professional network.",
      shortDes: "LinkedIn marketing - ads, posts, guidance for networking.",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      des: "We offer comprehensive YouTube marketing solutions to help businesses succeed on the world's largest video platform. From optimizing video content to running targeted ads, we help maximize visibility and engagement.",
      shortDes:
        "YouTube success - optimized content, targeted ads, enhanced visibility.",
    },
    {
      name: "Pinterest",
      icon: <FaPinterest />,
      des: "Our Pinterest experts assist clients in utilizing the visual discovery platform effectively. We optimize Pinterest profiles, curate engaging boards, and implement strategies to drive traffic and conversions.",
      shortDes:
        "Pinterest mastery - profile optimization, engaging boards, traffic-driving strategies.",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      des: "Our TikTok marketing services focus on creating viral content, managing influencer partnerships, and implementing strategies to increase brand awareness and engagement on the popular short-form video platform.",
      shortDes:
        "TikTok success - viral content, influencer management, brand engagement.",
    },
    {
      name: "Snapchat",
      icon: <FaSnapchatGhost />,
      des: "With our Snapchat marketing solutions, we help businesses reach a younger demographic through engaging ads, sponsored filters, and interactive campaigns tailored to the platform's unique features.",
      shortDes:
        "Snapchat solutions - engage the younger demographic with interactive campaigns.",
    },
    {
      name: "Reddit",
      icon: <FaRedditAlien />,
      des: "Our Reddit marketing expertise includes running targeted ad campaigns, leveraging relevant subreddits, and engaging with the Reddit community to drive brand awareness and foster meaningful discussions.",
      shortDes:
        "Reddit marketing - targeted ads, community engagement, brand awareness.",
    },
  ];

  return (
    <div className="w-full grid place-items-center gap-8 ">
      <div
        className={`max-h-screen grid place-items-center gap-32 py-32 px-4 relative`}
      >
        <div className=" h-fit grid gap-8 place-items-center text-center relative z-20 bg-white/25 ">
          <div className={` m-auto tablet:w-[50%] grid gap-4 `}>
            <h3 className={subheading}>we serve business</h3>
            <h2 className={`${headings} text-4xl`}>
              Solutions To Turn The
              <span className="text-transparent textStroke">
                {" "}
                Business
              </span>{" "}
              Around{" "}
            </h2>
            <p>
              We are a team of experienced digital marketers who are passionate
              about helping businesses succeed online. We offer a wide range of
              services, including social media marketing, SEO, PPC, and content
              marketing. We are committed to providing our clients with the
              highest quality services and results.
            </p>
          </div>
          <Button
            label={"Contact"}
            className={undefined}
            variant={"default"}
            size={"sm"}
          />
        </div>
        {/* <Image
          src={"/services.jpg"}
          alt={"services"}
          width={1000}
          height={500}
          className="rounded-[50%_50%_0_0] object-cover object-center -inset-0 absolute tablet:relative"
        /> */}
      </div>
      <div className="w-full grid place-items-center bg-slate-600 text-white skew-y-[-5deg]  py-20">
        <div className={`${sectioncss} skew-y-[5deg]`}>
          <div className={`${sectiongrid} w-full`}>
            <h3 className={subheading}> Social Media</h3>
            <h2 className={headings}>Our Social Media Services</h2>
            <p className={"tablet:w-[80%]"}>
              Our campaign is designed to help you achieve your business goals.
              We offer a variety of services, including:
            </p>
            <div className="w-full h-full grid tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px]">
              {socials.map((social) => (
                <Social
                  social={social}
                  key={social.name}
                  classname={subheading}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-8 bg-white grid place-items-center">
        <div className={`grid gap-4 laptop:w-[1000px]`}>
          <div className={`grid gap-4 tablet:w-[80%] `}>
            <h2 className={subheading}>Our Goal</h2>
            <h2 className={headings}>
              Our goal is to bring the business together
            </h2>
            <p>
              {/* //write something about digital agency like digithink thinkinh about goal of a business */}
              At Digithink, our goal is to empower businesses to thrive in the
              digital age. We believe that every business deserves a strong
              online presence and the tools to reach its full potential. We
              strive to be your trusted partner, providing innovative solutions
              and expert guidance to help you achieve your business objectives.
            </p>

            <Button
              size={"sm"}
              variant={"primary"}
              label="More"
              className={undefined}
            />
          </div>
          <div className="grid gap-8">
            <div className="w-full relative grid place-items-center ">
              <div className="w-full h-full relative z-10 bg-gray-200 p-4 grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={subheading}>We are here to help you</h3>
                    <h2 className={headings}>Our Goal is to help you grow</h2>
                  </div>
                  <div className="rounded-full bg-black p-4 text-white hover:bg-gray-800 hover:text-yellow-400 hover:shadow-[4px_0px_0px_1px_#f6ad55]">
                    <FaArrowRight />
                  </div>
                </div>
                <p>
                  We are committed to providing our clients with the highest
                  quality services and results. We believe in building strong
                  relationships with our clients and working closely with them
                  to achieve their business goals.
                </p>
              </div>
            </div>
            <div className="w-full relative grid place-items-center ">
              <div className="w-full h-full relative z-10 bg-gray-200 p-4 grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={subheading}>Bring Business Online</h3>
                    <h2 className={headings}>
                      We hlep the business to create the online presence
                    </h2>
                  </div>
                  <div className="rounded-full bg-black p-4 text-white hover:bg-gray-800 hover:text-yellow-400 hover:shadow-[4px_0px_0px_1px_#f6ad55]">
                    <FaArrowRight size={"20px"} className="rotate-[-45deg]" />
                  </div>
                </div>
                <p>
                  We help businesses establish a strong online presence,
                  creating websites, managing social media accounts, and
                  implementing digital marketing strategies to attract new
                  customers and grow their brand.
                </p>
              </div>
              <div className="w-[20%] h-[50%] absolute z-0 bg-yellow-400 -top-1 -left-1"></div>
            </div>
            <div className={`${sectiongrid}`}>
              <div className="w-full relative grid place-items-center ">
                <div className="w-full h-full relative z-10 bg-gray-200 p-4 grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={subheading}>Tech binds the business</h3>
                      <h2 className={headings}>Business in Tech</h2>
                    </div>
                    <div className="rounded-full bg-black p-4 text-white hover:bg-gray-800 hover:text-yellow-400 hover:shadow-[4px_0px_0px_1px_#f6ad55]">
                      <FaArrowRight size={"20px"} className="rotate-[-45deg]" />
                    </div>
                  </div>
                  <p>
                    We help businesses leverage technology to streamline
                    operations, enhance customer experiences, and drive growth.
                    Our team of experts provides tailored solutions for digital
                    transformation, from website development and mobile app
                    creation to cloud migration and data analytics.
                  </p>
                </div>
                <div className="w-[20%] h-[50%] absolute z-0 bg-yellow-400 -top-1 -left-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center ">
        <div className={`${sectioncss} grid tablet:grid-cols-2`}>
          <div className={`${sectiongrid} `}>
            <div className="">
              <h2 className={`${subheading} flex items-center gap-2`}>
                {" "}
                <FaKickstarter /> strategy
              </h2>
              <h2 className={headings}>
                The Startegy Of Reviving A{" "}
                <span className="text-transparent textStroke">Business</span>
              </h2>
              <p>
                We develop comprehensive social media strategies tailored to
                your business goals. Our expert team will help you navigate the
                ever-changing landscape of social media platforms to maximize
                your online presence and reach your target audience.
              </p>
            </div>
          </div>
          <Image
            src={"/strategy.jpg"}
            alt={"image"}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
