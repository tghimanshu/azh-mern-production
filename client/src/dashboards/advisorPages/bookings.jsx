import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { getRole } from "../../utils/jwt";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Bookings({ history }) {
  const [bookings, setAdvisor] = useState([]);

  useEffect(() => {
    const getAdvisors = async () => {
      const userJwt = getRole();
      const { data } = await http.get("/advisor/" + userJwt._id);
      if (!data.profileCompleted) history.push("/advisor/completeprofile");
      const results = await http.get("/booking/advisor/" + userJwt._id);
      const filteredBookings = results.data.filter((d) => d.client_id !== null);
      setAdvisor(filteredBookings);
    };
    getAdvisors();
  }, [history]);

  return (
    <>
      {bookings.length === 0 && (
        <Card>
          <Card.Body>
            <h4>No Recommendations Yet!</h4>
          </Card.Body>
        </Card>
      )}
      {bookings.length !== 0 && (
        <Card>
          <Card.Body>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Remarks</th>
                  <th>Actions</th>
                  <th>See Profile</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((advisor) => {
                  return (
                    <tr
                      className={
                        "table-" +
                        (advisor.isApproved !== "pending" &&
                        advisor.isApproved === "approved"
                          ? "success"
                          : "danger")
                      }
                      key={advisor._id}
                    >
                      <td>{advisor.client_id.name}</td>
                      <td>{advisor.remarks}</td>
                      {advisor.isApproved === "approved" && (
                        <td>
                          <div className="badge badge-success">Approved</div>
                        </td>
                      )}
                      {advisor.isApproved === "unapproved " && (
                        <td>
                          <div className="badge badge-danger">Unapproved</div>
                        </td>
                      )}
                      {advisor.isApproved === "pending" && (
                        <td>
                          <div className="badge badge-warning">Pending</div>
                        </td>
                      )}
                      <td>
                        <Link
                          to={`/advisor/${advisor._id}/${advisor.client_id._id}`}
                          className="btn btn-info"
                        >
                          View
                        </Link>
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

export default Bookings;
