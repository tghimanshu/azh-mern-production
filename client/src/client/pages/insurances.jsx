import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import { getRole } from "../../utils/jwt";
import http from "../../utils/http";
import { successAlert } from "../../utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Insurances = ({ history }) => {
  const [alert, setalert] = useState("");
  const [haveInsurances, setHaveInsurances] = useState(true);
  const [insurances, setInsurances] = useState([
    {
      CompanyName: "",
      SumInsured: 0,
      PremiumAmount: 0,
      CommencementDate: "",
      Tenure: 0,
      PolicyStatus: "",
      Proposer: "",
      PolicyNumber: "",
      Bonus: 0,
    },
  ]);
  const addInsurance = () => {
    setInsurances([
      ...insurances,
      {
        CompanyName: "",
        SumInsured: 0,
        PremiumAmount: 0,
        CommencementDate: "",
        Tenure: 0,
        PolicyStatus: "",
        Proposer: "",
        PolicyNumber: "",
        Bonus: "",
      },
    ]);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const user = await http.get("/client/" + userJwt._id);
        setInsurances(user.data.insurances);
        setHaveInsurances(user.data.haveInsurances);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);
  const StepFourSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = getRole();
      const user = await http.get("/client/" + res._id);
      user.insurances = insurances;
      user.haveInsurances = haveInsurances;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Investments Added Successfully!", setalert));
      history.push("/client/income");
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={3} />
      <Card>
        <Card.Header>
          <Card.Title className="font-weight-bold">Insurances</Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body p-3">
          <div className="form-check form-check-lg">
            <input
              type="checkbox"
              checked={!haveInsurances}
              onChange={(e) => setHaveInsurances(Boolean(!haveInsurances))}
              className="form-check-input"
              id="haveInvestments"
            />
            <label className="form-check-label" htmlFor="haveInvestments">
              I Don't Have Any Insurance
            </label>
          </div>
          {haveInsurances && (
            <form>
              <Accordion defaultActiveKey="0">
                {insurances.map((goal, i) => {
                  return (
                    <Card
                      key={"goal_" + i}
                      style={{ marginBottom: "0px", paddingBottom: "15px" }}
                    >
                      <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                        Insurance {i + 1}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={String(i)}>
                        <Card.Body className="row">
                          <Col md="4">
                            <Form.Group>
                              <label>Company Name</label>
                              <Form.Control
                                value={insurances[i].CompanyName}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.CompanyName = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="text"
                                placeholder="Enter Company Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>Sum Assured/Insured</label>
                              <Form.Control
                                value={insurances[i].SumInsured}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.SumInsured = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="number"
                                placeholder="Enter Sum Insured"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Premium Amount</label>
                              <Form.Control
                                value={insurances[i].PremiumAmount}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.PremiumAmount = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="number"
                                placeholder="Enter Premium Amount"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Commencement Date</label>
                              <Form.Control
                                value={insurances[i].CommencementDate}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.CommencementDate = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="date"
                                placeholder="Enter Commencement Date"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Tenure</label>
                              <Form.Control
                                value={insurances[i].Tenure}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.Tenure = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="number"
                                placeholder="Enter Tenure"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Policy Status</label>
                              <Form.Control
                                value={insurances[i].PolicyStatus}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.PolicyStatus = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="text"
                                placeholder="Enter Policy Status"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Proposer</label>
                              <Form.Control
                                value={insurances[i].Proposer}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.Proposer = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="text"
                                placeholder="Enter Proposer"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <Form.Label>PolicyNumber</Form.Label>
                              <Form.Control
                                defaultValue={insurances[i].PolicyNumber}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.PolicyNumber = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="text"
                                placeholder="Enter Policy Number"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Bonus</label>
                              <Form.Control
                                value={insurances[i].Bonus}
                                onChange={(e) => {
                                  const myGoal = insurances[i];
                                  myGoal.Bonus = e.target.value;
                                  const demo = [...insurances];
                                  demo[i] = myGoal;
                                  setInsurances(demo);
                                }}
                                type="number"
                                placeholder="Enter Bonus"
                              />
                            </Form.Group>
                          </Col>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
              </Accordion>
              <div className="row">
                <Col lg="6">
                  <button
                    className="btn btn-fill btn-success mx-2 my-3"
                    onClick={addInsurance}
                    type="button"
                  >
                    Add Insuarce
                  </button>
                </Col>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-end my-3">
            <Link
              to="/client/investment"
              className="btn btn-fill btn-dark mx-2"
              type="button"
            >
              Previous
            </Link>
            <button
              className="btn btn-fill btn-primary"
              onClick={StepFourSubmit}
              type="button"
            >
              Save &amp; Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Insurances;
