import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Col, Form, Row } from "react-bootstrap";
import { getRole } from "utils/jwt";
import http from "utils/http";
import { successAlert } from "utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Goal = ({ history }) => {
  const [alert, setalert] = useState("");
  const [haveGoals, setHaveGoals] = useState(true);
  const [goals, setGoals] = useState([
    {
      goal: "",
      amtNeededToday: 0,
      achievementYear: "",
      startYear: "",
      amtSaved: "",
    },
  ]);

  const addGoal = () => {
    setGoals([
      ...goals,
      {
        goal: "",
        amtNeededToday: Number,
        achievementYear: "",
        startYear: "",
        amtSaved: "",
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
        setGoals(user.data.goals);
        setHaveGoals(user.data.haveGoals);
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
      user.goals = goals;
      user.haveGoals = haveGoals;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Goals Added Successfully!", setalert));
      history.push("/client");
    } catch (error) {
      // console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={8} />
      <Card>
        <Card.Header>
          <Card.Title className="font-weight-bold">Goals</Card.Title>
        </Card.Header>
        <Card.Body>
          {alert}
          <div className="form-check form-check-lg">
            <input
              type="checkbox"
              checked={!haveGoals}
              onChange={(e) => setHaveGoals(Boolean(!haveGoals))}
              className="form-check-input"
              id="haveGoals"
            />
            <label className="form-check-label" htmlFor="haveGoals">
              I Don't Have Any Goals
            </label>
          </div>

          <form className="panel-body p-3">
            {haveGoals && (
              <>
                <Accordion defaultActiveKey="0">
                  {goals.map((goal, i) => {
                    return (
                      <Card
                        key={"goal_" + i}
                        style={{ marginBottom: "0px", paddingBottom: "15px" }}
                      >
                        <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                          Goal {i + 1}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={String(i)}>
                          <Card.Body className="row">
                            <Col md="6">
                              <Form.Group>
                                <label>Goal</label>
                                <Form.Control
                                  value={goals[i].goal}
                                  onChange={(e) => {
                                    const myGoal = goals[i];
                                    myGoal.goal = e.target.value;
                                    const demo = [...goals];
                                    demo[i] = myGoal;
                                    setGoals(demo);
                                  }}
                                  type="text"
                                  placeholder="Enter Goal"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group>
                                <label>Amount Needed as of Today</label>
                                <Form.Control
                                  value={goals[i].amtNeededToday}
                                  onChange={(e) => {
                                    const myGoal = goals[i];
                                    myGoal.amtNeededToday = e.target.value;
                                    const demo = [...goals];
                                    demo[i] = myGoal;
                                    setGoals(demo);
                                  }}
                                  type="text"
                                  placeholder="Enter Amount"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group>
                                <label>Achievement Year</label>
                                <Form.Control
                                  value={goals[i].achievementYear}
                                  onChange={(e) => {
                                    const myGoal = goals[i];
                                    myGoal.achievementYear = e.target.value;
                                    const demo = [...goals];
                                    demo[i] = myGoal;
                                    setGoals(demo);
                                  }}
                                  type="date"
                                  placeholder="Enter Achievement Year"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group>
                                <label>Start Year</label>
                                <Form.Control
                                  value={goals[i].startYear}
                                  onChange={(e) => {
                                    const myGoal = goals[i];
                                    myGoal.startYear = e.target.value;
                                    const demo = [...goals];
                                    demo[i] = myGoal;
                                    setGoals(demo);
                                  }}
                                  type="date"
                                  placeholder="Enter Start Year"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group>
                                <label>Amount Saved</label>
                                <Form.Control
                                  value={goals[i].amtSaved}
                                  onChange={(e) => {
                                    const myGoal = goals[i];
                                    myGoal.amtSaved = e.target.value;
                                    const demo = [...goals];
                                    demo[i] = myGoal;
                                    setGoals(demo);
                                  }}
                                  type="number"
                                  placeholder="Enter Amount Saved"
                                />
                              </Form.Group>
                            </Col>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
                </Accordion>
                <Row>
                  <Col lg="6">
                    <button
                      className="btn btn-fill btn-success mx-2 my-3"
                      onClick={addGoal}
                      type="button"
                    >
                      Add Goal
                    </button>
                  </Col>
                </Row>
              </>
            )}
            <div className="row">
              <Col lg="6"></Col>
              <Col lg="6">
                <div className="d-flex justify-content-end my-3">
                  <Link
                    to="/client/liability"
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
                    Save &amp; Generate
                  </button>
                </div>
              </Col>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Goal;
