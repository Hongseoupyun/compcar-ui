import React from "react";
import Footer from "components/Footer/Footer";
import "./ContactUs.scss";
export default function ContactUs() {
  return (
    <>
      <div className="contact-us" data-testid = "contact-us-page">
        <div className="meet-our-team">MEET OUR TEAM</div>
        <div className="members-img-container">
          <div className="members-img-wrapper" data-testid = "img-container">
            <img
              id="contact-us-img"
              alt="sehwan"
              src={require("assets/Sehwan.jpg")}
            />
            <div className="name">
              <b>Sehwan Oh</b>
            </div>
            <div className="role">
              <i>Lead Developer</i>
            </div>
          </div>
          <div className="members-img-wrapper">
            <img
              id="contact-us-img"
              alt="anna"
              src={require("assets/anna.jpg")}
            />
            <div className="name">
              <b>Anna Shin</b>
            </div>
            <div className="role">
              <i>FE/UI Developer</i>
            </div>
          </div>
          <div className="members-img-wrapper">
            <img
              id="contact-us-img"
              alt="hongseoup"
              src={require("assets/simon.jpg")}
            />
            <div className="name">
              <b>Simon Yun</b>
            </div>
            <div className="role">
              <i>FE/UI Developer</i>
            </div>
          </div>
          <div className="members-img-wrapper">
            <img
              id="contact-us-img"
              alt="jay"
              src={require("assets/Jay.jpg")}
            />
            <div className="name">
              <b>Jay Choi</b>
            </div>
            <div className="role">
              <i>BE Developer</i>
            </div>
          </div>
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
      <Footer />
    </>
  );
}
