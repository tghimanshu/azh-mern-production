import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Footer from "./public/Footer";
import Navbar from "./public/Navbar";
import Home from "./public/home/Home";
import Page from "./public/Page";
import Knowledge from "./public/knowledge-base/knowledge";
import ELearning from "./public/e-learning/elearning";
// import Advisors from "./advisor/kno";
import Login from "./public/Login";
import { ForgotPassword, ResetPssword } from "./public/forgot-password";
import Advisors from "./advisor/advisors";
import SingleAdvisor from "./advisor/single_advisor";
import AdminLogin from "./dashboards/adminLogin";
import Feedback from "./public/feedback";

const PublicRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/knowledge-base" component={Knowledge} />
        <Route exact path="/e-learning" component={ELearning} />
        <Route exact path="/page/:slug" component={Page} />
        <Route exact path="/advisors/:username" component={SingleAdvisor} />
        <Route exact path="/feedback/:id" component={Feedback} />
        <Route exact path="/advisors" component={Advisors} />
        <Route exact path="/forgot-password/:role" component={ForgotPassword} />
        <Route exact path="/reset/:role/:token" component={ResetPssword} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={Advisors} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default PublicRoutes;
