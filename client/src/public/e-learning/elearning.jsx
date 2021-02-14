import { Fragment, useEffect, useState } from "react";
import config from "../../utils/config";
import LoadingScreen from "../../utils/loadingScreen";
import http from "../../utils/http";

function ELearning() {
  const [elearnings, setElearnings] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get("/elearning");
      setElearnings(data);
      setLoadingScreen(false);
    };
    getData();
  }, []);
  return (
    <Fragment>
      {loadingScreen && <LoadingScreen />}
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>E Learning</h1>
          </div>
        </section>
      </div>
      <div className="container mt-5">
        <div className="row">
          {elearnings.map((elearning) => (
            <div className="col-md-4 col-xs-12 pbDiv">
              <a href={elearning.link} className="e-learning-a" target="_blank">
                <div className="e-learning-div">
                  <div className="row">
                    <div className="col-7">
                      <h5 className="title">{elearning.title}</h5>
                      <p className="bottom-title">by {elearning.author}</p>
                    </div>
                    <div className="col-5">
                      <img
                        className="e-learning-img img-responsive"
                        src={config.apiEndPoint + elearning.image}
                        alt=""
                      />
                      <img
                        src={
                          config.apiEndPoint +
                          "/uploads/e_learning/rsz_video-icon.png"
                        }
                        className="vid-icon"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default ELearning;
