import React, { useEffect, useState } from "react";
import http from "utils/http";
import { Link } from "react-router-dom";
// import { dangerAlert } from "utils/alerts";
// import "react-quill/dist/quill.snow.css";
import ReactCanvasConfetti from "react-canvas-confetti";
import Swal from "sweetalert2";

// react-bootstrap components
import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import Recommendation from "./bookings";
import { getRole } from "utils/jwt";
import { getCompletionStatus } from "utils/logout";

function ClientDashboard({ history, location }) {
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
  const [confetti, setConfetti] = useState(false);
  const [completionState, setCompletionState] = useState([]);

  useEffect(() => {
    setConfetti(true);
    location.search === "?accreated=true" &&
      Swal.fire({
        icon: "success",
        text: "Look at you Taking wise decisions for your money, Welcome to Advisor Zaroori Hai Family",
      });
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
  }, [location]);

  const style = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 1000,
    top: 0,
    left: 0,
  };
  return (
    <Container fluid>
      {location.search === "?accreated=true" && (
        <ReactCanvasConfetti
          style={style}
          className={"yourClassName"}
          fire={confetti}
          onFire={() => console.log("wow")}
          particleCount={800}
          spread={400}
        />
      )}
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
