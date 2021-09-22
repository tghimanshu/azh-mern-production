import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Plyr from "plyr-react";
import { useDispatch, useSelector } from "react-redux";
import { listELearningAction } from "redux/actions/actions";
import Carousel from "react-multi-carousel";
import "plyr-react/dist/plyr.css";
import "react-multi-carousel/lib/styles.css";
import http from "utils/http";
// import "aos/dist/aos.css";

export function HeroSection() {
  return (
    <section
      // data-aos="fade"
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
    <section
      id="whoWeAre"
      className="bg-fa"
      // data-aos="fade-down"
    >
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

export function HPElearning() {
  const dispatch = useDispatch();

  const eLearningList = useSelector((state) => state.elearning);
  const { elearnings } = eLearningList;

  useEffect(() => {
    dispatch(listELearningAction());
  }, [dispatch]);
  return (
    <Container className="pf_playlist">
      {/* <Container className="py-100"> */}
      <Row>
        <Col lg={6} className="pf_content" data-aos="fade-right">
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
            {elearnings &&
              elearnings.map(
                (elearning, i) =>
                  i < 12 && (
                    <Col
                      key={elearning._id}
                      xs={12}
                      lg={6}
                      className="position-relative mb-3"
                    >
                      <div className="position-relative news-container">
                        <img
                          // src={process.env.PUBLIC_URL + "/assets/img/news/news1.png"}
                          src={`${process.env.PUBLIC_URL}/assets/img/news/news${
                            (i + 1) % 6 === 0 ? "6" : (i + 1) % 6
                          }.svg`}
                          alt=""
                        />
                        <div className="newsDiv">
                          <a href={elearning.link}>
                            <h3 className="text-white">{elearning.title}</h3>
                          </a>
                        </div>
                      </div>
                    </Col>
                  )
              )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export function News() {
  const [xml, setXml] = useState([]);
  useEffect(() => {
    const getNewsXML = async () => {
      try {
        const data = await http.get("/news");
        console.log(data);
        setXml(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewsXML();
  }, []);
  if (xml.length !== 0) {
    return (
      <div className="py-2 bg-fa">
        <Container className="mt-5" data-aos="zoom">
          <div>
            <h2 className="d-block monsterrat-40-700 text-center mb-5">News</h2>
          </div>
          <div className="news-carousel">
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: { max: 13000, min: 1024 },
                  items: 4,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
              pauseOnHover={true}
              infinite={true}
              arrows={true}
              swipeable={true}
              autoPlay={true}
              draggable={true}
            >
              {xml.length !== 0 &&
                xml.map((item, i) => {
                  return (
                    <Card
                      className="mx-2"
                      key={i}
                      style={{ height: "340px", cursor: "pointer" }}
                      onClick={() => (window.location = item.link)}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          background: `url('${item.image}') no-repeat top center/cover`,
                          position: "relative",
                        }}
                      >
                        <div
                          className="px-3 py-1 bg-light"
                          style={{
                            position: "absolute",
                            right: "15px",
                            bottom: "15px",
                            background: "linear-gradient(#fff, #CFEFE4)",
                            border: "2px solid #CFEFE4",
                          }}
                        >
                          {item.categories[0]}
                        </div>
                      </div>
                      <Card.Body className="d-flex align-items-center">
                        <Card.Text className="monsterrat-20 text-center">
                          {/* <a
                            class="a-unstyled"
                            href={"" + item.link}
                            ref="noreferrer"
                          > */}
                          {item.title}
                          {/* </a> */}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
            </Carousel>
            <div className="text-right">
              Powered by -{" "}
              <a
                className="text-danger"
                href="https://www.freepressjournal.in/"
              >
                Free Press
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export function Blogs() {
  return (
    <div className="py-2 bg-fa">
      <Container className="mt-5" data-aos="zoom-in-up">
        <div>
          <h2 className="d-block monsterrat-40-700 text-center mb-4">Blogs</h2>
        </div>
        {/* <h3 className="text-white d-inline-block blue-section-title">BLOGS</h3> */}
        <div className="blogs-grid-mobile">
          <div className="data1">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/2021-Money-Best-Robo-Advisors-1.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/sebi-guidance-makes-robo-advisors-jump-through-an-additional-loop/"
              className="blog-content"
            >
              <h3>
                SEBI Guidance makes Robo-Advisors jump through an additional
                loop.
              </h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data2">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/EggsOneBasket_Header.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/covid-19-calls-for-more-diversification-not-less/"
              className="blog-content"
            >
              <h3>Covid-19 Calls for more diversification, not less.</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data3">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/08/6aug.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/is-this-the-time-to-buy-or-sell/"
              className="blog-content"
            >
              <h3>Is this the time to Buy or Sell?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data4">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2020/06/24621.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/covid-19-a-real-life-stress-test-for-your-business/"
              className="blog-content"
            >
              <h3>Covid-19: A real-life stress test for your business</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data5">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/dogecoin-litecoin-etheteum-and-bitcoin-PS98VLU-scaled.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/crypto-exchanges-prefer-sebi-or-a-new-entity-as-regulator-not-rbi/"
              className="blog-content"
            >
              <h3>
                Crypto Exchanges prefer SEBI or a New Entity as Regulator, Not
                RBI.
              </h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data6">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/07/8july.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/why-the-stock-market-gave-a-thumbs-down-to-budget/"
              className="blog-content"
            >
              <h3>Why the stock market gave a ‘Thumbs down’ to Budget?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data7">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/02/Blog_15th.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/the-best-time-to-exit-from-a-stock/"
              className="blog-content"
            >
              <h3>The Best time to exit from a stock?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
        </div>

        <div className="blogs-grid">
          <div className="data1">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/first.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/2021-Money-Best-Robo-Advisors-1.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/sebi-guidance-makes-robo-advisors-jump-through-an-additional-loop/"
              className="blog-content"
            >
              <h3>
                SEBI Guidance makes Robo-Advisors jump through an additional
                loop.
              </h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data2">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/second.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/EggsOneBasket_Header.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/covid-19-calls-for-more-diversification-not-less/"
              className="blog-content"
            >
              <h3>Covid-19 Calls for more diversification, not less.</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data3">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/third.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/08/6aug.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/is-this-the-time-to-buy-or-sell/"
              className="blog-content"
            >
              <h3>Is this the time to Buy or Sell?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data4">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fourth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2020/06/24621.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/covid-19-a-real-life-stress-test-for-your-business/"
              className="blog-content"
            >
              <h3>Covid-19: A real-life stress test for your business</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data5">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/fifth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2021/05/dogecoin-litecoin-etheteum-and-bitcoin-PS98VLU-scaled.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/crypto-exchanges-prefer-sebi-or-a-new-entity-as-regulator-not-rbi/"
              className="blog-content"
            >
              <h3>
                Crypto Exchanges prefer SEBI or a New Entity as Regulator, Not
                RBI.
              </h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data6">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/sixth.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/07/8july.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/why-the-stock-market-gave-a-thumbs-down-to-budget/"
              className="blog-content"
            >
              <h3>Why the stock market gave a ‘Thumbs down’ to Budget?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
          </div>
          <div className="data7">
            <img
              width="100%"
              height="100%"
              src={process.env.PUBLIC_URL + "/assets/img/seventhk.svg"}
              style={{ visibility: "hidden" }}
              alt=""
            />
            <div
              className="blogImg"
              style={{
                background:
                  "url(https://credentglobal.com/wp-content/uploads/2019/02/Blog_15th.jpg) center center/cover",
              }}
            ></div>
            <a
              href="https://credentglobal.com/the-best-time-to-exit-from-a-stock/"
              className="blog-content"
            >
              <h3>The Best time to exit from a stock?</h3>
              <div className="d-flex justify-content-between">
                <span>5 min read</span>
                <span>Credent Global</span>
              </div>
            </a>
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
    <Container className="mt-5" data-aos="zoom-right">
      <div>
        <h2 className="d-block monsterrat-40-700 text-center">Events</h2>
      </div>
      {/* <h3 className="text-white mb-4 d-inline-block blue-section-title">
        EVENTS
      </h3> */}
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
      <section
        id="figures"
        className="p-4 font-weight-bolder"
        data-aos="fade-down"
      >
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
    <Container className="mt-5" data-aos="zoom">
      <hr className="brands-hr" />
      <p className="brands-text text-center">
        A glimpse of places where our humble attempt to spread financial
        literacy has taken place.
        {/* Brands that have taken the steps towards Financial swatantrata with us */}
      </p>
      {/* <div className="allBrands mt-4">
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
      </div> */}
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 13000, min: 1024 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 1024, min: 900 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 1,
          },
        }}
        pauseOnHover={true}
        infinite={true}
        arrows={true}
        swipeable={true}
        autoPlay={true}
        draggable={true}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="d-flex jusify-content-center align-items-center px-2"
            style={{ height: "100%" }}
          >
            <img
              src={process.env.PUBLIC_URL + `/assets/img/brands/${i + 1}.svg`}
              alt={"brand " + (i + 1)}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </Carousel>
      <hr style={{ marginTop: "60px", marginBottom: "80px" }} />
    </Container>
  );
}
