import React, { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Search } from "@mui/icons-material";
import { BG } from "../../Constants/COLORS";

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
        className={`grid grid-cols-12 grid-rows-1 p-4 items-center border-b-4 ${BG.blue}`}
      >
        <Link to="/home">
          <img
            src="https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png"
            alt="Reddit_logo"
            className="h-11"
          />
        </Link>
        <div className={`col-span-5 p-3 rounded-full ${BG.blueLess} mr-1`}>
          <Search className="" />
          <input
            className={`${BG.blueLess}`}
            value={123}
            placeholder="Search Anything"
          />
        </div>
        <span
          className={`col-span-2 col-start-8 ${BG.blueLess} p-3 rounded-full`}
        >
          <ArticleIcon /> Write Post
        </span>
        <span className="col-span-3 col-start-12 flex justify-around ">
          <NotificationsIcon className="mx-3" />
          <PersonIcon onClick={() => setProfileDashboardOpen(true)} />
        </span>
      </div>
      {profileDashboradOpen && (
        <div className={`w-50 ${BG.blue}`} ref={wrapperRef}>
          <span>
            <PersonIcon /> My Profile
          </span>
          <span>
            <BookmarksIcon /> Library
          </span>
          <span>
            <QueryStatsIcon /> Stats
          </span>
          <span>Others</span>
        </div>
      )}
    </>
  );
};
