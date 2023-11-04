import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { HomeBody } from "../HomeBody/HomeBody";
import { BG, TEXT } from "../../Constants/COLORS";
export const Home = () => {
  return (
    <div className={`${BG.bg} ${TEXT.white}`}>
      <Navbar />
      <HomeBody />
    </div>
  );
};
