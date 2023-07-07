"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Button from "../Components/Button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTiktok, FaSnapchatGhost, FaRedditAlien } from 'react-icons/fa';



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
  const sectioncss = 'laptop:w-[1000px] flex items-center justify-between gap-8'
  const sectiongrid = 'grid gap-4'
  const subheading='text-lg font-semibold'
  const headings= 'text-3xl font-bold'

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      des: "We provide comprehensive Facebook marketing solutions, including managing ads, creating engaging posts, and offering personalized guidance to help businesses succeed on the platform."
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      des: "Our Twitter marketing services encompass running targeted ad campaigns, managing Twitter profiles, and delivering one-on-one guidance to optimize engagement and growth on the platform."
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      des: "We specialize in Instagram marketing, assisting clients in managing ads, creating compelling posts, and providing tailored strategies to increase brand visibility and engagement on the platform."
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      des: "We specialize in LinkedIn marketing services. Our team manages LinkedIn advertising campaigns, creates engaging posts, and provides personalized guidance for leveraging the platform's professional network."
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      des: "We offer comprehensive YouTube marketing solutions to help businesses succeed on the world's largest video platform. From optimizing video content to running targeted ads, we help maximize visibility and engagement."
    },
    {
      name: "Pinterest",
      icon: <FaPinterest />,
      des: "Our Pinterest experts assist clients in utilizing the visual discovery platform effectively. We optimize Pinterest profiles, curate engaging boards, and implement strategies to drive traffic and conversions."
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      des: "Our TikTok marketing services focus on creating viral content, managing influencer partnerships, and implementing strategies to increase brand awareness and engagement on the popular short-form video platform."
    },
    {
      name: "Snapchat",
      icon: <FaSnapchatGhost />,
      des: "With our Snapchat marketing solutions, we help businesses reach a younger demographic through engaging ads, sponsored filters, and interactive campaigns tailored to the platform's unique features."
    },
    {
      name: "Reddit",
      icon: <FaRedditAlien />,
      des: "Our Reddit marketing expertise includes running targeted ad campaigns, leveraging relevant subreddits, and engaging with the Reddit community to drive brand awareness and foster meaningful discussions."
    }
  ];
  
  return <div className="w-full grid place-items-center gap-8">
    <div className={sectioncss} ref={sectionRefs[0]}>
      <div className="grid gap-8">
        <div className={sectiongrid}>
          <h3 className={subheading}>we provide</h3>
        <h2 className={headings}>Solutions To Turn The Business Around </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex rem, assumenda culpa ut harum quidem ipsam quasi veniam sequi.</p>
        </div>
        <Button label={"Contact"} className={undefined} variant={"default"} size={"sm"} />
      </div>
      <Image src={'/servicepage.png'} width={500} height={500} alt={""} className="hidden tablet:flex "/>
    </div>
    <div className="w-full grid place-items-center bg-slate-600 text-white skew-y-[-5deg]  p-20">
      <div className={`${sectioncss} skew-y-[5deg]`}>
       <div className={sectiongrid}> <h3 className={subheading}> Social Media</h3>
        <h2 className={headings}>Our Social Media Services</h2>
        <p className={subheading}>Associated apps</p>
        <div className="w-full grid tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px]">
          {socials.map((social)=><div key={social.name} className="w-full grid items-center  shadow-sm bg-white text-black p-4 rounded-lg hover:scale-[1.05]">
            <div className={`${subheading} flex justify-between`}>{social.name} <div>{social.icon}</div></div> 
            <div >{social.des}</div>
            </div>)}
          
        </div>
</div>
      </div>
    
    </div>
    <div className="w-full p-8 bg-white grid place-items-center">
      <div className={sectioncss}>
      <div className={`${sectiongrid} h-full`}>
          <h2 className={subheading}>The services we have done should be enough for noew </h2>
        <h2 className={headings}>our goal is to bring the business together</h2>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className=" h-28 bg-gray-200"></div>
          <div className=" h-28 bg-gray-200"></div>
          <div className=" h-28 bg-gray-200"></div>
          <div className=" h-28 bg-gray-200"></div>
        </div>
        <Button size={'sm'} variant={'primary'} label="More" className={undefined}/>
        </div>
        <div className={`${sectiongrid} `}>
            <Image src={'/social.jpg'} className="rounded-xl shadow-lg overflow-none" width={500} height={500} alt=""/>
        </div>
        {/* need more than 4 items  */}
        {/* ceeate a card for each items  */}
      </div>
      
    </div>
     </div>;
};

export default page;
