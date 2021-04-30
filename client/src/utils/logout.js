export const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("auth-token");
  window.location = "/";
};

export const getCompletionStatus = (data) => {
  let status = 0;
  let remaining = [];
  console.log("started");
  // Account Info
  status += data.city !== "" ? 4 : 0;
  data.city === "" &&
    remaining.push({
      title: "Personal Details",
      link: "/profile",
      points: 4,
    });
  // Personal Details
  status += data.personal_details.self.name !== "" ? 12 : 0;
  data.personal_details.self.name === "" &&
    remaining.push({
      title: "Your Life Activities",
      link: "/personal",
      points: 12,
    });
  // Investments
  status += data.haveInvestments
    ? data.investments.length !== 0 &&
      data.investments[0].InvestmentAmount !== 0
      ? 12
      : 0
    : 12;
  if (!data.haveInvestments) {
    data.investments.length === 0 &&
      data.investments[0].InvestmentAmount === 0 &&
      remaining.push({
        title: "Your Investments",
        link: "/investment",
        points: 12,
      });
  } else {
    remaining.push({
      title: "Your Investments",
      link: "/investment",
      points: 12,
    });
  }
  // Insurance
  status += data.haveInsurances
    ? data.insurances.length !== 0 && data.insurances[0].SumInsuranced !== 0
      ? 12
      : 0
    : 12;
  if (!data.haveInsurances) {
    data.insurances.length === 0 &&
      data.insurances[0].SumInsuranced === 0 &&
      remaining.push({
        title: "Your Insurances",
        link: "/insurance",
        points: 12,
      });
  } else {
    remaining.push({
      title: "Your Insurances",
      link: "/insurance",
      points: 12,
    });
  }
  // Income
  status += data.income.inc_self !== 0 ? 12 : 0;
  if (data.income.inc_self === 0) {
    remaining.push({
      title: "Your Income",
      link: "/income",
      points: 12,
    });
  }
  // Expenses
  status += data.expenses.monthly.groceries !== 0 ? 12 : 0;
  data.expenses.monthly.groceries === 0 &&
    remaining.push({
      title: "Your Expenses",
      link: "/expense",
      points: 12,
    });

  // Assets
  status += data.haveAssets
    ? data.assets.length !== 0 && data.assets[0].type !== ""
      ? 12
      : 0
    : 12;
  if (!data.haveAssets) {
    data.assets.length === 0 &&
      data.assets[0].type === "" &&
      remaining.push({
        title: "Your Assets",
        link: "/asset",
        points: 12,
      });
  } else {
    remaining.push({
      title: "Your Assets",
      link: "/asset",
      points: 12,
    });
  }
  // Liablilities
  status += data.haveLiabilities
    ? data.liabilities.length !== 0 && data.liabilities[0].type !== ""
      ? 12
      : 0
    : 12;
  if (!data.haveLiabilities) {
    data.liabilities.length === 0 &&
      data.liabilities[0].type === "" &&
      remaining.push({
        title: "Your Liabilities",
        link: "/liability",
        points: 12,
      });
  } else {
    remaining.push({
      title: "Your Liabilities",
      link: "/liability",
      points: 12,
    });
  }
  // goals
  status += data.haveGoals
    ? data.goals.length !== 0 && data.goals[0].type !== ""
      ? 12
      : 0
    : 12;
  if (!data.haveGoals) {
    data.liabilities.length === 0 &&
      data.liabilities[0].type === "" &&
      remaining.push({
        title: "Your Goals",
        link: "/goal",
        points: 12,
      });
  } else {
    remaining.push({
      title: "Your Goals",
      link: "/goal",
      points: 12,
    });
  }

  // state
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

  return { percent: status, state: state, remaining: remaining };
};
