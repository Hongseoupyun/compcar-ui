import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container" data-testid="navbar-div">
      <div className="img-wrapper">
        <Link to="/">
          <img
            className="titleLogo"
            src={require("assets/logo.png")}
            alt="logo"
          />
        </Link>
      </div>
      <div className="content-wrapper">
        <div data-testid="content">
          <Link
            className="find-a-car"
            to="/SearchPage"
            spy={true}
            offset={50}
            duration={500}
          >
            Find a car
          </Link>
        </div>
        <div data-testid="content">
          <Link
            className="deals"
            to="/CardApp"
            spy={true}
            offset={50}
            duration={500}
          >
            Deals
          </Link>
        </div>
        <div data-testid="content">
          <Link
            className="contact"
            to="/ContactUs"
            spy={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <Link className="sign-in" data-testid="content" to="/SignIn">
          Sign in
        </Link>
      </div>
    </div>
  );
}
