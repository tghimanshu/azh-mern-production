import { useEffect, useState } from "react";
import config from "../utils/config";
import http from "../utils/http";
import parse from "html-react-parser";
// import { BookingModal } from "../utils/model";
import { getRole } from "../utils/jwt";
import Swal from "sweetalert2";
import { Col, Row } from "react-bootstrap";

const SingleAdvisor = ({ match }) => {
  const [advisor, setadvisor] = useState({});
  const [appointment, setAppointment] = useState({
    b_date: "",
    b_time: "",
    adv_id: "",
    client_id: "",
    remarks: "",
  });
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    const getAdvisor = async () => {
      const result = await http.get(
        "/advisor/username/" + match.params.username
      );
      setadvisor(result.data);
    };
    getAdvisor();
  }, [match]);

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
        b_date: appointment.b_date,
        b_time: appointment.b_time,
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
          {advisor.socials && advisor.socials.length > 0 && (
            <>
              <h3>Connect: </h3>
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
          <h1>Description</h1>
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
            </>
          )}
          {/* <button
            onClick={(e) => handleBClick(e, advisor._id)}
            type="button"
            className="btn btn-block btn-outline-light btn-pill py-1"
          >
            Get Reccomendation
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisor;
