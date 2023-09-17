import React,{useRef,useState,useEffect} from 'react';

import { Link } from "react-router-dom"
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
export const Navbar = () =>{
    const[profileDashboradOpen,setProfileDashboardOpen] = useState(false);

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
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light px-2 py-1 border border-bottom  d-flex flex-row justify-content-between">
                <div className="navbar-brand col-1 text-center">
                    <Link to="/home">
                        <img src="https://w7.pngwing.com/pngs/987/778/png-transparent-travelbird-slither-io-logo-android-travelbird-rectangle-logo-business-thumbnail.png" alt="Travel_Bird" />
                    </Link>
                </div>
                <div className="col-md-3 col-6 d-flex justify-content-between align-items-baseline">
                    <span><ArticleIcon /> Write Post</span>
                    <span>
                        <NotificationsIcon className="mx-3"/>
                        <PersonIcon onClick={()=>setProfileDashboardOpen(true)}/>
                    </span>
                </div>
            </nav>
            {profileDashboradOpen && 
            <div className="profileDashboard d-flex flex-column px-4 py-3" ref={wrapperRef}>
                <span><PersonIcon /> My Profile</span>
                <span><BookmarksIcon /> Library</span>
                <span><QueryStatsIcon /> Stats</span>
                <span>Others</span>         
            </div>}
        </>
    )
}