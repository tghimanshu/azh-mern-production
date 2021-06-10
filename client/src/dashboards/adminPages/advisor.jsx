import React, { useCallback, useEffect, useState } from "react";
import http from "utils/http";

const Advisor = ({ match }) => {
  const [requests, setRequests] = useState(null);
  const getRequests = useCallback(async () => {
    try {
      const user = await http.get("/advisor/" + match.params.id);
      setRequests(user.data.recc_change);
    } catch (error) {}
  }, [match]);
  useEffect(() => {
    getRequests();
  }, [getRequests]);

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
                  <td>{i}</td>
                  <td>
                    {`${myDate.getDate()}-${
                      myDate.getMonth() + 1
                    }-${myDate.getFullYear()}`}
                  </td>
                  <td>{request.amount}</td>
                  <td>
                    <Status status={request.isApproved} />
                  </td>
                  <td></td>
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

export default Advisor;
