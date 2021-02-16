import React, { useEffect, useState } from "react";
import http from "../../utils/http";
import { getRole } from "../../utils/jwt";
import Swal from "sweetalert2";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const userJwt = getRole();
      const details = await http.get("/booking/client/" + userJwt._id);
      // console.log(details.data);
      setBookings(details.data);
    };
    getClients();
  }, []);

  // const handleSeeRecommendation = (payment) => {
  //   Swal.fire({
  //     text: payment.toString(),
  //   });
  // };

  const displayRazorPay = async (b_id) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("RazorPay failed to load.... Are you Online?");
      return;
    }

    const { data } = await http.post("/payment");

    const options = {
      key: process.env.REACT_APP_RAZORPAY_CLIENT_KEY,
      amount: data.amount,
      currency: data.currency,
      name: "Unlock your Recommendation",
      description:
        "Please Make the payment to see the Recommendation given by the Advisor",
      image: "",
      order_id: data.id,
      handler: async function (response) {
        try {
          await http.put("/booking/payment/" + b_id, { order_id: data.id });
        } catch (err) {
          // console.log(err);
        }
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      // prefill: {
      //   name: "Gaurav Kumar",
      //   email: "gaurav.kumar@example.com",
      //   contact: "9999999999",
      // },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // console.log(bookings);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Advisor Name</th>
          <th>Time</th>
          <th>Status</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((client) => {
          return (
            <tr key={client._id}>
              <td>{client.advisor_id.name}</td>
              <td>{new Date(client.booking_time).toString()}</td>
              <td className="table-action">
                {client.isApproved === "pending" && (
                  <div className="badge badge-warning">Pending</div>
                )}
                {client.isApproved === "approved" && (
                  <div className="badge badge-success">Approved</div>
                )}
                {client.isApproved === "unapproved" && (
                  <div className="badge badge-danger">Rejected</div>
                )}
              </td>
              <td>
                {client.isApproved === "unapproved" && (
                  <button className="btn btn-info" disabled>
                    Awaiting Recommendation
                  </button>
                )}
                {client.isApproved === "approved" && !client.madePayment && (
                  <button
                    className="btn btn-info"
                    // onClick={() => handleSeeRecommendation(client.madePayment)}
                    onClick={() => displayRazorPay(client._id)}
                  >
                    Make Payment
                  </button>
                )}
                {client.isApproved === "approved" && client.madePayment && (
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      Swal.fire({
                        icon: "success",
                        html: client.recommendation,
                      })
                    }
                  >
                    See Recommended
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Bookings;
