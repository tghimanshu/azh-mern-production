import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, FormControl } from "react-bootstrap";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";
import { successAlert, dangerAlert } from "../../utils/alerts";
import { adminClientsAction } from "../../redux/actions/actions";

const Clients = () => {
  const dispatch = useDispatch();
  const [showMail, setShowMail] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const adminClients = useSelector((state) => state.adminClients);
  const { clients } = adminClients;
  useEffect(() => {
    dispatch(adminClientsAction());
  }, [dispatch]);
  const handleMail = async () => {
    try {
      if (subject === "") {
        setError(dangerAlert("Empty Subject not Allowed"));
      } else if (content === "" || content === "<p><br></p>") {
        setError(dangerAlert("Empty Content not Allowed"));
      } else {
        await http.post("/admin/bulkmail/client", {
          subject,
          content,
        });
        setError(successAlert("Mail SuccessFul", setError));
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignment = async (e, id) => {
    try {
      e.preventDefault();
      const { data } = await http.get("/admin/advisors/name");
      const opts = {};
      data.map((d) => {
        opts[d._id] = d.name;
        return true;
      });
      const { value: advisor } = await Swal.fire({
        title: "Assign Advisor",
        input: "select",
        inputOptions: opts,
        inputPlaceholder: "Select an Advisor",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
              resolve("You need to select an Advisor :)");
            } else {
              resolve();
            }
          });
        },
      });

      console.log(advisor);
      await http.put(`/admin/assign/${advisor}/client/${id}`);
    } catch (err) {}
    e.target.setAttribute("disabled", true);
    e.target.innerText = "Assigned";
  };

  return (
    <>
      <Container>
        <Button variant="info mb-3" onClick={() => setShowMail(!showMail)}>
          Mail
        </Button>
        {showMail && (
          <>
            {error}
            <FormControl
              className="mb-2"
              placeholder="Enter Subject here"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <ReactQuill
              className="mb-2"
              value={content}
              onChange={(value) => setContent(value)}
            />
            <Button variant="success mb-4" onClick={handleMail}>
              Send
            </Button>
          </>
        )}
      </Container>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email ID</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => {
            const creationDate = new Date(client.creationDate);
            return (
              <tr key={client._id}>
                <td>{index + 1}</td>
                <td>{client.username}</td>
                <td>{client.name}</td>
                <td>{client.contact}</td>
                <td>{client.email}</td>
                <td>{`${creationDate.getDate()}-${
                  creationDate.getMonth() + 1
                }-${creationDate.getFullYear()}`}</td>
                <td className="table-action d-flex justify-content-between align-items-center">
                  {console.log(client.assigned === undefined)}
                  {(client.assigned === undefined ||
                    client.assigned === false) && (
                    <Button
                      variant="success mr-2"
                      onClick={(e) => handleAssignment(e, client._id)}
                    >
                      Assign
                    </Button>
                  )}
                  {client.assigned !== undefined && client.assigned === true && (
                    <Button variant="success mr-2" disabled>
                      Assigned
                    </Button>
                  )}
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
    </>
  );
};

export default Clients;
