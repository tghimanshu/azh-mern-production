import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function WhyAZH() {
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
              HASSLE FREE
              <br />
              REGISTRATION
            </h2>
            <p>
              Just answer few questions and get your risk profiling done in no
              minute. after that send your profile to whoever’s services you
              wish to avail{" "}
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
              SEBI REGISTERED
              <br />
              ADVISORS
            </h2>
            <p>
              All our advisors onboard are SEBI Registered and holds abundance
              of experience and wisdom. Once you send profile your
              recommendation will be ready within 48hrs.
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
              SAFE AND
              <br />
              SECURED
            </h2>
            <p>
              We have a strict policies for data privacy and even while you send
              your profile to desired advisors, your identity is kept anonymos{" "}
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
