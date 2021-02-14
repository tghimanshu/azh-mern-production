import { useEffect } from "react";
import StepWizard from "react-step-wizard";
import { Step1, Step2, Step3, Step4 } from "./steps/steps";
import Swal from "sweetalert2";

const FinancialPlanning = ({ history }) => {
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Need To Be Registered!",
        showConfirmButton: true,
        confirmButtonText: "Go To Login Page",
        didClose: () => {
          history.push("/login");
        },
      });
    }
  }, [history]);
  return (
    <>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Financial Planning</h1>
          </div>
        </section>
      </div>

      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </StepWizard>
    </>
  );
};

export default FinancialPlanning;
