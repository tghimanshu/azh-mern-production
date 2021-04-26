import React, { useState, useEffect } from "react";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";
import {
  Accordion,
  Card,
  Col,
  Container,
  Container as div,
  Form,
  Row,
} from "react-bootstrap";
import { successAlert } from "../../utils/alerts";
import StepsNav from "./steps_nav";

const Personal = ({ history }) => {
  const [alert, setalert] = useState("");
  const [pers_details, set_pers_details] = useState({
    self: {
      name: "",
      dob: "",
      contact: "",
      email: "",
      profdetails: "",
    },
    spouse: {
      name: "",
      dob: "",
      contact: "",
      email: "",
      profdetails: "",
    },
    childrens: [{ name: "", dob: "" }],
  });
  const [havingSpouse, setHavingSpouse] = useState(false);
  const [havingChild, setHavingChild] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const { data } = await http.get("/client/" + userJwt._id);
        setHavingSpouse(
          data.personal_details.spouse.name === "" ? false : true
        );
        setHavingChild(
          data.personal_details.childrens &&
            data.personal_details.childrens.length !== 0 &&
            true
        );
        set_pers_details({
          self: data.personal_details.self,
          spouse: data.personal_details.spouse,
          childrens: data.personal_details.childrens,
        });
      } catch (error) {}
    };
    getUser();
  }, []);
  const StepOneSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = getRole();
      const user = await http.get("/client/" + res._id);
      user.personal_details = pers_details;
      await http.put("/client/" + res._id, user);
      setalert(
        successAlert("Personal Details Updated Successfully!", setalert)
      );
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
      history.push("/client/investment");
    } catch (error) {
      // console.log(error);
    }
  };

  const addChild = () => {
    const add = { ...pers_details };
    add.childrens = [...pers_details.childrens, { name: "", dob: "" }];
    set_pers_details(add);
  };

  return (
    <Container className="wizard wizard-success my-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={1} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Your Life Activities
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {alert}
          <Row>
            <h4 className="font-italic col-12">Self</h4>
            <Col lg={8}>
              <Form.Group>
                <label>Full Name</label>
                <Form.Control
                  value={pers_details.self.name}
                  onChange={(e) => {
                    const demo = { ...pers_details };
                    demo.self.name = e.target.value;
                    set_pers_details(demo);
                  }}
                  maxLength="100"
                  type="text"
                  required={true}
                  className="form-control"
                  placeholder="Enter Full Name"
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group>
                <label>Date Of Birth</label>
                <Form.Control
                  value={pers_details.self.dob}
                  onChange={(e) => {
                    const demo = { ...pers_details };
                    demo.self.dob = e.target.value;
                    set_pers_details(demo);
                  }}
                  maxLength="100"
                  type="date"
                  required={true}
                  className="form-control"
                  placeholder="Date Of Birth"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <label>Telephone Number: </label>
                <Form.Control
                  value={pers_details.self.contact}
                  onChange={(e) => {
                    const demo = { ...pers_details };
                    demo.self.contact = e.target.value;
                    set_pers_details(demo);
                  }}
                  maxLength="100"
                  type="number"
                  required={true}
                  className="form-control"
                  placeholder="Enter Telephone Number"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <label>E-Mail: </label>
              <Form.Control
                value={pers_details.self.email}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self.email = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="email"
                required={true}
                className="form-control"
                placeholder="Enter E-Mail"
              />
            </Col>
            <Col>
              <Form.Group>
                <label>Profession Details: </label>
                <Form.Control
                  value={pers_details.self.profdetails}
                  onChange={(e) => {
                    const demo = { ...pers_details };
                    demo.self.profdetails = e.target.value;
                    set_pers_details(demo);
                  }}
                  type="text"
                  required={true}
                  className="form-control"
                  placeholder="Enter Profession Details"
                />
              </Form.Group>
            </Col>
          </Row>
          {!havingSpouse && (
            <button
              className="btn btn-info"
              onClick={() => setHavingSpouse(true)}
            >
              Have A Spouse
            </button>
          )}
          {havingSpouse && (
            <React.Fragment>
              <form className="row spouse">
                <h5 className="font-italic col-12">spouse</h5>
                <div className="form-group col-12 col-lg-8">
                  <label className="spouse-name">Full Name</label>
                  <Form.Control
                    value={pers_details.spouse.name}
                    onChange={(e) => {
                      const demo = { ...pers_details };
                      demo.spouse.name = e.target.value;
                      set_pers_details(demo);
                    }}
                    maxLength="100"
                    type="text"
                    required={true}
                    className="form-control"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="form-group col-12 col-lg-4">
                  <label className="spouse-dob">Date Of Birth</label>
                  <Form.Control
                    value={pers_details.spouse.dob}
                    onChange={(e) => {
                      const demo = { ...pers_details };
                      demo.spouse.dob = e.target.value;
                      set_pers_details(demo);
                    }}
                    maxLength="100"
                    type="date"
                    required={true}
                    className="form-control"
                    placeholder="Date Of Birth"
                  />
                </div>
                <div className="form-group col-12 col-lg-6">
                  <label className="spouse-number">Telephone Number: </label>
                  <Form.Control
                    value={pers_details.spouse.contact}
                    onChange={(e) => {
                      const demo = { ...pers_details };
                      demo.spouse.contact = e.target.value;
                      set_pers_details(demo);
                    }}
                    maxLength="100"
                    type="number"
                    required={true}
                    className="form-control"
                    placeholder="Enter Telephone Number"
                  />
                </div>
                <div className="form-group col-12 col-lg-6">
                  <label className="spouse-email">E-Mail: </label>
                  <Form.Control
                    value={pers_details.spouse.email}
                    onChange={(e) => {
                      const demo = { ...pers_details };
                      demo.spouse.email = e.target.value;
                      set_pers_details(demo);
                    }}
                    maxLength="100"
                    type="email"
                    required={true}
                    className="form-control"
                    placeholder="Enter E-Mail"
                  />
                </div>
                <div className="form-group col-12">
                  <label className="spouse-prof-details">
                    Professional Details:{" "}
                  </label>
                  <Form.Control
                    value={pers_details.spouse.profdetails}
                    onChange={(e) => {
                      const demo = { ...pers_details };
                      demo.spouse.profdetails = e.target.value;
                      set_pers_details(demo);
                    }}
                    type="text"
                    required={true}
                    className="form-control"
                    placeholder="Enter Professional Details"
                  />
                </div>
              </form>
              {!havingChild && (
                <button
                  className="btn btn-info"
                  onClick={() => setHavingChild(true)}
                >
                  You Have Childrens?
                </button>
              )}
              {havingChild && (
                <React.Fragment>
                  <Accordion defaultActiveKey="1">
                    {pers_details.childrens &&
                      pers_details.childrens.map((child, i) => {
                        return (
                          <Card
                            key={"goal_" + i}
                            // style={{ marginBottom: "0px", paddingBottom: "15px" }}
                          >
                            <Accordion.Toggle as={Card.Header} eventKey={i + 1}>
                              Child {i + 1}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i + 1}>
                              <Card.Body className="row">
                                <div className="form-group col-12 col-lg-8">
                                  <label>Full Name</label>
                                  <Form.Control
                                    value={child.name}
                                    onChange={(e) => {
                                      const demo = [...pers_details.childrens];
                                      demo[i].name = e.target.value;
                                      const data = { ...pers_details };
                                      data.childrens = demo;
                                      set_pers_details(data);
                                    }}
                                    maxLength="100"
                                    type="text"
                                    required={true}
                                    className="form-control"
                                    placeholder="Enter Full Name"
                                  />
                                </div>
                                <div className="form-group col-12 col-lg-4">
                                  <label className="child-1-dob">
                                    Date Of Birth
                                  </label>
                                  <Form.Control
                                    value={child.dob}
                                    onChange={(e) => {
                                      const demo = [...pers_details.childrens];
                                      demo[i].dob = e.target.value;
                                      const data = { ...pers_details };
                                      data.childrens = demo;
                                      set_pers_details(data);
                                    }}
                                    maxLength="100"
                                    type="date"
                                    required={true}
                                    className="form-control"
                                    placeholder="Date Of Birth"
                                  />
                                </div>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        );
                      })}
                  </Accordion>
                  <button
                    className="btn btn-fill btn-success mx-2 my-3"
                    onClick={addChild}
                    type="button"
                  >
                    Have Another Child
                  </button>
                </React.Fragment>
              )}
            </React.Fragment>
          )}

          <div className="d-flex justify-content-end">
            <button
              to="/client/income"
              className="btn btn-fill btn-primary mx-2"
              onClick={StepOneSubmit}
              type="submit"
            >
              Save &amp; Next
            </button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Personal;
