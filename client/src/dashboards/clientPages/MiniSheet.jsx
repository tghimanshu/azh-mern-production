import { Card, CardGroup, Form, FormControl, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function MiniSheet() {
  const { register, handleSubmit } = useForm();
  return (
    <Form>
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
                    placeholder="Enter Name"
                    {...register("name_1", { required: true })}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Age"
                    {...register("age_1", { required: true })}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <FormControl
                    placeholder="Enter Name"
                    {...register("name_2")}
                  />
                </td>
                <td>
                  <FormControl placeholder="Enter Age" {...register("age_2")} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <FormControl
                    placeholder="Enter Name"
                    {...register("name_1", { required: true })}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Age"
                    {...register("age_1", { required: true })}
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <FormControl
                    placeholder="Enter Name"
                    {...register("name_1", { required: true })}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Age"
                    {...register("age_1", { required: true })}
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
                    {...register("annual_expenses")}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Life Style Expenses</td>
                <td>
                  <FormControl
                    placeholder="Enter Amount"
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
                <td>Assets</td>
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
                    value="Home Purchase"
                    disabled
                    {...register("goal_1_name")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Amount"
                    {...register("goal_1_present_value")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Value"
                    {...register("goal_1_remaining_years")}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <FormControl
                    value="Wealth Builder"
                    disabled
                    {...register("goal_2_name")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Amount"
                    {...register("goal_2_present_value")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Value"
                    {...register("goal_2_remaining_years")}
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <FormControl
                    value="Children Future"
                    disabled
                    {...register("goal_3_name")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Amount"
                    {...register("goal_3_present_value")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Value"
                    {...register("goal_3_remaining_years")}
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <FormControl
                    placeholder="Enter Name of Goal"
                    {...register("goal_4_name")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Amount"
                    {...register("goal_4_present_value")}
                  />
                </td>
                <td>
                  <FormControl
                    placeholder="Enter Value"
                    {...register("goal_4_remaining_years")}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Form>
  );
}
