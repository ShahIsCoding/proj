import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvidor } from "./context/authContext";
import { Home } from "./Component/Page/Home";
import { Login } from "./Component/Page/Login";
import HomeBody from "./Component/Page/HomeBody";
import SubReddit from "./Component/Page/SubReddit";

function App() {
  return (
    <AuthProvidor>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<HomeBody />} />
          <Route path="r/:subreddit" element={<SubReddit />}>
            {/* <Route path="post/:id" element={} /> */}
          </Route>
          {/* <Route path="/popular" element={} />  */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvidor>
  );
}

export default App;
