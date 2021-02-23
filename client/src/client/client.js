import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getRole } from "../utils/jwt";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import Personal from "./pages/personal";
import Investment from "./pages/investments";
import Income from "./pages/income";
import Expense from "./pages/expenses";
import Goal from "./pages/goals";
import Bookings from "./pages/bookings";

import "./dashboard.script";
import "./dashboard.css";
import Insurances from "./pages/insurances";
import Sheet from "./pages/sheet";

const Client = ({ history }) => {
  useEffect(() => {
    try {
      const user = getRole();
      if (user.role !== "client") history.push("/login");
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
            <Route path="/client/sheet" component={Sheet} />
            <Route path="/client/personal" component={Personal} />
            <Route path="/client/investment" component={Investment} />
            <Route path="/client/insurance" component={Insurances} />
            <Route path="/client/income" component={Income} />
            <Route path="/client/expense" component={Expense} />
            <Route path="/client/goal" component={Goal} />
            <Route path="/client/booking" component={Bookings} />
            <Route exact path="/client" component={Profile} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Client;
