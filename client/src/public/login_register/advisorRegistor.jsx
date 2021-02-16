import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import http from "../../utils/http";
import { successAlert, dangerAlert } from "../../utils/alerts";
import ReCAPTCHA from "react-google-recaptcha";

export const AdvisorRegistor = ({ history }) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(0);
  const [experience, setexperience] = useState(0);
  const [regNo, setregNo] = useState("");
  const [expertise, setexpertise] = useState("");
  const [location, setlocation] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [cp, setcp] = useState(false);

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
      const result = await http.post("/advisor/", {
        username: username,
        name: name,
        email: email,
        contact: contact,
        experience: experience,
        sebi_no: regNo,
        expertise: expertise,
        location: location,
        password: pass,
        profile_pic: profilePic,
      });
      console.log(result);
      seterror(
        successAlert("Registration SuccessFul, Please Login!", seterror)
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
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

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await http.post("/advisor/upload", formData, config);
      console.log(data);
      setprofilePic(data);
    } catch (error) {
      console.log("Upload Error!");
    }
  };

  return (
    <form method="POST" className="container pt-3" onSubmit={handleSubmit}>
      {error}
      <div className="form-group">
        <label htmlFor="adv-username">User Name: </label>
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-username"
          id="adv-username"
          placeholder="Enter User Name Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-name">Name: </label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-name"
          id="adv-name"
          placeholder="Enter Name Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-email">E-Mail: </label>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-email"
          id="adv-email"
          placeholder="Enter Email Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-contact">Contact: </label>
        <input
          value={contact}
          onChange={(e) => setcontact(parseInt(e.target.value))}
          required={true}
          className="form-control"
          type="number"
          name="adv-contact"
          id="adv-contact"
          placeholder="Enter Contact Here!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-experience">Experience (In Years): </label>
        <input
          value={experience}
          onChange={(e) => setexperience(parseInt(e.target.value))}
          required={true}
          className="form-control"
          type="number"
          name="adv-experience"
          id="adv-experience"
          placeholder="Enter Experience!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-reg_no">SEBI Registration Number: </label>
        <input
          value={regNo}
          onChange={(e) => setregNo(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-reg_no"
          id="adv-reg_no"
          placeholder="Enter SEBI Registration Number!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-position">Your Expertise: </label>
        <input
          value={expertise}
          onChange={(e) => setexpertise(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-position"
          id="adv-position"
          placeholder="Enter Your Expertise!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-location">Location: </label>
        <input
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          required={true}
          className="form-control"
          type="text"
          name="adv-location"
          id="adv-location"
          placeholder="Enter Location!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-pass">Password: </label>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="adv-pass"
          placeholder="Enter Password!!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adv-cpass">Confirm Password: </label>
        <input
          value={cpass}
          onChange={(e) => setcpass(e.target.value)}
          required={true}
          className="form-control"
          type="password"
          name="adv-cpass"
          placeholder="Confirm Password!!"
        />
      </div>
      <label htmlFor="adv-profile_pic">Profile_pic: </label>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              onChange={uploadImage}
              type="file"
              className="custom-file-input"
              id="adv-inputGroupFile02"
            />
            <label className="custom-file-label" htmlFor="adv-inputGroupFile02">
              {profilePic === ""
                ? "Choose file"
                : profilePic.split("advisors\\")[1]}
            </label>
          </div>
        </div>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          onChange={(e) => setisChecked(!Boolean(isChecked))}
          checked={isChecked}
          type="checkbox"
          name="adv-terms"
          id="adv-terms"
          className="custom-control-input"
          //   style={{ width: "1.25rem", height: "1.25rem" }}
          required={true}
        />
        <label
          htmlFor="adv-terms"
          className="custom-control-label"
          //   style={{ fontSize: "1.24rem" }}
        >
          I Agree to the{" "}
          <a href="page.php?name=terms-conditions">Terms &amp; Conditions.</a>
        </label>
      </div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={onCaptchaChange}
      />
      <button
        type="submit"
        name="adv-submit"
        className="btn btn-success btn-block"
      >
        Register
      </button>
    </form>
  );
};
