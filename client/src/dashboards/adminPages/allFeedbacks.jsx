import React, { useEffect, useState } from "react";
import { Badge, Button, FormControl } from "react-bootstrap";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import { dangerAlert, successAlert } from "utils/alerts";
import http from "utils/http";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  listFeedbacksAction,
  listFormFeedbacksAction,
  singleFeedbackAction,
} from "redux/actions/actions";
import DataTable from "react-bs-datatable";

export const AdminFeedbacks = () => {
  const dispatch = useDispatch();
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const allFbs = useSelector((state) => state.feedbacks);
  const { loading, feedbacks } = allFbs;
  useEffect(() => {
    dispatch(listFeedbacksAction());
  }, [dispatch]);
  const handleMail = async () => {
    try {
      if (subject === "") {
        setError(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setError(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/feedbacks", {
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

  const handleCalled = async (e, id) => {
    try {
      e.preventDefault();
      const opts = {
        "did not connect": "did not connect",
        interested: "interested",
        uninterested: "uninterested",
      };
      const { value } = await Swal.fire({
        title: "Assign Advisor",
        input: "select",
        inputOptions: opts,
        inputPlaceholder: "Select an Advisor",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("You need to select a response :)");
            } else {
              resolve();
            }
          });
        },
      });
      if (value && value !== "") {
        await http.put(`/admin/called/feedback/${id}`, { message: value });
        e.target.setAttribute("disabled", true);
        e.target.innerText = opts[value];
      }
    } catch (err) {}
  };

  const handleAssignment = async (e, id) => {
    try {
      e.preventDefault();
      const { data } = await http.get("/admin/advisors/name");
      const opts = {};
      data.map((d) => {
        opts[d._id] = d.name;
        return true;
      });
      const { value: advisor } = await Swal.fire({
        title: "Assign Advisor",
        input: "select",
        inputOptions: opts,
        inputPlaceholder: "Select an Advisor",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("You need to select an Advisor :)");
            } else {
              resolve();
            }
          });
        },
      });
      if (advisor && advisor !== "") {
        await http.put(`/admin/assign/${advisor}/feedback/${id}`);
        e.target.setAttribute("disabled", true);
        e.target.innerText = opts[advisor];
      }
    } catch (err) {}
  };

  const tableHeaders = [
    { title: "#", prop: "index", sortable: true },
    { title: "name", prop: "name", sortable: true, filterable: true },
    { title: "contact", prop: "contact" },
    { title: "creation date", prop: "creationDate", sortable: true },
    { title: "actions", prop: "actions" },
  ];
  const tableBody =
    feedbacks &&
    feedbacks.map((feedback, i) => {
      const creationDate = new Date(feedback.creationDate);
      return {
        index: i + 1,
        name:
          feedback.answers[0] &&
          feedback.answers[0].value !== undefined &&
          feedback.answers[0].value,
        contact:
          feedback.answers[2] && feedback.answers[2].value !== undefined
            ? feedback.answers[2].value
            : "dat",
        creationDate: `${creationDate.getDate()}-${
          creationDate.getMonth() + 1
        }-${creationDate.getFullYear()}`,
        actions: (
          <div>
            {(feedback.assigned === undefined ||
              feedback.assigned === false) && (
              <Button
                variant="success mr-2"
                onClick={(e) => handleAssignment(e, feedback._id)}
              >
                Assign
              </Button>
            )}
            {feedback.assigned !== undefined && feedback.assigned === true && (
              <Badge variant="success mr-2">Assigned</Badge>
            )}
            {feedback.assigned !== undefined &&
              feedback.assigned.value === true && (
                <Badge variant="success mr-2">{feedback.assigned.name}</Badge>
              )}
            {(feedback.called === undefined ||
              feedback.called.value === false) && (
              <Button
                variant="info mr-2"
                onClick={(e) => handleCalled(e, feedback._id)}
              >
                Called?
              </Button>
            )}
            {feedback.called !== undefined &&
              feedback.called.value === true && (
                <Badge variant="info mr-2">{feedback.called.message}</Badge>
              )}
            <Link
              to={"/admin/feedback/" + feedback._id}
              className="btn btn-success"
            >
              View
            </Link>
          </div>
        ),
      };
    });

  const onSortFunction = {
    creationDate(value) {
      return new Date(value);
    },
    name(value) {
      return value.toLowerCase();
    },
  };

  return (
    <>
      {loading && <h1>Loading</h1>}
      <a
        href={process.env.REACT_APP_API_END_POINT + "/admin/feedbacks/export"}
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
      <DataTable
        tableHeaders={tableHeaders}
        tableBody={tableBody}
        initialSort={{ prop: "username", isAscending: true }}
        onSort={onSortFunction}
        rowsPerPage={10}
        rowsPerPageOption={[5, 10, 15, 20, 50]}
      />
    </>
  );
};

export const FormFeedbacks = ({ match }) => {
  const dispatch = useDispatch();
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const formfb = useSelector((state) => state.formFeedbacks);
  const { loading, feedbacks } = formfb;

  useEffect(() => {
    dispatch(listFormFeedbacksAction(match.params.id));
  }, [dispatch, match]);

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
  const handleAssignment = async (e, id) => {
    try {
      e.preventDefault();
      const { data } = await http.get("/admin/advisors/name");
      const opts = {};
      data.map((d) => {
        opts[d._id] = d.name;
        return true;
      });
      const { value: advisor } = await Swal.fire({
        title: "Assign Advisor",
        input: "select",
        inputOptions: opts,
        inputPlaceholder: "Select an Advisor",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("You need to select an Advisor :)");
            } else {
              resolve();
            }
          });
        },
      });

      await http.put(`/admin/assign/${advisor}/feedback/${id}`);
    } catch (err) {}
    e.target.setAttribute("disabled", true);
    e.target.innerText = "Assigned";
  };
  const handleCalled = async (e, id) => {
    try {
      e.preventDefault();
      const opts = {
        "did not connect": "did not connect",
        interested: "interested",
        uninterested: "uninterested",
      };
      const { value } = await Swal.fire({
        title: "Assign Advisor",
        input: "select",
        inputOptions: opts,
        inputPlaceholder: "Select an Advisor",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("You need to select a response :)");
            } else {
              resolve();
            }
          });
        },
      });
      if (value && value !== "") {
        await http.put(`/admin/called/feedback/${id}`, { message: value });
        e.target.setAttribute("disabled", true);
        e.target.innerText = opts[value];
      }
    } catch (err) {}
  };

  const tableHeaders = [
    { title: "#", prop: "index", sortable: true },
    { title: "name", prop: "name", sortable: true, filterable: true },
    { title: "contact", prop: "contact" },
    { title: "creation date", prop: "creationDate", sortable: true },
    { title: "actions", prop: "actions" },
  ];
  const tableBody =
    feedbacks &&
    feedbacks.map((feedback, i) => {
      const creationDate = new Date(feedback.creationDate);
      return {
        index: i + 1,
        name:
          feedback.answers[0] &&
          feedback.answers[0].value !== undefined &&
          feedback.answers[0].value,
        contact:
          feedback.answers[2] && feedback.answers[2].value !== undefined
            ? feedback.answers[2].value
            : "dat",
        creationDate: `${creationDate.getDate()}-${
          creationDate.getMonth() + 1
        }-${creationDate.getFullYear()}`,
        actions: (
          <div>
            {(feedback.assigned === undefined ||
              feedback.assigned === false) && (
              <Button
                variant="success mr-2"
                onClick={(e) => handleAssignment(e, feedback._id)}
              >
                Assign
              </Button>
            )}
            {feedback.assigned !== undefined && feedback.assigned === true && (
              <Badge variant="success mr-2">Assigned</Badge>
            )}
            {feedback.assigned !== undefined &&
              feedback.assigned.value === true && (
                <Badge variant="success mr-2">{feedback.assigned.name}</Badge>
              )}
            {(feedback.called === undefined ||
              feedback.called.value === false) && (
              <Button
                variant="info mr-2"
                onClick={(e) => handleCalled(e, feedback._id)}
              >
                Called?
              </Button>
            )}
            {feedback.called !== undefined &&
              feedback.called.value === true && (
                <Badge variant="info mr-2">{feedback.called.message}</Badge>
              )}
            <Link
              to={"/admin/feedback/" + feedback._id}
              className="btn btn-success"
            >
              View
            </Link>
          </div>
        ),
      };
    });

  const onSortFunction = {
    creationDate(value) {
      return new Date(value);
    },
    name(value) {
      return value.toLowerCase();
    },
  };

  return (
    <>
      {loading && <h1>Loading</h1>}
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
      <DataTable
        tableHeaders={tableHeaders}
        tableBody={tableBody}
        initialSort={{ prop: "username", isAscending: true }}
        onSort={onSortFunction}
        rowsPerPage={10}
        rowsPerPageOption={[5, 10, 15, 20, 50]}
      />
    </>
  );
};

export const SingleFeedback = ({ match }) => {
  const dispatch = useDispatch();

  const singleFb = useSelector((state) => state.singleFeedback);
  const { loading, feedback } = singleFb;

  useEffect(() => {
    dispatch(singleFeedbackAction(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <h2>Your Response</h2>
      <hr />
      {loading && <h4>Loading</h4>}
      {feedback &&
        feedback.answers &&
        feedback.answers.map((fb, i) => (
          <dl className="mt-2" key={i}>
            <dt className="font-weight-bold">{fb.text}</dt>
            <dd>{fb.value}</dd>
          </dl>
        ))}
    </>
  );
};
