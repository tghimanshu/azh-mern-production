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
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="b_remarks">
              Extra Information you want to provide to Advisors:
            </label>
            <textarea
              id="b_remarks"
              rows={5}
              className="form-control mb-2"
              value={props.appointment.remarks}
              onChange={props.handleBRemarks}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={props.handleBSubmit}
        >
          Get Recommendation
        </button>
      </Modal.Footer>
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
