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

  // const approveBooking = async (advisor) => {
  //   try {
  //     const { data } = await http.get("/booking/approve/" + advisor._id);
  //     const inx = bookings.indexOf(advisor);
  //     const temp = [...bookings];
  //     temp[inx] = data;
  //     setAdvisor(temp);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };
  // const disApproveBooking = async (advisor) => {
  //   try {
  //     const { data } = await http.get("/booking/unapprove/" + advisor._id);
  //     // console.log(data);
  //     const inx = bookings.indexOf(advisor);
  //     const temp = [...bookings];
  //     temp[inx] = data;
  //     setAdvisor(temp);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  return (
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
  );
};

export default Bookings;
