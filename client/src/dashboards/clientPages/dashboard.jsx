import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import { Link } from "react-router-dom";
// import { dangerAlert } from "../../utils/alerts";
import "react-quill/dist/quill.snow.css";

// react-bootstrap components
import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import Recommendation from "./bookings";
import { getRole } from "../../utils/jwt";
import { getCompletionStatus } from "../../utils/logout";

function ClientDashboard({ history }) {
  const [user, setUser] = useState({
    address: "",
    city: "",
    country: "",
    postalCode: "",
    about_me: "",
    _id: "",
    username: "",
    name: "",
    email: "",
    contact: 0,
  });
  // const [recc, setRecc] = useState(null);
  const [completionState, setCompletionState] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const { data } = await http.get("/client/" + userJwt._id);
        // const results = await http.get("/booking/client/" + userJwt._id);
        // const filteredRecc = results.data.filter((d) => d.advisor_id !== null);
        // setRecc(filteredRecc);
        setUser(data);
        // let status = 0;
        // status += data.name !== 0 ? 10 : 0;
        // status += data.personal_details.self.name !== "" ? 15 : 0;

        // status += data.goals.length !== 0 && data.goals[0].goal !== "" ? 15 : 0;
        // status +=
        //   data.investments.length !== 0 &&
        //   !data.haveInvestments &&
        //   data.investments[0].goal !== 0
        //     ? 15
        //     : 0;

        // status +=
        //   data.insurances.length !== 0 &&
        //   !data.haveInsurances &&
        //   data.insurances[0].goal !== 0
        //     ? 15
        //     : 0;

        // status += data.income.inc_self !== 0 ? 15 : 0;
        // status += data.expenses.monthly.groceries !== 0 ? 15 : 0;
        const status = getCompletionStatus(data);
        setCompletionState(status);
      } catch (error) {}
    };
    getUser();
  }, [history]);
  return (
    <Container fluid>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header as="h4">
              Profile Status: {completionState.state}
            </Card.Header>
            <Card.Body>
              <ProgressBar animated now={completionState.percent} />
            </Card.Body>
            <Card.Footer>
              Completing your profile helps Advisors provide more accurate
              recommendation.
            </Card.Footer>
          </Card>
          <Recommendation history={history} />
        </Col>
        <Col md="4">
          <Card className="card-user">
            <Card.Body>
              <div className="text-center">
                <h3 className="title text-dark font-weight-bold mt-1">
                  {user.name}
                </h3>
                <p className="description">
                  {user.username}
                  <br />
                </p>
              </div>
              <div>
                <Link to="/client/profile" className="btn-block btn btn-info">
                  Edit Profile
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ClientDashboard;
