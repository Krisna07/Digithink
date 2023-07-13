import React from "react";
import Button from "../Components/Button";
import {
  FaAssistiveListeningSystems,
  FaChevronRight,
  FaComment,
  FaCommentAlt,
  FaMeetup,
} from "react-icons/fa";
import Teamspitch from "./Teamspitch";
import Teams from "./teams";

const page = () => {
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
    </div>
  );
};

export default page;
