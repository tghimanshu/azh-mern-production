import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import http from "../../utils/http";
import { Link } from "react-router-dom";
import { dangerAlert } from "../../utils/alerts";
import "react-quill/dist/quill.snow.css";

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
        <div className="col-12 col-sm-6 col-xl d-flex">
          <div className="card flex-fill">
            <div className="card-body py-4">
              <div className="media">
                <div className="d-inline-block mt-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-activity feather-lg text-warning"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="media-body">
                  <h3 className="mb-2">
                    {recc &&
                      recc.filter((r) => r.isApproved === "pending").length}
                  </h3>
                  <div className="mb-0">Pending Recommendations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl d-flex">
          <div className="card flex-fill">
            <div className="card-body py-4">
              <div className="media">
                <div className="d-inline-block mt-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-bag feather-lg text-danger"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="media-body">
                  <h3 className="mb-2">
                    {user &&
                      user.recc_change &&
                      user.recc_change.filter(
                        (rec) => rec.isApproved === "pending"
                      ).length}
                  </h3>
                  <div className="mb-0">Pending Requests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl d-flex">
          <div className="card flex-fill">
            <div className="card-body py-4">
              <div className="media">
                <div className="d-inline-block mt-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign feather-lg text-success"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="media-body">
                  <h3 className="mb-2">
                    ₹ {user.balance && user.balance.toFixed(2)}
                  </h3>
                  <div className="mb-0">Total Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl d-flex">
          <div className="card flex-fill">
            <div className="card-body py-4">
              <div className="media">
                <div className="d-inline-block mt-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign feather-lg text-success"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="media-body">
                  <h3 className="mb-2">₹ {user && user.recc_amt.toFixed(2)}</h3>
                  <div className="mb-0">Your Current Charges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <Col md="8">
          <Recommendation history={history} />
          <Card>
            <Card.Header>
              <Card.Title as="h4">Feedbacks</Card.Title>
            </Card.Header>
            <Card.Body>
              {user.feedbacks && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>FeedBack</td>
                    </tr>
                  </thead>
                  <tbody>
                    {user.feedbacks.map((fb, i) => (
                      <tr key={i}>
                        <td>{fb.client_id.name}</td>
                        <td>{fb.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Card.Body>
          </Card>
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
