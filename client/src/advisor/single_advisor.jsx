import { useEffect, useState } from "react";
import config from "../utils/config";
import http from "../utils/http";
import parse from "html-react-parser";
import { Col, Row } from "react-bootstrap";

const SingleAdvisor = ({ match }) => {
  const [advisor, setadvisor] = useState({});
  useEffect(() => {
    const getAdvisor = async () => {
      const result = await http.get(
        "/advisor/username/" + match.params.username
      );
      setadvisor(result.data);
    };
    getAdvisor();
  }, [match]);
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
          {advisor.blogs && (
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
        </div>
      </div>
    </div>
  );
};

export default SingleAdvisor;
