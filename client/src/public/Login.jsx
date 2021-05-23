import { Fragment, useEffect } from "react";
import SectionTitle from "../advisor/sectionTitle";
import { getRole } from "../utils/jwt";
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
      <SectionTitle
        title="Login/Register"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/login", name: "Login/Register", active: true },
        ]}
      />
      <div className="container mt-3">
        <div className="row">
          <div className="login-form col-12 col-lg-6">
            <legend className="text-center">Login</legend>
            <ClientLogin history={props.history} />
          </div>
          <div className="register-form col-12 col-lg-6">
            <legend className="text-center">Register</legend>
            <ClientRegistor history={props.history} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
