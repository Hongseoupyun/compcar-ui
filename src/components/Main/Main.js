import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "components/Main/LandingPage";
import SignIn from "components/Login/SignIn";
import SignUp from "components/Login/SignUp";

function Main() {
  return (
    <div className="main">
 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default Main;
