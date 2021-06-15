import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


import userData from '../utils/userData.json';

const loginState = {
  email: "",
  password: "",
};

const LoginComp = ({ setView }) => {
  const history = useHistory();

  const [loginForm, setLoginForm] = useState(loginState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onLogIn = (evt) => {
    evt.preventDefault();

    if (loginForm.email === "" || loginForm.password === "") {
      alert("Please enter your details to continue!");
    } else if (loginForm.email !== userData[0].email) {
      alert("Incorrect email! Try again");
    } else if (loginForm.password !== userData[0].password) {
      alert("Incorrect password! Try again");
    } else {
      history.push("/dashboard");
    }
  };

  return (
    <Wrapper className="">
      <div className="content">
        <div className="wrapper">
          <div className="intro">
            <h5 className="font-weight-bold">Welcome Back</h5>
            <p className="font-smaller text-muted m-0">
              Sign in to your account by filling the form below.
            </p>
          </div>
          <form className="mt-3">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <button
                onClick={onLogIn}
                className="btn btn-block text-center btn-primary"
              >
                SIGN IN
              </button>
            </div>
            <p className="mt-3  text-center">
              Don't have an account yet ?{" "}
              <a href="#!" className="c-hand" onClick={setView}>
                Sign Up
              </a>
            </p>

            <div className="mt-4 text-center">
              <small>
                Or <br /> Sign in with
              </small>

              <div className="d-flex justify-content-center mt-3">
                <img
                  src="/images/facebook-circle.svg"
                  alt=""
                  className="mx-3"
                />
                <img src="/images/google-circle.svg" alt="" className="mx-3" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginComp;

const Wrapper = styled.div`
  height: inherit;
  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      width: 100%;
      max-width: 500px;
      background-color: #fff;
      padding: 2rem;
      line-height: 1.625rem;
    }
  }
`;
