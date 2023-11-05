import React from "react";
import { BG } from "../../Constants/COLORS";

const Card = ({ name, description, subredditImg, subreddit }) => {
  return (
    <div
      className={`${BG.hover} h-[210px] min-w-fit rounded-[16px] flex flex-col justify-end overflow-hidden m-2`}
    >
      <div
        className="h-full flex flex-col justify-end p-3 drop-shadow-md backdrop-brightness-50"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")',
        }}
      >
        <h2 className="truncate font-bold text-primary-onBackground text-24 m-0">
          {name || "Fortnite OG"}
        </h2>
        <p className="truncate text-primary-onBackground text-14 mt-2xs mb-xs">
          {description || "It's time to drop into #FortniteOG!"}
        </p>

        <div className="flex items-center text-12 text-primary-onBackground">
          <div className="leading-none w-[24px] h-[24px]">
            <img
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              alt="r/FortNiteBR icon"
              className="rounded-full overflow-hidden nd:visible nd:bg-secondary-background "
            />
          </div>
          <div className="font-bold text-base ml-2">
            {subreddit || "r/FortNiteBR"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
