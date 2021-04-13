import jwtDecode from "jwt-decode";
import React, { useCallback, useEffect, useState } from "react";
import http from "../../utils/http";

const AdvisorPricing = ({ history }) => {
  const [requests, setRequests] = useState(null);
  const [adv_id, setAdv_id] = useState("");

  const getUser = useCallback(async () => {
    try {
      const jwt = localStorage.getItem("auth-token");
      if (jwt === null) new Error("No Token Found!");
      const userJwt = jwtDecode(jwt);
      const { data } = await http.get("/advisor/" + userJwt._id);
      if (!data.profileCompleted) history.push("/advisor/completeprofile");
      setRequests(data.recc_change);
      setAdv_id(data._id);
    } catch (error) {}
  }, [history]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests &&
            requests.map((request, i) => {
              const myDate = new Date(request.date);

              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {myDate.getDate() +
                      "-" +
                      myDate.getMonth() +
                      "-" +
                      myDate.getFullYear()}
                  </td>
                  <td>{request.amount}</td>
                  <td>
                    <Status status={request.isApproved} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      disabled={request.isApproved === "cancelled" && true}
                      onClick={async (e) => {
                        try {
                          await http.put("/advisor/recccancel/" + adv_id, {
                            index: i,
                          });
                          getUser();
                        } catch (err) {}
                      }}
                    >
                      {request.isApproved === "cancelled"
                        ? "Cancelled"
                        : "Cancel"}
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

const Status = (props) => {
  switch (props.status) {
    case "pending":
      return <div className="badge badge-warning">pending</div>;
    case "rejected":
      return <div className="badge badge-danger">rejected</div>;
    case "cancelled":
      return <div className="badge badge-info">cancelled</div>;
    case "approved":
      return <div className="badge badge-success">approved</div>;
    default:
      break;
  }
};

export default AdvisorPricing;
