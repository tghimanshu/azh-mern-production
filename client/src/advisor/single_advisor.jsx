import { useCallback, useEffect, useState } from "react";
import config from "../utils/config";
import http from "../utils/http";
import parse from "html-react-parser";
import { BookingModal } from "../utils/model";
import { getRole } from "../utils/jwt";
import Swal from "sweetalert2";
import { Col, Row } from "react-bootstrap";
import { successAlert } from "../utils/alerts";

const SingleAdvisor = ({ match, history }) => {
  const [advisor, setadvisor] = useState({});
  const [feedback, setFeedback] = useState("");
  const [appointment, setAppointment] = useState({
    adv_id: "",
    client_id: "",
    remarks: "",
  });
  const [showModel, setShowModel] = useState(false);
  const [disableBooking, setDisableBooking] = useState(false);
  const [alert, setAlert] = useState("");
  const getAdvisor = useCallback(
    async (user) => {
      const result = await http.get(
        "/advisor/username/" + match.params.username
      );
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
      Swal.fire({
        icon: "info",
        text: "You Need To Be Logged In to access the Advisors",
        confirmButtonText: "Login/Register",
      }).then((res) => res.isConfirmed && history.push("/login"));
      history.goBack();
    }
  }, [history, getAdvisor]);

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

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbacks = advisor.feedbacks ? [...advisor.feedbacks] : [];
      feedbacks.push({
        client_id: appointment.client_id,
        text: feedback,
      });
      await http.put("/advisor/" + advisor._id, {
        feedbacks,
      });
      setAlert(successAlert("Feedback Saved!", setAlert));
    } catch (err) {
      Swal.fire({ text: err.toString() });
    }
  };

  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-md-2">
          <img
            src={config.apiEndPoint + advisor.profile_pic}
            alt={advisor.name}
            style={{ width: "100%", height: "auto" }}
          />
          <h2 className="mt-2">{advisor.name}</h2>
          <hr />
          <h5>Have A Feedback: </h5>
          {alert}
          <textarea
            disabled={getRole().role !== "client"}
            rows="4"
            style={{ width: "100%" }}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="form-control mb-1"
            placeholder="Enter your Feedback"
          />
          {feedback !== "" && (
            <button
              className="btn btn-info btn-block"
              onClick={handleFeedbackSubmit}
            >
              Submit
            </button>
          )}

          {advisor.socials && advisor.socials.length > 0 && (
            <>
              <hr />
              <h5>Connect: </h5>
              {advisor.socials.map((social, i) => (
                <div className="mySocials text-capitalize" key={i}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={"btn mb-2 btn-block btn-" + social.type}
                  >
                    <i
                      className={"align-middle mr-2 fab fa-" + social.type}
                    ></i>
                    {social.type}
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="col-md-9">
          {/* <h1>Description</h1> */}
          {parse(
            advisor.summary
              ? advisor.summary
              : advisor.name +
                  ", A professional Advisor here to solve all your queries."
          )}
          <hr />
          <ul className="list-unstyled member-info text-left">
            <li>
              <i className="ri-briefcase-4-fill mr-3"></i>
              <span>
                {advisor.experience} years of experience and more than{" "}
                {advisor.noOfClients} Clients.
              </span>
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
          {advisor.blogs && advisor.blogs.length > 0 && (
            <>
              <h2>Blog</h2>
              {advisor.blogs.map(
                (blog, i) =>
                  blog.preview.havePreview && (
                    <a
                      key={i}
                      href={blog.url}
                      target="_blank"
                      rel="noreferrer"
                      className="a-unstyled"
                    >
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
                    </a>
                  )
              )}
              <BookingModal
                show={showModel}
                appointment={appointment}
                handleBRemarks={handleBRemarks}
                handleBSubmit={handleBSubmit}
                handleClose={handleClose}
              />
            </>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisor;
