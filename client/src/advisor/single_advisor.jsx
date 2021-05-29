import { useCallback, useEffect, useState } from "react";
import config from "../utils/config";
import http from "../utils/http";
import parse from "html-react-parser";
import { BookingModal } from "../utils/model";
import { getRole } from "../utils/jwt";
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
        const userJwt = getRole();
        if (!userJwt) {
          Swal.fire({
            icon: "info",
            text: "You Need To Be Logged In to access the Advisors",
            confirmButtonText: "Login/Register",
          }).then((res) => res.isConfirmed && history.push("/login"));
        }
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
                : "Get Recommendation"}
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
    </div>
  );
};

export default SingleAdvisor;
