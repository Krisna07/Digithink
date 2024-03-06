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
  // const sectionRefs = [
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  // ];

  // const [sectionIntersecting, setSectionIntersecting] = useState(
  //   Array(sectionRefs.length).fill(false)
  // );

  // useEffect(() => {
  //   const observerOptions = {
  //     rootMargin: "-300px",
  //   };

  //   const sectionObservers = sectionRefs.map((ref: any, index: any) => {
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

  //   sectionRefs.forEach((ref: any, index: any) =>
  //     sectionObservers[index].observe(ref.current)
  //   );

  //   return () => {
  //     sectionObservers.forEach((observer) => observer.disconnect());
  //   };
  // }, []);

  return (
    <main className="w-full grid-place-items-center ">
      <div
        className={`w-full py-[40px] } p-4 min-h-[100vh] grid place-items-center box-border text-center gap-4  transition-opacity ease-in-out duration-1000 `}>
        <div className="fixed z-1">
          <Herosection />
        </div>
      </div>
      {/* <div
        className={`w-full py-[40px]   laptop:p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000 min-h-[40vh] tablet:h-[60vh] bg-cover bg-no-repeat bg-center `}
        style={{ backgroundImage: "url(/Homepage/Goals.jfif)" }}
      >
        <Goal />
      </div> */}
      <div
        className={`w-full py-[40px]   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000  bg-gray-200`}>
        <Digital />
      </div>
      {/* <div
        className={`w-full py-[40px]   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000 bg-white`}>
        <Homeservices />
      </div> */}
      {/* <div
        className={`w-full overflow-hidden py-[40px]  p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}>
        <Social />
      </div> */}
      {/* <div
        className={`w-full py-[40px]  p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity skew-y-[-2deg] bg-slate-900 text-white ease-in-out duration-1000`}>
        <Customers />
      </div>
      <div
        className={`w-full py-[40px] pb-20   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}>
        <Requestform />
      </div> */}
    </main>
  );
}
