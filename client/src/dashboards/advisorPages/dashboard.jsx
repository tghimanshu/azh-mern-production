/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import http from "../../utils/http";
import { Link } from "react-router-dom";
import { dangerAlert } from "../../utils/alerts";
// import "react-quill/dist/quill.snow.css";

// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";
import config from "../../utils/config";
import Recommendation from "./bookings";

function AdvisorDashboard({ history }) {
  const [user, setUser] = useState({
    isApproved: true,
    _id: "",
    username: "",
    name: "",
    email: "",
    contact: 0,
    experience: 0,
    sebi_no: "",
    expertise: "",
    location: "",
    profile_pic: "",
    summary: "",
    recc_amt: 0,
  });
  const [recc, setRecc] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const { data } = await http.get("/advisor/" + userJwt._id);
        if (!data.profileCompleted) history.push("/advisor/completeprofile");
        const results = await http.get("/booking/advisor/" + userJwt._id);
        const filteredBookings = results.data.filter(
          (d) => d.client_id !== null
        );
        setRecc(filteredBookings);
        setUser(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, [history]);
  return (
    <Container fluid>
      {!user.isApproved
        ? dangerAlert("Your Profile is yet to be approved!")
        : ""}

      <Row>
        <Col md="8">
          <Recommendation history={history} />
        </Col>
        <Col md="4">
          <Card className="card-user">
            <Card.Body>
              <div className="text-center">
                <img
                  src={config.apiEndPoint + user.profile_pic}
                  alt={user.name}
                  style={{ width: "150px" }}
                />
                <h3 className="title text-dark font-weight-bold mt-1">
                  {user.name}
                </h3>
                <p className="description">
                  {user.username}
                  <br />
                  {user.about_me === ""
                    ? "Your Expertise Here!"
                    : user.expertise}
                </p>
              </div>
              <div>
                <Link to="/advisor/profile" className="btn-block btn btn-info">
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

export default AdvisorDashboard;
