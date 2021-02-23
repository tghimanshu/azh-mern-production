import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";

export const BookingModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Make A Booking</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 form-group">
            <h5 htmlFor="b_date">Date:</h5>
            <input
              type="date"
              id="b_date"
              className="form-control"
              value={props.appointment.b_date}
              onChange={props.handleBDate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="b_time">Time:</label>
            <input
              type="time"
              id="b_time"
              className="form-control"
              value={props.appointment.b_time}
              onChange={props.handleBTime}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="b_remarks">Remarks:</label>
            <input
              type="text"
              id="b_remarks"
              className="form-control"
              value={props.appointment.remarks}
              onChange={props.handleBRemarks}
            />
          </div>
        </div>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={props.handleBSubmit}
        >
          Book My AppointMent
        </button>
      </Modal.Body>
    </Modal>
  );
};

export const ShareModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Share With Friends &amp; Family</Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <FacebookShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-facebook">
              <i className="align-middle fab fa-facebook"></i> Facebook
            </button>
          </FacebookShareButton>

          <TwitterShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-twitter">
              <i className="align-middle fab fa-twitter"></i> Twitter
            </button>
          </TwitterShareButton>

          <MailruShareButton
            url="https://advisorzaroorihai.com"
            quote="All your Advisory needs are few clicks away!"
            hashtag="#advisorzaroorihai #advisory"
          >
            <button className="btn mb-1 btn-google">
              <i className="align-middle fab fa-google"></i> Google
            </button>
          </MailruShareButton>

          <button className="btn mb-1 btn-instagram">
            <i className="align-middle fab fa-instagram"></i> Instagram
          </button>
        </div>
        ;
      </Modal.Body>
    </Modal>
  );
};
