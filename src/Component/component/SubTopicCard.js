import { useState } from "react";
import React from "react";
import { icons } from "../../assets/icons/ICONS";
import { BG } from "../../assets/Constants/COLORS";
import { Link } from "react-router-dom";

export const SubTopicCard = ({ topic, classNames }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={classNames}>
      <div
        className={`p-2 m-2 rounded ${BG.hover}`}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className="grid grid-cols-3 ">
          <div className="col-start-1 col-span-2 flex content-center">
            {icons.gaming}
            <span className="ml-1">{topic}</span>
          </div>
          <div>{isOpen ? icons.arrowUP : icons.arrowDOWN}</div>
        </div>
      </div>
      <div className={isOpen ? "" : "hidden"}>
        <Link to="/r/Gaming" state={{ id: new Date().getMilliseconds() }}>
          <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        </Link>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
      </div>
    </div>
  );
};
