import React from "react";
import { SubRedditCard } from "./SubRedditCard";
import { icons } from "../../assets/icons/ICONS";
import { BG } from "../../assets/Constants/COLORS";
const PostCard = ({ isCard = true }) => {
  return (
    <div
      className={`flex flex-col px-4 py-2 hover:${BG.bglighter} rounded-[25px]`}
    >
      <div className="grid grid-cols-12 gap-2 w-100 mt-2">
        <div className="col-span-4 ">
          <SubRedditCard nameClass="text-xs" imgClass="h-6 w-6" space=" " />
        </div>
        <button
          className={`col-start-11 rounded h-[24px] my-auto btn-primary ${BG.hover}`}
        >
          join
        </button>
        <div className="col-start-12 my-auto">{icons.more}</div>
      </div>
      <div className=" flex flex-col">
        <div className="text-lg w-100 my-2">
          Angelo Mathews have been timed out without facing a ball
        </div>
        <div className="w-100 bg-black rounded-[30px]">
          <img
            src="https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg?w=248&fit=crop&auto=format"
            alt="some post images"
            className="mx-auto rounded"
          />
        </div>
        <div className={`w-100 my-2 flex flex-row gap-3`}>
          <div
            className={`rounded-full ${BG.bglight} w-fit p-1 cursor-pointer`}
          >
            <span className="mx-2 hover:text-orange-600">{icons.upVote}</span>
            {123}
            <span className="mx-2 hover:text-orange-600">{icons.downVote}</span>
          </div>
          <div
            className={`rounded-full ${BG.bglight} w-fit p-1 cursor-pointer`}
          >
            <span className="mx-2 hover:text-orange-600">{icons.comments}</span>
            <span className="mx-2">Comments</span>
          </div>
          <div
            className={`rounded-full ${BG.bglight} w-fit p-1 cursor-pointer`}
          >
            <span className="mx-2 hover:text-orange-600">{icons.share}</span>
            <span className="mx-2">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
