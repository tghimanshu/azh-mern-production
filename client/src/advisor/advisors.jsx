import React, { useEffect, useState } from "react";
import http from "../utils/http";
import { Link } from "react-router-dom";
import { BookingModal, ShareModal } from "../utils/model";
import { getRole } from "../utils/jwt";
import Swal from "sweetalert2";
import LoadingScreen from "../utils/loadingScreen";
import config from "../utils/config";

import "./advisors.css";
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
  const [bookings, setBookings] = useState([]);
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
      Swal.fire({
        icon: "info",
        text: "You Need To Be Logged In to access the Advisors",
        confirmButtonText: "Login/Register",
      }).then((res) => res.isConfirmed && history.push("/login"));
      history.goBack();
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

  useEffect(() => {
    const getBookings = async () => {
      const user = getRole();
      const results = await http.get("/booking/client/" + user._id);
      const bookedAdvisors = results.data.map((b) => b.advisor_id._id);
      setBookings(bookedAdvisors);
    };
    getBookings();
  }, [showModel]);

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
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>Advisors</h1>
          </div>
        </section>
      </div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-1">
            <button className="btn btn-outline-dark btn-pill">
              <i className="ri-equalizer-fill mr-1" />
              Filters
            </button>
          </div>
        </div>
        {advisors.length === 0 && (
          <h1 className="text-center">NO Advisors Found!</h1>
        )}
        <div className="row">
          {advisors.map((advisor) => {
            return (
              <div key={advisor._id} className="col-sm-3">
                <div className="text-center card-box">
                  <div className="member-card pt-2 pb-2">
                    <div
                      className="mx-auto adv-profile"
                      style={{
                        background: `url(${
                          config.apiEndPoint
                        }${advisor.profile_pic
                          .split("\\")
                          .join("/")}) no-repeat top center/cover`,
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "5px solid #eee",
                      }}
                    ></div>
                    <div className="mt-2">
                      <Link to={"/advisors/" + advisor.username}>
                        <h4 className="text-white text-capitalize">
                          {advisor.name}
                        </h4>
                      </Link>
                      <ul className="list-unstyled member-info text-left text-white">
                        <li>
                          <i className="ri-briefcase-4-fill mr-3"></i>
                          <span>{advisor.experience} years of experience</span>
                        </li>
                        <li>
                          <i className="ri-medal-fill mr-3"></i>
                          <span>{advisor.expertise}</span>
                        </li>
                        <li>
                          <i className="ri-map-pin-2-fill mr-3"></i>
                          <span>{advisor.location}</span>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="advisor-buttons">
                      {bookings.includes(advisor._id) ? (
                        <button
                          disabled={true}
                          onClick={(e) => handleBClick(e, advisor._id)}
                          type="button"
                          className="btn btn-block btn-outline-light btn-pill py-1"
                        >
                          Booked
                        </button>
                      ) : (
                        <button
                          disabled={disableBooking}
                          onClick={(e) => handleBClick(e, advisor._id)}
                          type="button"
                          className="btn btn-block btn-outline-light btn-pill py-1"
                        >
                          Book Me
                        </button>
                      )}

                      <span
                        className="border border-light adv-btns"
                        onClick={(e) => handleFav(e, advisor._id)}
                      >
                        <i
                          className={
                            fav.includes(advisor._id)
                              ? "ri-star-fill"
                              : "ri-star-line"
                          }
                        ></i>
                      </span>
                      <span
                        href="/"
                        onClick={(e) => handleShareClick(e, advisor.username)}
                        className="border border-light adv-btns"
                      >
                        <i className="ri-share-line"></i>
                      </span>
                    </div> */}

                    <div>
                      {bookings.includes(advisor._id) ? (
                        <button
                          disabled={true}
                          onClick={(e) => handleBClick(e, advisor._id)}
                          type="button"
                          className="btn btn-block btn-outline-light btn-pill py-1"
                        >
                          Requested
                        </button>
                      ) : (
                        <button
                          disabled={disableBooking}
                          onClick={(e) => handleBClick(e, advisor._id)}
                          type="button"
                          className="btn btn-block btn-outline-light btn-pill py-1"
                        >
                          Get Reccomendation
                        </button>
                      )}
                      <div className="d-flex justify-content-around">
                        <div className="">
                          <button
                            className="btn btn-block btn-outline-light btn-pill py-1 mt-2"
                            onClick={(e) => handleFav(e, advisor._id)}
                          >
                            <i
                              className={
                                fav.includes(advisor._id)
                                  ? "ri-star-fill"
                                  : "ri-star-line"
                              }
                            ></i>
                            Favourite
                          </button>
                        </div>
                        <div className="">
                          <button
                            href="/"
                            className="btn btn-block btn-outline-light btn-pill py-1 mt-2"
                            onClick={(e) =>
                              handleShareClick(e, advisor.username)
                            }
                          >
                            <i className="ri-share-line"></i>Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
