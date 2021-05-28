import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../utils/config";
import LoadingScreen from "../../utils/loadingScreen";
import SectionTitle from "../../advisor/sectionTitle";
import { listELearningAction } from "../../redux/actions/actions";

function ELearning() {
  const dispatch = useDispatch();
  const elearningList = useSelector((state) => state.elearning);
  const { loading, elearnings, error } = elearningList;

  useEffect(() => {
    dispatch(listELearningAction());
  }, [dispatch]);
  return (
    <Fragment>
      {loading && <LoadingScreen />}
      {error && console.log(error)}
      <SectionTitle
        title="E Learning"
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/elearning", name: "E-Learning", active: true },
        ]}
      />
      <div className="container mt-5">
        <div className="row">
          {elearnings.length !== 0 &&
            elearnings.map((elearning, i) => (
              <div key={i} className="col-md-4 col-xs-12 pbDiv">
                <a
                  href={elearning.link}
                  className="e-learning-a"
                  target="_blank"
                  rel="noreferrer"
                >
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
