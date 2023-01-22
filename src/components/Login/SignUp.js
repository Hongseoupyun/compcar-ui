import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const go = () => {
    navigate('/SignIn');
  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [rePw, setRePw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [rePwValid, setRePwValid] = useState(false);
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

  const checkName = (e) => {
    setName(e.target.value);
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

  const checkRePw = (e) => {
    setRePw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setRePwValid(true);
    } else {
      setRePwValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && pwValid && rePwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="signUp">
      <div className="signUpbgImg"></div>
      <div className="page">
        <div className="logo">
          <img
            className="logoImg"
            src={require('assets/logo.png')}
            alt="logo"
          />
        </div>

        <div className="loginCard">
          <div className="btn1">
            <p className="up">Sign Up</p>
            <p className="in" onClick={go}>
              Sign In
            </p>
          </div>
          <div className="contentsWrap">
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
            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="Full Name(First Name and Last Name)"
                value={name}
                onChange={checkName}
              />
            </div>
            <div className="inputWrap" style={{ marginTop: '26px' }}>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={pw}
                onChange={checkPw}
              />
            </div>
            <div className="inputWrap" style={{ marginTop: '26px' }}>
              <input
                type="password"
                className="input"
                placeholder="Re-type Password"
                value={rePw}
                onChange={checkRePw}
              />
            </div>
            <div className="errorMessage">
              {!pwValid && pw.length > 0 && (
                <div>Please enter correct password.</div>
              )}
            </div>

            <div>
              <button
                onClick="onClickConfirmBtn"
                disabled={notAllow}
                className="button"
              >
                {' '}
                Create an Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
