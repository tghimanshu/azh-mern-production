import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getRole } from "../utils/jwt";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { routes } from "./routes";

import "./dashboard.css";

const DashBoard = ({ history, location }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    try {
      const user = getRole();
      if (location.pathname.includes(user.role)) {
        setType(user.role);
      } else {
        location.pathname.includes("admin") && !user
          ? history.push("/adminlogin")
          : history.push("/login");
      }
    } catch (error) {
      history.push("/login");
    }
  }, [type, history, location]);

  return (
    <div className="wrapper">
      <Sidebar routes={routes} type={type} />
      <div className="main">
        <Navbar type={type} />
        <main className="content">
          {Object.keys(routes).map(
            (key) =>
              key === type && (
                <Switch key={key}>
                  {routes[key].map(({ path, component: Comp }) => {
                    return (
                      <Route key={path} exact path={path} component={Comp} />
                    );
                  })}
                  <Redirect from="/admin" to="/admin/advisors" />
                  <Redirect to="/advisors" />
                </Switch>
              )
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashBoard;
