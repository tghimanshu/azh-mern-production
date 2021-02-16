import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";

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
  ProgressBar,
} from "react-bootstrap";
import { successAlert } from "../../utils/alerts";

function Profile() {
  const [alert, setalert] = useState("");
  const [completionState, setCompletionState] = useState(0);
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

  useEffect(() => {
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const { data } = await http.get("/client/" + userJwt._id);
        setUser(data);
        let status = 0;
        status += data.name !== 0 ? 10 : 0;
        status += data.personal_details.self.name !== "" ? 15 : 0;

        status += data.goals.length !== 0 && data.goals[0].goal !== "" ? 15 : 0;
        status +=
          data.investments.length !== 0 &&
          !data.haveInvestments &&
          data.investments[0].goal !== 0
            ? 15
            : 0;

        status +=
          data.insurances.length !== 0 &&
          !data.haveInsurances &&
          data.insurances[0].goal !== 0
            ? 15
            : 0;

        status += data.income.inc_self !== 0 ? 15 : 0;
        status += data.expenses.monthly.groceries !== 0 ? 15 : 0;
        setCompletionState(status);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await http.put("/client/" + user._id, user);
    setalert(successAlert("Profile Updated Successfully!", setalert));
  };

  const generateSheet = async (e) => {
    try {
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const userJwt = jwtDecode(jwt);
      await http.get("/client/sheet/" + userJwt._id);
      setalert(
        successAlert(
          "Financial Planning Sheet Generated Successfully!",
          setalert
        )
      );
    } catch (error) {}
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile {completionState}</Card.Title>
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
                          placeholder="Cotact"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          value={user.address ? user.address : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.address = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          value={user.city ? user.city : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.city = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          value={user.postalCode ? user.postalCode : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.postalCode = e.target.value;
                            setUser(demo);
                          }}
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          value={user.about_me ? user.about_me : ""}
                          onChange={(e) => {
                            const demo = { ...user };
                            demo.about_me = e.target.value;
                            setUser(demo);
                          }}
                          cols="80"
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
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
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h5 className="title text-dark font-weight-bold">
                      {user.name}
                    </h5>
                  </a>
                  <p className="description">{user.username}</p>
                </div>
                <p className="description text-center">
                  {user.about_me === ""
                    ? "Your Description Here!"
                    : user.about_me}
                </p>
                <div className="d-flex justify-content-between">
                  <small>Profile Status:</small>
                  <small>{completionState}%</small>
                </div>
                <ProgressBar
                  now={completionState}
                  label={`${completionState}%`}
                  srOnly
                  variant={
                    (completionState > 80 && "success") ||
                    (completionState > 50 &&
                      completionState < 80 &&
                      "warning") ||
                    (completionState < 50 && "danger")
                  }
                />
              </Card.Body>
              <hr></hr>
              <div className="button-container mb-3 mr-auto ml-auto">
                <Button
                  className="btn-success"
                  href="#pablo"
                  onClick={generateSheet}
                  variant="link"
                >
                  Generate Sheet
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
