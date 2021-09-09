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
import axios from "axios";
import http from "utils/http";

export function RupeeBoss() {
  const handleClick = (pId) => {
    Swal.fire({
      title: "Login Form",
      html: `
      <label class="text-left d-block">Name</label>
      <input class="form-control mb-2" type="text" id="name" class="swal2-input" placeholder="Name" />
      <label class="text-left d-block">Email</label>
      <input class="form-control mb-2" type="email" id="email" class="swal2-input" placeholder="Email" />
      <label class="text-left d-block">Mobile</label>
      <input class="form-control mb-2" type="number" id="mobile" class="swal2-input" placeholder="Mobile" />
      <label class="d-block text-left input-label">Gender</label>
      <div class="d-flex">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="male" value="Male" />
          <label class="form-check-label">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="female" value="Female" />
          <label class="form-check-label">Female</label>
        </div>
      </div>
      <label class="text-left d-block">Date of Birth</label>
      <input class="form-control mb-2" type="date" id="dob" class="swal2-input" placeholder="Date of Birth" />
      <label class="text-left d-block">Employee Type</label>
      <input class="form-control mb-2" type="text" id="empType" class="swal2-input" placeholder="Employment Type" />
      <label class="text-left d-block">PAN Number</label>
      <input class="form-control mb-2" type="text" id="panNo" class="swal2-input" placeholder="PAN Number" />
      `,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const mobile = Swal.getPopup().querySelector("#mobile").value;
        const gender = Swal.getPopup().querySelector("#male").checked
          ? "Male"
          : Swal.getPopup().querySelector("#male").checked
          ? "Female"
          : "Male";
        const dob = Swal.getPopup().querySelector("#dob").value;
        const empType = Swal.getPopup().querySelector("#empType").value;
        const panNo = Swal.getPopup().querySelector("#panNo").value;
        if (
          !name ||
          !email ||
          !mobile ||
          !gender ||
          !dob ||
          !empType ||
          !panNo
        ) {
          Swal.showValidationMessage(`Provide All the Information`);
        }
        return {
          name,
          email,
          mobile,
          gender,
          dob,
          empType,
          panNo,
          productId: pId,
          type: "Partner",
          campaign: "advisorzaroorihai",
          client: "",
        };
      },
    }).then(async ({ value: result }) => {
      const formatDate = (today) => {
        today = new Date(today);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = `${yyyy}-${mm}-${dd}`;
        return today;
      };
      await http
        .post("/rupeeboss", {
          Name: result.name,
          Email: result.email,
          Mobile: result.mobile,
          Gender: result.gender,
          DOB: formatDate(result.dob),
          Employment_Type: result.empType,
          PAN: result.panNo,
          Product_Id: result.ProductId,
          Type: result.type,
          CampaignName: result.campaign,
          client_source: result.client,
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: "Your Response has been recorded",
          });
        });
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
          <div className="rupeeboss-hero-grid text-left mt-3">
            <div className="mr-2 mb-3">
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
            <div className="mb-3">
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
            <div className="mr-2 mb-3">
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
            <div className="mr-2 mb-3">
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
                  onClick={() => handleClick(12)}
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
                  onClick={() => handleClick(12)}
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
                  onClick={() => handleClick(13)}
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
                  onClick={() => handleClick(12)}
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
                  onClick={() => handleClick(11)}
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
                  onClick={() => handleClick(12)}
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
                  onClick={() => handleClick(10)}
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
                  onClick={() => handleClick(12)}
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
                  onClick={() => handleClick(7)}
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
                  onClick={() => handleClick(9)}
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
