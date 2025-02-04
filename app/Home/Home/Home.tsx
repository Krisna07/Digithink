"use client";
import React, { useEffect, useRef, useState } from "react";
import Herosection from "../homeComp/Herosection";
import Digital from "./Digital";
import { observe } from "react-intersection-observer";
import Services from "./Services";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const [show, setShow] = useState<boolean>(false);
  const digiref: any = useRef();
  const [top, setTop] = useState();
  const [hero, setHero] = useState(0);

  // useEffect(() => {
  //   setTop(digiref.current?.getBoundingClientRect().top);

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setShow(true);
  //       } else {
  //         setShow(false);
  //       }
  //     });
  //   });

  //   observer.observe(digiref.current);

  //   // Cleanup function to disconnect the observer when component unmounts
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const prevTop: any = digiref.current?.getBoundingClientRect().top;
  //     if (top) {
  //       setHero(top - prevTop);
  //       // setPrevTop(top);
  //       // console.log(hero);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function to remove event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [top, hero]);

  // console.log(show);

  return (
    <div className="grid place-items-center relative z-[20] ">
      <div className="w-full min-h-screen grid place-items-center relative ">
        <div className="fixed bottom-0 min-w-full min-h-full z-10 bg-[url('/Homepage/image.jpg')] bg-cover"></div>
        <div
          style={{
            top: `-${hero}px`,
            fontSize: `${hero / 10}px`,
          }}
          className={`transition-all relative z-20`}
        >
          <Herosection />
        </div>
      </div>
      <div className="w-full bg-gray-100 z-20 px-4 overflow-hidden relative grid place-items-center">
        <div className="lg:w-[1000px] ">
          <Digital />
        </div>
      </div>
      <div className="w-full min-h-screen  z-20 overflow-hidden px-4  grid place-items-center relative bg-gray-200 ">
        <div className="w-[1000px] h-[1000px]  absolute -right-[20%] top-[50%] rounded-full border-8 border-sky-500 "></div>
        <div className="lg:w-[1000px] h-full">
          <Services />
        </div>
      </div>

      <section className="w-full py-10 bg-slate-800/75 text-white text-center relative z-40">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Explore our services, learn more about our team, or get in touch with
          us today.
        </p>
        <div className="md:flex justify-center grid place-items-center gap-2 px-2 space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Explore Our Services
          </button>
          <Link
            href={"./about"}
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Meet Our Team
          </Link>
          <Link
            href="./contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
