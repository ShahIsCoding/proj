import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvidor } from "./context/authContext";
import { Home } from "./Component/Page/Home";
import { Login } from "./Component/Page/Login";

function App() {
  return (
    <AuthProvidor>
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvidor>
  );
}

export default App;
