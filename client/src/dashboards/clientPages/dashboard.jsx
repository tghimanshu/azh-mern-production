import React, { useEffect, useState } from "react";
import http from "utils/http";
import { Link } from "react-router-dom";
// import { dangerAlert } from "utils/alerts";
// import "react-quill/dist/quill.snow.css";

// react-bootstrap components
import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import Recommendation from "./bookings";
import { getRole } from "utils/jwt";
import { getCompletionStatus } from "utils/logout";

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
  const [completionState, setCompletionState] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const { data } = await http.get("/client/" + userJwt._id);

        setUser(data);
        const status = getCompletionStatus(data);
        setCompletionState(status);
      } catch (error) {}
    };
    getUser();
  }, []);

  console.log(completionState);

  return (
    <Container fluid>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <h4>Profile Status: {completionState.state}</h4>
              {completionState.remaining &&
                completionState.remaining.length !== 0 && (
                  <Link
                    to={"/client" + completionState.remaining[0].link}
                    className="ml-auto mr-0"
                  >
                    {completionState.remaining[0].title} +{" "}
                    {completionState.remaining[0].points}{" "}
                  </Link>
                )}
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
