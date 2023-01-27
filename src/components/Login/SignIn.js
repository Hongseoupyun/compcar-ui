import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const go = () => {
    navigate("/SignUp");
  };

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const checkEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const checkPw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const signInUser = async () => {
    try {
      const response = await axios.post(
        "https://compcar-api.onrender.com/api/user/login",
        {
          email: email,
          password: pw,
        }
      );
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="signIn">
      <div className="signInbgImg"></div>
      <div className="page">
        <div className="logo">
          <img
            className="logoImg"
            src={require("assets/logo.png")}
            alt="logo"
          />
        </div>

        <div className="loginCard">
          <div className="btn1">
            <p className="up1" onClick={go}>
              Sign Up
            </p>
            <p className="in1">Sign In</p>
          </div>
          <div className="contentsWrap_1">
            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="Email address"
                value={email}
                onChange={checkEmail}
              />
            </div>
            <div className="errorMessage">
              {!emailValid && email.length > 0 && (
                <div>Please enter correct email.</div>
              )}
            </div>
            <div className="inputWrap" style={{ marginTop: "26px" }}>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={pw}
                onChange={checkPw}
              />
            </div>
            <div className="errorMessage">
              {!pwValid && pw.length > 0 && (
                <div>Please enter correct password.</div>
              )}
            </div>

            <div>
              <button
                onClick={signInUser}
                disabled={notAllow}
                className="button"
              >
                {" "}
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
