import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import ContentEditable from "react-contenteditable";
import { Link } from "react-router-dom";
import { dangerAlert, successAlert } from "../../utils/alerts";
import http from "../../utils/http";

import "./feedbackform.css";

export const AddFeedbackForm = () => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState([]);

  const handleFormItemAdd = (type) => {
    switch (type) {
      case "name":
        const demo1 = [...formData];
        demo1.push({
          type: "text",
          text: "Name",
          Component: TextField,
        });
        setFormData(demo1);
        break;
      case "email":
        const demo2 = [...formData];
        demo2.push({
          type: "email",
          text: "E Mail",
          Component: TextField,
        });
        setFormData(demo2);
        break;
      case "contact":
        const demo3 = [...formData];
        demo3.push({
          type: "number",
          text: "Contact",
          Component: TextField,
        });
        setFormData(demo3);
        break;
      case "custom":
        const demo4 = [...formData];
        demo4.push({
          type: "text",
          text: "Your Text Here",
          Component: TextField,
        });
        setFormData(demo4);
        break;
      case "ratings":
        const demo5 = [...formData];
        demo5.push({
          type: "radio",
          text: "Ratings",
          options: [
            { text: "1", value: "1" },
            { text: "2", value: "2" },
            { text: "3", value: "3" },
            { text: "4", value: "4" },
            { text: "5", value: "5" },
          ],
          Component: Ratings,
        });
        setFormData(demo5);
        break;
      case "yesno":
        const demo6 = [...formData];
        demo6.push({
          type: "radio",
          text: "Your Question Here",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
          Component: YesNo,
        });
        setFormData(demo6);
        break;
      default:
        break;
    }
  };

  const handleTextChange = (e, index) => {
    const demo = [...formData];
    demo[index].text = e.target.value;
    setFormData(demo);
  };

  const handleOptionTextChange = (e, index, optIndex) => {
    const demo = [...formData];
    demo[index].option[optIndex].text = e.target.value;
    setFormData(demo);
  };

  const handleRemoveElement = (index) => {
    const demo = [...formData];
    demo.splice(index, 1);
    setFormData(demo);
  };

  const handleTextBlur = (index, optIndex) => {
    const demo = [...formData];
    console.log("text blurred", demo[index].text);
    if (optIndex === -1) {
      demo[index].text =
        demo[index].text === "" ? "Enter Text Here" : demo[index].text;
    } else {
      demo[index].options[optIndex] =
        demo[index].options[optIndex] === ""
          ? "Enter Text Here"
          : demo[index].options[optIndex];
    }
    setFormData(demo);
  };

  const handleSubmit = async (e) => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (title === "") return setError(dangerAlert("Title Is Mandatory"));
      if (description === "")
        return setError(dangerAlert("Description Is Mandatory"));
      if (formData.length === 0) {
        return setError(dangerAlert("Form Must Atleast have 1 Element"));
      }
      await http.post("/feedback", {
        title: title,
        description: description,
        questions: formData,
      });
      setError(successAlert("Form Added SuccessFully", setError));
    } catch (err) {}
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
          {error}
          <div className="feedback_form">
            <div className="mt-2">
              <label>Title: </label>
              <input
                required
                className="form-control"
                type="text"
                placeholder="Enter Title Here!!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label>Description: </label>
              <input
                required
                className="form-control"
                type="text"
                placeholder="Enter Description Here!!"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {formData.length !== 0 && <h4>Feedback Form Elements</h4>}
            {formData.map(({ Component, text, options }, i) => (
              <Component
                key={i}
                text={text}
                handleTextChange={handleTextChange}
                handleOptionTextChange={handleOptionTextChange}
                options={options}
                index={i}
                handleRemoveElement={handleRemoveElement}
                handleTextBlur={handleTextBlur}
              />
            ))}
            <Button variant="success" onClick={handleSubmit}>
              Add Form
            </Button>
          </div>
        </Col>
        <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Name</span>
              <Button onClick={() => handleFormItemAdd("name")} variant="info">
                Add
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Email</span>
              <Button onClick={() => handleFormItemAdd("email")} variant="info">
                Add
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Contact</span>
              <Button
                onClick={() => handleFormItemAdd("contact")}
                variant="info"
              >
                Add
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Custom</span>
              <Button
                onClick={() => handleFormItemAdd("custom")}
                variant="info"
              >
                Add
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Ratings(1-5)</span>
              <Button
                onClick={() => handleFormItemAdd("ratings")}
                variant="info"
              >
                Add
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Yes/No</span>
              <Button onClick={() => handleFormItemAdd("yesno")} variant="info">
                Add
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export const FeedbackForms = () => {
  const [feedbackForms, setFeedbackForms] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await http.get("/feedback");

      setFeedbackForms(clients.data);
    };
    getClients();
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {feedbackForms.map((client) => {
          return (
            <tr key={client._id}>
              <td>{client.title}</td>
              <td>{client.description}</td>
              <td>
                <Link to={"/feedback/" + client._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit-2 align-middle"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </Link>
                <Link to={"/feedback/" + client._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye align-middle mr-2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const TextField = (props) => {
  return (
    <div className="mt-2">
      <label>
        <ContentEditable
          html={props.text}
          disabled={false}
          onChange={(e) => props.handleTextChange(e, props.index)}
          onBlur={() => props.handleTextBlur(props.index, -1)}
        />
      </label>
      <input
        required
        className="form-control"
        type={props.type}
        placeholder={`Enter ${props.text} Here!!`}
        disabled
      />
      <Button
        variant="danger"
        onClick={() => props.handleRemoveElement(props.index)}
        className="mt-1"
      >
        Remove
      </Button>
    </div>
  );
};

const YesNo = (props) => {
  return (
    <div className="mt-2">
      <label>
        <ContentEditable
          html={props.text}
          disabled={false}
          onChange={(e) => props.handleTextChange(e, props.index)}
          onBlur={() => props.handleTextBlur(props.index, -1)}
        />
      </label>
      <div className="session-review">
        {props.options.map((option, i) => (
          <div key={i} className="custom-control custom-radio custom-control">
            <input
              type={props.type}
              className="custom-control-input"
              value={option.value}
              disabled={true}
            />
            <label className="custom-control-label">
              <ContentEditable
                html={option.text}
                disabled={false}
                onChange={(e) =>
                  props.handleOptionTextChange(e, props.index, i)
                }
                onBlur={() => props.handleTextBlur(props.index, i)}
              />
            </label>
          </div>
        ))}
      </div>
      <Button
        variant="danger"
        onClick={() => props.handleRemoveElement(props.index)}
        className="mt-1"
      >
        Remove
      </Button>
    </div>
  );
};

const Ratings = (props) => {
  return (
    <div className="mt-2">
      <label>
        <ContentEditable
          html={props.text}
          disabled={false}
          onChange={(e) => props.handleTextChange(e, props.index)}
          onBlur={() => props.handleTextBlur(props.index, -1)}
        />
      </label>
      <div className="session-review">
        {props.options.map((option, i) => (
          <div key={i} className="custom-control custom-radio custom-control">
            <input
              type={props.type}
              className="custom-control-input"
              value={option.value}
              disabled={true}
            />
            <label className="custom-control-label">
              <ContentEditable
                html={option.text}
                disabled={false}
                onChange={(e) =>
                  props.handleOptionTextChange(e, props.index, i)
                }
                onBlur={() => props.handleTextBlur(props.index, i)}
              />
            </label>
          </div>
        ))}
      </div>
      <Button
        variant="danger"
        onClick={() => props.handleRemoveElement(props.index)}
        className="mt-1"
      >
        Remove
      </Button>
    </div>
  );
};
