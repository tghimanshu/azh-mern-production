import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const ClientProfile = ({ match, history }) => {
  const [client, setClient] = useState({});
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

  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  const {
    personal_details: pd,
    income,
    expenses,
    goals,
    investments,
    insurances,
  } = client;
  if (Object.keys(client).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
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
                {Object.keys(income).map((inc) => (
                  <tr>
                    <td>{inc.substring(4)}</td>
                    <td>{income[inc]}</td>
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
                {Object.keys(expenses.monthly).map((exp) => (
                  <tr>
                    <td>{exp}</td>
                    <td>{expenses.monthly[exp]}</td>
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
                {Object.keys(expenses.irregular).map((exp) => (
                  <tr>
                    <td>{exp}</td>
                    <td>{expenses.irregular[exp]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default ClientProfile;
