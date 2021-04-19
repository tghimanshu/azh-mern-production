import parse from "html-react-parser";

function EndToEnd({ homePageData }) {
  return (
    <section
      id="end-to-end-solutions"
      className="container mb-5 pt-0 text-black"
    >
      <h1 className="mt-5">
        END TO END SOLUTIONS
        <hr className="m-0" />
      </h1>
      <div className="row justify-content-lg-between">
        <div className="ete-sol-text ml-0 col-12 col-lg-6 p-2 mt-4 pt-lg-4">
          <p style={{ fontFamily: "Roboto, sans-serif" }}>
            {parse(homePageData.endtoend ? homePageData.endtoend : "")}
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/end-to-end/end-to-end.png"
            }
            alt="End To End"
          />
        </div>
      </div>
    </section>
  );
}

export default EndToEnd;
