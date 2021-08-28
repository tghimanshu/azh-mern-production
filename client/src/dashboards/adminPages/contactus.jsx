import http from "utils/http";
import React, { useEffect, useState } from "react";
import DataTable from "react-bs-datatable";
import Swal from "sweetalert2";

export const AdminContactUs = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await http.get("/contactus");

      setClients(clients.data);
    };
    getClients();
  }, []);

  const tableHeaders = [
    { title: "#", prop: "index", sortable: true },
    { title: "name", prop: "name", sortable: true, filterable: true },
    { title: "email", prop: "email", sortable: true, filterable: true },
    { title: "actions", prop: "actions" },
  ];

  const onSortFunction = {
    name(value) {
      return value.toLowerCase();
    },
  };

  const tableBody =
    clients &&
    clients.map((client, i) => {
      return {
        index: i + 1,
        name: client.name,
        email: client.email,
        actions: (
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                Swal.fire({
                  title: "Message",
                  text: client.message,
                });
              }}
            >
              View Message
            </button>
          </div>
        ),
      };
    });

  return (
    <DataTable
      tableHeaders={tableHeaders}
      tableBody={tableBody}
      initialSort={{ prop: "username", isAscending: true }}
      onSort={onSortFunction}
      rowsPerPage={10}
      rowsPerPageOption={[5, 10, 15, 20, 50]}
    />
  );
};
