import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import http from "../../utils/http";

// react-bootstrap components
import {
  // Badge,
  Button,
  Card,
  Form,
  // Navbar,
  // Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { dangerAlert, successAlert } from "../../utils/alerts";
import config from "../../utils/config";

function Profile() {
  const [alert, setalert] = useState("");
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
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/advisor/" + userJwt._id);
        setUser(user.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await http.put("/advisor/" + user._id, user);
    setalert(successAlert("Profile Updated Successfully!", setalert));
  };

  return (
    <>
      <Container fluid>
        {!user.isApproved
          ? dangerAlert("Your Profile is yet to be approved!")
          : ""}
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {alert}
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Username (disabled)</label>
                        <Form.Control
                          value={user.username ? user.username : ""}
                          disabled
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          value={user.email ? user.email : ""}
                          placeholder="Email"
                          type="email"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          value={user.name ? user.name : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.name = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Contact</label>
                        <Form.Control
                          value={user.contact ? user.contact : 0}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.contact = parseInt(e.target.value);
                            setUser(demo);
                          }}
                          placeholder="Contact"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>experience</label>
                        <Form.Control
                          value={user.experinece ? user.experience : 0}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.experinece = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="Experience"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>SEBI Registration Number</label>
                        <Form.Control
                          value={user.sebi_no ? user.sebi_no : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.sebi_no = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="SEBI Registration Number"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>expertise</label>
                        <Form.Control
                          value={user.expertise ? user.expertise : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.expertise = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="Expertise"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Location</label>
                        <Form.Control
                          value={user.location ? user.location : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.location = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="Location"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <Card.Body>
                <div className="text-center">
                  <img
                    className="img-fluid  mb-2"
                    style={{ width: "120px", height: "120px" }}
                    src={config.apiEndPoint + user.profile_pic}
                    alt=""
                  />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h5 className="title text-dark font-weight-bold">
                      {user.name}
                    </h5>
                  </a>
                  <p className="description">{user.username}</p>
                </div>
                <p className="description text-center">
                  {user.about_me === ""
                    ? "Your Expertise Here!"
                    : user.expertise}
                </p>
              </Card.Body>
              {/* <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
