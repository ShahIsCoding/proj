import { useState } from "react";
import React from "react";
import { icons } from "../../assets/css/icons/ICONS";
import { BG } from "../../Constants/COLORS";

export const SubTopicCard = ({ topic, classNames }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={classNames}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className={`p-2 m-2 rounded ${BG.hover}`}>
        <div className="grid grid-cols-3 ">
          <div className="col-start-1 col-span-2 flex content-center">
            {icons.gaming}
            <span className="ml-1">{topic}</span>
          </div>
          <div>{isOpen ? icons.arrowUP : icons.arrowDOWN}</div>
        </div>
      </div>
      <div className={isOpen ? "" : "hidden"}>
        <div className={`p-2 ml-5 border-l-2 ${BG.hover}`}>Gaming</div>
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
