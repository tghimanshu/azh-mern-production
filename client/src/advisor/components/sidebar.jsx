import http from "../../utils/http";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRole } from "../../utils/jwt";
import { logout } from "../../utils/logout";

const Sidebar = () => {
  const [username, Setusername] = useState("User");
  useEffect(() => {
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const user = await http.get("/advisor/" + userJwt._id);
        Setusername(user.data.username);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content ">
        <Link className="sidebar-brand" to="/">
          <span className="align-middle">Advisor Zaroori Hai</span>
        </Link>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Main</li>
          <li className="sidebar-item">
            <Link to="/advisor" className="sidebar-link">
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/advisor/booking" className="sidebar-link">
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">Bookings</span>
            </Link>
          </li>
        </ul>

        <div className="sidebar-bottom d-none d-lg-block">
          <div className="media">
            <div className="media-body d-flex justify-content-between">
              <h5 className="mb-1">{username}</h5>
              <div className="cursor-pointer" onClick={logout}>
                <i className="fas fa-sign-out-alt text-danger"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
