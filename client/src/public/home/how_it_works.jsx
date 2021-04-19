import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

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
