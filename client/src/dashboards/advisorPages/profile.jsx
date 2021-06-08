import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ReactQuill from "react-quill";
import http from "../../utils/http";
import { dangerAlert, successAlert } from "../../utils/alerts";
// import "react-quill/dist/quill.snow.css";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import config from "../../utils/config";
import { RequestAmtModal } from "../../utils/model";

function Profile({ history }) {
  const [alert, setalert] = useState("");
  const [summary, setSummary] = useState("");
  const [user, setUser] = useState({
    isApproved: true,
    _id: "",
    username: "",
    name: "",
    email: "",
    contact: 0,
    experience: 0,
    sebi_no: "",
    expertise: "",
    location: "",
    profile_pic: "",
    summary: "",
    recc_amt: 0,
  });
  const [days, setDays] = useState({
    from: "",
    to: "",
  });
  const [blogs, setBlogs] = useState([
    {
      url: "",
      preview: {
        title: "",
        description: "",
        image: "",
        havePreview: false,
      },
    },
  ]);
  const [socials, setSocials] = useState([
    {
      type: "facebook",
      url: "",
    },
  ]);
  const [reqAmt, setReqAmt] = useState(null);
  const [showReqAmt, setShowReqAmt] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/advisor/" + userJwt._id);
        if (!user.data.profileCompleted)
          history.push("/advisor/completeprofile");

        setUser(user.data);
        setSummary(user.data.summary ? user.data.summary : "");
        setBlogs(
          user.data.blogs && user.data.blogs.length !== 0
            ? user.data.blogs
            : [
                {
                  url: "",
                  preview: {
                    title: "",
                    description: "",
                    image: "",
                    havePreview: false,
                  },
                },
              ]
        );
        setSocials(
          user.data.socials && user.data.socials.length !== 0
            ? user.data.socials
            : [
                {
                  url: "",
                  type: "facebook",
                },
              ]
        );
        setDays(
          user.data.days && user.data.days.length !== 0
            ? user.data.days
            : {
                from: "",
                to: "",
              }
        );
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, [history]);

  const handleBlogChange = (e, i) => {
    const demo = [...blogs];
    demo[i].url = e.target.value;
    setBlogs(demo);
  };

  const handleSocialChange = (e, i) => {
    const demo = [...socials];
    demo[i].url = e.target.value;
    setSocials(demo);
  };

  const handleSocialTypeChange = (e, i) => {
    const demo = [...socials];
    demo[i].type = e.target.value;
    setSocials(demo);
  };

  const getBlogData = async (e, i) => {
    try {
      const { data } = await http.post("/helpers/getblog", {
        url: e.target.value,
      });
      const demo = [...blogs];
      demo[i].preview = { ...data, havePreview: true };
      setBlogs(demo);
    } catch (err) {
      const demo = [...blogs];
      demo[i].preview = {
        title: "",
        description: "",
        image: "",
        havePreview: false,
      };
      setBlogs(demo);
      console.clear();
    }
  };

  const handleBlogRemove = (index) => {
    const demo = [...blogs];
    demo.splice(index, 1);
    setBlogs(demo);
  };

  const handleSocialRemove = (index) => {
    const demo = [...socials];
    demo.splice(index, 1);
    setSocials(demo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await http.put("/advisor/" + user._id, {
      ...user,
      summary,
      blogs: blogs[0].url === "" ? [] : blogs,
      socials: socials[0].url === "" ? [] : socials,
      days: days.from === "" ? { from: "", to: "" } : days,
    });
    setalert(successAlert("Profile Updated Successfully!", setalert));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.clear();
  };

  const handleReqAmtSubmit = async (e) => {
    try {
      e.preventDefault();
      const request = {
        isApproved: "pending",
        amount: reqAmt,
        date: Date.now(),
      };
      await http.put("/advisor/reccamtchange/" + user._id, request);
      setalert(successAlert("Requst Made Successfully!", setalert));
      setShowReqAmt(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      {!user.isApproved
        ? dangerAlert("Your Profile is yet to be approved!")
        : ""}
      <Row>
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Edit Profile</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                {alert}
                <Row>
                  <Col md="12">
                    <label>Username</label>
                  </Col>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Username</label>
                      <Form.Control
                        value={user.username ? user.username : ""}
                        disabled
                        placeholder="Username"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>

                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Form.Control
                        value={user.email ? user.email : ""}
                        placeholder="Email"
                        type="email"
                        disabled
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="px-1" md="6">
                    <Form.Group>
                      <label>Name</label>
                      <Form.Control
                        value={user.name ? user.name : ""}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.name = e.target.value;
                          setUser(demo);
                        }}
                        placeholder="Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="6">
                    <Form.Group>
                      <label>Contact</label>
                      <Form.Control
                        value={user.contact ? user.contact : 0}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.contact = parseInt(e.target.value);
                          setUser(demo);
                        }}
                        placeholder="Contact"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>experience</label>
                      <Form.Control
                        value={user.experinece ? user.experience : 0}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.experinece = e.target.value;
                          setUser(demo);
                        }}
                        placeholder="Experience"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>SEBI Registration Number</label>
                      <Form.Control
                        value={user.sebi_no ? user.sebi_no : ""}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.sebi_no = e.target.value;
                          setUser(demo);
                        }}
                        placeholder="SEBI Registration Number"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>expertise</label>
                      <Form.Control
                        value={user.expertise ? user.expertise : ""}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.expertise = e.target.value;
                          setUser(demo);
                        }}
                        placeholder="Expertise"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Location</label>
                      <Form.Control
                        value={user.location ? user.location : ""}
                        onChange={(e) => {
                          const demo = { ...user };
                          demo.location = e.target.value;
                          setUser(demo);
                        }}
                        placeholder="Location"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <ReactQuill
                      value={summary}
                      onChange={(value) => setSummary(value)}
                    />
                  </Col>
                  <Col md="12" className="pt-1 pb-1">
                    {/* <Button
                      variant="info"
                      onClick={() =>// setHaveSocials(!haveSocials)}
                    >
                      Connect Social Media
                    </Button> */}
                    <Card.Title as="h4" className="pt-2">
                      Connect Socials
                    </Card.Title>
                    <div className="pb-2">
                      <div className="mySocials">
                        {socials.map((social, i) => (
                          <div className="d-flex my-2" key={i}>
                            <Form.Control
                              placeholder="Enter Type"
                              value={
                                social.type && social.type !== ""
                                  ? social.type
                                  : "facebook"
                              }
                              onChange={(e) => handleSocialTypeChange(e, i)}
                              as="select"
                            >
                              <option value="facebook">Facebook</option>
                              <option value="instagram">Instagram</option>
                              <option value="twitter">Twitter</option>
                              <option value="google">Google</option>
                              <option value="pinterest">Pinterest</option>
                            </Form.Control>
                            <Form.Control
                              placeholder="Enter Url"
                              value={social.url}
                              onChange={(e) => handleSocialChange(e, i)}
                            ></Form.Control>
                            <Button
                              variant="danger"
                              onClick={() => handleSocialRemove(i)}
                            >
                              X
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => {
                          const demo = [...socials];
                          demo.push({
                            url: "",
                            type: "",
                          });
                          setSocials(demo);
                        }}
                      >
                        Add New
                      </Button>
                    </div>
                  </Col>

                  <Col md="12" className="pt-1 pb-3">
                    {/* <Button
                      variant="info"
                      onClick={() => // setHaveBlogs(!haveBlogs)}
                    >
                      Have Blogs?
                    </Button> */}
                    <Card.Title as="h4" className="pt-2">
                      Connect Blogs
                    </Card.Title>
                    <div className="pb-2">
                      <div className="myBlogs">
                        {blogs.map((blog, i) => (
                          <div key={i}>
                            <div className="d-flex my-2">
                              <Form.Control
                                placeholder="Enter Url"
                                value={blog.url}
                                onChange={(e) => handleBlogChange(e, i)}
                                onBlur={(e) => getBlogData(e, i)}
                              ></Form.Control>
                              <Button
                                variant="danger"
                                onClick={() => handleBlogRemove(i)}
                              >
                                X
                              </Button>
                            </div>
                            {blog.preview.havePreview && (
                              <Row
                                style={{
                                  margin: 0,
                                  padding: "10px",
                                  background: "rgba(245,245,245)",
                                }}
                              >
                                <Col md="2">
                                  <img
                                    src={blog.preview.image}
                                    alt={blog.preview.title}
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                    }}
                                  />
                                </Col>
                                <Col
                                  md="10"
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    position: "relative",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <h4
                                    style={{
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      margin: 0,
                                    }}
                                  >
                                    {blog.preview.title}
                                  </h4>
                                  <p
                                    style={{
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      margin: 0,
                                    }}
                                  >
                                    {blog.preview.description}
                                  </p>
                                </Col>
                              </Row>
                            )}
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => {
                          const demo = [...blogs];
                          demo.push({
                            url: "",
                            preview: {
                              title: "",
                              description: "",
                              image: "",
                            },
                          });
                          setBlogs(demo);
                        }}
                      >
                        Add New
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Button
                  className="btn-fill d-flex justify-content-end"
                  type="submit"
                  variant="success"
                  onClick={handleSubmit}
                >
                  Update Profile
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-user">
            <Card.Body>
              <div className="text-center">
                <img
                  src={config.apiEndPoint + user.profile_pic}
                  alt={user.name}
                  style={{ width: "150px" }}
                />
                <h3 className="title text-dark font-weight-bold mt-1">
                  {user.name}
                </h3>
                <p className="description">
                  {user.username}
                  <br />
                  {user.about_me === ""
                    ? "Your Expertise Here!"
                    : user.expertise}
                </p>
              </div>
              <div>
                <b>Recommendation Amt:</b> {user.recc_amt} ₹
                <Button
                  variant="info"
                  className="btn-block"
                  onClick={(e) => setShowReqAmt((b) => !b)}
                >
                  Request Change
                </Button>
                <RequestAmtModal
                  show={showReqAmt}
                  handleClose={(e) => setShowReqAmt(false)}
                  reqAmt={reqAmt}
                  setReqAmt={(e) => setReqAmt(e.target.value)}
                  handleReqAmtSubmit={handleReqAmtSubmit}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export function CompleteProfile({ history }) {
  const [alert, setalert] = useState("");
  const [summary, setSummary] = useState("");
  const [user, setUser] = useState({
    isApproved: true,
    _id: "",
    username: "",
    name: "",
    email: "",
    contact: 0,
    experience: 0,
    sebi_no: "",
    expertise: "",
    location: "",
    profile_pic: "",
    summary: "",
    recc_amt: 0,
  });
  const [blogs, setBlogs] = useState([
    {
      url: "",
      preview: {
        title: "",
        description: "",
        image: "",
        havePreview: false,
      },
    },
  ]);
  const [socials, setSocials] = useState([
    {
      type: "facebook",
      url: "",
    },
  ]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const jwt = localStorage.getItem("auth-token");
        if (jwt === null) new Error("No Token Found!");
        const userJwt = jwtDecode(jwt);
        const user = await http.get("/advisor/" + userJwt._id);
        console.log(user.data);
        setUser(user.data);
        setSummary(user.data.summary ? user.data.summary : "");
        setBlogs(
          user.data.blogs && user.data.blogs.length !== 0
            ? user.data.blogs
            : [
                {
                  url: "",
                  preview: {
                    title: "",
                    description: "",
                    image: "",
                    havePreview: false,
                  },
                },
              ]
        );
        setSocials(
          user.data.socials && user.data.socials.length !== 0
            ? user.data.socials
            : [
                {
                  url: "",
                  type: "facebook",
                },
              ]
        );
      } catch (error) {
        // console.log(error);
      }
    };
    getUser();
  }, []);

  const handleBlogChange = (e, i) => {
    const demo = [...blogs];
    demo[i].url = e.target.value;
    setBlogs(demo);
  };

  const getBlogData = async (e, i) => {
    try {
      const { data } = await http.post("/helpers/getblog", {
        url: e.target.value,
      });
      const demo = [...blogs];
      demo[i].preview = { ...data, havePreview: true };
      setBlogs(demo);
    } catch (err) {
      const demo = [...blogs];
      demo[i].preview = {
        title: "",
        description: "",
        image: "",
        havePreview: false,
      };
      setBlogs(demo);
      console.clear();
    }
  };

  const handleBlogRemove = (index) => {
    const demo = [...blogs];
    demo.splice(index, 1);
    setBlogs(demo);
  };

  const handleSocialChange = (e, i) => {
    const demo = [...socials];
    demo[i].url = e.target.value;
    setSocials(demo);
  };

  const handleSocialTypeChange = (e, i) => {
    const demo = [...socials];
    demo[i].type = e.target.value;
    setSocials(demo);
  };

  const handleSocialRemove = (index) => {
    const demo = [...socials];
    demo.splice(index, 1);
    setSocials(demo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (summary === "") {
      setalert(dangerAlert("Description is Compulsory"));
    } else if (summary.length < 300) {
      setalert(
        dangerAlert("Description should be atleast 300 characters long")
      );
    } else if (
      !user.noOfClients ||
      user.noOfClients === 0 ||
      user.noOfClients < 0
    ) {
      setalert(dangerAlert("No. of Clients is Compulsory"));
    } else {
      await http.put("/advisor/" + user._id, {
        ...user,
        summary,
        blogs: blogs[0].url === "" ? [] : blogs,
        socials: socials[0].url === "" ? [] : socials,
        profileCompleted: true,
      });
      setalert(successAlert("Profile Updated Successfully!", setalert));
      history.push("/advisor");
      console.clear();
    }
  };
  return (
    <Container fluid>
      {!user.isApproved
        ? dangerAlert("Your Profile is yet to be approved!")
        : ""}
      <Card>
        <Card.Header>
          <Card.Title as="h4">Complete Your Profile</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            {alert}
            <Row>
              <Col md="12">
                <Form.Group>
                  <label htmlFor="">Clients (Approx)</label>
                  <Form.Control
                    value={user.noOfClients ? user.noOfClients : 0}
                    placeholder="No Of Clients"
                    onChange={(e) => {
                      const demo = { ...user };
                      demo.noOfClients = e.target.value;
                      setUser(demo);
                    }}
                    type="number"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="">Description</label>
                  <ReactQuill
                    value={summary}
                    onChange={(value) => setSummary(value)}
                  />
                </Form.Group>
              </Col>
              <Col md="12" className="pt-1 pb-1">
                <Card.Title as="h4" className="pt-2">
                  Connect Socials
                </Card.Title>
                <div className="pb-2">
                  <div className="mySocials">
                    {socials.map((social, i) => (
                      <div className="d-flex my-2" key={i}>
                        <Form.Control
                          placeholder="Enter Type"
                          value={
                            social.type && social.type !== ""
                              ? social.type
                              : "facebook"
                          }
                          onChange={(e) => handleSocialTypeChange(e, i)}
                          as="select"
                        >
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="twitter">Twitter</option>
                          <option value="google">Google</option>
                          <option value="pinterest">Pinterest</option>
                        </Form.Control>
                        <Form.Control
                          placeholder="Enter Url"
                          value={social.url}
                          onChange={(e) => handleSocialChange(e, i)}
                        ></Form.Control>
                        <Button
                          variant="danger"
                          onClick={() => handleSocialRemove(i)}
                        >
                          X
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => {
                      const demo = [...socials];
                      demo.push({
                        url: "",
                        type: "",
                      });
                      setSocials(demo);
                    }}
                  >
                    Add New
                  </Button>
                </div>
              </Col>

              <Col md="12" className="pt-1 pb-3">
                {/* <Button
                      variant="info"
                      onClick={() => // setHaveBlogs(!haveBlogs)}
                    >
                      Have Blogs?
                    </Button> */}
                <Card.Title as="h4" className="pt-2">
                  Connect Blogs
                </Card.Title>
                <div className="pb-2">
                  <div className="myBlogs">
                    {blogs.map((blog, i) => (
                      <div key={i}>
                        <div className="d-flex my-2">
                          <Form.Control
                            placeholder="Enter Url"
                            value={blog.url}
                            onChange={(e) => handleBlogChange(e, i)}
                            onBlur={(e) => getBlogData(e, i)}
                          ></Form.Control>
                          <Button
                            variant="danger"
                            onClick={() => handleBlogRemove(i)}
                          >
                            X
                          </Button>
                        </div>
                        {blog.preview.havePreview && (
                          <Row
                            style={{
                              margin: 0,
                              padding: "10px",
                              background: "rgba(245,245,245)",
                            }}
                          >
                            <Col md="2">
                              <img
                                src={blog.preview.image}
                                alt={blog.preview.title}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </Col>
                            <Col
                              md="10"
                              style={{
                                margin: 0,
                                padding: 0,
                                display: "flex",
                                position: "relative",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <h4
                                style={{
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  margin: 0,
                                }}
                              >
                                {blog.preview.title}
                              </h4>
                              <p
                                style={{
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  margin: 0,
                                }}
                              >
                                {blog.preview.description}
                              </p>
                            </Col>
                          </Row>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => {
                      const demo = [...blogs];
                      demo.push({
                        url: "",
                        preview: {
                          title: "",
                          description: "",
                          image: "",
                        },
                      });
                      setBlogs(demo);
                    }}
                  >
                    Add New
                  </Button>
                </div>
              </Col>
            </Row>

            <Button
              className="btn-fill d-flex justify-content-end"
              type="submit"
              variant="success"
              onClick={handleSubmit}
            >
              Update Profile
            </Button>
            <div className="clearfix"></div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
