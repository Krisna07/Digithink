"use client";
import React, { useEffect } from "react";
import Button from "../Components/Button";
import {
  FaAssistiveListeningSystems,
  FaBook,
  FaChevronRight,
  FaComment,
  FaCommentAlt,
  FaMeetup,
  FaReadme,
} from "react-icons/fa";
import Teamspitch from "./Teamspitch";
import Teams from "./teams";
import Image from "next/image";

const page = () => {
  const runthis = () => {
    for (let i = 0; i > 0; i++) {
      return console.log("I love you");
    }
  };
  runthis;
  return (
    <div className="grid place-items-center gap-8">
      <div className="tablet:w-[600px] w-full grid text-center gap-6 place-items-center py-16 px-4">
        <h2 className="w-full text-3xl text-center font-semibold">
          A small team of{" "}
          <span className="text-transparent textStroke">Innovative</span> ideas
          to <span className="text-transparent textStroke">Improve</span>
        </h2>
        <p className="text-sm">
          We think the enterprise way to help you stand out. Through out the
          journey we focus on creating a good memories. A team of motivated
          individuals that take note of the things are essential. A sky is
          beautiful when there are clouds.
        </p>
        <div className="flex gap-4">
          <Button
            label="Listen what our team say"
            size={"sm"}
            variant={"primary"}
            className={""}
            icon={<FaAssistiveListeningSystems />}
          />
          <Button
            label="Leave a note"
            size={"sm"}
            variant={"default"}
            className={""}
            icon={<FaComment />}
          />
        </div>
      </div>
      <Teamspitch />
      <Teams />
      <div className="laptop:w-[1000px] grid gap-4 p-4 place-items-center ">
        <h2 className="w-full text-3xl text-center font-semibold">
          We Have a <span className="text-transparent textStroke">Space</span>{" "}
          for <span className="text-transparent textStroke">Growth</span>
        </h2>
        <p className="laptop:w-[800px] text-center">
          In this era of inspiring AI advancements, we prioritize the human
          perspective in technology. At our core, we believe that technology
          should serve and empower humanity. It's not just about innovation;
          it's about enhancing lives and shaping a brighter future.
        </p>
        <div className="w-full grid tablet:grid-cols-[60%_40%] relative shadow p-4  ">
          <div className="w-full flex flex-col gap-2  justify-center relative z-40">
            <h3 className=" font-semibold text-gray-700">Task Handling</h3>
            <h2 className=" text-xl font-bold">AI Automation and Auto-bots</h2>
            <p className="tablet:w-3/4 text-sm">
              In today's fast-paced world, effective task handling is crucial
              for productivity. Our solution leverages the power of AI
              automation and auto-bots to streamline your workflow. From
              automating repetitive tasks to intelligent decision-making, our
              system ensures efficiency and accuracy, allowing you to focus on
              what matters most—achieving your goals.
            </p>
            <Button
              label="Read"
              size={"sm"}
              variant={"primary"}
              className={""}
              icon={<FaChevronRight />}
            />
          </div>

          <div className="tablet:relative tablet:block w-full p-4 hidden absolute z-10 ">
            <Image
              src={"/projectsImage/tech.webp"}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <section className="laptop:w-[1000px] relative grid tablet:grid-cols-2">
        <section className="tablet:relative w-full grid absolute z-10 left-20 -rotate-[0deg]">
          <div
            style={{ mixBlendMode: "multiply" }}
            className="absolute w-[150%] h-1/2 -bottom-[10px] left-[-85%] transform-[rotateZ(7deg)]">
            <div className="absolute bottom-0 w-[100%] h-[100%]  elipsegrains"></div>
          </div>
          <div className="relative flex items-center justify-center h-40 w-40 rounded-full overflow-hidden z-20 ">
            <div className="isolate absolute top-0 w-full h-full">
              <div className="h-full grainyfilter ball-shadow  "></div>
              <div
                style={{ mixBlendMode: "multiply" }}
                className="absolute top-0 w-full h-full bg-gradient-radial scale-[2] from-gray-500 via-gray-400 to-transparent "></div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full flex flex-col gap-2  justify-center relative z-40">
            <h3 className=" font-semibold text-gray-700">Handling tech</h3>
            <h2 className=" text-xl font-bold">
              Lets Tackle the tech with us{" "}
            </h2>
            <p className="tablet:w-3/4 text-sm">
              In today's fast-paced world, effective task handling is crucial
              for productivity. Our solution leverages the power of AI
              automation and auto-bots to streamline your workflow.
            </p>
            <Button
              label="Read"
              size={"sm"}
              variant={"primary"}
              className={""}
              icon={<FaChevronRight />}
            />
          </div>
        </section>
      </section> */}
    </div>
  );
};

export default page;
