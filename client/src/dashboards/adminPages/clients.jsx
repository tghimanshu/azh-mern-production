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
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>User Name</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email ID</th>
          <th>Creation Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => {
          const creationDate = new Date(client.creationDate);
          return (
            <tr key={client._id}>
              <td>{client.username}</td>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td>{client.email}</td>
              <td>{`${creationDate.getDate()}-${creationDate.getMonth()}-${creationDate.getFullYear()}`}</td>
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
