function Initiative() {
  return (
    <section
      id="initiatives"
      className="container mb-0 mt-0 pt-0 pb-0 text-black"
    >
      <h1 className="">
        INITIATIVES
        <hr className="m-0" />
      </h1>
      <p className="mt-0 mb-5 text-bold">
        A Quick Glimpse of what we have done.
      </p>
      <div className="row container mb-5 initiatives">
        <div className="col-12 pl-0 pr-3 col-lg-6 mb-4 mb-lg-0">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/img/initiatives/swatantra-final.png"
            }
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-12 pl-3 pr-0 col-lg-6">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/img/initiatives/master_blaster.png"
            }
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="seperator d-none d-lg-block"></div>
      </div>
    </section>
  );
}

export default Initiative;
