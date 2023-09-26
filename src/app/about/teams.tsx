"use client";
import React, { useEffect, useRef, useState } from "react";

const Teams = () => {
  const teamMembers = [
    {
      name: "John Doe",
      title: "Founder",
      description: "Passionate about innovation and technology.",
      profileImage: "/profiles/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      title: "Lead Designer",
      description: "Bringing creativity and design expertise to every project.",
      profileImage: "/profiles/jane-smith.jpg",
    },
    {
      name: "Mike Johnson",
      title: "Lead Developer",
      description: "Turning ideas into functional and efficient solutions.",
      profileImage: "/profiles/mike-johnson.jpg",
    },
    {
      name: "Emily Davis",
      title: "Marketing Manager",
      description: "Crafting strategies to boost brand visibility.",
      profileImage: "/profiles/emily-davis.jpg",
    },
    {
      name: "Sarah Brown",
      title: "Content Writer",
      description: "Weaving words to tell compelling stories.",
      profileImage: "/profiles/sarah-brown.jpg",
    },
    {
      name: "Alex Wilson",
      title: "UI/UX Designer",
      description: "Creating intuitive and user-friendly interfaces.",
      profileImage: "/profiles/alex-wilson.jpg",
    },
    {
      name: "Michael Lee",
      title: "Software Engineer",
      description: "Solving complex problems with code.",
      profileImage: "/profiles/michael-lee.jpg",
    },
    {
      name: "Olivia Clark",
      title: "Product Manager",
      description: "Guiding product development from concept to launch.",
      profileImage: "/profiles/olivia-clark.jpg",
    },
    {
      name: "William Turner",
      title: "Data Analyst",
      description: "Uncovering insights from data to drive informed decisions.",
      profileImage: "/profiles/william-turner.jpg",
    },
    {
      name: "Ella White",
      title: "Customer Support Specialist",
      description: "Providing top-notch support to our valued customers.",
      profileImage: "/profiles/ella-white.jpg",
    },
  ];

  const leftRef = useRef(null);

  const getLeft = (item: any) => {
    return item.current ? item.current.getBoundingClientRect().left : 0;
  };
  const [left, setLeft] = useState(getLeft(leftRef));

  async function handleResize() {
    setLeft(await getLeft(leftRef));
  }
  useEffect(() => {
    setLeft(getLeft(leftRef));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="w-full  py-8 grid place-items-center overflow-hidden">
      <div
        className="laptop:w-[1200px] px-4 grid gap-4"
        ref={leftRef}>
        <h2 className="font-semibold text-sm text-gray-600">Our Stories</h2>
        <h2 className="text-lg font-semibold">
          Tales{" "}
          <span className="text-gray-600">
            of innovative minds creating wonders
          </span>{" "}
        </h2>
        <p className="laptop:w-[800px] text-sm">
          From groundbreaking inventions to artistic brilliance, be inspired by
          the limitless power of human creativity. Join us on this journey of
          resilience, passion, and ingenuity, shaping a future where imagination
          knows no bounds.
        </p>
      </div>
      <div className="relative  w-fit px-4 grid gap-4 ">
        <div className=" relative overflow-x-scroll scrollbar-hide smooth grid items-center ">
          <div
            style={{ left: left }}
            className={`relative flex items-center gap-4 py-4`}>
            {teamMembers.map((team, x) => (
              <div
                className="min-w-[230px] bg-gray-100 rounded-lg grid gap-4 overflow-hidden"
                key={x}>
                <div className="flex items-center gap-4 py-2 px-4 ">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-200 to-indigo-600 rounded-full"></div>
                  <div className="grid">
                    <span className="font-semibold">{team.name} </span>
                    <span className="text-sm">{team.title}</span>
                  </div>
                </div>
                <div className="text-sm bg-slate-200 px-4 py-2">
                  {team.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
