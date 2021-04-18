import React, { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import { dangerAlert, successAlert } from "../../utils/alerts";
import http from "../../utils/http";

export const AllFeedbacks = ({ match }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const getClients = async () => {
      const details = await http.get(`/admin/feedbacks/` + match.params.id);
      setFeedbacks(details.data);
    };
    getClients();
  }, [match]);

  const handleMail = async () => {
    try {
      if (subject === "") {
        setError(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setError(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/feedback", {
          formId: match.params.id,
          subject: subject,
          content: content,
        });
        setError(successAlert("Mail SuccessFul", setError));
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <a
        href={
          process.env.REACT_APP_API_END_POINT +
          "/admin/feedbacks/export/" +
          match.params.id
        }
        className="btn btn-success mb-3 mr-2"
        target="_blank"
        rel="noreferrer"
      >
        Export
      </a>
      <Button variant="info mb-3" onClick={() => setShowMail(!showMail)}>
        Mail
      </Button>
      {showMail && (
        <>
          {error}
          <FormControl
            className="mb-2"
            placeholder="Enter Subject here"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <ReactQuill
            className="mb-2"
            value={content}
            onChange={(value) => setContent(value)}
          />
          <Button variant="success mb-4" onClick={handleMail}>
            Send
          </Button>
        </>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Form Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => {
            return (
              <tr key={feedback._id}>
                <td>{index + 1}</td>
                <td>{feedback.formId.title}</td>
                <td>
                  <Link
                    to={"/admin/feedback/" + feedback._id}
                    className="btn btn-success"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export const SingleFeedback = ({ match }) => {
  const [feedback, setFeedback] = useState(null);
  useEffect(() => {
    const getFeedback = async () => {
      //   console.log("/feedback/single/" + match.params.id);
      const { data } = await http.get("/feedback/single/" + match.params.id);
      setFeedback(data);
    };
    getFeedback();
    return () => {
      setFeedback(null);
    };
  }, [match]);
  return (
    <>
      <h2>Your Response</h2>
      <hr />
      {feedback &&
        feedback.answers.map((fb, i) => (
          <dl className="mt-2" key={i}>
            <dt className="font-weight-bold">{fb.text}</dt>
            <dd>{fb.value}</dd>
          </dl>
        ))}
    </>
  );
};
