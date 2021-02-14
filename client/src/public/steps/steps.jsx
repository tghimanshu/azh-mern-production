import { useState, useEffect } from "react";
import { Accordion, Card, Form, Col } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import http from "../../utils/http";

const Step1 = (props) => {
  const [pers_details, set_pers_details] = useState({
    self_name: "",
    self_dob: "",
    self_contact: "",
    self_email: "",
    self_profdetails: "",
    spouse_name: "",
    spouse_dob: "",
    spouse_contact: "",
    spouse_email: "",
    spouse_profdetails: "",
    child1_name: "",
    child1_dob: "",
    child1_contact: "",
    child1_email: "",
    child1_profdetails: "",
    child2_name: "",
    child2_dob: "",
    child2_contact: "",
    child2_email: "",
    child2_profdetails: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/client/" + userJwt._id);
        set_pers_details(user.data.personal_details);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const StepOneSubmit = async (e) => {
    e.preventDefault();
    try {
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const res = jwtDecode(jwt);
      const user = await http.get("/client/" + res._id);
      user.personal_details = pers_details;
      await http.put("/client/" + res._id, user);
      props.nextStep();
    } catch (error) {
      console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4">
      <div className="panel panel-primary ">
        <div className="panel-heading">
          <h3 className="panel-title font-weight-bold px-3">
            Personal Details
          </h3>
        </div>
        <div className="panel-body px-3">
          <div className="row self">
            <h4 className="font-italic font-weight-bold col-12">Self</h4>
            <div className="form-group col-12 col-lg-8">
              <label className="self-name">Full Name</label>
              <Form.Control
                value={pers_details.self_name}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self_name = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Full Name"
                name="self-name"
                id="self-name"
              />
            </div>
            <div className="form-group col-12 col-lg-4">
              <label className="self-dob">Date Of Birth</label>
              <Form.Control
                value={pers_details.self_dob}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self_dob = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="date"
                required="required"
                className="form-control"
                placeholder="Date Of Birth"
                name="self-dob"
                id="self-dob"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="self-number">Telephone Number: </label>
              <Form.Control
                value={pers_details.self_contact}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self_contact = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="number"
                required="required"
                className="form-control"
                placeholder="Enter Telephone Number"
                name="self-number"
                id="self-number"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="self-email">E-Mail: </label>
              <Form.Control
                value={pers_details.self_email}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self_email = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="email"
                required="required"
                className="form-control"
                placeholder="Enter E-Mail"
                name="self-email"
                id="self-email"
              />
            </div>
            <div className="form-group col-12">
              <label className="self-prof-details">
                Professional Details:{" "}
              </label>
              <Form.Control
                value={pers_details.self_profdetails}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.self_profdetails = e.target.value;
                  set_pers_details(demo);
                }}
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Professional Details"
                name="self-prof-details"
                id="self-prof-details"
              />
            </div>
          </div>
          <div className="have_spouse_div">
            do you have a spouse?
            <label className="switch">
              <Form.Control type="checkbox" id="have_spouse" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="row spouse">
            <h5 className="font-italic col-12">spouse</h5>
            <div className="form-group col-12 col-lg-8">
              <label className="spouse-name">Full Name</label>
              <Form.Control
                value={pers_details.spouse_name}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.spouse_name = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Full Name"
                name="spouse-name"
                id="spouse-name"
              />
            </div>
            <div className="form-group col-12 col-lg-4">
              <label className="spouse-dob">Date Of Birth</label>
              <Form.Control
                value={pers_details.spouse_dob}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.spouse_dob = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="date"
                required="required"
                className="form-control"
                placeholder="Date Of Birth"
                name="spouse-dob"
                id="spouse-dob"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="spouse-number">Telephone Number: </label>
              <Form.Control
                value={pers_details.spouse_contact}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.spouse_contact = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="number"
                required="required"
                className="form-control"
                placeholder="Enter Telephone Number"
                name="spouse-number"
                id="spouse-number"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="spouse-email">E-Mail: </label>
              <Form.Control
                value={pers_details.spouse_email}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.spouse_email = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="email"
                required="required"
                className="form-control"
                placeholder="Enter E-Mail"
                name="spouse-email"
                id="spouse-email"
              />
            </div>
            <div className="form-group col-12">
              <label className="spouse-prof-details">
                Professional Details:{" "}
              </label>
              <Form.Control
                value={pers_details.spouse_profdetails}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.spouse_profdetails = e.target.value;
                  set_pers_details(demo);
                }}
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Professional Details"
                name="spouse-prof-details"
                id="spouse-prof-details"
              />
            </div>
          </div>
          <div className="have_kids_div">
            Do you have Childers?
            <label className="switch">
              <Form.Control type="checkbox" id="have_kids" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="total-kids">😍How many Cute Kids you have?</div>
          <div className="row child-1">
            <h5 className="font-italic col-12">child-1</h5>
            <div className="form-group col-12 col-lg-8">
              <label className="child-1-name">Full Name</label>
              <Form.Control
                value={pers_details.child1_name}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child1_name = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Full Name"
                name="child-1-name"
                id="child-1-name"
              />
            </div>
            <div className="form-group col-12 col-lg-4">
              <label className="child-1-dob">Date Of Birth</label>
              <Form.Control
                value={pers_details.child1_dob}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child1_dob = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="date"
                required="required"
                className="form-control"
                placeholder="Date Of Birth"
                name="child-1-dob"
                id="child-1-dob"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="child-1-number">Telephone Number: </label>
              <Form.Control
                value={pers_details.child1_contact}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child1_contact = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="number"
                required="required"
                className="form-control"
                placeholder="Enter Telephone Number"
                name="child-1-number"
                id="child-1-number"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="child-1-email">E-Mail: </label>
              <Form.Control
                value={pers_details.child1_email}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child1_email = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="email"
                required="required"
                className="form-control"
                placeholder="Enter E-Mail"
                name="child-1-email"
                id="child-1-email"
              />
            </div>
            <div className="form-group col-12">
              <label className="child-1-prof-details">
                Professional Details:{" "}
              </label>
              <Form.Control
                value={pers_details.child1_profdetails}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child1_profdetails = e.target.value;
                  set_pers_details(demo);
                }}
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Professional Details"
                name="child-1-prof-details"
                id="child-1-prof-details"
              />
            </div>
          </div>
          <div className="row child-2">
            <h5 className="font-italic col-12">child-2</h5>
            <div className="form-group col-12 col-lg-8">
              <label className="child-2-name">Full Name</label>
              <Form.Control
                value={pers_details.child2_name}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child2_name = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Full Name"
                name="child-2-name"
                id="child-2-name"
              />
            </div>
            <div className="form-group col-12 col-lg-4">
              <label className="child-2-dob">Date Of Birth</label>
              <Form.Control
                value={pers_details.child2_dob}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child2_dob = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="date"
                required="required"
                className="form-control"
                placeholder="Date Of Birth"
                name="child-2-dob"
                id="child-2-dob"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="child-2-number">Telephone Number: </label>
              <Form.Control
                value={pers_details.child2_contact}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child2_contact = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="number"
                required="required"
                className="form-control"
                placeholder="Enter Telephone Number"
                name="child-2-number"
                id="child-2-number"
              />
            </div>
            <div className="form-group col-12 col-lg-6">
              <label className="child-2-email">E-Mail: </label>
              <Form.Control
                value={pers_details.child2_email}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child2_email = e.target.value;
                  set_pers_details(demo);
                }}
                maxLength="100"
                type="email"
                required="required"
                className="form-control"
                placeholder="Enter E-Mail"
                name="child-2-email"
                id="child-2-email"
              />
            </div>
            <div className="form-group col-12">
              <label className="child-2-prof-details">
                Professional Details:{" "}
              </label>
              <Form.Control
                value={pers_details.child2_profdetails}
                onChange={(e) => {
                  const demo = { ...pers_details };
                  demo.child2_profdetails = e.target.value;
                  set_pers_details(demo);
                }}
                type="text"
                required="required"
                className="form-control"
                placeholder="Enter Professional Details"
                name="child-2-prof-details"
                id="child-2-prof-details"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-fill btn-primary mx-2"
              onClick={StepOneSubmit}
              type="button"
            >
              Save &amp; Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step2 = (props) => {
  const [income, setIncome] = useState({
    inc_self: 0,
    inc_spouse: 0,
    inc_parents: 0,
    inc_property: 0,
    inc_business: 0,
    inc_others: 0,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
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
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const res = jwtDecode(jwt);
      const user = await http.get("/client/" + res._id);
      user.income = income;
      await http.put("/client/" + res._id, user);
      props.nextStep();
    } catch (error) {
      console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4">
      <div className="panel panel-primary setup-content" id="step-2">
        <div className="panel-heading">
          <h4 className="panel-title px-3 py-2">Sources Of Income</h4>
        </div>
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              className="form-control"
              placeholder="Enter Salary"
              name="net-business"
              id="net-business"
            />
          </div>
          <div className="form-group col-12 col-lg-6">
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
              placeholder="Enter Salary"
              name="net-sal-others"
              id="net-sal-others"
            />
          </div>

          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-fill btn-dark mx-2"
              onClick={props.previousStep}
              type="button"
            >
              Previous
            </button>
            <button
              className="btn btn-fill btn-primary mx-2"
              onClick={StepTwoSubmit}
              type="button"
            >
              Save &amp; Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step3 = (props) => {
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
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/client/" + userJwt._id);
        console.log(userJwt._id);
        setExpenses(user.data.expenses);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const StepThreeSubmit = async (e) => {
    e.preventDefault();
    try {
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const res = jwtDecode(jwt);
      console.log(res);
      const user = await http.get("/client/" + res._id);
      user.expenses = expenses;
      await http.put("/client/" + res._id, user);
      props.nextStep();
    } catch (error) {
      console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4">
      <div className="panel panel-primary setup-content" id="step-3">
        <div className="panel-heading">
          <h4 className="panel-title px-3 py-2">Expenses of Whole Family</h4>
        </div>
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              required="required"
              className="form-control"
              placeholder="Enter Expense Amount"
              name="aexp-others"
              id="aexp-others"
            />
          </div>

          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-fill btn-dark mx-2"
              onClick={props.previousStep}
              type="button"
            >
              Previous
            </button>
            <button
              className="btn btn-fill btn-primary mx-2"
              onClick={StepThreeSubmit}
              type="button"
            >
              Save &amp; Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Step4 = (props) => {
  const [goals, setGoals] = useState([
    {
      goal: "",
      remark: "",
      timeHorizon: "",
      amtNeededToday: 0,
    },
  ]);
  const addGoal = () => {
    setGoals([
      ...goals,
      {
        goal: "",
        remark: "",
        timeHorizon: "",
        amtNeededToday: 0,
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
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/client/" + userJwt._id);
        console.log(userJwt._id);
        setGoals(user.data.goals);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const StepFourSubmit = async (e) => {
    e.preventDefault();
    try {
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const res = jwtDecode(jwt);
      console.log(res);
      const user = await http.get("/client/" + res._id);
      user.goals = goals;
      await http.put("/client/" + res._id, user);
      props.nextStep();
    } catch (error) {
      console.log(error);
      //   return <Redirect to="/login" />;
    }
  };
  return (
    <div className="container mt-4">
      <div className="panel panel-primary setup-content" id="step-3">
        <div className="panel-heading">
          <h3 className="panel-title font-weight-bold px-3 py-2">Goals</h3>
        </div>
        <div className="panel-body p-3">
          <Accordion defaultActiveKey="0">
            {goals.map((goal, i) => {
              return (
                <Card
                  key={"goal_" + i}
                  style={{ marginBottom: "0px", paddingBottom: "15px" }}
                >
                  <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
                    Goal {i}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={String(i)}>
                    <Card.Body className="row">
                      <Col md="6">
                        <Form.Group>
                          <label>Goal</label>
                          <Form.Control
                            value={goals[i].goal}
                            onChange={(e) => {
                              const demo = { ...goal };
                              demo[i].goal = e.target.value;
                              setGoals(demo);
                            }}
                            type="text"
                            placeholder="Enter Goal"
                          />
                        </Form.Group>
                      </Col>
                      <Col md="6">
                        <Form.Group>
                          <label>Remark</label>
                          <Form.Control
                            value={goals[i].remark}
                            onChange={(e) => {
                              const demo = { ...goal };
                              demo[i].remark = e.target.value;
                              setGoals(demo);
                            }}
                            type="text"
                            placeholder="Enter Goal"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="6">
                        <Form.Group>
                          <label>Time Horizon</label>
                          <Form.Control
                            value={goals[i].timeHorizon}
                            onChange={(e) => {
                              const demo = { ...goal };
                              demo[i].timeHorizon = e.target.value;
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
                              const demo = { ...goal };
                              demo[i].amtNeededToday = parseInt(e.target.value);
                              setGoals(demo);
                            }}
                            type="text"
                            placeholder="Enter Amount"
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
                onClick={addGoal}
                type="button"
              >
                Add Goal
              </button>
            </Col>
            <Col lg="6">
              <div className="d-flex justify-content-end my-3">
                <button
                  className="btn btn-fill btn-dark mx-2"
                  onClick={props.previousStep}
                  type="button"
                >
                  Previous
                </button>
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
        </div>
      </div>
    </div>
  );
};

export { Step1, Step2, Step3, Step4 };
