"use client";
import { useEffect, useRef, useState } from "react";
import Customers from "./Components/Homepage/Customers";
import Digital from "./Components/Homepage/Digital";
import Goal from "./Components/Homepage/Goal";
import Herosection from "./Components/Homepage/Herosection";
import Homeservices from "./Components/Homepage/Homeservices";
import Requestform from "./Components/Homepage/Requestform";
import Social from "./Components/Homepage/social";

export default function Home() {
  //create the individual animation states for each section and animate on scroll
  const sectionRefs = [
    useRef(null), // Ref for Herosection
    useRef(null), // Ref for Goal
    useRef(null), // Ref for Digital
    useRef(null), // Ref for Homeservices
    useRef(null), // Ref for Social
    useRef(null), // Ref for Customers
    useRef(null), // Ref for Requestform
  ];

  const [sectionIntersecting, setSectionIntersecting] = useState(
    Array(sectionRefs.length).fill(false)
  );

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-300px",
    };

    const sectionObservers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setSectionIntersecting((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
          sectionObservers[index].unobserve(ref.current);
        }
      }, observerOptions);
    });

    sectionRefs.forEach((ref, index) =>
      sectionObservers[index].observe(ref.current)
    );

    return () => {
      sectionObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="w-full grid-place-items-center">
      <div
        ref={sectionRefs[0]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[0] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000 bg-[#2A2727] `}
      >
        <Herosection />
      </div>
      <div
        ref={sectionRefs[1]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[1] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Goal />
      </div>
      <div
        ref={sectionRefs[2]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[2] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Digital />
      </div>
      <div
        ref={sectionRefs[3]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[3] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000 bg-gray-200`}
      >
        <Homeservices />
      </div>
      <div
        ref={sectionRefs[4]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[4] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Social />
      </div>
      <div
        ref={sectionRefs[5]}
        className={`w-full py-[40px] ${
          !sectionIntersecting[5] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity skew-y-[-2deg] bg-slate-900 text-white ease-in-out duration-1000`}
      >
        <Customers />
      </div>
      <div
        ref={sectionRefs[6]}
        className={`w-full py-[40px] pb-20 ${
          !sectionIntersecting[6] ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Requestform />
      </div>
    </main>
  );
}
