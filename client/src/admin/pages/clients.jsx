import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await http.get("/admin/clients");

      setClients(clients.data);
    };
    getClients();
  }, []);
  // console.log(clients);
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
        {clients.map((client) => {
          return (
            <tr key={client._id}>
              <td>{client.username}</td>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td>{client.email}</td>
              <td className="table-action">
                <Link to={"/admin/client/" + client._id}>
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Clients;
