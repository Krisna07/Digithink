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
    "laptop:w-[1000px] w-full flex items-center justify-between gap-8 p-4";
  const sectiongrid = "grid gap-4";
  const subheading = "text-lg font-semibold";
  const headings = "text-3xl font-bold";

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
    <div className="w-full grid place-items-center gap-8">
      <div className={sectioncss} ref={sectionRefs[0]}>
        <div className="grid gap-8">
          <div className={sectiongrid}>
            <h3 className={subheading}>we provide</h3>
            <h2 className={headings}>Solutions To Turn The Business Around </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              ex rem, assumenda culpa ut harum quidem ipsam quasi veniam sequi.
            </p>
          </div>
          <Button
            label={"Contact"}
            className={undefined}
            variant={"default"}
            size={"sm"}
          />
        </div>
        <Image
          src={"/servicepage.png"}
          width={500}
          height={500}
          alt={""}
          className="hidden tablet:flex "
        />
      </div>
      <div className="w-full grid place-items-center bg-slate-600 text-white skew-y-[-5deg]  py-20">
        <div className={`${sectioncss} skew-y-[5deg]`}>
          <div className={`${sectiongrid} w-full`}>
            <h3 className={subheading}> Social Media</h3>
            <h2 className={headings}>Our Social Media Services</h2>
            <p className={subheading}>Associated apps</p>
            <div className="w-full grid tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px]">
              {socials.map((social) => (
                <Social social={social} classn={subheading} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-8 bg-white grid place-items-center">
        <div className={sectioncss}>
          <div className={`${sectiongrid} h-full`}>
            <h2 className={subheading}>
              The services we have done should be enough for noew{" "}
            </h2>
            <h2 className={headings}>
              our goal is to bring the business together
            </h2>
            <div className="grid grid-cols-2 gap-[20px]"></div>
            <Button
              size={"sm"}
              variant={"primary"}
              label="More"
              className={undefined}
            />
          </div>
          <div className={`${sectiongrid}`}>
            <div className="w-full relative grid place-items-center ">
              <div className="w-full h-full relative z-10 bg-gray-200 p-4 grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={subheading}>Some title</h3>
                    <h2 className={headings}>Headinngs</h2>
                  </div>
                  <div className="rounded-full bg-black p-4 text-white hover:bg-gray-800 hover:text-yellow-400 hover:shadow-[4px_0px_0px_1px_#f6ad55]">
                    <FaArrowRight size={"20px"} className="rotate-[-45deg]" />
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio quia nisi, sequi perferendis vitae quod labore iure
                  consectetur illum nemo?
                </p>
              </div>
              <div className="w-[20%] h-[50%] absolute z-0 bg-yellow-400 -top-1 -left-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center ">
        <div className={`${sectioncss} grid-cols-2`}>
          <div className={`${sectiongrid} w-1/2`}>
            <FaKickstarter />
            <div className="">
              <h2 className={subheading}>strategy</h2>
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
          <div className="w-1/2 h-[300px] bg-yellow-300 relative grid place-items-center  rounded-xl">
            <div className="w-1/2 h-[500px] bg-gray-200 absolute top-[-100px] shadow-lg rounded-lg "></div>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
