function AdvisorySolutions() {
  return (
    <section
      id="advisory-solutions"
      className="container pt-4 text-black mt-0 mb-0"
    >
      <h1 className="pt-0">
        Advisory Solutions
        <hr className="m-0" />
      </h1>
      <div className="row mt-0 justify-content-between">
        <div className="row col-12 col-lg-5 order-2 order-lg-1">
          <div className="col-12 col-lg-12 mt-0">
            <h4 className="mt-5 pt-2 mb-0 queryForm-title font-weight-bolder">
              CAN'T FIND WHAT YOU LOOKING FOR?
            </h4>
            <p className="mb-4 pb-4 mt-0 queryForm-subtitle">
              POST YOUR QUERY HERE
            </p>
            <form className="postQuery" action="index.php" method="POST">
              <input type="hidden" name="post_your_query" value="your_query" />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="phone"
                placeholder="Phone No."
              />
              <input
                required
                type="text"
                className="form-control pl-3 mb-2"
                name="query"
                placeholder="Your Query"
              />

              <div className="form-inline flex">
                <input
                  type="radio"
                  name="timing"
                  id="morning"
                  value="morning"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="morning"
                  className="form-control m-2 timing-label"
                >
                  Morning
                </label>
                <input
                  type="radio"
                  name="timing"
                  id="afternoon"
                  value="afternoon"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="afternoon"
                  className="form-control m-2 timing-label"
                >
                  Afternoon
                </label>
                <input
                  type="radio"
                  name="timing"
                  id="night"
                  value="night"
                  className="timing d-none form-check-input"
                />
                <label
                  htmlFor="night"
                  className="form-control m-2 timing-label"
                >
                  Night
                </label>
              </div>
              <div className="text-center mb-4 prefer-call-div">
                what time would your prefer the call?
              </div>
              <button
                className="btn btn-block btn-success"
                type="submit"
                name="submit"
                id="querySubmit"
              >
                POST
              </button>
            </form>
          </div>
        </div>
        <div className="row alternateButtons col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=mutual-fund"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-1">Mutual Funds</div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=pms"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-3">
                PORTFOLIO
                <br />
                MANAGEMENT
                <br />
                SERVICES(PMS)
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=insurance"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-1">INSURANCE</div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=aif"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-3">
                ALTERNATIVE
                <br />
                INVESTMENT
                <br />
                FUNDS (AIF)
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=loans"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-1">LOANS</div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a href="/" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-2">
                INESTMENT IN <br />
                START UPS &amp; SME
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a href="/" className="btn btn-lg btn-primary btn-block">
              <div className="ab-fs-2">
                FINANCIAL
                <br />
                PLANNING
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 mb-4 mb-lg-0 col-lg-6">
            <a
              href="page.php?name=real-estate"
              className="btn btn-lg btn-primary btn-block"
            >
              <div className="ab-fs-2">
                ESTATE
                <br />
                PLANNING
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvisorySolutions;
