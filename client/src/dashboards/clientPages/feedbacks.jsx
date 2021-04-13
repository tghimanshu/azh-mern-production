import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";

export const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const user = getRole();
      const details = await http.get(`/feedback/${user.role}/${user._id}`);
      setFeedbacks(details.data);
    };
    getClients();
  }, []);
  console.log(feedbacks);
  return (
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
                  to={"/client/feedback/" + feedback._id}
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
  );
};

export const SingleFeedback = ({ match }) => {
  const [feedback, setFeedback] = useState(null);
  useEffect(() => {
    const getFeedback = async () => {
      console.log("/feedback/single/" + match.params.id);
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
