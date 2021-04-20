import { useState, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import http from "../../utils/http";
import { dangerAlert, successAlert } from "../../utils/alerts";
function HomePageEdit() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get("/admin/hpdata");
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await http.put("/admin/hpdata", {
        data: data,
      });
      setError(successAlert("Changes Saved SuccessFully!", setError));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(err);
      setError(dangerAlert("Something Went Wrong"));
    }
  };

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {data && (
        <Card>
          <Card.Header>
            <Card.Title as="h1">Home Page Content</Card.Title>
          </Card.Header>
          <Card.Body>
            {error}
            <small className="d-inline-block mb-3">
              For a new line, use <code>&lt;br /&gt;</code>
            </small>
            <Form onSubmit={handleSubmit}>
              <h4>How It Works</h4>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #1</Form.Label>
                  <Form.Control
                    value={data.howitworks[0].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[0].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #1</Form.Label>
                  <textarea
                    value={data.howitworks[0].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[0].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #2</Form.Label>
                  <Form.Control
                    value={data.howitworks[1].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[1].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #2</Form.Label>
                  <textarea
                    value={data.howitworks[1].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[1].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #3</Form.Label>
                  <Form.Control
                    value={data.howitworks[2].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[2].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #3</Form.Label>
                  <textarea
                    value={data.howitworks[2].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.howitworks[2].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>

              <h4>Why AZH?</h4>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #1</Form.Label>
                  <Form.Control
                    value={data.whyazh[0].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[0].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #1</Form.Label>
                  <textarea
                    value={data.whyazh[0].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[0].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #2</Form.Label>
                  <Form.Control
                    value={data.whyazh[1].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[1].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #2</Form.Label>
                  <textarea
                    value={data.whyazh[1].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[1].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Title #3</Form.Label>
                  <Form.Control
                    value={data.whyazh[2].title}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[2].title = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content #3</Form.Label>
                  <textarea
                    value={data.whyazh[2].content}
                    className="form-control mb-2"
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.whyazh[2].content = e.target.value;
                      setData(temp);
                    }}
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>End To End</Form.Label>
                  <textarea
                    value={data.endtoend}
                    onChange={(e) => {
                      const temp = { ...data };
                      temp.endtoend = e.target.value;
                      setData(temp);
                    }}
                    className="form-control"
                  />
                </Form.Group>
              </div>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default HomePageEdit;
