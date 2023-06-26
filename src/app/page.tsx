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
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <main className="w-full grid-place-items-center">
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Herosection />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Goal />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Digital />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Homeservices />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Social />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Customers />
      </div>
      <div
        ref={ref}
        className={`w-full py-8 ${
          !isIntersecting ? "opacity-0" : "opcaity-1"
        }   p-4 grid place-items-center box-border text-center gap-4 relative transition-opacity ease-in-out duration-1000`}
      >
        <Requestform />
      </div>
    </main>
  );
}
