import { useEffect, useState } from "react";
import { Button, Card, Form, FormControl, Table } from "react-bootstrap";
import http from "utils/http";

export function MiniSheet({ match }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await http.get("/admin/client/" + match.params.id);
        setUser(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getUserData();
  }, [match]);
  return (
    <>
      {user && (
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
                        disabled
                        placeholder="Enter Name *"
                        defaultValue={
                          user.miniSheet.name_1 && user.miniSheet.name_1
                        }
                      />
                      <small className="text-danger"></small>
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Age *"
                        type="number"
                        defaultValue={
                          user.miniSheet.age_1 && user.miniSheet.age_1
                        }
                      />
                      <small className="text-danger"></small>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet.name_2 && user.miniSheet.name_2
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet.age_2 && user.miniSheet.age_2
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet.name_3 && user.miniSheet.name_3
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet.age_3 && user.miniSheet.age_3
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Name"
                        defaultValue={
                          user.miniSheet.name_4 && user.miniSheet.name_4
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Age"
                        type="number"
                        defaultValue={
                          user.miniSheet.age_4 && user.miniSheet.age_4
                        }
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
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.annual_income &&
                          user.miniSheet.annual_income
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wife Salary</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.wife_salary &&
                          user.miniSheet.wife_salary
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Rental Income</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.rental_income &&
                          user.miniSheet.rental_income
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sons Income</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.sons_income &&
                          user.miniSheet.sons_income
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Other Income</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.other_income &&
                          user.miniSheet.other_income
                        }
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
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.annual_expenses &&
                          user.miniSheet.annual_expenses
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Life Style Expenses</td>
                    <td>
                      <FormControl
                        disabled
                        type="number"
                        placeholder="Enter Amount"
                        defaultValue={
                          user.miniSheet.life_style_expenses &&
                          user.miniSheet.life_style_expenses
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Dependent Expenses</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.dependent_expenses &&
                          user.miniSheet.dependent_expenses
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Insurance Premiums</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.insurance_premiums &&
                          user.miniSheet.insurance_premiums
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Loan EMISs</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.loan_emis && user.miniSheet.loan_emis
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ongoing Expenses</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.ongoing_expenses &&
                          user.miniSheet.ongoing_expenses
                        }
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
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.saving_bank_balance &&
                          user.miniSheet.saving_bank_balance
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Fixed Deposits</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.fixed_deposits &&
                          user.miniSheet.fixed_deposits
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>EPF / PPF Balance</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.epf_ppf_balance &&
                          user.miniSheet.epf_ppf_balance
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>NSC / POMIS / KVP / RDs etc+ Sukanya</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.nsc_pomis_sukanya &&
                          user.miniSheet.nsc_pomis_sukanya
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Insurance Policies Current Value</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.insurance_policies &&
                          user.miniSheet.insurance_policies
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Policy</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.policy && user.miniSheet.policy
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Mutual Funds </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.mutual_funds &&
                          user.miniSheet.mutual_funds
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Gold ETFs</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.gold_etfs && user.miniSheet.gold_etfs
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Direct Equity</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.direct_equity &&
                          user.miniSheet.direct_equity
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>House where Residing </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.house_where_residing &&
                          user.miniSheet.house_where_residing
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Loans Receivable / Chit Funds</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.loans_recievable_chit_funds &&
                          user.miniSheet.loans_recievable_chit_funds
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Any other Investments</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.other_investments &&
                          user.miniSheet.other_investments
                        }
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
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.home_loan && user.miniSheet.home_loan
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Car Loan</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.car_loan && user.miniSheet.car_loan
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Other Loans</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.other_loans &&
                          user.miniSheet.other_loans
                        }
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
                      <FormControl disabled defaultValue="Home Purchase" />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_1_present_value &&
                          user.miniSheet.goal_1_present_value
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_1_remaining_years &&
                          user.miniSheet.goal_1_remaining_years
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <FormControl disabled defaultValue="Wealth Builder" />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_2_present_value &&
                          user.miniSheet.goal_2_present_value
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_2_remaining_years &&
                          user.miniSheet.goal_2_remaining_years
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <FormControl disabled defaultValue="Children Future" />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_3_present_value &&
                          user.miniSheet.goal_3_present_value
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_3_remaining_years &&
                          user.miniSheet.goal_3_remaining_years
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Name of Goal"
                        defaultValue={
                          user.miniSheet.goal_4_name &&
                          user.miniSheet.goal_4_name
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Amount"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_4_present_value &&
                          user.miniSheet.goal_4_present_value
                        }
                      />
                    </td>
                    <td>
                      <FormControl
                        disabled
                        placeholder="Enter Value"
                        type="number"
                        defaultValue={
                          user.miniSheet.goal_4_remaining_years &&
                          user.miniSheet.goal_4_remaining_years
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Form>
      )}
    </>
  );
}
