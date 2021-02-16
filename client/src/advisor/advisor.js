import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getRole } from "../utils/jwt";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import ClientProfile from "./pages/clientProfile";

import "./dashboard.script";
import "./dashboard.css";
import Bookings from "./pages/bookings";

const Advisor = ({ history }) => {
  useEffect(() => {
    try {
      const user = getRole();
      if (user.role !== "advisor") history.push("/login");
    } catch (error) {
      // console.log(error);
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <Switch>
            <Route
              exact
              path="/advisor/:booking_id/:id"
              component={ClientProfile}
            />
            <Route exact path="/advisor" component={Profile} />
            <Route exact path="/advisor/booking" component={Bookings} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Advisor;
