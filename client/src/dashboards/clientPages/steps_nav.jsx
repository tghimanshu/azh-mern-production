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
    <ul className="nav nav-tabs step-anchor mb-3">
      <li className={"nav-item" + getActive(1)}>
        <Link to="/client/personal" className="nav-link">
          Your Activities
        </Link>
      </li>
      <li className={"nav-item" + getActive(2)}>
        <Link to="/client/income" className="nav-link">
          Income
        </Link>
      </li>
      <li className={"nav-item" + getActive(3)}>
        <Link to="/client/expense" className="nav-link">
          Expenditure
        </Link>
      </li>
      <li className={"nav-item" + getActive(4)}>
        <Link to="/client/insurance" className="nav-link">
          Insurances
        </Link>
      </li>
      <li className={"nav-item" + getActive(5)}>
        <Link to="/client/investment" className="nav-link">
          Investments
        </Link>
      </li>
      <li className={"nav-item" + getActive(6)}>
        <Link to="/client/asset" className="nav-link">
          Assets
        </Link>
      </li>
      <li className={"nav-item" + getActive(7)}>
        <Link to="/client/liability" className="nav-link">
          Liabilities
        </Link>
      </li>
      <li className={"nav-item" + getActive(8)}>
        <Link to="/client/goal" className="nav-link">
          Goals
        </Link>
      </li>
    </ul>
  );
};

export default StepsNav;
