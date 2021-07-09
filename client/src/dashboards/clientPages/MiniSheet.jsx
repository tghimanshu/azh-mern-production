import { Button, Card, Form, FormControl, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { alterUserAction, getUserAction } from "redux/actions/actions";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getRole } from "utils/jwt";
import { successAlert } from "utils/alerts";

export function MiniSheet() {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state.user);
  useSelector((state) => state.alteredUser);

  useEffect(() => {
    dispatch(getUserAction(getRole()._id));
  }, [dispatch]);
  const onDataSubmit = (data) => {
    dispatch(
      alterUserAction(user._id, {
        ...user,
        miniSheet: data,
      })
    );
    setAlert(successAlert("Minisheet updated SuccessFully", setAlert));
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log("works");
  return (
    <>
      {alert}
      {user && (
        <Form onSubmit={handleSubmit(onDataSubmit)}>
          <Card>
            <Card.Header>
              <Card.Title>Family Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Name of Family Members&amp;Relation</td>
                    <td>Age</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <FormControl
                        placeholder="Enter Name *"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.name_1 &&
                          user.miniSheet.name_1
                        }
                        {...register("name_1", { required: true })}
                      />
                      <small className="text-danger">
                        {errors.name_1 && "Name is required"}
                      </small>
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Age *"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.age_1 &&
                          user.miniSheet.age_1
                        }
                        {...register("age_1", { required: true })}
                      />
                      <small className="text-danger">
                        {errors.age_1 && "Age is Required"}
                      </small>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <FormControl
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.name_2 &&
                          user.miniSheet.name_2
                        }
                        {...register("name_2")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.age_2 &&
                          user.miniSheet.age_2
                        }
                        {...register("age_2")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <FormControl
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.name_3 &&
                          user.miniSheet.name_3
                        }
                        {...register("name_3")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.age_3 &&
                          user.miniSheet.age_3
                        }
                        {...register("age_3")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <FormControl
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.name_4 &&
                          user.miniSheet.name_4
                        }
                        {...register("name_4")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.age_4 &&
                          user.miniSheet.age_4
                        }
                        {...register("age_4")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Income Expenditure Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Family Inflows(After Taxes)</td>
                    <td>Annual Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Annual Income</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.annual_income &&
                          user.miniSheet.annual_income
                        }
                        {...register("annual_income")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wife Salary</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.wife_salary &&
                          user.miniSheet.wife_salary
                        }
                        {...register("wife_salary")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Rental Income</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.rental_income &&
                          user.miniSheet.rental_income
                        }
                        {...register("rental_income")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sons Income</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.sons_income &&
                          user.miniSheet.sons_income
                        }
                        {...register("sons_income")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Other Income</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.other_income &&
                          user.miniSheet.other_income
                        }
                        {...register("other_income")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Family OutFlows</td>
                    <td>Annual Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Annual Expenses</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.annual_expenses &&
                          user.miniSheet.annual_expenses
                        }
                        {...register("annual_expenses")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Life Style Expenses</td>
                    <td>
                      <FormControl
                        type="number"
                        placeholder="Enter Amount"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.life_style_expenses &&
                          user.miniSheet.life_style_expenses
                        }
                        {...register("life_style_expenses")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Dependent Expenses</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.dependent_expenses &&
                          user.miniSheet.dependent_expenses
                        }
                        {...register("dependent_expenses")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Insurance Premiums</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.insurance_premiums &&
                          user.miniSheet.insurance_premiums
                        }
                        {...register("insurance_premiums")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Loan EMISs</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.loan_emis &&
                          user.miniSheet.loan_emis
                        }
                        {...register("loan_emis")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ongoing Expenses</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.ongoing_expenses &&
                          user.miniSheet.ongoing_expenses
                        }
                        {...register("ongoing_expenses")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Assets&amp;Liabilities</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Assets</td>
                    <td>Current Value</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Savings Bank Balance</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.saving_bank_balance &&
                          user.miniSheet.saving_bank_balance
                        }
                        {...register("saving_bank_balance")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Fixed Deposits</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.fixed_deposits &&
                          user.miniSheet.fixed_deposits
                        }
                        {...register("fixed_deposits")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>EPF / PPF Balance</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.epf_ppf_balance &&
                          user.miniSheet.epf_ppf_balance
                        }
                        {...register("epf_ppf_balance")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>NSC / POMIS / KVP / RDs etc+ Sukanya</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.nsc_pomis_sukanya &&
                          user.miniSheet.nsc_pomis_sukanya
                        }
                        {...register("nsc_pomis_sukanya")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Insurance Policies Current Value</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.insurance_policies &&
                          user.miniSheet.insurance_policies
                        }
                        {...register("insurance_policies")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Policy</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.policy &&
                          user.miniSheet.policy
                        }
                        {...register("policy")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Mutual Funds </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.mutual_funds &&
                          user.miniSheet.mutual_funds
                        }
                        {...register("mutual_funds")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Gold ETFs</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.gold_etfs &&
                          user.miniSheet.gold_etfs
                        }
                        {...register("gold_etfs")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Direct Equity</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.direct_equity &&
                          user.miniSheet.direct_equity
                        }
                        {...register("direct_equity")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>House where Residing </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.house_where_residing &&
                          user.miniSheet.house_where_residing
                        }
                        {...register("house_where_residing")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Loans Receivable / Chit Funds</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.loans_recievable_chit_funds &&
                          user.miniSheet.loans_recievable_chit_funds
                        }
                        {...register("loans_recievable_chit_funds")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Any other Investments</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.other_investments &&
                          user.miniSheet.other_investments
                        }
                        {...register("other_investments")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Liabilities</td>
                    <td>Current Value</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Home Loan</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.home_loan &&
                          user.miniSheet.home_loan
                        }
                        {...register("home_loan")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Car Loan</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.car_loan &&
                          user.miniSheet.car_loan
                        }
                        {...register("car_loan")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Other Loans</td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.other_loans &&
                          user.miniSheet.other_loans
                        }
                        {...register("other_loans")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Different Goals</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="font-weight-bold">
                  <tr>
                    <td>Sr. No.</td>
                    <td>Name</td>
                    <td>Present Value of Goal</td>
                    <td>Remaining Years for Goal</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <FormControl
                        defaultValue="Home Purchase"
                        disabled
                        {...register("goal_1_name")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_1_present_value &&
                          user.miniSheet.goal_1_present_value
                        }
                        {...register("goal_1_present_value")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_1_remaining_years &&
                          user.miniSheet.goal_1_remaining_years
                        }
                        {...register("goal_1_remaining_years")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <FormControl
                        defaultValue="Wealth Builder"
                        disabled
                        {...register("goal_2_name")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_2_present_value &&
                          user.miniSheet.goal_2_present_value
                        }
                        {...register("goal_2_present_value")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_2_remaining_years &&
                          user.miniSheet.goal_2_remaining_years
                        }
                        {...register("goal_2_remaining_years")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <FormControl
                        defaultValue="Children Future"
                        disabled
                        {...register("goal_3_name")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_3_present_value &&
                          user.miniSheet.goal_3_present_value
                        }
                        {...register("goal_3_present_value")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_3_remaining_years &&
                          user.miniSheet.goal_3_remaining_years
                        }
                        {...register("goal_3_remaining_years")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <FormControl
                        placeholder="Enter Name of Goal"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_4_name &&
                          user.miniSheet.goal_4_name
                        }
                        {...register("goal_4_name")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_4_present_value &&
                          user.miniSheet.goal_4_present_value
                        }
                        {...register("goal_4_present_value")}
                      />
                    </td>
                    <td>
                      <FormControl
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet &&
                          user.miniSheet.goal_4_remaining_years &&
                          user.miniSheet.goal_4_remaining_years
                        }
                        {...register("goal_4_remaining_years")}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Form>
      )}
    </>
  );
}
