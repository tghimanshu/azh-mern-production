import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import shopTwotone from "@iconify/icons-ant-design/shop-twotone";
import notebookIcon from "@iconify/icons-carbon/notebook";
import statsIcon from "@iconify-icons/bx/bx-stats";
import usersLine from "@iconify/icons-clarity/users-line";
import awardIcon from "@iconify/icons-fa-solid/award";
import bxBriefcase from "@iconify-icons/bx/bx-briefcase";

export function About() {
  return (
    <Fragment>
      <section
        id="azhHero"
        className="m-0 d-flex flex-column justify-content-center align-items-center bg-fa"
      >
        <div className="text-center">
          <h1 className="monsterrat-48-700">MORE THAN JUST A</h1>
          <br />
          <h1 className="monsterrat-48-700">PHRASE</h1>
        </div>
        <p className="text-center">
          A comprehensive platform to help you make
          <br />
          informed and timely financial decisions connect with expert
          <br /> advisors from across the country
        </p>
        <div>
          <button className="btn btn-blue mr-3">GET IN TOUCH</button>
          <button className="btn btn-outline-blue">SIGN UP</button>
        </div>
      </section>
      <section>
        <h2 className="d-block monsterrat-40-700 text-center">
          All of this but......More Effectively
        </h2>
        <p className="text-center monsterrat-400">
          A platform which brings back what Investors and advisers are missing
          and unite them in the most humanily way possible
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={bxBriefcase}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">Thorough Assessment</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={shopTwotone}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">
                    An Intricate yet simple Goal Setting
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={notebookIcon}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">
                    Personalised Suggestions
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={usersLine}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">Creation of plan</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={statsIcon}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">Seamless Execution</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body d-flex align-items-center">
                  <Icon
                    icon={awardIcon}
                    style={{ width: "80px", height: "80px", color: "#2B32B2" }}
                    className="mr-2"
                  />
                  <h4 className="font-weight-bold m-0">
                    360 degree monitering
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="investinresearch">
        <div class="container pt-5">
          <h1 class=" d-block monsterrat-40-700 font-weight-bold text-center mt-3 mb-5">
            INVEST IN RESEARCH
          </h1>
          <div class="row mb-5 steps justify-content-around">
            <div class="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
              <div class="card">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https:/www.tghimanshu.com/narnolia/assets/images/investment/screening.svg"
                    alt=""
                    class="mb-3"
                    style={{ width: "45px", height: "auto" }}
                  />
                  <h5 className="text-center">
                    360° view to monitor your finance
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
              <div class="card">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https:/www.tghimanshu.com/narnolia/assets/images/investment/recommendation.svg"
                    alt=""
                    class="mb-3"
                    style={{ width: "45px", height: "auto" }}
                  />
                  <h5 className="text-center">
                    Execution on Whatever platform one chooses
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
              <div class="card">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https:/www.tghimanshu.com/narnolia/assets/images/investment/diagnosis.svg"
                    alt=""
                    class="mb-3"
                    style={{ width: "45px", height: "auto" }}
                  />
                  <h5 className="text-center">SEBI Registered Advisors</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row portfolios pb-5">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
              <div class="card">
                <div class="card-img position-relative">
                  <img
                    src="https://www.tghimanshu.com/narnolia/assets/images/investment/portfolio_analytics.svg"
                    alt=""
                    width="100%"
                  />
                  <div class="card-img-content">
                    <h4 className="text-white font-weight-bold">
                      A one-for-all Investors Platform
                    </h4>
                  </div>
                </div>
                <div class="card-body">
                  <p class="py-4">
                    The plethora of information available can at most times be
                    confusing and over whelming.
                    <br />
                    <br /> We aim to provide a platform for individuals wanting
                    to make a smart, informed and conscious decision and connect
                    them to the expert advisors from across the country. We help
                    the customers to move towards a more risk-free
                    decision-making process by taking guidance from the experts.
                  </p>
                  <button
                    className="btn btn-success"
                    style={{
                      width: "40%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    Let’s acheive financial Freedom
                  </button>
                  <div
                    className="text-success font-weight-bold text-center mt-1"
                    style={{
                      width: "40%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    SIGN UP TODAY!
                    <br />
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card">
                <div class="card-img position-relative">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/whyazh/about-financial-swatantrata.svg"
                    }
                    alt=""
                    width="100%"
                  />
                  <div class="card-img-content font-weight-bold">
                    <h4 className="text-white">Financial Literacy</h4>
                  </div>
                </div>
                <div class="card-body">
                  <p class="py-4">
                    Financial Literacy has always been considered as one of the
                    important aspects post Covid. We cover topics such as
                    Financial Planning, Goal Planning , Risk Planning, Tax
                    Planning, Investment Planning &amp; Estate Planning with the
                    help of Gamification. Also participants will be shown the
                    Live session on How To Do Financial Goal Planning.
                    <br />
                    <br /> Making it fun, interesting and value packed at the
                    same time
                  </p>
                  <button
                    className="btn btn-success"
                    style={{
                      width: "40%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    Interesting in contributing to the cause?
                  </button>
                  <div
                    className="text-success font-weight-bold text-center mt-1"
                    style={{
                      width: "45%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    HOST A WORKSHOP TODAY! IT’S FREE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
