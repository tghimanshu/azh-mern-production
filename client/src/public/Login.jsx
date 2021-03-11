import { Fragment, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { getRole } from "../utils/jwt";
import { AdvisorRegistor } from "./login_register/advisorRegistor";
import { AdvisorLogin } from "./login_register/advisor_login";
import { ClientLogin } from "./login_register/client_login";
import { ClientRegistor } from "./login_register/client_registor";

function Login(props) {
  useEffect(() => {
    try {
      const role = getRole().role;
      switch (role) {
        case "advisor":
          props.history.push("/advisor");
          break;
        case "client":
          props.history.push("/client");
          break;
        case "admin":
          props.history.push("/admin");
          break;
        default:
          break;
      }
    } catch (err) {}
  }, [props]);
  return (
    <Fragment>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Login/Register</h1>
          </div>
        </section>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="login-form col-12 col-lg-6">
            <legend className="text-center">Login</legend>
            <Tabs defaultActiveKey="client" id="uncontrolled-tab-example">
              <Tab eventKey="client" title="Client">
                <ClientLogin history={props.history} />
              </Tab>
              <Tab eventKey="advisor" title="Advisor">
                <AdvisorLogin history={props.history} />
              </Tab>
            </Tabs>
          </div>
          <div className="register-form col-12 col-lg-6">
            <legend className="text-center">Register</legend>
            <Tabs defaultActiveKey="client" id="uncontrolled-tab-example">
              <Tab eventKey="client" title="Client">
                <ClientRegistor history={props.history} />
              </Tab>
              <Tab eventKey="advisor" title="Advisor">
                <AdvisorRegistor history={props.history} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
