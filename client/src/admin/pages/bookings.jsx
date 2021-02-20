import React, { useEffect, useState } from "react";
import http from "../../utils/http";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const details = await http.get("/booking/");
      setBookings(details.data.filter((booking) => booking.client_id !== null));
    };
    getClients();
  }, []);
  // console.log(bookings);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th style={{ width: "20%" }}>Advisor Name</th>
          <th style={{ width: "20%" }}>Client Name</th>
          <th style={{ width: "40%" }}>Time</th>
          <th style={{ width: "20%" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((client) => {
          return (
            <tr key={client._id}>
              <td>{client.advisor_id.name}</td>
              <td>{client.client_id.name}</td>
              <td>{new Date(client.booking_time).toString()}</td>
              <td className="table-action">
                {client.isApproved === "pending" && (
                  <div className="badge badge-warning">Pending</div>
                )}
                {client.isApproved === "approved" && (
                  <div className="badge badge-success">Approved</div>
                )}
                {client.isApproved === "unapproved" && (
                  <div className="badge badge-danger">Rejected</div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Bookings;
