import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import { getRole } from "utils/jwt";
import http from "utils/http";
import { successAlert } from "utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Asset = ({ history }) => {
  const [alert, setalert] = useState("");
  const [haveAssets, setHaveAssets] = useState(true);
  const [assets, setAssets] = useState([
    { type: "", amtTillDate: "", remark: "" },
  ]);
  const addAsset = () => {
    setAssets([...assets, { type: "", amtTillDate: "", remark: "" }]);
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
        setAssets(
          user.data.assets
            ? user.data.assets
            : [{ type: "", amtTillDate: "", remark: "" }]
        );
        setHaveAssets(user.data.haveAssets);
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
      user.assets = assets;
      user.haveAssets = haveAssets;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Assets Added Successfully!", setalert));
      history.push("/client/liability");
    } catch (error) {
      // console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={6} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Assets
          </Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body p-3">
          {/* <div className="form-check form-check-lg">
            <input
              type="checkbox"
              checked={!haveAssets}
              onChange={(e) => setHaveAssets(Boolean(!haveAssets))}
              className="form-check-input"
              id="haveInvestments"
            />
            <label className="form-check-label" htmlFor="haveInvestments">
              I Don't Have Any Assets
            </label>
          </div> */}
          {haveAssets && (
            <form>
              <Accordion defaultActiveKey="0">
                {assets.map((goal, i) => {
                  return (
                    <Card
                      key={"goal_" + i}
                      style={{ marginBottom: "0px", paddingBottom: "15px" }}
                    >
                      <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                        Asset {i + 1}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={String(i)}>
                        <Card.Body className="row">
                          <Col lg="4">
                            <Form.Group>
                              <label>Asset Type</label>
                              <Form.Control
                                value={assets[i].InvestmentType}
                                onChange={(e) => {
                                  const myGoal = assets[i];
                                  myGoal.type = e.target.value;
                                  const demo = [...assets];
                                  demo[i] = myGoal;
                                  setAssets(demo);
                                }}
                                type="text"
                                placeholder="Enter Asset Type"
                                list="asset_type"
                              />
                              <datalist id="asset_type">
                                <option value="Savings Account">
                                  Savings Account
                                </option>
                                <option value="Fixed Deposit">
                                  Fixed Deposit
                                </option>
                                <option value="Recurring Deposit">
                                  Recurring Deposit
                                </option>
                                <option value="Gold">Gold</option>
                                <option value="Mutual Fund">Mutual Fund</option>
                                <option value="Shares/Equities">
                                  Shares/Equities
                                </option>
                                <option value="Property">Property</option>
                                <option value="Other">Other</option>
                              </datalist>
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>Amount Till Date</label>
                              <Form.Control
                                value={assets[i].amtTillDate}
                                onChange={(e) => {
                                  const myGoal = assets[i];
                                  myGoal.amtTillDate = e.target.value;
                                  const demo = [...assets];
                                  demo[i] = myGoal;
                                  setAssets(demo);
                                }}
                                type="number"
                                placeholder="Enter Amount Till Date"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group>
                              <label>Date of Purchase</label>
                              <Form.Control
                                value={assets[i].remark}
                                onChange={(e) => {
                                  const myGoal = assets[i];
                                  myGoal.remark = e.target.value;
                                  const demo = [...assets];
                                  demo[i] = myGoal;
                                  setAssets(demo);
                                }}
                                type="date"
                                placeholder="Enter Goal"
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
                    onClick={addAsset}
                    type="button"
                  >
                    Add Assets
                  </button>
                </Col>
              </div>
            </form>
          )}
          <div className="d-flex justify-content-end my-3">
            <Link
              to="/client/expense"
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

export default Asset;
