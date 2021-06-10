import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import { getRole } from "utils/jwt";
import http from "utils/http";
import { successAlert } from "utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Liability = ({ history }) => {
  const [alert, setalert] = useState("");
  const [haveLiabilities, setHaveLiabilities] = useState(true);
  const [liabilities, setLiabilities] = useState([
    {
      type: "",
      balance: "",
      emi: "",
      term: "",
      rate: "",
    },
  ]);
  const addInvestment = () => {
    setLiabilities([
      ...liabilities,
      {
        type: "",
        balance: "",
        emi: "",
        term: "",
        rate: "",
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
        setLiabilities(
          user.data.liabilities
            ? user.data.liabilities
            : [
                {
                  type: "",
                  balance: "",
                  emi: "",
                  term: "",
                  rate: "",
                },
              ]
        );
        setHaveLiabilities(user.data.haveLiabilities);
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
      user.liabilities = liabilities;
      user.haveLiabilities = haveLiabilities;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Liabilities Added Successfully!", setalert));
      history.push("/client/goal");
    } catch (error) {
      // console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={7} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Current Liabilities
          </Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body p-3">
          <div className="form-check form-check-lg">
            <input
              type="checkbox"
              checked={!haveLiabilities}
              onChange={(e) => setHaveLiabilities(Boolean(!haveLiabilities))}
              className="form-check-input"
              id="haveInvestments"
            />
            <label className="form-check-label" htmlFor="haveInvestments">
              I Don't Have Any Liabilities
            </label>
          </div>
          {haveLiabilities && (
            <form>
              <Accordion defaultActiveKey="0">
                {liabilities.map((goal, i) => {
                  return (
                    <Card
                      key={"goal_" + i}
                      style={{ marginBottom: "0px", paddingBottom: "15px" }}
                    >
                      <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                        Liability {i + 1}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={String(i)}>
                        <Card.Body className="row">
                          <Col lg="4">
                            <Form.Group>
                              <label>Liability Type</label>
                              <Form.Control
                                value={liabilities[i].type}
                                onChange={(e) => {
                                  const myGoal = liabilities[i];
                                  myGoal.type = e.target.value;
                                  const demo = [...liabilities];
                                  demo[i] = myGoal;
                                  setLiabilities(demo);
                                }}
                                type="text"
                                placeholder="Enter Investment Type"
                                list="inv_type"
                              />
                              <datalist id="inv_type">
                                <option value="Home Loan">Home Loan</option>
                                <option value="Personal Loan">
                                  Personal Loan
                                </option>
                                <option value="Car Loan">Car Loan</option>
                                <option value="Society Loan">
                                  Society Loan
                                </option>
                                <option value="LAP">LAP</option>
                                <option value="LAS">LAS</option>
                              </datalist>
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>Balance</label>
                              <Form.Control
                                value={liabilities[i].balance}
                                onChange={(e) => {
                                  const myGoal = liabilities[i];
                                  myGoal.balance = e.target.value;
                                  const demo = [...liabilities];
                                  demo[i] = myGoal;
                                  setLiabilities(demo);
                                }}
                                type="number"
                                placeholder="Enter Balance"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>EMI</label>
                              <Form.Control
                                value={liabilities[i].emi}
                                onChange={(e) => {
                                  const myGoal = liabilities[i];
                                  myGoal.emi = e.target.value;
                                  const demo = [...liabilities];
                                  demo[i] = myGoal;
                                  setLiabilities(demo);
                                }}
                                type="number"
                                placeholder="Enter EMI"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Term</label>
                              <Form.Control
                                value={liabilities[i].term}
                                onChange={(e) => {
                                  const myGoal = liabilities[i];
                                  myGoal.term = e.target.value;
                                  const demo = [...liabilities];
                                  demo[i] = myGoal;
                                  setLiabilities(demo);
                                }}
                                type="number"
                                placeholder="Enter Term"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <label>Rate</label>
                              <Form.Control
                                value={liabilities[i].rate}
                                onChange={(e) => {
                                  const myGoal = liabilities[i];
                                  myGoal.rate = e.target.value;
                                  const demo = [...liabilities];
                                  demo[i] = myGoal;
                                  setLiabilities(demo);
                                }}
                                type="number"
                                placeholder="Enter Rate of Interest"
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
                    Add Liability
                  </button>
                </Col>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-end my-3">
            <Link
              to="/client/asset"
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

export default Liability;
