/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/site-logo.png";
import { LoginModal } from "../utils/model";

function Navbar(props) {
  const [show, setShow] = useState(false);
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center nav-scrolled"
    >
      <div className="container d-flex align-items-center">
        <div className="logo mr-auto">
          <Link to="/">
            <img className="site-logo" src={logo} alt="" />
          </Link>
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li
              className={
                window.location.pathname.includes("categories")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/categories">Advisors</Link>
            </li>
            <li
              className={
                window.location.pathname.includes("about")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className={
                window.location.pathname.includes("financial-literacy")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/financial-literacy">Financial Literacy</Link>
            </li>
            <li
              className={
                window.location.pathname.includes("e-learning")
                  ? "active"
                  : undefined
              }
            >
              <Link to="/e-learning">E-Learning</Link>
            </li>
            <li
              className={
                window.location.pathname.includes("knowledge-base")
                  ? "active"
                  : undefined
              }
            >
              {/* <a onClick={() => setShow(true)}>Login/Register</a> */}
            </li>
            <li className="get-started">
              {localStorage.getItem("auth-token") ? (
                <Link to="/client">My Account</Link>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(true);
                  }}
                >
                  Login/Register
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <LoginModal show={show} handleClose={() => setShow(false)} />
    </header>
  );
}

export default Navbar;
