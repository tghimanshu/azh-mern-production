import React from "react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import drawingIcon from "@iconify/icons-mdi/drawing";
import drawIcon from "@iconify/icons-mdi/draw";
import brushIcon from "@iconify/icons-mdi/brush";
import Plyr from "plyr-react";
import Carousel from "react-multi-carousel";
import Footer from "public/Footer";

import HeroGif from "./financial-literacy.gif";
import HeroImage from "./financial-literacy.png";

export function FinancialLiteracy() {
  return (
    <Fragment>
      <section id="fl-main" className="m-0 p-0">
        <img
          src={HeroGif}
          alt="Hero Img"
          style={{ width: "100vw", height: "auto" }}
          className="fl-hero-gif"
        />
        <img src={HeroImage} alt="Hero Img" className="fl-hero-image" />
      </section>
      <section id="fl-info" className="my-5 py-5">
        <div className="container">
          <h3 className="baloo-48-400 text-center">
            What makes our Sessions
            <br />
            so Interesting?
          </h3>
          <h5 className="baloo-28-400 text-center">
            Well, We have a special ingredient that we make sure to
            <br />
            add in each of our sessions
          </h5>
          <div className="row d-flex justify-content-around mt-5">
            <div className="col-12 col-md-4 px-5 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={drawingIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Asking Questions
                </h5>
                <p className="poppins-18-500 text-justify">
                  Very first thing that we start our session with is asking
                  questions that helps us understanding people sitting in the
                  session
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={drawIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Clearing Basics
                </h5>
                <p className="poppins-18-500 text-justify">
                  Then Start With basics, Explaining how Mutual funds works,
                  Insurance works, How Market operates so that they can be more
                  aware going ahead if they aren’t already.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5 mb-3">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={brushIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Sharing Strategies
                </h5>
                <p className="poppins-18-500 text-justify">
                  Tips to manage money in a structured way. Introducing various
                  ways &amp; rules that can not only help them reduicing
                  expenses but also manage money effectively
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={drawingIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Bursting Myths
                </h5>
                <p className="poppins-18-500 text-justify">
                  One of the most common things that we have found by doing
                  research and conducting hundreds of sessions is; There’s a lot
                  of misconception which sometimes prevents individual from
                  growing their wealth. We try to shoot those myths with our
                  Literacy gun.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={drawIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Facts train
                </h5>
                <p className="poppins-18-500 text-justify">
                  Sharing facts helps an indivdual understand the things better
                  rather than being in an illusion. While Past numbers doesn’t
                  gurantee future growth but it does significantly helps in
                  making wise decisions.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Icon
                  icon={brushIcon}
                  style={{ width: "61px", height: "61px", color: "#2091F9" }}
                />
                <h5 className="monsterrat-24-500 font-weight-bold py-2 mb-0">
                  Addressing Questions
                </h5>
                <p className="poppins-18-500 text-justify">
                  Clearing Questions, Solving Doubts is how the sessions flow
                  proceed as it reach near the end. Majority of people at this
                  stage are filled with so many doubts that QnA becomes a Value
                  Bomb in itself
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="fl-video"
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container px-5">
          <Plyr
            id="wvrvideo"
            source={{
              type: "video",
              sources: [
                {
                  src: "https://advisorzaroorihai.com/assets/img/azh-event-highlight.mp4",
                  type: "video/mp4",
                },
              ],
            }}
          />
        </div>
      </section>
      <section
        id="fl-sign-up"
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5 mb-5 mb-md-0">
              <h1 className="poppins-36-600">Advance Dashboard</h1>
              <h5 className="poppins-18-500 mb-3 text-justify">
                Sign up and get access to features like
                <br />
                Budgeting and profiling dashboard,
                <br />
                Browse SEBI Registered Advisors and
                <br />
                much more......
              </h5>
              <button className="btn btn-light-blue">Try Today</button>
            </div>
            <div className="col-12 col-md-7">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/whyazh/macbook-dashboard.svg"
                }
                alt="dashbaord page"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      <div style={{ minHeight: "100vh" }}>
        <section id="fl-events">
          <div className="container">
            <h3 className="baloo-48-400 text-center">Events</h3>
            <h5 className="baloo-28-400 text-center">
              A glimpse of places where we our humble attempt to lietrate
              financially
              <br />
              has already took place.
            </h5>
            <div className="d-flex justify-content-center mt-5">
              <button className="btn btn-light-blue">Host a workshop</button>
            </div>
          </div>
        </section>
        <section id="fl-brands">
          <div className="container">
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
              {[...Array(16)].map((_, i) => (
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/img/brands/${i + 1}.svg`
                  }
                  alt={"brand " + (i + 1)}
                  key={i}
                />
              ))}
            </Carousel>
          </div>
        </section>
      </div>
      <section id="fl-testinomials">
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <h3 className="baloo-48-400 text-center mb-5">Testinomials</h3>
          <div className="testinomial d-flex flex-column align-items-center">
            <div className="testinomial-logo mb-5">
              <img
                src="https://crushlogo.com/files/preview/1280x960/11610891711it91uzb4hu7uyfb42irwdt5uec4c9wvuxmup7lix2nart6dugdygzvdbzbkp1jfzdwlpwldttkbjzevyeb9f5bs7ne4qa0ptjefn.png"
                alt=""
                style={{ width: "82px", height: "auto" }}
              />
            </div>
            <h5 className="baloo-28-400 text-center mb-5">
              Thanks Alot, Session was super inforamtive and I look Forwarded to
              <br />
              future ones
            </h5>
            <div className="testinomial-user d-flex align-items-end justify-content-end">
              <img
                src="https://blush.design/api/download?shareUri=si6CzgOaayX90wUD&c=Skin_0%7Eb3b2e6&w=800&h=800&fm=png"
                alt=""
                style={{ width: "60px", height: "auto" }}
                className="mr-3"
              />
              <div className="details d-flex flex-column justify-content-around">
                <h6>Ankita K.</h6>
                <h6>Works at Jio</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="fl-contact"
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-7">
              <div className="card">
                <div className="card-body">
                  <h3 className="baloo-40-400 text-center mt-2">Contact Us</h3>
                  <h5 className="baloo-20-400 text-center mb-5">
                    Interested to know more or Host a workshop perhaps?
                    <br />
                    Get in touch!
                  </h5>
                  <form className="fl-contact-form">
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Your Email"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="form-control mb-4"
                      rows="5"
                    ></textarea>
                    <div className="d-flex justify-content-center mb-3">
                      <button
                        type="submit"
                        className="btn btn-light-blue btn-submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
