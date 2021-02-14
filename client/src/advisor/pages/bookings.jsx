import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { getRole } from "../../utils/jwt";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setAdvisor] = useState([]);

  useEffect(() => {
    const getAdvisors = async () => {
      const userJwt = getRole();
      const results = await http.get("/booking/advisor/" + userJwt._id);
      const filteredBookings = results.data.filter((d) => d.client_id !== null);
      setAdvisor(filteredBookings);
    };
    getAdvisors();
  }, []);

  const approveBooking = async (advisor) => {
    try {
      const { data } = await http.get("/booking/approve/" + advisor._id);
      const inx = bookings.indexOf(advisor);
      const temp = [...bookings];
      temp[inx] = data;
      setAdvisor(temp);
    } catch (error) {
      console.log(error);
    }
  };
  const disApproveBooking = async (advisor) => {
    try {
      const { data } = await http.get("/booking/unapprove/" + advisor._id);
      console.log(data);
      const inx = bookings.indexOf(advisor);
      const temp = [...bookings];
      temp[inx] = data;
      setAdvisor(temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Client Name</th>
          <th>Booking Time</th>
          <th>Remarks</th>
          <th>Actions</th>
          <th>See Profile</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((advisor) => {
          let date = new Date(advisor.booking_time);
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
              <td>{date.toString()}</td>
              <td>{advisor.remarks}</td>
              {advisor.isApproved === "pending" && (
                <td className="d-flex justify-content-around">
                  <h3
                    onClick={(e) => approveBooking(advisor)}
                    className="badge badge-success"
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
                      className="feather feather-check align-middle"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </h3>
                  <h3
                    onClick={(e) => disApproveBooking(advisor)}
                    className="badge badge-danger"
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
                      className="feather feather-x align-middle"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </h3>
                </td>
              )}
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
  );
};

export default Bookings;
