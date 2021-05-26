import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

export function HeroSection() {
  return (
    <section
      id="azhHero"
      className="m-0 d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <h1 className="roboto-90 typewriter">
          Simplifying{" "}
          <span
            className="hero-title-blue txt-type"
            data-wait="3000"
            data-words='["Investments", "Loans", "Insurance"]'
          >
            &nbsp;
          </span>
        </h1>
        <br />
        <h1 className="roboto-90">like never before</h1>
      </div>
    </section>
  );
}

export function WhoAreWe() {
  return (
    <section id="whoWeAre" className="bg-fa">
      <div>
        <h2 className="d-block monsterrat-40-700 text-center">Who are we?</h2>
        <p className="text-center monsterrat-400">
          Advisor zaroori hai is a comprehensive platfrom trying to bridge the
          gapt between <br />
          investors and advisors. We are on a mission to spread financial
          swatantrata to help individual make
          <br />
          more informed decisions.
          <br />
        </p>
      </div>
      <div className="bg-fa">
        <div className="whoWeAreVideo">
          <Plyr
            id="wvrvideo"
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
          {/* <iframe
            title="main yt video"
            id="wvrvideo"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <Container className="pf_playlist">
      {/* <Container className="py-100"> */}
      <Row>
        <Col lg={6} className="pf_content">
          <h1 className="monsterrat-80-600">
            Your
            <br />
            Personal
            <br />
            Finance
            <br />
            Playlist
          </h1>
          <p className="monsterrat-20">
            Watch, save and play anytime. Ask
            <br />
            questions and clear all your doubts
          </p>
          <h4 className="get-started consultAdvBtnH4">
            <Link to="/advisors" className="consultAdvBtn">
              Consult an Advisor
            </Link>
          </h4>
        </Col>
        <Col lg={6} className="playlist-container">
          <Row className="playlist">
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
                <a href="https://youtu.be/6P-eFqA7XRk">
                  <h3 className="text-white">Derivatives</h3>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
                <a href="https://youtu.be/3dwalnVAKc0">
                  <h3 className="text-white">
                    Mediclaim and Accidental Insurance
                  </h3>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
                <a href="https://youtu.be/M2JetO0cFoo">
                  <h3 className="text-white">Alternative Investments</h3>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
                <a href="https://youtu.be/DcIjNBXfPiw">
                  <h3 className="text-white">Basics and Term Insurance</h3>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
                <a href="https://youtu.be/4uG5agBqiJ4">
                  <h3 className="text-white">
                    ULP, Pension &amp; Life Insurance
                  </h3>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="position-relative mb-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                alt=""
              />
              <div className="newsDiv">
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
    <div className="py-2 bg-fa">
      <Container className="mt-5">
        <h3 className="text-white d-inline-block blue-section-title">BLOGS</h3>
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
        <div className="d-flex justify-content-end monsterrat-30-600">
          Show More
        </div>
      </Container>
    </div>
  );
}

export function Events() {
  return (
    <Container className="mt-5">
      <h3 className="text-white mb-4 d-inline-block blue-section-title">
        EVENTS
      </h3>
      <p className="mt-2 mb-4 monsterrat-24-500">
        The underlying objective is to educate working professionals on a
        plethora of investment avenues so that they can reap maximum benefits of
        the apparent dyanmic financial and economic conditions. from mutual
        funds to Insurance claims we try to touch base upon a pool of topics to
        assist in individual reach out to a conclusion in a much more informed
        manner. .
      </p>
      <div className="d-flex justify-content-center m-100-50">
        <img
          className="swatantrata-img"
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
        <div className="container px-md-5">
          <div className="row justify-content-between">
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
              <h1 className="figure-amt">
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
        <p className="text-center joinMovement">Join the movement.</p>
      </Container>
    </Fragment>
  );
}

export function Brands() {
  return (
    <Container className="mt-5">
      <hr className="brands-hr" />
      <p className="brands-text text-center">
        Brands that have taken the steps towards Financial swatantrata with us
      </p>
      <div className="allBrands mt-4">
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
