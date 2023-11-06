import React from "react";
import { BG, TEXT } from "../../assets/Constants/COLORS";
import { Navbar } from "../component/Navbar";
import { icons } from "../../assets/icons/ICONS";
import EventCard from "../component/EventCard";
import { TopicCard } from "../component/TopicCard";
import { SubRedditCard } from "../component/SubRedditCard";
import PostCard from "../component/PostCard";

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
    <div className="flex flex-col">
      <div className="flex flex-row overflow-x-scroll py-5 w-full">
        <EventCard />
      </div>
      <div className="grid grid-cols-6 gap-4 border-t-2">
        <div className="col-span-4 flex flex-col">
          <div className="grid grid-cols-12 p-2">
            <div className="col-span-3">
              <button>Create a Post</button>
            </div>
            <div>
              <div className="rounded"></div>
            </div>
          </div>
          <div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="col-span-2">
          <div className={` ${BG.bgdark} p-5 m-2 rounded`}>
            <div className="mb-3">POPULAR COMMUNITIES</div>
            <SubRedditCard nameClass="text-sm" number={4135151335} isHover />
            <SubRedditCard nameClass="text-base" number={4135151335} isHover />
            <SubRedditCard nameClass="text-lg" number={4135151335} isHover />
            <SubRedditCard nameClass="text-xs" number={4135151335} isHover />
            <SubRedditCard nameClass="text-xxs" number={4135151335} isHover />
            <SubRedditCard nameClass="text-sm" isHover />
          </div>
        </div>
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
