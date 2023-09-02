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
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [sectionIntersecting, setSectionIntersecting] = useState(
    Array(sectionRefs.length).fill(false)
  );

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-300px",
    };

    const sectionObservers = sectionRefs.map((ref: any, index: any) => {
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

    sectionRefs.forEach((ref: any, index: any) =>
      sectionObservers[index].observe(ref.current)
    );

    return () => {
      sectionObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="w-full grid-place-items-center ">
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
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000 bg-white`}
      >
        <Homeservices />
      </div>
      <div
        ref={sectionRefs[4]}
        className={`w-full overflow-hidden py-[40px] ${
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
