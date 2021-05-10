import { useState } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export function HeroSection({ history }) {
  const [location] = useState("");

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    history.push("/advisors?location=" + location);
  };
  return (
    <section id="azhHero" className="mb-0 pb-0 mt-5 mt-md-0">
      <Container>
        <Row>
          <Col lg={7} className="d-flex justify-content-center flex-column">
            <h2>
              Get best recommendations on your
              <br />
              <span className="hero-title-blue">personal finances</span>
              <br />
              through SEBI registered investment advisors
            </h2>
            <Form
              className="row mt-4 justify-content-center justify-content-lg-start"
              onSubmit={(e) => handleLocationSubmit(e)}
            >
              <div className="col-6 enterLocation input-group m-0">
                <input
                  type="button"
                  id="location"
                  className="form-control form-control-lg"
                  value="Look For Your Advisors"
                  onClick={() => history.push("/advisors")}
                  // onChange={(e) => setLocation(e.target.value)}
                />

                {/* <div className="input-group-btn">
                  <button className="btn btn-lg btn-default" type="submit">
                    GO
                  </button>
                </div> */}
              </div>
            </Form>
          </Col>
          <Col lg={5}>
            <Image
              src={process.env.PUBLIC_URL + "/assets/img/hero-img.png"}
              alt="Hero Image"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function WhyAZH({ homePageData }) {
  return (
    <section id="whyazh">
      <Container>
        <h1>
          WHY AZH?
          <hr className="m-0 mb-5" />
        </h1>
        {/* <h1 className="section-center-title">WHY AZH?</h1> */}
        <Row className="text-center justify-content-around">
          <Col md={3}>
            <Image
              src={process.env.PUBLIC_URL + "assets/img/whyazh/hasslefree.png"}
              fluid
            />
            <h2>
              {parse(
                homePageData.whyazh[0].title ? homePageData.whyazh[0].title : ""
              )}
            </h2>
            <p>
              {parse(
                homePageData.whyazh[0].content
                  ? homePageData.whyazh[0].content
                  : ""
              )}
            </p>
          </Col>
          <Col md={3}>
            <Image
              src={
                process.env.PUBLIC_URL + "assets/img/whyazh/sebiregistered.png"
              }
              fluid
            />
            <h2>
              {parse(
                homePageData.whyazh[1].title ? homePageData.whyazh[1].title : ""
              )}
            </h2>
            <p>
              {parse(
                homePageData.whyazh[1].content
                  ? homePageData.whyazh[1].content
                  : ""
              )}
            </p>
          </Col>
          <Col md={3}>
            <Image
              src={
                process.env.PUBLIC_URL + "assets/img/whyazh/safeandsecured.png"
              }
              fluid
            />
            <h2>
              {parse(
                homePageData.whyazh[2].title ? homePageData.whyazh[2].title : ""
              )}
            </h2>
            <p>
              {parse(
                homePageData.whyazh[2].content
                  ? homePageData.whyazh[2].content
                  : ""
              )}
            </p>
          </Col>
        </Row>
        <div className="mb-5 get-in-touch">
          <Link to="/login">GET IN TOUCH</Link>
        </div>
      </Container>
    </section>
  );
}

export function Newsletter() {
  return (
    <div
      id="newsletter"
      className="container text-white pb-5 pb-lg-0 mb-lg-5"
      style={{ marginTop: "40px" }}
    >
      <div className="newsletter-form-border d-lg-block d-none"></div>
      <div className="row ml-3">
        <div className="col-12 col-lg-6">
          <h3 className="font-weight-bolder mt-4">
            READY TO GET STARTED?
            <hr
              className="m-0 mb-1"
              style={{ width: "60%", height: "4px", background: "orange" }}
            />
          </h3>
          <p className="text-bolder">
            Sign up for weekly Blogs of market analysis , emerging companies and
            much more right at your inbox.
          </p>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <form className="newsletter-form">
            <img src="assets/img/newsletter-form-overlay.png" alt="" />
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="xyz@gmail.com"
              />
              <button type="submit" className="btn btn-success input-group-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Initiative() {
  return (
    <section
      id="initiatives"
      className="container mb-0 mt-0 pt-0 pb-0 text-black"
    >
      <h1>
        INITIATIVES
        <hr className="m-0" />
      </h1>
      <p className="mt-0 mb-5 text-bold">
        A Quick Glimpse of what we have done.
      </p>
      <Container>
        <Row className="mb-5 initiatives justify-content-around">
          <div className="col-12 pl-0 pr-3 col-lg-5 mb-4 mb-lg-0">
            <img
              src={
                process.env.PUBLIC_URL +
                "assets/img/initiatives/swatantra-final.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-12 pl-3 pr-0 col-lg-5">
            <img
              src={
                process.env.PUBLIC_URL +
                "assets/img/initiatives/master_blaster.png"
              }
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="seperator d-none d-lg-block"></div>
        </Row>
      </Container>
    </section>
  );
}

export function HowItWorks({ homePageData }) {
  return (
    <section id="how-it-works" className="text-black">
      <Container>
        <h1>
          HOW IT WORKS
          <p
            style={{
              fontWeight: "initial",
              fontSize: "initial",
              marginBottom: "5px",
            }}
          >
            3 Steps and you're done
          </p>
          <hr className="m-0 mb-5" />
        </h1>
        <Row>
          <Col md={4} className="d-md-flex">
            <div>
              <h1
                style={{
                  fontSize: "4em",
                  color: "#2B32B2",
                  lineHeight: "0.8em",
                }}
              >
                01
              </h1>
            </div>
            <div className="ml-2 mr-4">
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                {parse(
                  homePageData.howitworks[0].title
                    ? homePageData.howitworks[0].title
                    : ""
                )}
              </h2>
              <p>
                {parse(
                  homePageData.howitworks[0].content
                    ? homePageData.howitworks[0].content
                    : ""
                )}
              </p>
            </div>
          </Col>

          <Col md={4} className="d-md-flex">
            <div>
              <h1
                style={{
                  fontSize: "4em",
                  color: "#2B32B2",
                  lineHeight: "0.8em",
                }}
              >
                02
              </h1>
            </div>
            <div className="ml-2 mr-4">
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                {parse(
                  homePageData.howitworks[1].title
                    ? homePageData.howitworks[1].title
                    : ""
                )}
              </h2>
              <p>
                {parse(
                  homePageData.howitworks[1].content
                    ? homePageData.howitworks[1].content
                    : ""
                )}
              </p>
            </div>
          </Col>

          <Col md={4} className="d-md-flex">
            <div>
              <h1
                style={{
                  fontSize: "4em",
                  color: "#2B32B2",
                  lineHeight: "0.8em",
                }}
              >
                03
              </h1>
            </div>
            <div className="ml-2 mr-4">
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                {parse(
                  homePageData.howitworks[2].title
                    ? homePageData.howitworks[2].title
                    : ""
                )}
              </h2>
              <p>
                {parse(
                  homePageData.howitworks[2].content
                    ? homePageData.howitworks[2].content
                    : ""
                )}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function WantAnAdvisor() {
  return (
    <section id="how-it-works" className="text-black">
      <Container>
        <h1>
          I WANT AN ADVISOR FOR
          <hr className="m-0 mb-5" />
        </h1>
        {/* <h1 className="section-center-title">I WANT AN ADVISOR FOR</h1> */}
        <div className="wantAdvisors">
          <div className="wa" id="wa-mf">
            <Link to="/page/mutual-fund">MUTUAL FUNDS</Link>
          </div>
          <div className="wa" id="wa-insurance">
            <Link to="/page/insurance">INSURANCE</Link>
          </div>
          <div className="wa" id="wa-loans">
            <Link to="/page/loans">LOANS</Link>
          </div>
          <div className="wa" id="wa-pms">
            <Link to="/page/pms">
              <span>PORTFOLIO</span>
              <span>MANAGEMENT</span>
              <span>SERVICES</span>
            </Link>
          </div>
          <div className="wa" id="wa-fp">
            <Link to="/advisors">
              <span>FINANCIAL</span>
              <span>PLANNING</span>
            </Link>
          </div>
          <div className="wa" id="wa-ep">
            <Link to="/advisors">
              <span>ESTATE</span>
              <span>PLANNING</span>
            </Link>
          </div>
          <div className="wa" id="wa-esm">
            <Link to="/advisors">
              <span>EQUITY/STOCK</span>
              <span>MARKET</span>
            </Link>
          </div>
          <Image
            src={process.env.PUBLIC_URL + "assets/img/wantadvisor.png"}
            fluid
          />
        </div>
      </Container>

      <div className="container mt-4 get-in-call">
        <Link to="/login">
          I’m a little confused and would like go on a call{" "}
        </Link>
      </div>
    </section>
  );
}

export function EndToEnd({ homePageData }) {
  return (
    <section
      id="end-to-end-solutions"
      className="container mb-5 pt-0 text-black"
    >
      <h1 className="mt-5">
        END TO END SOLUTIONS
        <hr className="m-0" />
      </h1>
      <div className="row justify-content-lg-between">
        <div className="ete-sol-text ml-0 col-12 col-lg-6 p-2 mt-4 pt-lg-4">
          <p style={{ fontFamily: "Roboto, sans-serif" }}>
            {parse(homePageData.endtoend ? homePageData.endtoend : "")}
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/end-to-end/end-to-end.png"
            }
            alt="End To End"
          />
        </div>
      </div>
    </section>
  );
}

export function AdvisorySolutions() {
  return (
    <section
      id="advisory-solutions"
      className="container pt-4 text-black mt-0 mb-0"
    >
      <h1 className="pt-0">
        Advisory Solutions
        <hr className="m-0" />
      </h1>
      <div className="row mt-0 justify-content-between">
        <div className="row col-12 col-lg-5 order-2 order-lg-1">
          <div className="col-12 col-lg-12 mt-0">
            <h4 className="mt-5 pt-2 mb-0 queryForm-title font-weight-bolder">
              CAN'T FIND WHAT YOU LOOKING FOR?
            </h4>
            <p className="mb-4 pb-4 mt-0 queryForm-subtitle">
              POST YOUR QUERY HERE
            </p>
            <form className="postQuery" action="/" method="POST">
              <input type="hidden" name="post_your_query" value="your_query" />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="phone"
                placeholder="Phone No."
              />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="query"
                placeholder="Your Query"
              />

              <div className="form-inline flex">
                <input
                  type="radio"
                  name="timing"
                  id="morning"
                  value="morning"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="morning"
                  className="form-control m-2 timing-label"
                >
                  Morning
                </label>
                <input
                  type="radio"
                  name="timing"
                  id="afternoon"
                  value="afternoon"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="afternoon"
                  className="form-control m-2 timing-label"
                >
                  Afternoon
                </label>
                <input
                  type="radio"
                  name="timing"
                  id="night"
                  value="night"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="night"
                  className="form-control m-2 timing-label"
                >
                  Night
                </label>
              </div>
              <div className="text-center mb-4 prefer-call-div">
                what time would your prefer the call?
              </div>
              <button
                className="btn btn-block btn-success"
                type="submit"
                name="submit"
                id="querySubmit"
              >
                POST
              </button>
            </form>
          </div>
        </div>
        <div className="row alternateButtons col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=mutual-fund"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-1">Mutual Funds</div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link to="/page/pms" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-3">
                PORTFOLIO
                <br />
                MANAGEMENT
                <br />
                SERVICES(PMS)
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link
              to="/page/insurance"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-1">INSURANCE</div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link to="/page/aif" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-3">
                ALTERNATIVE
                <br />
                INVESTMENT
                <br />
                FUNDS (AIF)
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link to="/page/loans" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-1">LOANS</div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link to="/" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-2">
                INESTMENT IN <br />
                START UPS &amp; SME
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link to="/" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-2">
                FINANCIAL
                <br />
                PLANNING
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <Link
              to="/page/real-estate"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-2">
                ESTATE
                <br />
                PLANNING
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Figures() {
  return (
    <section id="figures" className="text-white p-4 mt-5 font-weight-bolder">
      <div className="container px-5">
        <div className="row justify-content-lg-between">
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="25000" className="figure-amt-inner">
                0
              </span>
              +
            </h1>
            <div className="figure-text">
              <p>financially literate</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="100" className="figure-amt-inner">
                0
              </span>
              +
            </h1>
            <div className="figure-text">
              <p>Sessions</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="50" className="figure-amt-inner">
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
  );
}
