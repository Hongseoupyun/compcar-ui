import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar-container" data-testid="navbar-div">
      <a href="/">
        <div className="img-wrapper">
          <img className="logo" src={require("assets/logo.png")} alt="logo" />
        </div>
      </a>
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
        <button className="sign-in" data-testid="content">
          Sign in
        </button>
      </div>
    </div>
  );
}
