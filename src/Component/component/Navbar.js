import React, { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Search } from "@mui/icons-material";
import { BG } from "../../assets/Constants/COLORS";

export const Navbar = () => {
  const [profileDashboradOpen, setProfileDashboardOpen] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfileDashboardOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div
        className={`grid grid-cols-12 grid-rows-1 p-4 items-center w-full border-b-2 sticky top-0 ${BG.bg}`}
      >
        <Link to="/home">
          <img
            src="https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png"
            alt="Reddit_logo"
            className="h-11"
          />
        </Link>
        <div className={`col-span-5 p-3 rounded-full ${BG.bglight} mr-1`}>
          <Search />
          <input
            className={`${BG.bglight}`}
            value={123}
            placeholder="Search Anything"
          />
        </div>
        <div
          className={`col-span-2 col-start-8 col-end-10 ${BG.bglight} p-3 px-5 rounded-full flex items-center`}
        >
          <ArticleIcon /> <span className="ml-2">Write Post</span>
        </div>
        <div className={`col-span-3 col-start-12 flex justify-around`}>
          <NotificationsIcon className={`mx-3 rounded m-2  ${BG.hover}`} />
          <Link to="login">
            <PersonIcon className={`rounded m-2 ${BG.hover}`} />
          </Link>
        </div>
      </div>
    </>
  );
};
