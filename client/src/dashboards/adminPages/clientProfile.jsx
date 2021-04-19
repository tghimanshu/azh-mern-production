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
import { dangerAlert, successAlert } from "../../utils/alerts";
import ReactQuill from "react-quill";

const ClientProfile = ({ match, history }) => {
  const [client, setClient] = useState({});
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await http.get("/admin/client/" + match.params.id);
        setClient(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getUserData();
  }, [match]);

  const handleMail = async () => {
    try {
      if (subject === "") {
        setError(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setError(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/custom", {
          emails: client.email,
          subject,
          content,
        });
        setError(successAlert("Mail SuccessFul", setError));
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (Object.keys(client).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <Button variant="info mb-3" onClick={() => setShowMail(!showMail)}>
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
              <h4 classNmae="mb-3">Self</h4>
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
                  <Card>
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
        {client.income && (
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
                  {Object.keys(client.income).map((inc) => (
                    <tr>
                      <td>{inc.substring(4)}</td>
                      <td>{client.income[inc]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}

        {client.expenses && (
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
                  {client.expenses.monthly &&
                    Object.keys(client.expenses.monthly).map((exp) => (
                      <tr>
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
                  {client.expenses.irregular &&
                    Object.keys(client.expenses.irregular).map((exp) => (
                      <tr>
                        <td>{exp}</td>
                        <td>{client.expenses.irregular[exp]}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}
        {client.haveInvestments && (
          <Card>
            <Card.Header>
              <Card.Title as="h1">Investments</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="1">
                {client.investments.map((investment, i) => (
                  <Card>
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
                          {Object.keys(investment).map((inv) => (
                            <Col md={4}>
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
                  <Card>
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
                          {Object.keys(insurance).map((ins) => (
                            <Col md={4}>
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
                  <Card>
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
                          {Object.keys(asset).map((as) => (
                            <Col md={4}>
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
                  <Card>
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
                          {Object.keys(liability).map((lb) => (
                            <Col md={4}>
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
                  <Card>
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
                          {Object.keys(goal).map((gl) => (
                            <Col md={4}>
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
// s.replace(/([A-Z])/g, ' $1').trim()
