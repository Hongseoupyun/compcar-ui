import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "components/Main/LandingPage";
import ResultPage from "components/ResultPage/ResultPage";


function Main() {
  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
    </div>
  );
}

export default Main;