import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container" data-testid="navbar-div">
      <div className="img-wrapper">
        <Link to="/">
          <img className="titleLogo" src={require("assets/logo.png")} alt="logo" />
        </Link>
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
        <Link className="sign-in" data-testid="content" to="/SignIn">
          Sign in
        </Link>
      </div>
    </div>
  );
}
