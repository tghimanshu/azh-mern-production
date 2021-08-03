/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import bxsHomeHeart from "@iconify-icons/bx/bxs-home-heart";
import bxsCar from "@iconify-icons/bx/bxs-car";
import fileIcon from "@iconify-icons/akar-icons/file";
import personIcon from "@iconify-icons/akar-icons/person";
import transferIcon from "@iconify-icons/cil/transfer";
import googleBusinessIcon from "@iconify-icons/simple-icons/googlemybusiness";
import cashIcon from "@iconify-icons/bi/cash";
import creditCardFill from "@iconify-icons/bi/credit-card-fill";
import checkmarkFilledError from "@iconify-icons/carbon/checkmark-filled-error";
import ionBusiness from "@iconify-icons/ion/business";

export function RupeeBoss() {
  const handleClick = (data) => {
    Swal.fire({
      title: "Coming Soon",
      confirmButtonText: "Ok",
    });
  };
  return (
    <Fragment>
      <section
        id="azhHeroRupeeBoss"
        className="m-0 mt-5 d-flex justify-content-center align-items-center"
      >
        <div className="text-center">
          <h1 className="monsterrat-48-700 hero-title-blue">
            70+ banks &amp; NBFC's
          </h1>
          <br />
          <h1 className="monsterrat-48-700">under one platform</h1>
          <div className="rupeeboss-hero-grid text-left">
            <div className="mr-2 mb-2">
              <i
                className="ri-check-line mr-1"
                style={{
                  background: "green",
                  color: "white",
                  padding: "4px 5px",
                  borderRadius: "6px",
                  fontSize: "10px",
                }}
              ></i>
              Instant approval
            </div>
            <div className="mb-2">
              <i
                className="ri-check-line mr-1"
                style={{
                  background: "green",
                  color: "white",
                  padding: "4px 5px",
                  borderRadius: "6px",
                  fontSize: "10px",
                }}
              ></i>
              Best offer assured
            </div>
            <div className="mr-2">
              <i
                className="ri-check-line mr-1"
                style={{
                  background: "green",
                  color: "white",
                  padding: "4px 5px",
                  borderRadius: "6px",
                  fontSize: "10px",
                }}
              ></i>
              Industry best experienced team
            </div>
            <div>
              <i
                className="ri-check-line mr-1"
                style={{
                  background: "green",
                  color: "white",
                  padding: "4px 5px",
                  borderRadius: "6px",
                  fontSize: "10px",
                }}
              ></i>
              Online assistance
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-2 pb-1">
        <div className="container">
          <Card>
            <Card.Body>
              <div
                className="rupeeboss-details-grid"
                style={{ color: "#2B32B2" }}
              >
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={bxsHomeHeart}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Home Loan
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={transferIcon}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Balance
                    </h6>
                    <h6 className="font-weight-bold text-center mb-0">
                      transfer
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={googleBusinessIcon}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Unsecured
                    </h6>
                    <h6 className="font-weight-bold text-center mb-0">
                      Business loan
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={checkmarkFilledError}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Rectify credit
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={cashIcon}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">Cashe</h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={ionBusiness}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      SME loans
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={creditCardFill}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Credit Cards
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon icon={bxsCar} style={{ width: "40%", height: "40%" }} />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      HDFC Car
                    </h6>
                    <h6 className="font-weight-bold text-center mb-0">loan</h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={fileIcon}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Loan against
                    </h6>
                    <h6 className="font-weight-bold text-center mb-0">
                      property
                    </h6>
                  </div>
                </div>
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ color: "#2B32B2" }}
                  onClick={() => handleClick("home-loan")}
                >
                  <Icon
                    icon={personIcon}
                    style={{ width: "40%", height: "40%" }}
                  />
                  <div className="mt-2">
                    <h6 className="font-weight-bold text-center mb-0">
                      Personal Loan
                    </h6>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}
