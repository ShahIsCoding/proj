import React from "react";
import { getNumber } from "../Utils/Number";
import { BG } from "../../assets/Constants/COLORS";

export const SubRedditCard = ({
  name,
  number,
  nameClass,
  lastUpdate,
  imgClass,
  isHover,
  space,
}) => {
  return (
    <div
      className={`flex flex-row  ${space ? space : "p-2 m-2"} ${
        isHover && BG.hover
      } rounded `}
    >
      <div className={`${imgClass || "h-10 w-10"} mr-2`}>
        <img
          src="https://bgr.com/wp-content/uploads/2023/05/reddit-logo-bgr.jpg?quality=82&strip=all&resize=1400,1050"
          alt="r/SubRedditName"
          className="h-full rounded-full"
        />
      </div>
      <div className="flex flex-col my-auto">
        <div className={`font-bold ${nameClass}`}>
          {"r/SubRedditName" || name}
        </div>
        {number && (
          <div className="text-xs">{getNumber(4135151335 || number)}</div>
        )}
        {lastUpdate && <div className="text-xxs">{lastUpdate}.ago</div>}
      </div>
    </div>
  );
};
