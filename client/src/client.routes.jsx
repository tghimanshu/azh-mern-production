import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import jwtDecode from "jwt-decode";

// import "./client/assets/css/animate.min.css";
// import "./client/assets/css/light-bootstrap-dashboard-react.css";
// import "./client/assets/css/demo.css";

// import AdminLayout from "./client/layouts/Admin.js";
import { getRole } from "./utils/jwt";
// import Sidebar from "./client/components/Sidebar/Sidebar";
// import AdminNavbar from "./client/components/Navbars/AdminNavbar";
// import User from "./client/views/UserProfile";
// import FinancialPlanning from "./public/financial-planning";
// import Footer from "./client/components/Footer/Footer";

// import routes from "./client/routes";

const ClientRoutes = ({ history }) => {
  useEffect(() => {
    try {
      const user = getRole();
      console.log(user);
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  }, [history]);
  const mainPanel = React.useRef(null);

  return (
    <>
      {/* <div className="wrapper">
        <Sidebar color="black" routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
            <Route exact path="/planning" component={FinancialPlanning} />
            <Route exact path="/" component={User} />
          </div>
          <Footer />
        </div>
      </div> */}
    </>

    // <Switch>
    //   <Route path="/" render={(props) => <AdminLayout {...props} />} />
    // </Switch>
  );
};

export default ClientRoutes;
