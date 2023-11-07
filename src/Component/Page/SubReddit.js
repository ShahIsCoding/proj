import React from "react";
import { useLocation } from "react-router-dom";

const SubReddit = () => {
  let location = useLocation();
  return (
    <div>
      SubReddit {location.pathname} .ekasjbfv {location.state?.id}
    </div>
  );
};

export default SubReddit;
