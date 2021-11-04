import React, { useState } from "react";
import { Link } from "react-router-dom";
import http from "utils/http";
import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";
import Cropper from "react-easy-crop";
import { dangerAlert, successAlert } from "./alerts";
import { Icon } from "@iconify/react";
import circleCheck from "@iconify-icons/akar-icons/circle-check";

export const RequestAmtModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            <tr>
              <td>Your Charge</td>
              <td>
                <input
                  value={props.reqAmt}
                  onChange={props.setReqAmt}
                  placeholder="Your Amount"
                />
              </td>
            </tr>
            <tr>
              <td>AZH Charges</td>
              <td>
                <input value="5%" disabled />
              </td>
            </tr>
            <tr>
              <td>You Will Recieve </td>
              <td>
                <input
                  value={
                    isNaN((parseInt(props.reqAmt) * 5) / 100)
                      ? 0
                      : (parseInt(props.reqAmt) * 5) / 100
                  }
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={props.handleReqAmtSubmit}
        >
          Request
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export const BookingModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="b_remarks">
              Extra Information you want to provide to Advisors:
            </label>
            <textarea
              id="b_remarks"
              rows={5}
              className="form-control mb-2"
              value={props.appointment.remarks}
              onChange={props.handleBRemarks}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={props.handleBSubmit}
        >
          Get Recommendation
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export const CropModel = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
      size="lg"
      className="cropModel"
    >
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <Cropper
          image={props.imageUrl}
          crop={props.crop}
          zoom={props.zoom}
          aspect={200 / 200}
          // cropSize={{ width: 200, height: 200 }}
          onCropChange={props.setCrop}
          onCropComplete={props.onCropComplete}
          onZoomChange={props.setZoom}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={(e) => props.handleUploadImage(e, props.ogImage)}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export const ShareModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Share With Friends &amp; Family</Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <FacebookShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-facebook">
              <i className="align-middle fab fa-facebook"></i> Facebook
            </button>
          </FacebookShareButton>

          <TwitterShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-twitter">
              <i className="align-middle fab fa-twitter"></i> Twitter
            </button>
          </TwitterShareButton>

          <MailruShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-google">
              <i className="align-middle fab fa-google"></i> Google
            </button>
          </MailruShareButton>

          <button className="btn mb-1 btn-instagram">
            <i className="align-middle fab fa-instagram"></i> Instagram
          </button>
        </div>
        ;
      </Modal.Body>
    </Modal>
  );
};

const Login = (props) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await http.post("/client/login", {
        email: username,
        password: pass,
      });
      localStorage.setItem("auth-token", result.data);
      window.location = process.env.PUBLIC_URL + "/client";
    } catch (error) {
      const errors = error.response;
      console.log(errors);
      seterror(errors.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const inputStyles = {
    padding: "6px 8px",
    background: "#F3F3F3",
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Body className="m-0 p-0">
        <div className="row m-0 p-0">
          <div
            className="col-12 col-md-6 p-4 d-flex aign-items-end"
            style={{
              background: `url(${
                process.env.PUBLIC_URL +
                "/assets/img/popup/popup_background.png"
              }) no-repeat center center/cover`,
            }}
          >
            <div className="d-flex align-items-end">
              <div
                style={{
                  width: "2px",
                  height: "45px",
                  background: "white",
                }}
              ></div>
              <div
                className="ml-3"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "42px",
                  color: "#F5F5F5",
                }}
              >
                Welcome Back
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 px-4">
            <form
              method="POST"
              className="container pt-5"
              onSubmit={handleSubmit}
            >
              {error === "" ? (
                ""
              ) : (
                <div className="alert alert-danger">{error}</div>
              )}
              <div className="form-group">
                <input
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required={true}
                  className="form-control"
                  type="text"
                  name="l-cli-username"
                  id="l-cli-username"
                  placeholder="Enter User Name Here"
                  style={inputStyles}
                />
              </div>
              <div className="form-group mb-0">
                <input
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  required={true}
                  className="form-control"
                  type="password"
                  name="l-cli-pass"
                  placeholder="Enter Password"
                  style={inputStyles}
                />
              </div>
              <Link
                to="/forgot-password/client"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "27px",
                  textdecorationLine: "underline",
                  color: "#979797",
                }}
              >
                Forgot Password?
              </Link>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  name="l-cli-submit"
                  className="btn btn-success mt-4"
                  style={{
                    padding: "12px 50px",
                    background: "#2B32B2",
                  }}
                >
                  Login
                </button>
              </div>
              <div
                className="text-center mt-2 mb-3"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "27px",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.75)",
                }}
              >
                Don't have a account?
                <br />
                <div
                  onClick={() => props.setSignUp(true)}
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "27px",
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.75)",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                >
                  Sign up here
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
const Register = (props) => {
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(null);
  const [pass, setpass] = useState("");
  const [isChecked, setisChecked] = useState(false);

  const displayRazorPay = async (b_id, adv_id) => {
    console.log(process.env.REACT_APP_RAZORPAY_CLIENT_KEY);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("RazorPay failed to load.... Are you Online?");
      return;
    }

    const { data } = await http.post("/payment", { b_id, adv_id });

    const options = {
      // key: process.env.REACT_APP_RAZORPAY_CLIENT_KEY,
      key: "rzp_test_S7vT0R1afYJ0dD",
      amount: data.amount,
      currency: data.currency,
      name: "Activate Your Account",
      description:
        "Please Make the payment to see the Recommendation given by the Advisor",
      image: "",
      order_id: data.id,
      handler: async function (response) {
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
          const result = await http.post("/client/login", {
            email: username,
            password: pass,
          });
          localStorage.setItem("auth-token", result.data);
          window.location = process.env.PUBLIC_URL + "/client?accreated=true";
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
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      // prefill: {
      //   name: "Gaurav Kumar",
      //   email: "gaurav.kumar@example.com",
      //   contact: "9999999999",
      // },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return seterror(dangerAlert("Please Accept the Terms!"));
    }
    displayRazorPay();
  };

  const inputStyles = {
    padding: "6px 8px",
    background: "#F3F3F3",
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
      size="lg"
    >
      <Modal.Body className="m-0 p-0">
        <div className="row m-0 p-0">
          <div
            className="col-12 col-md-6 p-4"
            style={{
              background: `url(${
                process.env.PUBLIC_URL +
                "/assets/img/popup/popup_background.png"
              }) no-repeat center center/cover`,
            }}
          >
            <div
              style={{
                fontFamily: "Baloo Da",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "23px",
                textAlign: "center",
                letterSpacing: "0.1px",
                color: "#FFFFFF",
              }}
            >
              Say hello to
              <br />
              Simplification
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "74px",
                  lineHeight: "84px",
                  letterSpacing: "0.2px",
                  color: "#FFFFFF",
                }}
              >
                999
              </div>
              <div
                style={{
                  fontFamily: "Baloo Da",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "23px",
                  letterSpacing: "0.1px",
                  color: "#FFFFFF",
                  marginLeft: "10px",
                }}
              >
                ₹<br />
                Per year
              </div>
            </div>
            <div
              style={{
                width: "90%",
                margin: "0 auto",
                fontFamily: "Baloo Da 2",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "28px",
                letterSpacing: "0.2px",
                color: "#FFFFFF",
              }}
            >
              <div className="mb-2 d-flex align-items-center">
                <Icon
                  icon={circleCheck}
                  className="mr-2 text-success"
                  style={{
                    fontSize: "22px",
                  }}
                />
                Right Advisors just a click away- without hassle
              </div>
              <div className="mb-2 d-flex align-items-center">
                <Icon
                  icon={circleCheck}
                  className="mr-2 text-success"
                  style={{
                    fontSize: "22px",
                  }}
                />
                Just a call away to settle your Grievances
              </div>
              <div className="mb-2 d-flex align-items-center">
                <Icon
                  icon={circleCheck}
                  className="mr-2 text-success"
                  style={{
                    fontSize: "22px",
                  }}
                />
                Save tons to time in researching a right Advisor for any
                Product; Real estate, Loans, Finanical planning etc.
              </div>
              <div className="mb-2 d-flex align-items-center">
                <Icon
                  icon={circleCheck}
                  className="mr-2 text-success"
                  style={{
                    fontSize: "22px",
                  }}
                />
                Access to Advance dashboard to help you in financial Planning
              </div>
              <div className="mb-2 d-flex align-items-center">
                <Icon
                  icon={circleCheck}
                  className="mr-2 text-success"
                  style={{
                    fontSize: "22px",
                  }}
                />
                10hrs Personal Finance Live sessions for you and your family
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 px-4 d-flex aign-items-end">
            <form
              method="POST"
              className="container pt-3"
              onSubmit={handleSubmit}
            >
              {error}
              <div className="row">
                <div className="form-group col-6">
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required={true}
                    className="form-control"
                    type="text"
                    name="cli-name"
                    id="cli-name"
                    placeholder="Name"
                    style={inputStyles}
                  />
                </div>
                <div className="form-group col-6">
                  <input
                    value={contact}
                    onChange={(e) =>
                      setcontact(
                        parseInt(e.target.value) === 0
                          ? null
                          : parseInt(e.target.value)
                      )
                    }
                    required={true}
                    className="form-control"
                    type="number"
                    name="cli-contact"
                    id="cli-contact"
                    placeholder="Contact"
                    style={inputStyles}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required={true}
                  className="form-control"
                  type="text"
                  name="cli-username"
                  id="cli-username"
                  placeholder="Username"
                  style={inputStyles}
                />
              </div>
              <div className="form-group">
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required={true}
                  className="form-control"
                  type="text"
                  name="cli-email"
                  id="cli-email"
                  placeholder="Email"
                  style={inputStyles}
                />
              </div>
              <div className="form-group">
                <input
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  required={true}
                  className="form-control"
                  type="password"
                  name="cli-pass"
                  placeholder="Password"
                  style={inputStyles}
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
                />
                <label
                  htmlFor="cli-terms"
                  className="custom-control-label"
                  //   style={to th{ fontSize: "1.24rem" }}
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#737373",
                  }}
                >
                  I Agree with{" "}
                  <Link
                    to="/page/terms-conditions"
                    style={{
                      color: "#737373",
                      textDecorationLine: "underline",
                    }}
                  >
                    Terms &amp; Conditions.
                  </Link>
                  <span className="text-danger">*</span>
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  name="l-cli-submit"
                  className="btn btn-success mt-4"
                  style={{
                    padding: "12px 50px",
                    background: "#2B32B2",
                  }}
                >
                  Sign up
                </button>
              </div>
              <div
                className="text-center mt-2 mb-3"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "27px",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.75)",
                }}
              >
                Have an Account?
                <br />
                <div
                  onClick={() => props.setSignUp(true)}
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "27px",
                    textAlign: "center",
                    color: "rgba(0, 0, 0, 0.75)",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                >
                  Login In here
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const LoginModal = (props) => {
  const [signUp, setSignUp] = useState(false);
  if (!signUp) {
    return <Login signUp={signUp} setSignUp={setSignUp} {...props} />;
  } else {
    return <Register signUp={signUp} setSignUp={setSignUp} {...props} />;
  }
};
