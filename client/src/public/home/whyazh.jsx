import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function WhyAZH({ homePageData }) {
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
export default WhyAZH;
