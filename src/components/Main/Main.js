import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'components/Main/LandingPage';
import SignIn from 'components/Login/SignIn';
import SignUp from 'components/Login/SignUp';
import Cardapp from 'components/Card/Cardapp';
import SearchPage from 'components/SearchPage/SearchPage';
import ContactUs from 'components/ContactUs/ContactUs';
import UserProfile from 'components/UserProfile/UserProfile';

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CardApp" element={<Cardapp />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default Main;
