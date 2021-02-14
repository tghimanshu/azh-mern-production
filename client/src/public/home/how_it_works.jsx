function HowItWorks() {
  return (
    <section id="how-it-works" className="container text-black">
      <h1>
        How Does It Works?
        <hr className="m-0" />
      </h1>
      <p className="mt-0 mb-5 text-bold">
        6 steps and that's it.Simple, Holistic, Seamless
      </p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4 mb-lg-5">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-1.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-5">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-2.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-5">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-3.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-4.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-5.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <img
              src={
                process.env.PUBLIC_URL + "assets/img/how-it-works/step-6.png"
              }
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
