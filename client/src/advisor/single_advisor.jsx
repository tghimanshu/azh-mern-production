import React, { useCallback, useEffect, useState } from "react";
import config from "utils/config";
import http from "utils/http";
import parse from "html-react-parser";
import { BookingModal } from "utils/model";
import { getRole } from "utils/jwt";
import Swal from "sweetalert2";
import SectionTitle from "./sectionTitle";

const SingleAdvisor = ({ match, history }) => {
  const [advisor, setadvisor] = useState({});
  const [appointment, setAppointment] = useState({
    adv_id: "",
    client_id: "",
    remarks: "",
  });
  const [showModel, setShowModel] = useState(false);
  const [disableBooking, setDisableBooking] = useState(false);
  const getAdvisor = useCallback(
    async (user) => {
      const result = await http.get(
        "/advisor/username/" + match.params.username
      );
      console.log(result);
      if (user.role === "client") {
        const { data } = await http.get("/booking/client/" + user._id);
        data.filter((d) => d.advisor_id._id === result.data._id).length !== 0 &&
          setDisableBooking(true);
      }
      setadvisor(result.data);
    },
    [match]
  );
  useEffect(() => {
    const user = getRole();
    if (user.role === "advisor") {
      setDisableBooking(true);
      getAdvisor(user);
    } else if (user.role === "client") {
      setAppointment({
        adv_id: "",
        remarks: "",
        client_id: user._id,
      });
      getAdvisor(user);
    } else if (user.role !== "client") {
      getAdvisor(user);
    }
  }, [history, getAdvisor]);

  const handleBClick = async (e, id) => {
    const getUser = async () => {
      try {
        const user = getRole();
        if (user.role !== "client") {
          Swal.fire({
            icon: "info",
            text: "You Need To Be Logged In to access the Advisors",
            confirmButtonText: "Login/Register",
          }).then((res) => res.isConfirmed && history.push("/login"));
        } else {
          setAppointment({
            adv_id: id,
            remarks: appointment.remarks,
            client_id: appointment.client_id,
          });
          setShowModel(true);
        }
      } catch (error) {}
    };
    getUser();
  };

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
      setDisableBooking(true);
    } catch (error) {
      setShowModel(false);
    }
  };

  const handleClose = () => {
    setShowModel(false);
  };

  return (
    <div className="container">
      <SectionTitle
        title="DISCOVER ADVISORS"
        breadcrumbs={[
          { link: "/categories", name: "Discover Advisors", active: true },
          {
            link: "/categories",
            name: advisor.name ? advisor.name : "Advisor",
            active: true,
          },
        ]}
      />
      {advisor.username === "narnolia" ? (
        <div>
          <div className="row">
            <div className="col-md-3">
              <div className="saidiv mb-2">
                <img
                  className="single_advisor_img"
                  src={config.apiEndPoint + advisor.profile_pic}
                  alt={advisor.name}
                  style={{ width: "100%", height: "auto" }}
                  onError={(e) => {
                    e.target.src =
                      "http://localhost:3000/static/media/site-logo.2f58d515.png";
                  }}
                />
              </div>
            </div>
            <div className="col-md-9">
              <h1 className="monsterrat-40-700 title-blue">{advisor.name}</h1>
              {parse(
                advisor.summary
                  ? advisor.summary
                  : advisor.name +
                      ", A professional Advisor here to solve all your queries."
              )}
              <hr />
              <BookingModal
                show={showModel}
                appointment={appointment}
                handleBRemarks={handleBRemarks}
                handleBSubmit={handleBSubmit}
                handleClose={handleClose}
              />
            </div>
          </div>
          <div
            className="py-2 mb-3"
            style={{
              width: "100%",
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(204,204,204,1) 50%, rgba(255,255,255,1) 70%)",
            }}
          >
            <h1 className="text-center fw-bold m-0">WHY CHOOSE US</h1>
            <h5 className="text-center fw-bold m-0">
              Built to last differentiatiors: Our 4 P's
            </h5>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                className="p-2"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
              >
                <i
                  class="ri-briefcase-4-line px-3 mr-3"
                  style={{
                    fontSize: "3.5em",
                    background: "#1D3750",
                    color: "white",
                  }}
                ></i>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="font-weight-bolder mb-0">Pioneers in RIA</h5>
                  <p className="mb-0">
                    Launched First Investment Advisory Portfolio (IAP) in 2009
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="p-2"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
              >
                <i
                  class="ri-store-2-line px-3 mr-3"
                  style={{
                    fontSize: "3.5em",
                    background: "#1D3750",
                    color: "white",
                  }}
                ></i>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="font-weight-bolder mb-0">Performance</h5>
                  <p className="mb-0">
                    India's leading real time performance: over 10% ALPHA CAGR
                    since inception
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="p-2"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
              >
                <i
                  class="ri-team-line px-3 mr-3"
                  style={{
                    fontSize: "3.5em",
                    background: "#1D3750",
                    color: "white",
                  }}
                ></i>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="font-weight-bolder mb-0">Promoters</h5>
                  <p className="mb-0">
                    Proven track record of 25 years of deep understanding ethics
                    and performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="p-2"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
              >
                <i
                  class="ri-award-fill  px-3 mr-3"
                  style={{
                    fontSize: "3.5em",
                    background: "#1D3750",
                    color: "white",
                  }}
                ></i>
                <div className="d-flex flex-column justify-content-center">
                  <h5 className="font-weight-bolder mb-0">
                    Process driven Research Products
                  </h5>
                  <p className="mb-0">
                    Well defined tested, unbiased &amp; disciplined research
                    processes to create investment baskets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {advisor.isLink && (
            <a
              className="btn btn-info d-block mx-auto my-3"
              style={{
                width: "max-content",
                background: "#1D3750",
              }}
              href={advisor.redirectLink}
              target="_blank"
              rel="noreferrer"
            >
              Get Started
            </a>
          )}
        </div>
      ) : (
        <div className="row">
          <div className="col-md-3">
            <div className="saidiv mb-2">
              <img
                className="single_advisor_img"
                src={config.apiEndPoint + advisor.profile_pic}
                alt={advisor.name}
                style={{ width: "100%", height: "auto" }}
                onError={(e) => {
                  e.target.src =
                    "http://localhost:3000/static/media/site-logo.2f58d515.png";
                }}
              />
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="monsterrat-40-700 title-blue">{advisor.name}</h1>
            {parse(
              advisor.summary
                ? advisor.summary
                : advisor.name +
                    ", A professional Advisor here to solve all your queries."
            )}
            <hr />
            {advisor.isLink && (
              <a
                className="btn btn-info d-block mx-auto"
                style={{ width: "max-content" }}
                href={advisor.redirectLink}
                target="_blank"
                rel="noreferrer"
              >
                Get Started
              </a>
            )}
            {!advisor.isLink && (
              <button
                disabled={disableBooking}
                onClick={(e) => handleBClick(e, advisor._id)}
                type="button"
                className="btn btn-block btn-info btn-pill py-1"
                style={{
                  width: "50%",
                  margin: "0 auto",
                }}
              >
                {appointment.client_id !== "" && disableBooking
                  ? "Requested"
                  : "Get Started"}
              </button>
            )}
            <BookingModal
              show={showModel}
              appointment={appointment}
              handleBRemarks={handleBRemarks}
              handleBSubmit={handleBSubmit}
              handleClose={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAdvisor;
