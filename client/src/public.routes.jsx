import React from "react";
import { Switch, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Footer from "./public/Footer";
import Navbar from "./public/Navbar";
import Home from "./public/home/Home";
import Page from "./public/Page";
import Knowledge from "./public/knowledge-base/knowledge";
import ELearning from "./public/e-learning/elearning";
// import Advisors from "./advisor/kno";
import Login from "./public/Login";
import { ForgotPassword, ResetPssword } from "./public/forgot-password";
import { AdvisorCategories, AllAdvisors } from "./advisor/advisors";
import SingleAdvisor from "./advisor/single_advisor";
import AdminLogin from "./dashboards/adminLogin";
import Feedback from "./public/feedback";
import { FPAdvisorRegister } from "./public/login_register/advisorRegistor";
import { FPAdvisorLogin } from "./public/login_register/advisor_login";
import { FPClientRegister } from "./public/login_register/client_registor";
import { FPClientLogin } from "./public/login_register/client_login";
import { SinglePost } from "public/e-learning/elearning";
import { getRole } from "utils/jwt";
import Swal from "sweetalert2";
import { SingleNews } from "public/News";
import { RupeeBoss } from "public/Pages/Rupeeboss";
// import VideoCall from "./public/videoCall";

const PublicRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/checkminisheet" component={CheckMS} />
        <Route exact path="/rupeeboss" component={RupeeBoss} />
        <Route exact path="/news/:guid" component={SingleNews} />
        <Route exact path="/categories/:slug" component={AllAdvisors} />
        <Route exact path="/categories" component={AdvisorCategories} />
        {/* <Route exact path="/videocall" component={VideoCall} /> */}
        {/* <Route exact path="/videocall/:id" component={VideoCall} /> */}
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/clientLogin" component={FPClientLogin} />
        <Route exact path="/clientRegister" component={FPClientRegister} />
        <Route exact path="/advisorLogin" component={FPAdvisorLogin} />
        <Route exact path="/advisorRegister" component={FPAdvisorRegister} />
        <Route exact path="/knowledge-base" component={Knowledge} />
        <Route exact path="/e-learning" component={ELearning} />
        <Route exact path="/post/:slug" component={SinglePost} />
        <Route exact path="/feedback/:id" component={Feedback} />
        <Route exact path="/page/:slug" component={Page} />
        <Route exact path="/advisors/:username" component={SingleAdvisor} />
        {/* <Route exact path="/advisors" component={Advisors} /> */}
        <Route exact path="/forgot-password/:role" component={ForgotPassword} />
        <Route exact path="/reset/:role/:token" component={ResetPssword} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={AdvisorCategories} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

const CheckMS = ({ history }) => {
  useEffect(() => {
    const user = getRole();
    !user &&
      Swal.fire({
        icon: "error",
        title: "Lgoin Required",
        confirmButtonText: "Ok",
      }).then((value) => history.push("/login"));
    user && history.push("/client/minisheet");
  });
  return <div>check minisheet</div>;
};

export default PublicRoutes;
