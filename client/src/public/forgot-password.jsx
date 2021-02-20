import { useState } from "react";
import http from "../utils/http";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const ForgotPassword = ({ match }) => {
  const [email, setEmail] = useState("");
  const handleClick = async (e) => {
    // e.preventDefault();
    await http.post(`/${match.params.role}/forgot-password`, {
      email: email,
    });
    // console.log(result);
  };
  return (
    <>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Reset Password</h1>
          </div>
        </section>
      </div>
      <div className="container mt-4 px-5">
        <div className="">
          <div className="form-group">
            <label htmlFor="email" className="form-group-label"></label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              className="form-control"
              placeholder="Enter your Email Address"
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ResetPssword = ({ match, history }) => {
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const handleClick = async () => {
    const user = jwtDecode(match.params.token);
    // console.log(user);
    if (pass === cpass && pass.length > 6 && match.params.role === "client") {
      await http.post(`/${match.params.role}/reset-password`, {
        email: user.email,
        password: pass,
        token: match.params.token,
      });
      // console.log(result.data);
      Swal.fire({
        icon: "success",
        title: "Yay...",
        text: "Password Reset SuccessFully, Login!",
        showConfirmButton: true,
        confirmButtonText: "Go To Login Page",
        didClose: () => {
          history.push("/login");
        },
      });
    } else {
      setError(
        "<div class='alert alert-danger'>Passsword Doesn't Match!</div>"
      );
    }
  };
  return (
    <>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Reset Password</h1>
          </div>
        </section>
      </div>
      <div className="container mt-4 px-5">
        <div className="">
          <div>
            {error}
            <label htmlFor="pass">Enter New Password:</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="text"
              id="pass"
              className="form-control"
              placeholder="Password"
            />
            <input
              value={cpass}
              onChange={(e) => setCPass(e.target.value)}
              type="text"
              id="cpass"
              className="form-control"
              placeholder="Confirm Password"
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Set Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ForgotPassword, ResetPssword };
