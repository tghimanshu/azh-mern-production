import http from "../../utils/http";
import React, { useEffect, useState } from "react";

const Advisors = () => {
  const [advisors, setAdvisor] = useState([]);
  const getAdvisors = async () => {
    const advisors = await http.get("/admin/advisors");

    setAdvisor(advisors.data);
  };
  useEffect(() => {
    getAdvisors();
  }, []);
  const approveAdv = async (approved, id) => {
    const { data } = await http.put("/admin/advisors/approve/" + id, {
      isApproved: approved,
    });
    const newAdv = advisors.map((adv) => {
      if (adv._id === data._id) {
        return data;
      } else {
        return adv;
      }
    });
    setAdvisor(newAdv);
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th style={{ width: "25%" }}>User Name</th>
          <th style={{ width: "25%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th style={{ width: "25%" }}>Email ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {advisors.map((advisor) => {
          return (
            <tr
              className={"table-" + (advisor.isApproved ? "success" : "danger")}
              key={advisor._id}
            >
              <td>{advisor.username}</td>
              <td>{advisor.name}</td>
              <td>{advisor.contact}</td>
              <td>{advisor.email}</td>

              <td className="table-action">
                <a href="/">
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
                </a>
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
  );
};

export default Advisors;
