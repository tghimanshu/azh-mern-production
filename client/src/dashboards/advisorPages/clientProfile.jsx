import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import ReactQuill from "react-quill";
import { dangerAlert, successAlert } from "../../utils/alerts";
import "react-quill/dist/quill.snow.css";

const ClientProfile = ({ match, history, location }) => {
  const [alert, setAlert] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [client, setClient] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await http.get("/advisor/client/" + match.params.id);
        setClient(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getUserData();
  }, [match]);

  useEffect(() => {
    const getRec = async () => {
      try {
        const { data } = await http.get("/booking/" + match.params.booking_id);
        setRecommendation(data.recommendation);
      } catch (error) {
        // console.log(error);
      }
    };
    getRec();
  }, [match]);

  const handleMail = async () => {
    try {
      if (subject === "") {
        setAlert(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setAlert(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/custom", {
          emails: client.email,
          subject,
          content,
        });
        setAlert(successAlert("Mail SuccessFul", setError));
        setContent("");
        setSubject("");
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {}
  };

  const handleSaveRec = async () => {
    try {
      await http.put("/booking/" + match.params.booking_id, {
        recommendation: recommendation,
      });
      setAlert(successAlert("Recommendation Saved!", setAlert));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleApprove = async () => {
    handleSaveRec();
    try {
      await http.get("/booking/approve/" + match.params.booking_id);
      setAlert(successAlert("Recommendation Saved and Approved!", setAlert));
      history.push("/advisor/booking/");
    } catch (error) {
      // console.log(error);
    }
  };

  if (Object.keys(client).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title as="h1">Recommendation</Card.Title>
          </Card.Header>
          <Card.Body>
            {alert}
            {location.pathname.includes("booking") && (
              <button
                className="btn btn-success mb-3"
                onClick={() => setShowRecommendation(!showRecommendation)}
              >
                Write Recommendation
              </button>
            )}
            <Button
              variant="info ml-2 mb-3"
              onClick={() => setShowMail(!showMail)}
            >
              Mail
            </Button>
            {showMail && (
              <>
                {error}
                <FormControl
                  className="mb-2"
                  placeholder="Enter Subject here"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <ReactQuill
                  className="mb-2"
                  value={content}
                  onChange={(value) => setContent(value)}
                />
                <Button variant="success mb-4" onClick={handleMail}>
                  Send
                </Button>
              </>
            )}
            {showRecommendation && (
              <div>
                <ReactQuill
                  value={recommendation}
                  onChange={(value) => setRecommendation(value)}
                />
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-info" onClick={handleSaveRec}>
                    Save
                  </button>
                  <button className="btn btn-success" onClick={handleApprove}>
                    Save &amp; Submit
                  </button>
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h1">Account Details</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">Name</div>
                <div>{client.name}</div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">E Mail</div>
                <div>{client.email}</div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">Contact</div>
                <div>{client.contact}</div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">Address</div>
                <div>{client.address}</div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">City</div>
                <div>{client.city + " " + client.postalCode}</div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="font-weight-bold">Country</div>
                <div>{client.country}</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h1">Personal Details</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="mb-3">
              <h4 className="mb-3">Self</h4>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="font-weight-bold">Name</div>
                  <div>{client.personal_details.self.name}</div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="font-weight-bold">Date Of Birth</div>
                  <div>{client.personal_details.self.dob}</div>
                </Col>
                <Col md={12} className="mb-3">
                  <div className="font-weight-bold">Professional Detials</div>
                  <div>{client.personal_details.self.profdetails}</div>
                </Col>
              </Row>
            </div>
            <div className="mb-3">
              <h4 className="mb-3">Spouse</h4>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="font-weight-bold">Name</div>
                  <div>{client.personal_details.spouse.name}</div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="font-weight-bold">Date Of Birth</div>
                  <div>{client.personal_details.spouse.dob}</div>
                </Col>
                <Col md={12} className="mb-3">
                  <div className="font-weight-bold">Professional Detials</div>
                  <div>{client.personal_details.spouse.profdetails}</div>
                </Col>
              </Row>
            </div>
            <div className="mb-3">
              <h4 className="mb-3">Childrens</h4>
              <Accordion defaultActiveKey="0">
                {client.personal_details.childrens.map((child, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Child {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          <Col md={6} className="mb-3">
                            <div className="font-weight-bold">Name</div>
                            <div>{child.name}</div>
                          </Col>
                          <Col md={6} className="mb-3">
                            <div className="font-weight-bold">
                              Date Of Birth
                            </div>
                            <div>{child.dob}</div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h1">Income Details</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Type</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(client.income).map((inc, ix) => (
                  <tr key={ix}>
                    <td>{inc.substring(4)}</td>
                    <td>{client.income[inc]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title as="h1">Expenses Details</Card.Title>
          </Card.Header>
          <Card.Body>
            <h4>Monthly Expenses</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Type</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(client.expenses.monthly).map((exp, ix) => (
                  <tr key={ix}>
                    <td>{exp}</td>
                    <td>{client.expenses.monthly[exp]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4>Irregular Expenses</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Type</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(client.expenses.irregular).map((exp, ix) => (
                  <tr key={ix}>
                    <td>{exp}</td>
                    <td>{client.expenses.irregular[exp]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        {client.haveInvestments && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Investments</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.investments.map((investment, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Investment {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          {Object.keys(investment).map((inv, ix) => (
                            <Col md={4} key={ix}>
                              <div className="font-weight-bold">
                                {inv.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                              <div>{investment[inv]}</div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        )}

        {client.haveInsurances && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Insurances</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.insurances.map((insurance, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Insurance {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          {Object.keys(insurance).map((ins, ix) => (
                            <Col md={4} key={ix}>
                              <div className="font-weight-bold">
                                {ins.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                              <div>{insurance[ins]}</div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        )}

        {client.haveAssets && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Assets</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.assets.map((asset, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Asset {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          {Object.keys(asset).map((as, ix) => (
                            <Col md={4} key={ix}>
                              <div className="font-weight-bold">
                                {as.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                              <div>{asset[as]}</div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        )}

        {client.haveLiabilities && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Liabilities</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.liabilities.map((liability, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Liability {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          {Object.keys(liability).map((lb, ix) => (
                            <Col md={4} key={ix}>
                              <div className="font-weight-bold">
                                {lb.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                              <div>{liability[lb]}</div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        )}
        {client.haveGoals && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Goals</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.goals.map((goal, i) => (
                  <Card key={i}>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={i + 1}
                      >
                        Goal {i + 1}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i + 1}>
                      <Card.Body>
                        <Row>
                          {Object.keys(goal).map((gl, ix) => (
                            <Col md={4} key={ix}>
                              <div className="font-weight-bold">
                                {gl.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                              <div>{goal[gl]}</div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        )}
      </Container>
    );
  }
};

export default ClientProfile;
