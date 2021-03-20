import React, { useEffect, useState, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import http from "../utils/http";

const Feedback = ({ match }) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getForm = async () => {
      const { data } = await http.get("/feedback/" + match.params.id);
      setTitle(data.title);
      setDescription(data.description);
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
  const handleTextChange = (e, i) => {
    const demo = [...answers];
    demo[i].value = e.target.value;
    setAnswers(demo);
  };
  const handleRadioChange = (e, i, value) => {
    const demo = [...answers];
    demo[i].value = value;
    console.log(demo);
    setAnswers(demo);
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
        <div className="feedback_form">
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <p>{description}</p>
          </div>
          {formData.length !== 0 && <h4>Feedback Form Elements</h4>}
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
          <Button variant="success">Submit</Button>
        </div>
      </Container>
    </Fragment>
  );
};

const TextField = (props) => {
  return (
    <div className="mt-2">
      <label>{props.text}</label>
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
              name={"props" + props.index}
              id={"rb"}
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
