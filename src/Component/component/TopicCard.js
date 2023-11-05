import React, { useState } from "react";
import { SubTopicCard } from "./SubTopicCard";
import { icons } from "../../assets/css/icons/ICONS";
import { BG } from "../../Constants/COLORS";

export const TopicCard = ({ topic, isLast }) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={`${isLast && isLast ? "mb-5" : "border-b-2"}`}>
      <div
        className={`p-2 m-2 rounded flex justify-around content-center ${BG.hover} text-slate-500`}
        onClick={() => setOpen(!isOpen)}
      >
        <span>{topic}</span>
        {isOpen ? icons.arrowUP : icons.arrowDOWN}
      </div>
      <SubTopicCard topic="Gaming" classNames={isOpen ? "" : "hidden"} />
      <SubTopicCard topic="Learing" classNames={isOpen ? "" : "hidden"} />
    </div>
  );
};
