import React from "react";
import PostCard from "../component/PostCard";
import EventCard from "../component/EventCard";
import { BG } from "../../assets/Constants/COLORS";
import { SubRedditCard } from "../component/SubRedditCard";

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
const HomeBody = () => {
  return <div>{centerBar()}</div>;
};

export default HomeBody;
