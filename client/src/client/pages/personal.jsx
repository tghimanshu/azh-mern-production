import React, { useState, useEffect } from "react";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";
import {
  Accordion,
  Card,
  Container as div,
  Form,
  Link as button,
} from "react-bootstrap";
import { dangerAlert, successAlert } from "../../utils/alerts";
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
    childrens: [
      {
        name: "",
        dob: "",
        contact: "",
        email: "",
        profdetails: "",
      },
    ],
  });
  const [havingSpouse, setHavingSpouse] = useState(false);
  const [havingChild, setHavingChild] = useState(false);

  const addChild = () => {
    const demo = { ...pers_details };
    demo.childrens = [
      ...demo.childrens,
      {
        name: "",
        dob: "",
        contact: "",
        email: "",
        profdetails: "",
      },
    ];
    set_pers_details(demo);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const user = await http.get("/client/" + userJwt._id);
        set_pers_details(user.data.personal_details);
      } catch (error) {
        console.log(error);
      }
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
      //   props.nextStep();
      setalert(
        successAlert("Personal Details Updated Successfully!", setalert)
      );
      history.push("/client/investment");
    } catch (error) {
      console.log(error);
    }
  };

  const HaveSpouse = () => {
    return (
      <React.Fragment>
        <div className="row spouse">
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
              name="spouse-name"
              id="spouse-name"
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
              name="spouse-dob"
              id="spouse-dob"
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
              name="spouse-number"
              id="spouse-number"
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
              name="spouse-email"
              id="spouse-email"
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
              name="spouse-prof-details"
              id="spouse-prof-details"
            />
          </div>
        </div>
        {!havingChild && (
          <button className="btn btn-info" onClick={() => setHavingChild(true)}>
            You Have Childrens?
          </button>
        )}
        {havingChild && (
          <React.Fragment>
            <Accordion defaultActiveKey="0">
              {pers_details.childrens.map((child, i) => {
                return (
                  <Card
                    key={"goal_" + i}
                    style={{ marginBottom: "0px", paddingBottom: "15px" }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                      Child {i + 1}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={String(i)}>
                      <Card.Body className="row">
                        <div className="form-group col-12 col-lg-8">
                          <label className="child-1-name">Full Name</label>
                          <Form.Control
                            value={child.name}
                            onChange={(e) => {
                              const demo = { ...pers_details };
                              demo.childrens[i].name = e.target.value;
                              set_pers_details(demo);
                            }}
                            maxLength="100"
                            type="text"
                            required={true}
                            className="form-control"
                            placeholder="Enter Full Name"
                            name="child-1-name"
                            id="child-1-name"
                          />
                        </div>
                        <div className="form-group col-12 col-lg-4">
                          <label className="child-1-dob">Date Of Birth</label>
                          <Form.Control
                            value={child.dob}
                            onChange={(e) => {
                              const demo = { ...pers_details };
                              demo.childrens[i].dob = e.target.value;
                              set_pers_details(demo);
                            }}
                            maxLength="100"
                            type="date"
                            required={true}
                            className="form-control"
                            placeholder="Date Of Birth"
                            name="child-1-dob"
                            id="child-1-dob"
                          />
                        </div>
                        <div className="form-group col-12 col-lg-6">
                          <label className="child-1-number">
                            Telephone Number:{" "}
                          </label>
                          <Form.Control
                            value={child.contact}
                            onChange={(e) => {
                              const demo = { ...pers_details };
                              demo.childrens[i].contact = e.target.value;
                              set_pers_details(demo);
                            }}
                            maxLength="100"
                            type="number"
                            required={true}
                            className="form-control"
                            placeholder="Enter Telephone Number"
                            name="child-1-number"
                            id="child-1-number"
                          />
                        </div>
                        <div className="form-group col-12 col-lg-6">
                          <label className="child-1-email">E-Mail: </label>
                          <Form.Control
                            value={child.email}
                            onChange={(e) => {
                              const demo = { ...pers_details };
                              demo.childrens[i].email = e.target.value;
                              set_pers_details(demo);
                            }}
                            maxLength="100"
                            type="email"
                            required={true}
                            className="form-control"
                            placeholder="Enter E-Mail"
                            name="child-1-email"
                            id="child-1-email"
                          />
                        </div>
                        <div className="form-group col-12">
                          <label className="child-1-prof-details">
                            Professional Details:{" "}
                          </label>
                          <Form.Control
                            value={child.profdetails}
                            onChange={(e) => {
                              const demo = { ...pers_details };
                              demo.childrens[i].profdetails = e.target.value;
                              set_pers_details(demo);
                            }}
                            type="text"
                            required={true}
                            className="form-control"
                            placeholder="Enter Professional Details"
                            name="child-1-prof-details"
                            id="child-1-prof-details"
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
    );
  };

  return (
    <div className="container mt-4  wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={1} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Your Life Activities
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {alert}
          <div className="row self">
            <h4 className="font-italic col-12">Self</h4>
            <div className="form-group col-12 col-lg-8">
              <label className="self-name">Full Name</label>
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
                name="self-name"
                id="self-name"
              />
            </div>
            <div className="form-group col-12 col-lg-4">
              <label className="self-dob">Date Of Birth</label>
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
                name="self-dob"
                id="self-dob"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="self-number">Telephone Number: </label>
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
                name="self-number"
                id="self-number"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="self-email">E-Mail: </label>
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
                name="self-email"
                id="self-email"
              />
            </div>
            <div className="form-group col-12">
              <label className="self-prof-details">Profession Details: </label>
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
                name="self-prof-details"
                id="self-prof-details"
              />
            </div>
          </div>
          {!havingSpouse && (
            <button
              className="btn btn-info"
              onClick={() => setHavingSpouse(true)}
            >
              Have A Spouse
            </button>
          )}
          {havingSpouse && <HaveSpouse />}

          <div className="d-flex justify-content-end">
            <button
              to="/client/income"
              className="btn btn-fill btn-primary mx-2"
              onClick={StepOneSubmit}
              type="button"
            >
              Save &amp; Next
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Personal;
