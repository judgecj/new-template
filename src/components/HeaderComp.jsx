import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
  return (
    <Header>
      <nav className="container navbar">
        <NavLink to="/" className="nav-brand">
          <img src="/images/logo.svg" alt="" />
        </NavLink>

        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/auth" className="btn btn-primary">
              Get Started
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .nav-brand {
    img {
      width: 100%;
      max-width: 4rem;
    }
    @media screen and (max-width: 768px) {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .btn {
      padding: 0;
      cursor: pointer;
      &-primary {
        color: #ed918d;
        background-color: white;
      }
      &-outline-primary {
        border: 0;
      }
    }
  }
`;
