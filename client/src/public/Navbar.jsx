import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/site-logo.png";

function Navbar(props) {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo mr-auto">
          <Link to="/">
            <img className="site-logo" src={logo} alt="" />
          </Link>
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="<?php echo ($page_title == 'Advisors')?'active':''; ?>">
              <Link to="/advisors">Advisors</Link>
            </li>
            <li className="<?php echo ($page_title == 'About Us')?'active':''; ?>">
              <Link to="/page/about-us">About Us</Link>
            </li>
            <li className="<?php echo ($page_title == 'E-Learning')?'active':''; ?>">
              <Link to="/e-learning">E-Learning</Link>
            </li>
            <li className="<?php echo ($page_title == 'Knowledge Base')?'active':''; ?>">
              <Link to="/knowledge-base">Knowledge Base</Link>
            </li>
            <li className="get-started">
              {localStorage.getItem("auth-token") ? (
                <Link to="/client">My Account</Link>
              ) : (
                <Link to="/login">Login/Register</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
