import React, { useState } from "react";
import http from "../../utils/http";
import { dangerAlert, successAlert } from "../../utils/alerts";
// import { Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

export const ClientRegistor = ({ history }) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(0);
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [cp, setcp] = useState(true);

  function onCaptchaChange(value) {
    setcp(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return seterror("Please Accept the Terms!");
    }
    if (cp === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return seterror("Captcha Required!");
    }
    try {
      await http.post("/client/", {
        username: username,
        name: name,
        email: email,
        contact: contact,
        password: pass,
      });
      seterror(
        successAlert("Registration SuccessFul, Please Login!", seterror)
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // console.log(error);
      if (typeof error.response.data === "string") {
        seterror(dangerAlert(error.response.data));
      } else {
        const errors = error.response.data;
        seterror(dangerAlert(errors[0].message));
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <form method="POST" className="container pt-3" onSubmit={handleSubmit}>
      {error}
      <div className="form-group">
        <label htmlFor="cli-username">User Name: </label>
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="cli-username"
          id="cli-username"
          placeholder="Enter User Name Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cli-name">Name: </label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="cli-name"
          id="cli-name"
          placeholder="Enter Name Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cli-email">E-Mail: </label>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="cli-email"
          id="cli-email"
          placeholder="Enter Email Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cli-contact">Contact: </label>
        <input
          value={contact}
          onChange={(e) => setcontact(parseInt(e.target.value))}
          required={true}
          className="form-control"
          type="number"
          name="cli-contact"
          id="cli-contact"
          placeholder="Enter Contact Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cli-pass">Password: </label>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="cli-pass"
          placeholder="Enter Password!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cli-cpass">Confirm Password: </label>
        <input
          value={cpass}
          onChange={(e) => setcpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="cli-cpass"
          placeholder="Confirm Password!!"
        />
      </div>
      <div className="custom-control custom-checkbox">
        <input
          onChange={(e) => setisChecked(!Boolean(isChecked))}
          checked={isChecked}
          type="checkbox"
          name="cli-terms"
          id="cli-terms"
          className="custom-control-input"
          //   style={{ width: "1.25rem", height: "1.25rem" }}
          //   required={true}
        />
        <label
          htmlFor="cli-terms"
          className="custom-control-label"
          //   style={{ fontSize: "1.24rem" }}
        >
          I Agree to the{" "}
          <Link to="/page/terms-conditions">Terms &amp; Conditions.</Link>
        </label>
      </div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={onCaptchaChange}
      />
      <button
        type="submit"
        name="cli-submit"
        className="btn btn-success btn-block"
      >
        Register
      </button>
    </form>
  );
};
