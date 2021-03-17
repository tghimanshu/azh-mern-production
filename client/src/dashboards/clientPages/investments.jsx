import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import { getRole } from "../../utils/jwt";
import http from "../../utils/http";
import { successAlert } from "../../utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Investment = ({ history }) => {
  const [alert, setalert] = useState("");
  const [haveInvestments, setHaveInvestments] = useState(true);
  const [investments, setInvestments] = useState([
    {
      InvestmentAmount: 0,
      StartDate: "",
      MaturityDate: "",
      Tenure: 0,
      CurrentValue: 0,
      Purpose: "",
      InvestmentType: "",
      Products: "",
      InterestRate: 0,
    },
  ]);
  const addInvestment = () => {
    setInvestments([
      ...investments,
      {
        InvestedAmount: 0,
        StartDate: "",
        MaturityDate: "",
        Tenure: 0,
        CurrentValue: 0,
        Purpose: "",
        InvestmentType: "",
        Products: "",
        InterestRate: 0,
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
        setInvestments(user.data.investments);
        setHaveInvestments(user.data.haveInvestments);
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
      user.investments = investments;
      user.haveInvestments = haveInvestments;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Investments Added Successfully!", setalert));
      history.push("/client/insurance");
    } catch (error) {
      // console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={2} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Current Investments
          </Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body p-3">
          <div className="form-check form-check-lg">
            <input
              type="checkbox"
              checked={!haveInvestments}
              onChange={(e) => setHaveInvestments(Boolean(!haveInvestments))}
              className="form-check-input"
              id="haveInvestments"
            />
            <label className="form-check-label" htmlFor="haveInvestments">
              I Don't Have Any Investments
            </label>
          </div>
          {haveInvestments && (
            <form>
              <Accordion defaultActiveKey="0">
                {investments.map((goal, i) => {
                  return (
                    <Card
                      key={"goal_" + i}
                      style={{ marginBottom: "0px", paddingBottom: "15px" }}
                    >
                      <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                        Investment {i + 1}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={String(i)}>
                        <Card.Body className="row">
                          <Col md="4">
                            <Form.Group>
                              <label>Investment Amount</label>
                              <Form.Control
                                value={investments[i].InvestmentAmount}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.InvestmentAmount = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="text"
                                placeholder="Enter Investment Amout"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>Start Date</label>
                              <Form.Control
                                value={investments[i].StartDate}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.StartDate = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="date"
                                placeholder="Enter Goal"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Maturity Date</label>
                              <Form.Control
                                value={investments[i].MaturityDate}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.MaturityDate = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="date"
                                placeholder="Enter Maturity Date"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Tenure</label>
                              <Form.Control
                                value={investments[i].Tenure}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.Tenure = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="number"
                                placeholder="Enter Tenure"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Current Value</label>
                              <Form.Control
                                value={investments[i].CurrentValue}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.CurrentValue = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="number"
                                placeholder="Enter Current Value"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Purpose</label>
                              <Form.Control
                                value={investments[i].Purpose}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.Purpose = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="text"
                                placeholder="Enter Purpose"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Investment Type</label>
                              <Form.Control
                                value={investments[i].InvestmentType}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.InvestmentType = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="text"
                                placeholder="Enter Investment Type"
                                list="inv_type"
                              />
                              <datalist id="inv_type">
                                <option value="Mutual Fund">Mutual Fund</option>
                                <option value="Bond">Bond</option>
                                <option value="Debenture">Debenture</option>
                              </datalist>
                            </Form.Group>
                          </Col>

                          <Col lg="4">
                            <Form.Group>
                              <label>Interest Rate</label>
                              <Form.Control
                                value={investments[i].InterestRate}
                                onChange={(e) => {
                                  const myGoal = investments[i];
                                  myGoal.InterestRate = e.target.value;
                                  const demo = [...investments];
                                  demo[i] = myGoal;
                                  setInvestments(demo);
                                }}
                                type="number"
                                placeholder="Enter Interest Rate"
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
                    onClick={addInvestment}
                    type="button"
                  >
                    Add Investment
                  </button>
                </Col>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-end my-3">
            <Link
              to="/client/personal"
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

export default Investment;