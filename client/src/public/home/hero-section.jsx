import { useState } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";

function HeroSection({ history }) {
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

export default HeroSection;
