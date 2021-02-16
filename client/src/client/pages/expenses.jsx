import { useState, useEffect } from "react";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";
import { Card, Form } from "react-bootstrap";
import { successAlert } from "../../utils/alerts";
import { Link } from "react-router-dom";
import StepsNav from "./steps_nav";

const Expense = ({ history }) => {
  const [alert, setalert] = useState("");
  const [expenses, setExpenses] = useState({
    monthly: {
      groceries: 0,
      education: 0,
      house_helps: 0,
      bills: 0,
      entertianment: 0,
      rent: 0,
      petrol: 0,
      others: 0,
      car_loan: 0,
      personal_loan: 0,
      home_loan: 0,
    },
    irregular: {
      travel: 0,
      big_purchases: 0,
      gifts: 0,
      medical: 0,
      others: 0,
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      try {
        const userJwt = getRole();
        const user = await http.get("/client/" + userJwt._id);
        // console.log(userJwt._id);
        setExpenses(user.data.expenses);
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);
  const StepThreeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = getRole();
      // console.log(res);
      const user = await http.get("/client/" + res._id);
      user.expenses = expenses;
      await http.put("/client/" + res._id, user);
      setalert(successAlert("Expeses Details Updated Successfully!", setalert));
      history.push("/client/goal");
    } catch (error) {
      // console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4 wizard wizard-success mb-4 sw-main sw-theme-arrows">
      <StepsNav stepNo={5} />
      <Card>
        <Card.Header>
          <Card.Title as="h1" className="font-weight-bold">
            Debts &amp; Expenses of Whole Family
          </Card.Title>
        </Card.Header>
        {alert}
        <div className="panel-body row p-3">
          <h5 className="font-italic col-12">Monthly Cyclic Expenses</h5>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-groceries">Groceries</label>
            <Form.Control
              value={expenses.monthly.groceries}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.groceries = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-groceries"
              id="exp-groceries"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-kids">
              Education and other exp. for kids
            </label>
            <Form.Control
              value={expenses.monthly.education}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.education = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-kids"
              id="exp-kids"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-house-helps">Salary for house helps</label>
            <Form.Control
              value={expenses.monthly.house_helps}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.house_helps = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-house-helps"
              id="exp-house-helps"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-bills">
              Electricity/Telephone/other bills
            </label>
            <Form.Control
              value={expenses.monthly.bills}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.bills = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-bills"
              id="exp-bills"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-entertainment">
              Entertainment/Eating out/Shopping
            </label>
            <Form.Control
              value={expenses.monthly.entertainment}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.entertainment = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-entertainment"
              id="exp-entertainment"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-rent">
              Rent/Maintainance/Money given to Parents
            </label>
            <Form.Control
              value={expenses.monthly.rent}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.rent = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-rent"
              id="exp-rent"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-petrol">Petrol/Travelling</label>
            <Form.Control
              value={expenses.monthly.petrol}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.petrol = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-petrol"
              id="exp-petrol"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-others-reg">
              Other Regular Exp.(Insurance, etc)
            </label>
            <Form.Control
              value={expenses.monthly.others}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.others = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-others-reg"
              id="exp-others-reg"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-car-loan">Car Loan</label>
            <Form.Control
              value={expenses.monthly.car_loan}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.car_loan = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-car-loan"
              id="exp-car-loan"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-personal-loan">Personal Loan</label>
            <Form.Control
              value={expenses.monthly.personal_loan}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.personal_loan = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-personal-loan"
              id="exp-personal-loan"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="exp-home-loan">Home Loan</label>
            <Form.Control
              value={expenses.monthly.home_loan}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.monthly.home_loan = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="exp-home-loan"
              id="exp-home-loan"
            />
          </div>
          <h5 className="font-italic col-12">Irregular Expenses</h5>
          <div className="form-group col-12 col-lg-6">
            <label className="aexp-travel">Annual Travel</label>
            <Form.Control
              value={expenses.irregular.travel}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.irregular.travel = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-travel"
              id="aexp-travel"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="aexp-big-purchases">
              Big Purchases(TV/AC/GOLD etc...)
            </label>
            <Form.Control
              value={expenses.irregular.big_purchases}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.irregular.big_purchases = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-big-purchases"
              id="aexp-big-purchases"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="aexp-gifts">
              Gifts (Weddings, Bithdays etc...)
            </label>
            <Form.Control
              value={expenses.irregular.gifts}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.irregular.gifts = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-gifts"
              id="aexp-gifts"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="aexp-medical">
              Medical Exp. (put some approx value)
            </label>
            <Form.Control
              value={expenses.irregular.medical}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.irregular.medical = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-medical"
              id="aexp-medical"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
            <label className="aexp-others">Other Annual Expenses</label>
            <Form.Control
              value={expenses.irregular.others}
              onChange={(e) => {
                const demo = { ...expenses };
                demo.irregular.others = e.target.value;
                setExpenses(demo);
              }}
              maxLength="100"
              type="number"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-others"
              id="aexp-others"
            />
          </div>

          <div className="col-12 d-flex justify-content-end">
            <Link
              to="/client/income"
              className="btn btn-fill btn-dark mx-2"
              type="button"
            >
              Previous
            </Link>
            <button
              className="btn btn-fill btn-primary mx-2"
              onClick={StepThreeSubmit}
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

export default Expense;
