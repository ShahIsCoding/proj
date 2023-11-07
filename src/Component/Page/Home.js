import React from "react";
import { BG, TEXT } from "../../assets/Constants/COLORS";
import { Navbar } from "../component/Navbar";
import { icons } from "../../assets/icons/ICONS";
import { TopicCard } from "../component/TopicCard";
import { Link, Outlet } from "react-router-dom";

const leftSideBar = () => {
  return (
    <div className="flex flex-col h-full min-h-screen z-10 overflow-auto">
      <div className="border-b-2 w-full">
        <Link to="/home">
          <div className={`rounded p-2 m-2 ${BG.hover} flex item-center`}>
            {icons.home}
            <span className="ml-2">Home</span>
          </div>
        </Link>
        <Link to="/popular">
          <div className={`rounded p-2 m-2 ${BG.hover} flex item-center`}>
            {icons.popular}
            <span className="ml-2">Popular</span>
          </div>
        </Link>
      </div>
      <TopicCard topic="TOPIC" />
      <TopicCard topic="RESOURCES" isLast />
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
        <div className="border-r-2 bg-scroll col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
