import React from "react";
import { BG, TEXT } from "../../Constants/COLORS";
import { Navbar } from "../component/Navbar";
import { icons } from "../../assets/css/icons/ICONS";
import Card from "../component/Card";
import { TopicCard } from "../component/TopicCard";

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
      <TopicCard topic="TOPIC" />
      <TopicCard topic="RESOURCES" isLast />
    </div>
  );
};
const centerBar = () => {
  return (
    <div className="flex">
      <div className="flex flex-row overflow-x-scroll py-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className={`${BG.bg} ${TEXT.white}`}>
      <Navbar />
      <div className={`container mx-auto grid grid-cols-4`}>
        <div className="border-r-2 col-start-1 col-end-1 w-72">
          {leftSideBar()}
        </div>
        <div className="border-r-2 bg-scroll col-span-3">{centerBar()}</div>
      </div>
    </div>
  );
};
