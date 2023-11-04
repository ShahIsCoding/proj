import { useState } from "react";
import { BG } from "../../Constants/COLORS";
import { icons } from "../../assets/css/icons/ICONS";
import { SubTopicCard } from "../component/SubTopicCard";

const topicCard = (topic, isLast = false) => {
  return (
    <div className={`${isLast ? "mb-5" : "border-b-2"}`}>
      <div
        className={`p-2 m-2 rounded flex justify-around content-center ${BG.hover} text-slate-500`}
      >
        <span>{topic}</span>
        {icons.arrowDOWN}
      </div>
      <SubTopicCard topic="Gaming" />
      <SubTopicCard topic="Learing" />
    </div>
  );
};
const leftSideBar = () => {
  return (
    <div className="flex flex-col h-full min-h-screen z-10 overflow-auto">
      <div className="border-b-2 w-full">
        <div className={`rounded p-2 m-2 ${BG.hover} flex item-center`}>
          {icons.home}
          <span className="ml-2">Home</span>
        </div>
        <div className={`rounded p-2 m-2 ${BG.hover} flex item-center`}>
          {icons.popular}
          <span className="ml-2">Popular</span>
        </div>
      </div>
      {topicCard("TOPIC")}
      {topicCard("RESOURCE", true)}
    </div>
  );
};
const centerBar = () => {
  return <div>;lkjbn;kjbk..b</div>;
};
export const HomeBody = () => {
  return (
    <div className={`container mx-auto grid grid-cols-7`}>
      <div className="border-r-2 col-span-2 col-start-1 col-end-3 w-72">
        {leftSideBar()}
      </div>
      <div className="border-r-2 bg-scroll col-span-5">{centerBar()}</div>
    </div>
  );
};
