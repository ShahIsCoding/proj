import React, { useState } from "react";
import { SubRedditCard } from "./SubRedditCard";
import { icons } from "../../assets/icons/ICONS";
import { BG, TEXT } from "../../assets/Constants/COLORS";
import { Link } from "react-router-dom";
const PostCard = ({ isCard = true }) => {
  const [upVotes, setUpVotes] = useState(undefined);
  return (
    <div
      className={`flex flex-col px-4 py-2 ${BG.hoverbglighter} rounded-[25px]`}
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
            <span
              className={`mx-2 hover:text-orange-600 ${
                upVotes === true ? TEXT.orange : ""
              }`}
              onClick={() => {
                upVotes === true ? setUpVotes(undefined) : setUpVotes(true);
              }}
            >
              {icons.upVote}
            </span>
            {Math.floor(Math.random() * 10000)}
            <span
              className={`mx-2 hover:text-orange-600 ${
                upVotes === false ? TEXT.orange : ""
              }`}
              onClick={() => {
                upVotes === false ? setUpVotes(undefined) : setUpVotes(false);
              }}
            >
              {icons.downVote}
            </span>
          </div>
          <Link>
            <div
              className={`rounded-full ${BG.bglight} w-fit p-1 cursor-pointer`}
            >
              <span className="mx-2 hover:text-orange-600">
                {icons.comments}
              </span>
              <span className="mx-2">Comments</span>
            </div>
          </Link>
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
