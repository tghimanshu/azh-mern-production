function Figures() {
  return (
    <section id="figures" className="text-white p-4 mt-5 font-weight-bolder">
      <div className="container px-5">
        <div className="row justify-content-lg-between">
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="25000" className="figure-amt-inner">
                0
              </span>
              +
            </h1>
            <div className="figure-text">
              <p>financially literate</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="100" className="figure-amt-inner">
                0
              </span>
              +
            </h1>
            <div className="figure-text">
              <p>Sessions</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center">
            <h1 className="text-white figure-amt">
              <span data-counter="50" className="figure-amt-inner">
                0
              </span>
              +
            </h1>
            <div className="figure-text">
              <p>topics on various avenues covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figures;
