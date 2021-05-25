import { Fragment, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import SectionTitle from "../advisor/sectionTitle";
import { getRole } from "../utils/jwt";
import { ClientLogin } from "./login_register/client_login";
import { ClientRegistor } from "./login_register/client_registor";

function Login(props) {
  const [isRegister, setIsregister] = useState(false);
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
          <div className="col-12 col-lg-7">
            <Card>
              <Card.Header>
                <Card.Title as="h1" className="text-center font-weight-bold">
                  Let's achieve your personal finance together
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-unstyled">
                  <ListGroup.Item>
                    Get Access to comprehensive dashboard for your Financial
                    plan. Personalise it,track it, Plan better and Crush your
                    financial goals
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Get Invite-only access to Live webinars on topics such as
                    Reducing debts, Investing wisely, How to protect your
                    portfolio etc to boost your financial health
                  </ListGroup.Item>
                  <ListGroup.Item>
                    QnA sessions addressing your all financial queries sorted by
                    an Industry expert, From how do I select an insurance to how
                    can I save more. Just Ask and you shall have the answers.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Your one stop solution to all your financial requirements,
                    From insurance, loans , to portfolio management services
                    etc.{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Get access to Finest advisors in the industry and take your
                    investment journey to a next level
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-lg-5">
            <Card>
              <Card.Header>
                <Card.Title as="h1" className="text-center font-weight-bold">
                  User Login
                </Card.Title>
              </Card.Header>
              <Card.Body>
                {!isRegister && (
                  <>
                    <ClientLogin history={props.history} />
                    <button
                      onClick={() => setIsregister(true)}
                      className="btn btn-link mx-auto d-block"
                    >
                      New here, Sign Up Now.
                    </button>
                  </>
                )}
                {isRegister && (
                  <>
                    <ClientRegistor history={props.history} />
                    <button
                      onClick={() => setIsregister(false)}
                      className="btn btn-link mx-auto d-block"
                    >
                      Already Register, Login Now
                    </button>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
