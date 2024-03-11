"use client";
import React, { useEffect, useRef, useState } from "react";
import Herosection from "../homeComp/Herosection";
import Digital from "../homeComp/Digital";
import { observe } from "react-intersection-observer";
import Services from "./Services";
import Link from "next/link";

const HomePage = () => {
  const [show, setShow] = useState<boolean>(false);
  const digiref: any = useRef();
  const [top, setTop] = useState();
  const [hero, setHero] = useState(0);

  useEffect(() => {
    setTop(digiref.current?.getBoundingClientRect().top);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    });

    observer.observe(digiref.current);

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  useEffect(() => {
    const handleScroll = () => {
      const prevTop: any = digiref.current?.getBoundingClientRect().top;
      if (top) {
        setHero(top - prevTop);
        // setPrevTop(top);
        // console.log(hero);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top, hero]);

  // console.log(show);

  return (
    <div className="grid place-items-center ">
      <div className="w-full h-screen grid place-items-center">
        <div
          style={{
            top: `-${hero}px`,
            position: `fixed`,
          }}
          className={`z-10 transition-all`}>
          <Herosection />
          <div className="absolute bottom-0"></div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-gray-100 z-20 overflow-hidden relative grid place-items-center">
        <div
          style={{
            height: `${show == true ? 200 : 0}%`,
            width: `${show == true ? 200 : 0}%`,
          }}
          className={`absolute w-full -top-20 transition-all duration-[2s] rounded-full  ${
            show ? "bg-blue-600 text-white" : "bg-blue-600/50 text-blue-600"
          }`}></div>
        <div
          className="absolute w-[50px] h-[100px] bg-blue-600/50 rounded-[80px] top-4 grid place-items-center"
          ref={digiref}>
          <div className="w-2 h-4 bg-red-400 absolute top-2 rounded"></div>
        </div>

        <div className={show ? "text-white" : "text-black"}>
          <Digital />
        </div>
      </div>
      <Services />

      <section
        id="cta"
        className="w-full py-10 bg-blue-500 text-white text-center">
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
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Meet Our Team
          </Link>
          <Link
            href="./contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
