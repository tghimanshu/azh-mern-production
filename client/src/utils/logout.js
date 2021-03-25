export const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("auth-token");
  window.location = "/";
};

export const getCompletionStatus = (data) => {
  let status = 0;
  // Account Info
  status += data.name !== 0 ? 10 : 0;
  // Personal Details
  status += data.personal_details.self.name !== "" ? 15 : 0;
  // goals
  status += data.goals.length !== 0 && data.goals[0].goal !== "" ? 15 : 0;
  // Investments
  status +=
    data.investments.length !== 0 &&
    !data.haveInvestments &&
    data.investments[0].goal !== 0
      ? 15
      : 0;
  // Insurance
  status +=
    data.insurances.length !== 0 &&
    !data.haveInsurances &&
    data.insurances[0].goal !== 0
      ? 15
      : 0;
  // Income
  status += data.income.inc_self !== 0 ? 15 : 0;
  // Expenses
  status += data.expenses.monthly.groceries !== 0 ? 15 : 0;
  let state =
    status === 0
      ? "Very Low"
      : status < 30
      ? "Low"
      : status < 50
      ? "Intermediate"
      : status < 75
      ? "Great"
      : status < 100
      ? "Excellent"
      : "Excellent";

  return { percent: status, state: state, remaining: [] };
};
