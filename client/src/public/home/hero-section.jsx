function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 className="font-weight-bolder text-center text-lg-left hero-text">
              Your Advisor is just
              <br />
              clicks away
            </h2>
            <a
              href="advisors.php"
              className="btn btn-block btn-success mt-3"
              id="hero-get-started"
            >
              Get Started
            </a>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/img/hero-img.png" alt="img-fluid animated" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
