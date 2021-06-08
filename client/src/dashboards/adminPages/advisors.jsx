import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, FormControl } from "react-bootstrap";
import ReactQuill from "react-quill";
import { successAlert, dangerAlert } from "../../utils/alerts";
import { adminAdvisorsAction } from "../../redux/actions/actions";

const Advisors = () => {
  const dispatch = useDispatch();
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const adminAdvisors = useSelector((state) => state.adminAdvisors);
  const { loading, advisors } = adminAdvisors;

  useEffect(() => {
    dispatch(adminAdvisorsAction());
  }, [dispatch]);

  const handleMail = async () => {
    try {
      if (subject === "") {
        setError(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setError(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/client", {
          subject,
          content,
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

  const approveAdv = async (approved, id) => {
    await http.put("/admin/advisors/approve/" + id, {
      isApproved: approved,
    });
    dispatch(adminAdvisorsAction());
  };

  return (
    <>
      <Container>
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
      </Container>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email ID</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {advisors &&
            advisors.map((advisor, index) => {
              const creationDate = new Date(advisor.creationDate);
              const pending = advisor.recc_change
                ? advisor.recc_change.filter((a) => a.isApproved === "pending")
                    .length
                : null;
              console.log(pending);
              return (
                <tr
                  className={
                    "table-" + (advisor.isApproved ? "success" : "danger")
                  }
                  key={advisor._id}
                >
                  <td>{index + 1}</td>
                  <td>{advisor.username}</td>
                  <td>{advisor.name}</td>
                  <td>{advisor.contact}</td>
                  <td>{advisor.email}</td>
                  <td>{`${creationDate.getDate()}-${
                    creationDate.getMonth() + 1
                  }-${creationDate.getFullYear()}`}</td>
                  <td className="table-action">
                    <Link to={"/advisor/" + advisor.username}>
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
                  <td>
                    {pending !== 0 && (
                      <Link to={"/admin/advisor/" + advisor._id}>
                        <div className="badge badge-info">{pending}</div>
                      </Link>
                    )}
                  </td>
                  <td>
                    {advisor.isApproved ? (
                      <button
                        onClick={(e) => approveAdv(false, advisor._id)}
                        className="btn btn-danger d-flex align-items-center"
                      >
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
                          className="feather feather-x align-middle mr-2"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        UnApprove
                      </button>
                    ) : (
                      <button
                        onClick={(e) => approveAdv(true, advisor._id)}
                        className="btn btn-success d-flex align-items-center"
                      >
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
                          className="feather feather-check align-middle mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Advisors;
