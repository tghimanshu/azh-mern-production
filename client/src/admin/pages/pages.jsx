import http from "../../utils/http";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { dangerAlert } from "../../utils/alerts";

const Pages = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const clients = await http.get("/page");

      setClients(clients.data);
    };
    getClients();
  }, []);
  // console.log(clients);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => {
          return (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.slug}</td>
              <td>
                <Link to={"/editpage/" + client.slug}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit-2 align-middle"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </Link>
                <Link to={"/page/" + client.slug}>
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

const AddPage = ({ history, match }) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isEditing, setIsEditing] = useState({
    editing: false,
    id: "",
  });
  useEffect(() => {
    if (match.params.slug) {
      const getPage = async () => {
        try {
          const { data } = await http.get("/page/" + match.params.slug);
          setTitle(data.name);
          setSlug(data.slug);
          setContent(data.content);
          setIsEditing({
            editing: true,
            id: data._id,
          });
        } catch (err) {}
      };
      getPage();
    }
  }, [match]);

  const [content, setContent] = useState("");
  const handleAddPageSubmit = async (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    if (title.trim() === "") {
      return setError(dangerAlert("Title is Required"));
    } else if (slug.trim() === "") {
      return setError(dangerAlert("Slug is Required"));
    } else if (content.trim() === "") {
      return setError(dangerAlert("Content is Required"));
    } else {
      try {
        isEditing.editing
          ? await http.put("/page/" + isEditing.id, {
              name: title,
              slug,
              content,
            })
          : await http.post("/page", { name: title, slug, content });
        history.push("/admin/pages");
      } catch (err) {
        setError(dangerAlert(err.response.data));
      }
    }
  };
  return (
    <div className="container">
      {error}
      <Form>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          required={true}
        ></Form.Control>
        <Form.Label className="mt-2">Slug</Form.Label>
        <Form.Control
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Enter Slug"
          required={true}
        ></Form.Control>
        <Form.Label className="mt-2">Content</Form.Label>
        <ReactQuill value={content} onChange={(value) => setContent(value)} />
        <Button
          type="Submit"
          variant="success"
          className="mt-2"
          onClick={handleAddPageSubmit}
        >
          Add Page
        </Button>
      </Form>
    </div>
  );
};

export { Pages, AddPage };
