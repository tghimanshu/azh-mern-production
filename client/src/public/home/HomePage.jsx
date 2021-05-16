import { Col, Container, Row } from "react-bootstrap";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export function HeroSection() {
  return (
    <section
      id="azhHero"
      className="m-0 d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <h1
          style={{
            fontSize: "90px",
            textTransform: "unset",
            fontFamily: `'Roboto Slab', serif`,
          }}
          class="typewriter"
        >
          Simplifying{" "}
          <span
            class="txt-type"
            data-wait="3000"
            data-words='["Investments", "Loans", "Insurance"]'
            style={{
              color: "#2B32B2",
              fontSize: "90px",
              textTransform: "unset",
              fontFamily: `'Roboto Slab', serif`,
            }}
          ></span>
        </h1>
        <br />
        <h1
          style={{
            fontSize: "90px",
            textTransform: "unset",
            fontFamily: `'Roboto Slab', serif`,
          }}
        >
          like never before
        </h1>
      </div>
    </section>
  );
}

export function WhoAreWe() {
  return (
    <section style={{ background: "#fafafa" }}>
      <h2
        className="d-block text-center"
        style={{
          fontSize: "40px",
          fontFamily: `'Montserrat bold', sans-serif`,
          fontWeight: 700,
          marginTop: "80px",
          marginBottom: "10px",
        }}
      >
        Who are we?
      </h2>
      <p
        className="text-center"
        style={{
          fontFamily: `'Montserrat regular', sans-serif`,
          fontWeight: 400,
        }}
      >
        Advisor zaroori hai is a comprehensive platfrom trying to bridge the
        gapt between <br />
        investors and advisors. We are on a mission to spread financial
        swatantrata to help individual make
        <br />
        more informed decisions.
        <br />
      </p>
      <div
        style={{
          background: "#fafafa",
        }}
      >
        <Container>
          <div
            style={{
              padding: "50px 110px",
            }}
          >
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: "https://advisorzaroorihai.com/assets/img/azh.mp4",
                    type: "video/mp4",
                  },
                ],
              }}
            />
          </div>
        </Container>
      </div>
      <h1
        className="text-center"
        style={{
          display: "block",
          fontFamily: "'Monsterrat 500', sans-serif",
          fontWeight: 500,
          fontSize: "100px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        NEWS
      </h1>
    </section>
  );
}

export function News() {
  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Row>
        <Col lg={6}>
          <h1
            style={{
              fontFamily: "'Mosterrat', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "80px",
            }}
          >
            Your
            <br />
            Personal
            <br />
            Finance
            <br />
            Playlist
          </h1>
          <p
            style={{
              fontFamily: "'Mosterrat', sans-serif",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "20px",
            }}
          >
            Watch, save and play anytime. Ask
            <br />
            questions and clear all your doubts
          </p>
          <h4 className="get-started" style={{}}>
            <Link
              to="/advisors"
              style={{
                padding: "20px",
                borderRadius: "10px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "45px",
              }}
            >
              Consult an Advisor
            </Link>
          </h4>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                }}
              >
                <a href="https://youtu.be/6P-eFqA7XRk">
                  <h3 className="text-white">Derivatives</h3>
                </a>
              </div>
            </Col>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                }}
              >
                <a href="https://youtu.be/3dwalnVAKc0">
                  <h3 className="text-white">
                    Mediclaim and Accidental Insurance
                  </h3>
                </a>
              </div>
            </Col>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                }}
              >
                <a href="https://youtu.be/M2JetO0cFoo">
                  <h3 className="text-white">Alternative Investments</h3>
                </a>
              </div>
            </Col>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                }}
              >
                <a href="https://youtu.be/DcIjNBXfPiw">
                  <h3 className="text-white">Basics and Term Insurance</h3>
                </a>
              </div>
            </Col>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                }}
              >
                <a href="https://youtu.be/4uG5agBqiJ4">
                  <h3 className="text-white">
                    ULP, Pension &amp; Life Insurance
                  </h3>
                </a>
              </div>
            </Col>
            <Col lg={6} className="mb-3" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                }}
              >
                <a href="https://youtu.be/52SajFdSS3c">
                  <h3 className="text-white">Industry face-off</h3>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export function Blogs() {
  return (
    <div className="py-2" style={{ background: "#fafafa" }}>
      <Container className="mt-5">
        <h3
          className="text-white d-inline-block"
          style={{
            background: "#2B32B2",
            padding: "15px 30px",
            borderRadius: "50px",
            fontFamily: "'Monsterrat', sans-serif",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 600,
            marginBottom: "50px",
          }}
        >
          BLOGS
        </h3>
        <div className="blogs-grid">
          <div className="data1">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/first.svg"}
              alt=""
            />
          </div>
          <div className="data2">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/second.svg"}
              alt=""
            />
          </div>
          <div className="data3">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/third.svg"}
              alt=""
            />
          </div>
          <div className="data4">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fourth.svg"}
              alt=""
            />
          </div>
          <div className="data5">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              alt=""
            />
          </div>
          <div className="data6">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/sixth.svg"}
              alt=""
            />
          </div>
          <div className="data7">
            <img
              width="100%"
              src={process.env.PUBLIC_URL + "/assets/img/seventh.svg"}
              alt=""
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{
            fontSize: "30px",
            fontFamily: "'Mosterrat', sans-serif",
            fontStyle: "normal",
            fontWeight: 600,
            color: "rgba(0,0,0,0.75)",
            textDecoration: "underline",
          }}
        >
          Show More
        </div>
      </Container>
    </div>
  );
}

export function Events() {
  return (
    <Container className="mt-5">
      <h3
        className="text-white mb-4 d-inline-block"
        style={{
          background: "#2B32B2",
          padding: "15px 30px",
          borderRadius: "50px",
          fontFamily: "'Monsterrat', sans-serif",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: 600,
          marginTop: "50px",
        }}
      >
        EVENTS
      </h3>
      <p
        className="mt-2 mb-4"
        style={{
          // width: "70vw",
          fontFamily: "'Monsterrat', sans-serif",
          color: "#1A1A1A",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 500,
        }}
      >
        The underlying objective is to educate working professionals on a
        plethora of investment avenues so that they can reap maximum benefits of
        the apparent dyanmic financial and economic conditions. from mutual
        funds to Insurance claims we try to touch base upon a pool of topics to
        assist in individual reach out to a conclusion in a much more informed
        manner. .
      </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <img
          style={{ width: "80vh" }}
          src={process.env.PUBLIC_URL + "/assets/img/news/swatantrata.png"}
          alt="financial swatantrata"
        />
      </div>
    </Container>
  );
}

export function Figures() {
  return (
    <Fragment>
      <section id="figures" className="p-4 font-weight-bolder">
        <div className="container px-5">
          <div className="row justify-content-lg-between">
            <div className="col-12 col-lg-3 text-center">
              <h1 className="figure-amt">
                <span data-counter="100000" className="figure-amt-inner">
                  0
                </span>
                +
              </h1>
              <div className="figure-text">
                <p>financially literate</p>
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center">
              <h1 className="figure-amt hiiiijfadsikfjasdkljfasdf">
                <span data-counter="250" className="figure-amt-inner">
                  0
                </span>
                +
              </h1>
              <div className="figure-text">
                <p>Sessions</p>
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center">
              <h1 className="figure-amt">
                <span data-counter="110" className="figure-amt-inner">
                  0
                </span>
                +
              </h1>
              <div className="figure-text">
                <p>
                  topics on various
                  <br />
                  avenues covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container className="d-flex flex-column  justify-content-center">
        <img
          className="img-responsive"
          src={process.env.PUBLIC_URL + "/assets/img/news/devices.svg"}
          alt=""
        />
        <p
          className="text-center"
          style={{
            fontFamily: "'Monsterrat', sans-serif",
            color: "#1A1A1A",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
        >
          Join the movement.
        </p>
      </Container>
    </Fragment>
  );
}

export function Brands() {
  return (
    <Container className="mt-5">
      <hr style={{ marginTop: "40px" }} />
      <p
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "40px",
          color: "#2B32B2",
          marginTop: "20px",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        Brands that have taken the steps towards Financial swatantrata with us
      </p>
      <div className="d-flex justify-content-around mt-4">
        <img src={process.env.PUBLIC_URL + "/assets/img/news/jio.svg"} alt="" />
        <img
          src={process.env.PUBLIC_URL + "/assets/img/news/nmims.svg"}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/img/news/future.svg"}
          alt=""
        />
        <img src={process.env.PUBLIC_URL + "/assets/img/news/ibs.svg"} alt="" />
      </div>
      <hr style={{ marginTop: "60px", marginBottom: "80px" }} />
    </Container>
  );
}
