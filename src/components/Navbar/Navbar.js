import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const go = () => {
    navigate("/SignIn");
  };
  
  return (
    <div className="navbar-container" data-testid="navbar-div">
      <div className="img-wrapper">
        <img className="logo" src={require("assets/logo.png")} alt="logo" />
      </div>
      <div className="content-wrapper">
        <div className="find-a-car" data-testid="content">
          Find a car
        </div>
        <div className="deals" data-testid="content">
          Deals
        </div>
        <div className="contact" data-testid="content">
          Contact
        </div>
        <button className="sign-in" data-testid="content" onClick={go}>
          Sign in
        </button>
      </div>
    </div>
  );
}
