import React from "react";
import { Link } from "react-router-dom";

const StepsNav = ({ stepNo }) => {
  const getActive = (currStep) => {
    if (currStep === stepNo) {
      return " active";
    } else if (currStep < stepNo) {
      return " done";
    }
  };
  return (
    <ul className="nav nav-tabs step-anchor">
      <li className={"nav-item" + getActive(1)}>
        <Link to="/client/personal" className="nav-link">
          Your Activities
          <br />
          <small>Your Activities</small>
        </Link>
      </li>
      <li className={"nav-item" + getActive(2)}>
        <Link to="/client/investment" className="nav-link">
          Investments
          <br />
          <small>The Investments</small>
        </Link>
      </li>
      <li className={"nav-item" + getActive(3)}>
        <Link to="/client/insurance" className="nav-link">
          Insurances
          <br />
          <small>The Insurances</small>
        </Link>
      </li>
      <li className={"nav-item" + getActive(4)}>
        <Link to="/client/income" className="nav-link">
          Income
          <br />
          <small>Your Income Details</small>
        </Link>
      </li>
      <li className={"nav-item" + getActive(5)}>
        <Link to="/client/expense" className="nav-link">
          Expenses
          <br />
          <small>All of your Expenses</small>
        </Link>
      </li>
      <li className={"nav-item" + getActive(6)}>
        <Link to="/client/goal" className="nav-link">
          Goals
          <br />
          <small>All Of your Goals</small>
        </Link>
      </li>
    </ul>
  );
};

export default StepsNav;
