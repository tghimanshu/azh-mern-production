function Newsletter() {
  return (
    <div
      id="newsletter"
      className="container text-white pb-5 pb-lg-0 mb-lg-5"
      style={{ marginTop: "40px" }}
    >
      <div className="newsletter-form-border d-lg-block d-none"></div>
      <div className="row ml-3">
        <div className="col-12 col-lg-6">
          <h3 className="font-weight-bolder mt-4">
            READY TO GET STARTED?
            <hr
              className="m-0 mb-1"
              style={{ width: "60%", height: "4px", background: "orange" }}
            />
          </h3>
          <p className="text-bolder">
            Sign up for weekly Blogs of market analysis , emerging companies and
            much more right at your inbox.
          </p>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <form className="newsletter-form">
            <img src="assets/img/newsletter-form-overlay.png" alt="" />
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="xyz@gmail.com"
              />
              <button type="submit" className="btn btn-success input-group-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
