import React, { useState } from "react";
import http from "../../utils/http";
import { Link } from "react-router-dom";

export const AdvisorLogin = ({ history }) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await http.post("/advisor/login", {
        email: username,
        password: pass,
      });
      localStorage.setItem("auth-token", result.data);
      history.push("/advisor");
    } catch (error) {
      const errors = error.response;
      seterror(errors.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <form method="POST" className="container pt-3" onSubmit={handleSubmit}>
      {error === "" ? "" : <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label htmlFor="l-adv-username">E-Mail: </label>
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="l-adv-username"
          id="l-adv-username"
          placeholder="Enter User Name Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="l-adv-pass">Password: </label>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="l-adv-pass"
          placeholder="Enter Password!!"
        />
      </div>
      <button
        type="submit"
        name="l-adv-submit"
        className="btn btn-success btn-block"
      >
        Login
      </button>

      <div className="text-center mt-2">
        Forgot Password? <Link to="/forgot-password/advisor">Click Here.</Link>
      </div>
    </form>
  );
};
