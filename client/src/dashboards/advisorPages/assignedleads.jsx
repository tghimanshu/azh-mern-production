import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export function AssignedLeads({ history }) {
  const [leads, setLeads] = useState([]);
  const [advId, setAdvId] = useState("");

  useEffect(() => {
    const getAdvisors = async () => {
      const userJwt = getRole();
      const { data } = await http.get("/advisor/" + userJwt._id);
      console.log(data);
      if (!data.profileCompleted) history.push("/advisor/completeprofile");
      setAdvId(data._id);
      setLeads(data.assignedLeads ? data.assignedLeads : []);
    };
    getAdvisors();
  }, [history]);

  return (
    <>
      {leads.length === 0 && (
        <Card>
          <Card.Body>
            <h4>No Recommendations Yet!</h4>
          </Card.Body>
        </Card>
      )}
      {leads.length !== 0 && (
        <Card>
          <Card.Body>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>See Profile</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => {
                  return (
                    <tr key={lead.id}>
                      <td>{index + 1}</td>
                      <td>{lead.name}</td>
                      <td>{lead.type}</td>
                      <td>
                        {lead.type === "client" && (
                          <Link
                            to={`/advisor/${advId}/${lead.id}`}
                            className="btn btn-info"
                          >
                            View
                          </Link>
                        )}
                        {lead.type === "feedback" && (
                          <Link
                            to={`/advisor/feedback/${lead.id}`}
                            className="btn btn-info"
                          >
                            View
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export const AdvSingleFeedback = ({ match }) => {
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
