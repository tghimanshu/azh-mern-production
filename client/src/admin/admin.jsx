import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { getRole } from "../utils/jwt";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./dashboard.css";
import Clients from "./pages/clients";
import Advisors from "./pages/advisors";
import Pages from "./pages/pages";
import Bookings from "./pages/bookings";
import { getRole } from "../utils/jwt";

const Admin = ({ history }) => {
  useEffect(() => {
    try {
      const user = getRole();
      if (user.role !== "admin") history.push("/adminLogin");
    } catch (error) {
      console.log(error);
      history.push("/adminLogin");
    }
  }, [history]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <Switch>
            {/* <Route exact path="/admin/" component={Profile} /> */}
            <Route exact path="/admin/advisors" component={Advisors} />
            <Route exact path="/admin/clients" component={Clients} />
            <Route exact path="/admin/pages" component={Pages} />
            <Route exact path="/admin/bookings" component={Bookings} />
            <Redirect from="/admin" to="/admin/advisors" />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
