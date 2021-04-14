import React, { useEffect, useState, Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";
import http from "../utils/http";
import { getRole } from "../utils/jwt";
import { dangerAlert, successAlert } from "../utils/alerts";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Feedback = ({ match, history }) => {
  const [error, setError] = useState("");
  const [clientId, setClientId] = useState("");
  const [formId, setFormId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [cp, setcp] = useState(false);

  useEffect(() => {
    const user = getRole();
    if (user.role !== "client") {
      // Swal.fire({
      //   icon: "info",
      //   text: "You must be logged in as a client to access this page.",
      //   confirmButtonText: "Login/Register",
      // }).then((value) => {
      //   value.isConfirmed && history.push("/login");
      // });
      setClientId(null);
    } else {
      setClientId(user._id);
    }
  }, [history]);

  useEffect(() => {
    const getForm = async () => {
      const { data } = await http.get("/feedback/" + match.params.id);
      setTitle(data.title);
      setDescription(data.description);
      setFormId(data._id);
      setAnswers(data.questions.map((q) => ({ text: q.text, value: "" })));
      setFormData(data.questions.map((q) => ({ ...q, Component: TextField })));
    };
    getForm();
    return () => {
      setTitle("");
      setDescription("");
      setFormData([]);
    };
  }, [match]);

  function onCaptchaChange(value) {
    setcp(value !== "");
  }

  const handleTextChange = (e, i) => {
    const demo = [...answers];
    demo[i].value = e.target.value;
    setAnswers(demo);
  };

  const handleRadioChange = (e, i, value) => {
    const demo = [...answers];
    demo[i].value = value;
    setAnswers(demo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cp) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setError(dangerAlert("Captcha is Required"));
      return;
    }
    try {
      await http.post("/feedback/single", {
        user: {
          role: "client",
          id: clientId,
        },
        formId: formId,
        answers: answers,
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setError(successAlert("Response Captured SuccessFully", setError));
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Something went wrong",
      });
    }
  };
  return (
    <Fragment>
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Feedback Form</h1>
          </div>
        </section>
      </div>
      <Container className="mt-2">
        {error}
        <Form className="feedback_form">
          <div className="feedback_form_title mt-3">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {formData.map(({ Component, text, type, options }, i) => (
            <Component
              key={i}
              text={text}
              type={type}
              options={options ? options : []}
              answers={answers}
              index={i}
              handleTextChange={handleTextChange}
              handleRadioChange={handleRadioChange}
            />
          ))}
          <span>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
          </span>
          <Button variant="success" className="mt-2" onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const TextField = (props) => {
  return (
    <div className="mt-2">
      <label>
        {props.text} <span className="text-danger">*</span>
      </label>
      {["text", "email", "number"].includes(props.type) && (
        <input
          required
          className="form-control"
          type={props.type}
          placeholder={`Enter ${props.text} Here!!`}
          value={props.answers[props.index].value}
          onChange={(e) => props.handleTextChange(e, props.index)}
        />
      )}
      {props.type === "radio" &&
        props.options.map((option, i) => (
          <div key={i} className="custom-control custom-radio custom-control">
            <input
              type={props.type}
              className="custom-control-input"
              value={option.value}
              checked={option.value === props.answers[props.index].value}
              onChange={(e) =>
                props.handleRadioChange(e, props.index, option.value)
              }
              required={true}
            />
            <label
              onClick={(e) =>
                props.handleRadioChange(e, props.index, option.value)
              }
              className="custom-control-label"
            >
              {option.text}
            </label>
          </div>
        ))}
    </div>
  );
};

export default Feedback;
