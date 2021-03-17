/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/logout";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <a href="#" className="sidebar-toggle d-flex mr-2">
        <i className="hamburger align-self-center"></i>
      </a>

      <form className="form-inline d-none d-sm-inline-block">
        <input
          className="form-control form-control-no-border mr-sm-2"
          type="text"
          placeholder="Search projects..."
          aria-label="Search"
        />
      </form>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {props.type === "client" && (
            <li className="nav-item mr-2">
              <Link to="/advisors" className="btn btn-light btn-lg">
                Advisors
              </Link>
            </li>
          )}
          <li className="nav-item ">
            <button
              className="nav-link btn btn-danger text-light d-none d-sm-inline-block"
              onClick={logout}
            >
              <i className="fas fa-sign-out-alt mr-1"></i>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
