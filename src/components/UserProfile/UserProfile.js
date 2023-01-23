import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import axios from 'axios';

function UserProfile() {
  const navigate = useNavigate();
  const go = () => {
    navigate('/UserProfile');
  };

  return (
    <div className="userProfile">
      <div className="bgImg"></div>
      <div className="profile"></div>
    </div>
  );
}

export default UserProfile;
