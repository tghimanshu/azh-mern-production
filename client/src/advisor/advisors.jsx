import React, { useEffect, useState } from "react";
import http from "../utils/http";
import { BookingModal, ShareModal } from "../utils/model";
import { getRole, getToken } from "../utils/jwt";
import Swal from "sweetalert2";
import LoadingScreen from "../utils/loadingScreen";
import config from "../utils/config";

import "./advisors.css";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import SectionTitle from "./sectionTitle";
const queryString = require("query-string");

const Advisors = ({ history, location }) => {
  const [advisors, setAdvisors] = useState([]);
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
  const [fav, setFav] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);
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
      const favs = localStorage.getItem("favs");
      if (favs !== null) {
        setFav(favs.split(","));
      }
    } else if (user.role !== "client") {
      // Swal.fire({
      //   icon: "info",
      //   text: "You Need To Be Logged In to access the Advisors",
      //   confirmButtonText: "Login/Register",
      // }).then((res) => res.isConfirmed && history.push("/login"));
      // history.goBack();
    }
  }, [history]);

  useEffect(() => {
    const getAdvisors = async () => {
      try {
        const { data } = await http.get("/advisor");
        if (location.search) {
          const queries = queryString.parse(location.search);
          setAdvisors(
            data.filter(
              (adv) =>
                adv.isApproved === true &&
                adv.location
                  .toLowerCase()
                  .includes(queries.location.toLowerCase())
            )
          );
        } else {
          setAdvisors(data.filter((adv) => adv.isApproved === true));
        }
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
        text:
          "you need to complete atleast 60% of your profile to ask for recommendation!",
      });
    }
  };

  const handleShareClick = (e, username) => {
    setShareModel({
      show: true,
      username: username,
    });
  };

  const handleFav = (e, id) => {
    if (fav.includes(id)) {
      const temp_fav = [...fav];
      let inx = temp_fav.indexOf(id);
      temp_fav.splice(inx, 1);
      setFav(temp_fav);
      localStorage.setItem("favs", temp_fav);
    } else {
      const temp_fav = [...fav, id];
      setFav(temp_fav);
      localStorage.setItem("favs", temp_fav.join(","));
    }
  };

  const handleClose = () => {
    setShareModel(false);
    setShowModel(false);
  };

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
        {advisors.length === 0 && (
          <h1 className="text-center">NO Advisors Found!</h1>
        )}
        <Row>
          <Col md={12} className="mb-3">
            <button className="btn btn-outline-dark btn-pill">
              <i className="ri-equalizer-fill mr-1" />
              Filters
            </button>
          </Col>
          <Col md={3} style={{ display: "none" }}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Enter Location" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Expertise</Form.Label>
                    <Form.Control placeholder="Enter Expertise" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Experience"
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Apply
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {advisors.map((advisor) => (
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
                        <span
                          style={{
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                          }}
                        >
                          ₹ {advisor.recc_amt}
                        </span>
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
                            <i class="ri-time-line mr-3"></i>
                            <span>
                              {advisor.days.from.substring(0, 3)}-
                              {advisor.days.to.substring(0, 3)}
                            </span>
                          </li>
                        ) : (
                          <li>
                            <i class="ri-time-line mr-3"></i>
                            <span>unspecified</span>
                          </li>
                        )}
                      </ul>
                    </Card.Body>
                    <Card.Footer
                      style={{ paddingTop: "0" }}
                      className="d-flex flex-row justify-content-end"
                    >
                      <Button
                        variant="random view_profile  "
                        onClick={(e) => handleBClick(e, advisor._id)}
                      >
                        View Profile
                      </Button>
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

//  <div className="row">
//    {advisors.map((advisor) => {
//      return (
//        <div key={advisor._id} className="col-sm-3">
//          <div className="text-center card-box">
//            <div className="member-card pt-2 pb-2">
//              <div
//                className="mx-auto adv-profile"
//                style={{
//                  background: `url(${
//                    config.apiEndPoint
//                  }${advisor.profile_pic
//                    .split("\\")
//                    .join("/")}) no-repeat top center/cover`,
//                  width: "150px",
//                  height: "150px",
//                  borderRadius: "50%",
//                  border: "5px solid #eee",
//                }}
//              ></div>
//              <div className="mt-2">
//                <Link to={"/advisors/" + advisor.username}>
//                  <h4 className="text-white text-capitalize">
//                    {advisor.name}
//                  </h4>
//                </Link>
//                <ul className="list-unstyled member-info text-left text-white">
//                  <li>
//                    <i className="ri-briefcase-4-fill mr-3"></i>
//                    <span>{advisor.experience} years of experience</span>
//                  </li>
//                  <li>
//                    <i className="ri-medal-fill mr-3"></i>
//                    <span>{advisor.expertise}</span>
//                  </li>
//                  <li>
//                    <i className="ri-map-pin-2-fill mr-3"></i>
//                    <span>{advisor.location}</span>
//                  </li>
//                </ul>
//              </div>
//              {/* <div className="advisor-buttons">
//                     {bookings.includes(advisor._id) ? (
//                       <button
//                         disabled={true}
//                         onClick={(e) => handleBClick(e, advisor._id)}
//                         type="button"
//                         className="btn btn-block btn-outline-light btn-pill py-1"
//                       >
//                         Booked
//                       </button>
//                     ) : (
//                       <button
//                         disabled={disableBooking}
//                         onClick={(e) => handleBClick(e, advisor._id)}
//                         type="button"
//                         className="btn btn-block btn-outline-light btn-pill py-1"
//                       >
//                         Book Me
//                       </button>
//                     )}

//                     <span
//                       className="border border-light adv-btns"
//                       onClick={(e) => handleFav(e, advisor._id)}
//                     >
//                       <i
//                         className={
//                           fav.includes(advisor._id)
//                             ? "ri-star-fill"
//                             : "ri-star-line"
//                         }
//                       ></i>
//                     </span>
//                     <span
//                       href="/"
//                       onClick={(e) => handleShareClick(e, advisor.username)}
//                       className="border border-light adv-btns"
//                     >
//                       <i className="ri-share-line"></i>
//                     </span>
//                   </div> */}

//              <div>
//                {bookings.includes(advisor._id) ? (
//                  <button
//                    disabled={true}
//                    onClick={(e) => handleBClick(e, advisor._id)}
//                    type="button"
//                    className="btn btn-block btn-outline-light btn-pill py-1"
//                  >
//                    Requested
//                  </button>
//                ) : (
//                  <button
//                    disabled={disableBooking}
//                    onClick={(e) => handleBClick(e, advisor._id)}
//                    type="button"
//                    className="btn btn-block btn-outline-light btn-pill py-1"
//                  >
//                    Get Reccomendation
//                  </button>
//                )}
//                <div className="d-flex justify-content-around">
//                  <div className="">
//                    <button
//                      className="btn btn-block btn-outline-light btn-pill py-1 mt-2"
//                      onClick={(e) => handleFav(e, advisor._id)}
//                    >
//                      <i
//                        className={
//                          fav.includes(advisor._id)
//                            ? "ri-star-fill"
//                            : "ri-star-line"
//                        }
//                      ></i>
//                      Favourite
//                    </button>
//                  </div>
//                  <div className="">
//                    <button
//                      href="/"
//                      className="btn btn-block btn-outline-light btn-pill py-1 mt-2"
//                      onClick={(e) => handleShareClick(e, advisor.username)}
//                    >
//                      <i className="ri-share-line"></i>Share
//                    </button>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      );
//    })}
//  </div>;
