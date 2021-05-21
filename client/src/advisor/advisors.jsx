import React, { useEffect, useState } from "react";
import http from "../utils/http";
import { BookingModal, ShareModal } from "../utils/model";
import { getRole, getToken } from "../utils/jwt";
import Swal from "sweetalert2";
import LoadingScreen from "../utils/loadingScreen";
import config from "../utils/config";

import "./advisors.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import SectionTitle from "./sectionTitle";
import { Link } from "react-router-dom";
import { Fragment } from "react";
// const queryString = require("query-string");

export const AdvisorCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await http.get("/category");
      setCategories(data);
    };
    getCategory();
  }, []);
  return (
    <Fragment>
      <SectionTitle
        title="DISCOVER ADVISORS"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/advisors", name: "Advisors", active: true },
        ]}
      />
      <Container>
        <Row className="adv-categories">
          {categories.length !== 0 &&
            categories.map((category, i) => (
              <Col xs={12} md={6} key={i} className="mb-3 adv-category">
                <Link
                  to={"/categories/" + category.slug}
                  className="a-unstyled"
                >
                  <Row>
                    <div className="col-lg-8">
                      <img
                        src={
                          config.apiEndPoint +
                          "/uploads/categories/" +
                          category.imageUrl
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-lg-4 p-md-0 adv-category-details">
                      <h1 className="title">
                        <div>{category.title}</div>
                        <small>
                          {category.shortDesc && category.shortDesc}
                        </small>
                      </h1>
                      <p className="description">{category.description}</p>
                    </div>
                  </Row>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export const AllAdvisors = ({ match }) => {
  const [advisors, setAdvisors] = useState([]);
  useEffect(() => {
    const getAdvisors = async () => {
      try {
        const { data } = await http.get("/advisor");
        setAdvisors(data.filter((adv) => adv.isApproved === true));
      } catch (error) {}
    };
    getAdvisors();
  }, []);

  return (
    <Fragment>
      <SectionTitle
        title="DISCOVER ADVISORS"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/advisors", name: "Advisors", active: true },
        ]}
      />
      <Container>
        <Row>
          {advisors.length !== 0 &&
            advisors.map((advisor) => (
              <Col xs={12} md={4} className="position-relative p-0 one-advisor">
                <img
                  src={(config.apiEndPoint + advisor.profile_pic)
                    .split("\\")
                    .join("/")}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "http://localhost:3000/static/media/site-logo.2f58d515.png";
                  }}
                />
                <div className="advDetails">
                  <h3 className="title">Nakshita Mehta</h3>
                  <p className="position">Credent Asset Management</p>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

const Advisors = ({ history, location }) => {
  const [advisors, setAdvisors] = useState([]);
  const [filteredAdvisors, setFilteredAdvisors] = useState([]);
  const [appointment, setAppointment] = useState({
    adv_id: "",
    client_id: "",
    remarks: "",
  });
  const [showModel, setShowModel] = useState(false);
  const [shareModel, setShareModel] = useState({
    show: false,
    username: "",
  });
  const [disableBooking, setDisableBooking] = useState(false);
  // const [fav, setFav] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    location: "",
    experience: "",
    expertise: "",
  });
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    const user = getRole();
    if (user.role === "advisor") {
      setDisableBooking(true);
    } else if (user.role === "client") {
      setAppointment({
        adv_id: "",
        remarks: "",
        client_id: user._id,
      });
    }
  }, [history]);

  useEffect(() => {
    const getAdvisors = async () => {
      try {
        const { data } = await http.get("/advisor");
        setAdvisors(data.filter((adv) => adv.isApproved === true));
        setFilteredAdvisors(data.filter((adv) => adv.isApproved === true));
        setLoadingScreen(false);
      } catch (error) {
        // console.log(error);
      }
    };
    getAdvisors();
  }, [location]);

  const handleBRemarks = (e) =>
    setAppointment({
      remarks: e.target.value,
      adv_id: appointment.adv_id,
      client_id: appointment.client_id,
    });

  const handleBSubmit = async (e) => {
    try {
      await http.post("/booking/", {
        client_id: appointment.client_id,
        advisor_id: appointment.adv_id,
        remarks: appointment.remarks,
        isApproved: "pending",
      });
      setAppointment({
        adv_id: "",
        remarks: "",
        client_id: appointment.client_id,
      });
      setShowModel(false);
    } catch (error) {
      // console.log(error);
      setShowModel(false);
    }
  };

  const handleBClick = async (e, id) => {
    const userToken = getToken();
    if (!userToken) {
      Swal.fire({
        icon: "info",
        text: "You Need To Be Logged In to access the Advisors",
        confirmButtonText: "Login/Register",
      }).then((res) => res.isConfirmed && history.push("/login"));
    }
    const getUser = async () => {
      try {
        const userJwt = getRole();

        const { data } = await http.get("/client/" + userJwt._id);
        let status = 0;
        status += data.name !== 0 ? 10 : 0;
        status += data.personal_details.self.name !== "" ? 15 : 0;

        status += data.goals.length !== 0 && data.goals[0].goal !== "" ? 15 : 0;
        status +=
          data.investments.length !== 0 &&
          !data.haveInvestments &&
          data.investments[0].goal !== 0
            ? 15
            : 0;

        status +=
          data.insurances.length !== 0 &&
          !data.haveInsurances &&
          data.insurances[0].goal !== 0
            ? 15
            : 0;

        status += data.income.inc_self !== 0 ? 15 : 0;
        status += data.expenses.monthly.groceries !== 0 ? 15 : 0;
        return status;
      } catch (error) {
        // console.log(error);
      }
    };
    const status = await getUser();
    if (status > 60) {
      setAppointment({
        adv_id: id,
        remarks: appointment.remarks,
        client_id: appointment.client_id,
      });
      setShowModel(true);
    } else {
      Swal.fire({
        icon: "info",
        text: "you need to complete atleast 60% of your profile to ask for recommendation!",
      });
    }
  };

  const handleClose = () => {
    setShareModel(false);
    setShowModel(false);
  };

  const handleFilters = (e) => {
    e.preventDefault();
    console.log("data");
    const data = [...advisors];

    setFilteredAdvisors(
      data.filter((adv) => {
        if (
          adv.name.toLowerCase().includes(filters.name.toLowerCase()) &&
          adv.location.toLowerCase().includes(filters.location.toLowerCase()) &&
          adv.expertise
            .toLowerCase()
            .includes(filters.expertise.toLowerCase()) &&
          (filters.experience === "" ||
            adv.experience === parseInt(filters.experience))
        ) {
          return true;
        }
        return false;
      })
    );
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <p>
          <b>Insurance :</b> Insuring yourself or your family by selection of
          plans that is best suited to your needs{" "}
        </p>
        <p>
          <b>Invesments :</b> Plan your finance to achieve your goals for ex
          buying a house or child’s marriage.
        </p>
        <small>
          or any other financial query. just reach out with what you need help
          with and the selected advisor will send personalised recommendation
          followed by a video call for doubts if need be.
        </small>
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      {loadingScreen && <LoadingScreen />}
      <SectionTitle
        title="Advisors"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/advisors", name: "Advisors", active: true },
        ]}
      />
      <Container className="mt-2">
        {filteredAdvisors.length === 0 && (
          <h1 className="text-center">NO Advisors Found!</h1>
        )}
        <Row>
          <Col md={12} className="mb-3">
            <button
              className="btn btn-outline-dark btn-pill"
              onClick={() => setShowFilter((f) => !f)}
            >
              <i className="ri-equalizer-fill mr-1" />
              Filters
            </button>
            {showFilter && (
              <Form.Row className="mt-3">
                <Col md={4}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={filters.name}
                    onChange={(e) => {
                      const data = { ...filters };
                      data.name = e.target.value;
                      setFilters(data);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    value={filters.location}
                    onChange={(e) => {
                      const data = { ...filters };
                      data.location = e.target.value;
                      setFilters(data);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="number"
                    placeholder="Experience"
                    value={filters.experience}
                    onChange={(e) => {
                      const data = { ...filters };
                      data.experience = e.target.value;
                      setFilters(data);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    type="text"
                    placeholder="Expertise"
                    value={filters.expertise}
                    onChange={(e) => {
                      const data = { ...filters };
                      data.expertise = e.target.value;
                      setFilters(data);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Button
                    variant="success"
                    className="btn-block"
                    onClick={handleFilters}
                  >
                    Filter
                  </Button>
                </Col>
              </Form.Row>
            )}
          </Col>

          <Col md={6}>
            <Card className="" style={{ width: "100%" }}>
              <div className="d-md-flex flex-md-row one_advisor">
                <Card.Img
                  src={"https://www.smallcase.com/static/svgs/logo-full.svg"}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "20px 0 20px 20px",
                    boxShadow: "rgb(0 0 0 / 20%) 0px 3px 10px 0px",
                  }}
                  onError={(e) => {
                    e.target.src = "/static/media/site-logo.2f58d515.png";
                  }}
                />
                <div>
                  <Card.Body style={{ paddingBottom: "0" }}>
                    <Card.Title className="d-flex justify-content-between">
                      <span
                        style={{
                          fontSize: "1.2rem",
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                        }}
                      >
                        Small Case
                      </span>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                        }}
                      ></span>
                    </Card.Title>
                    <Card.Subtitle
                      style={{ color: "#666", fontSize: ".8rem" }}
                      className="mb-2"
                    >
                      Stock Investing made easy
                    </Card.Subtitle>
                    <ul className="list-unstyled member-info text-left">
                      <li>
                        <i className="ri-medal-fill mr-3"></i>
                        <span>Stock Investment</span>
                      </li>
                      <li>
                        <i className="ri-map-pin-2-fill mr-3"></i>
                        <span>All India</span>
                      </li>
                      <li>
                        <i className="ri-map-pin-2-fill mr-3"></i>
                        <span>In Office</span>
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer
                    style={{ paddingTop: "0" }}
                    className="d-flex flex-row justify-content-end"
                  >
                    <a
                      href="https://advisorzaroorihai.smallcase.com/"
                      className="btn view_profile"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View Profile
                    </a>
                    <OverlayTrigger
                      trigger="hover focus"
                      placement="left"
                      overlay={popover}
                    >
                      <a
                        className="btn btn-random get_reccomendation ml-3"
                        href="https://advisorzaroorihai.smallcase.com/"
                        style={{
                          boxShadow: "1px 1px 5px 2px rgba(0, 0, 0, 0.2)",
                        }}
                        rel="noreferrer"
                        target="_blank"
                        type="button"
                      >
                        Get Recommendation
                      </a>
                    </OverlayTrigger>
                  </Card.Footer>
                </div>
              </div>
            </Card>
          </Col>

          {filteredAdvisors.map((advisor) => (
            <Col md={6} key={advisor._id}>
              <Card className="" style={{ width: "100%" }}>
                <div className="d-md-flex flex-md-row one_advisor">
                  <Card.Img
                    src={(config.apiEndPoint + advisor.profile_pic)
                      .split("\\")
                      .join("/")}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      margin: "20px 0 20px 20px",
                      boxShadow: "rgb(0 0 0 / 20%) 0px 3px 10px 0px",
                    }}
                    onError={(e) => {
                      e.target.src = "/static/media/site-logo.2f58d515.png";
                    }}
                  />
                  <div>
                    <Card.Body style={{ paddingBottom: "0" }}>
                      <Card.Title className="d-flex justify-content-between">
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                          }}
                        >
                          {advisor.name}
                        </span>
                        {/*
                        <span
                          style={{
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                          }}
                        >
                          ₹ {advisor.recc_amt}
                        </span>
			*/}
                      </Card.Title>
                      <Card.Subtitle
                        style={{ color: "#666", fontSize: ".8rem" }}
                        className="mb-2"
                      >
                        {advisor.experience} years of experience -
                        {advisor.noOfClients}+ Clients
                      </Card.Subtitle>
                      <ul className="list-unstyled member-info text-left">
                        <li>
                          <i className="ri-medal-fill mr-3"></i>
                          <span>{advisor.expertise}</span>
                        </li>
                        <li>
                          <i className="ri-map-pin-2-fill mr-3"></i>
                          <span>{advisor.location}</span>
                        </li>
                        {advisor.days ? (
                          <li>
                            <i className="ri-time-line mr-3"></i>
                            <span>{advisor.availability}</span>
                            {/* <span>
                              {advisor.days.from.substring(0, 3)}-
                              {advisor.days.to.substring(0, 3)}
                            </span> */}
                          </li>
                        ) : (
                          <li>
                            <i className="ri-time-line mr-3"></i>
                            {/* <span>unspecified</span> */}
                            <span>{advisor.availability}</span>
                          </li>
                        )}
                      </ul>
                    </Card.Body>
                    <Card.Footer
                      style={{ paddingTop: "0" }}
                      className="d-flex flex-row justify-content-end"
                    >
                      <Link
                        to={"/advisors/" + advisor.username}
                        className="btn view_profile"
                      >
                        View Profile
                      </Link>
                      <OverlayTrigger
                        trigger="hover focus"
                        placement="left"
                        overlay={popover}
                      >
                        <Button
                          variant="random get_reccomendation ml-3"
                          disabled={disableBooking}
                          onClick={(e) => handleBClick(e, advisor._id)}
                          style={{
                            boxShadow: "1px 1px 5px 2px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          Get Recommendation
                        </Button>
                      </OverlayTrigger>
                    </Card.Footer>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <BookingModal
        show={showModel}
        appointment={appointment}
        handleBRemarks={handleBRemarks}
        handleBSubmit={handleBSubmit}
        handleClose={handleClose}
      />
      <ShareModal
        show={shareModel.show}
        username={shareModel.username}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Advisors;
