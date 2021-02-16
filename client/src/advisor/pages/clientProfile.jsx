import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import { Col, Container, Row, Table } from "react-bootstrap";
import ReactQuill from "react-quill-2";
import { successAlert } from "../../utils/alerts";
import "react-quill-2/dist/quill.snow.css";

const ClientProfile = ({ match, history }) => {
  const [alert, setAlert] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);
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

  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

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
        <Row>
          <Col lg={12}>
            {alert}
            <button
              className="btn btn-success pull-right"
              onClick={() => setShowRecommendation(!showRecommendation)}
            >
              Write Recommendation
            </button>
            {showRecommendation && (
              <div className="mt-3">
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
          </Col>
          <Col lg={12}>
            <div className="table-responsive">
              <h3>Personal Details</h3>
              <Table striped bordered size="sm" hover>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Date Of Birth</td>
                    <td>Professional Details</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Self</td>
                    <td>{pd.self.name}</td>
                    <td>{pd.self.dob}</td>
                    <td>{pd.self.profdetails}</td>
                  </tr>
                  <tr>
                    <td>Spouse</td>
                    <td>{pd.spouse.name}</td>
                    <td>{pd.spouse.dob}</td>
                    <td>{pd.spouse.profdetails}</td>
                  </tr>
                  {pd.childrens.map((c, i) => {
                    return (
                      <tr key={i}>
                        <td>Child {i + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.dob}</td>
                        <td>{c.profdetails}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <div className="table-responsive">
              <h3>Sources Of Income</h3>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Type</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(income).map((i) => (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{income[i]}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total: </td>
                    <td>{sum(income)}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <h3>monthly Expenses</h3>
            <div className="table-responsive">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Type</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(expenses.monthly).map((m) => (
                    <tr key={m}>
                      <td>{m}</td>
                      <td>{expenses.monthly[m]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <h3>Irregular Expenses</h3>
            <div className="table-responsive">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Type</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(expenses.irregular).map((m) => (
                    <tr key={m}>
                      <td>{m}</td>
                      <td>{expenses.irregular[m]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <h3>Goals</h3>
            <div className="table-responsive">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {Object.keys(goals[0]).map((goal) => (
                      <td key={goal}>{goal}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {goals.map((goal, i) => (
                    <tr key={i}>
                      {Object.keys(goal).map((m, i) => (
                        <td key={i}>{expenses.irregular[m]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <h3>Investments</h3>
            <div className="table-responsive">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {Object.keys(investments[0]).map((ins) => (
                      <td key={ins}>{ins}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {insurances.map((inves, i) => (
                    <tr key={i}>
                      {Object.keys(inves).map((inv, i) => (
                        <td key={i}>{inves[inv]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={12}>
            <h3>Insurance</h3>
            <div className="table-responsive">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {Object.keys(insurances[0]).map((ins) => (
                      <td key={ins}>{ins}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {insurances.map((inves, i) => (
                    <tr key={i}>
                      {Object.keys(inves).map((inv, i) => (
                        <td key={i}>{inves[inv]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ClientProfile;
