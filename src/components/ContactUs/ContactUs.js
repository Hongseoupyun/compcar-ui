import React from "react";
import Footer from "../Footer/Footer";
import "./ContactUs.scss";
export default function ContactUs() {
  return (
    <>
      <div className="contact-us">
        <div className="meet-our-team">MEET OUR TEAM</div>
        <div className="members-img-container">
          <div className="members-img-wrapper">
            <img
              id="contact-us-img"
              alt="sehwan"
              src={require("/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/Sehwan.jpg")}
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
              src={require("/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/anna.jpg")}
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
              src={require("/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/simon.jpg")}
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
              src={require("/Users/hongseoupyun/Desktop/hongseoup/sideProjects/compcar-ui/src/assets/Jay.jpg")}
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
