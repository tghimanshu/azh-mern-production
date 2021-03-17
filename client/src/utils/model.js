import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";
import Cropper from "react-easy-crop";

export const RequestAmtModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            <tr>
              <td>Your Charge</td>
              <td>
                <input
                  value={props.reqAmt}
                  onChange={props.setReqAmt}
                  placeholder="Your Amount"
                />
              </td>
            </tr>
            <tr>
              <td>AZH Charges</td>
              <td>
                <input value="5%" disabled />
              </td>
            </tr>
            <tr>
              <td>You Will Recieve </td>
              <td>
                <input
                  value={
                    isNaN((parseInt(props.reqAmt) * 5) / 100)
                      ? 0
                      : (parseInt(props.reqAmt) * 5) / 100
                  }
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={props.handleReqAmtSubmit}
        >
          Request
        </button>
      </Modal.Footer>
    </Modal>
  );
};

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

export const CropModel = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="exampleModalLabel"
      centered
      size="lg"
      className="cropModel"
    >
      <Modal.Header closeButton>Get Recommendation</Modal.Header>
      <Modal.Body>
        <Cropper
          image={props.imageUrl}
          crop={props.crop}
          zoom={props.zoom}
          aspect={200 / 200}
          // cropSize={{ width: 200, height: 200 }}
          onCropChange={props.setCrop}
          onCropComplete={props.onCropComplete}
          onZoomChange={props.setZoom}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg btn-info float-right clearfix"
          type="submit"
          onClick={(e) => props.handleUploadImage(e, props.ogImage)}
        >
          Save
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
