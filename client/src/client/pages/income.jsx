import http from "../../utils/http";
import { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { Link as button, Link } from "react-router-dom";
import { successAlert } from "../../utils/alerts";
import { getRole } from "../../utils/jwt";
import StepsNav from "./steps_nav";

const Income = ({ history }) => {
  const [alert, setalert] = useState("");
  const [income, setIncome] = useState({
    inc_self: 0,
    inc_spouse: 0,
    inc_parents: 0,
    inc_property: 0,
    inc_business: 0,
    inc_others: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = getRole();
        const user = await http.get("/client/" + userJwt._id);
        console.log(userJwt._id);
        setIncome(user.data.income);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const StepTwoSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = getRole();
      const user = await http.get("/client/" + res._id);
      user.income = income;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Income Details Updated Successfully!", setalert));
      history.push("/client/expense");
    } catch (error) {
      console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={4} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Sources Of Income
          </Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body row p-3">
          <div className="form-group col-12 col-lg-6">
            <label className="net-sal-self">Net Annual Salary - Self</label>
            <Form.Control
              value={income.inc_self}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_self = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Salary"
              name="net-sal-self"
              id="net-sal-self"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="net-sal-spouse">Net Annual Salary - Spouse</label>
            <Form.Control
              value={income.inc_spouse}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_spouse = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Salary"
              name="net-sal-spouse"
              id="net-sal-spouse"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="net-sal-parents">
              Net Annual Salary - Parents (Optional)
            </label>
            <Form.Control
              value={income.inc_parents}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_parents = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="number"
              className="form-control"
              placeholder="Enter Salary"
              name="net-sal-parents"
              id="net-sal-parents"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="net-sal-rental">
              Net Annual Income from Property Rentals
            </label>
            <Form.Control
              value={income.inc_property}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_property = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Salary"
              name="net-rental"
              id="net-rental"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="net-business">
              Net Annual Income from Business
            </label>
            <Form.Control
              value={income.inc_business}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_business = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="number"
              className="form-control"
              placeholder="Enter Salary"
              name="net-business"
              id="net-business"
            />
          </div>
          <div className="form-group col-12 col-lg-12">
            <label className="net-sal-others">Other Income Sources</label>
            <Form.Control
              value={income.inc_others}
              onChange={(e) => {
                const demo = { ...income };
                demo.inc_others = e.target.value;
                setIncome(demo);
              }}
              maxLength="100"
              type="text"
              required="required"
              className="form-control"
              placeholder="Enter Other Sources of Income Name and Amount"
              name="net-sal-others"
              id="net-sal-others"
            />
          </div>

          <div className="col-12 d-flex justify-content-end">
            <Link
              className="btn btn-fill btn-dark mx-2"
              to="/client/insurance"
              type="button"
            >
              Previous
            </Link>
            <button
              className="btn btn-fill btn-primary mx-2"
              onClick={StepTwoSubmit}
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

export default Income;
