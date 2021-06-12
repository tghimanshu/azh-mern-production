import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import config from "utils/config";
import LoadingScreen from "utils/loadingScreen";
import SectionTitle from "advisor/sectionTitle";
import parse from "html-react-parser";
import {
  listBlogAction,
  listELearningAction,
  singleBlogAction,
} from "redux/actions/actions";
import { Nav, Tab } from "react-bootstrap";

const Blogs = () => {
  const dispatch = useDispatch();
  const elearningList = useSelector((state) => state.blog);
  const { loading, blogs, error } = elearningList;

  useEffect(() => {
    dispatch(listBlogAction());
  }, [dispatch]);

  return (
    <div className="row">
      {blogs.length !== 0 &&
        blogs.map((elearning, i) => (
          <div key={i} className="col-md-4 col-xs-12 pbDiv position-relative">
            <div className="e-learning-container" style={{ height: "184px" }}>
              <img
                src={elearning.image}
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  zIndex: -2,
                }}
              />
              <Link to={`/post/${elearning.slug}`} className="e-learning-a">
                <div className="e-learning-div" style={{ height: "100%" }}>
                  <div className="row" style={{ height: "100%" }}>
                    <div
                      className="col-11 d-flex flex-column justify-content-end"
                      style={{ height: "100%" }}
                    >
                      <h5 className="title">
                        {elearning.title.length < 67
                          ? elearning.title.substring(0, 65)
                          : elearning.title.substring(0, 65) + " ..."}
                      </h5>
                      <p className="bottom-title">by Credent Global</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
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
              <div
                key={i}
                className="col-md-4 col-xs-12 pbDiv position-relative"
              >
                <div className="e-learning-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/news/news${
                      (i + 1) % 6 === 0 ? "6" : (i + 1) % 6
                    }.svg`}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      zIndex: -2,
                    }}
                  />
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
                        <div className="col-5" style={{ zIndex: -2 }}>
                          <img
                            className="e-learning-img img-responsive"
                            src={config.apiEndPoint + elearning.image}
                            alt=""
                            style={{
                              zIndex: -1,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}

const ELearningTab = () => {
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
      <div className="container">
        <Tab.Container defaultActiveKey="videos">
          <Nav
            variant="pills"
            className="justify-content-center align-items.center mb-4"
          >
            <Nav.Item>
              <Nav.Link eventKey="videos">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="blogs">Blogs</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="videos">
              <div className="row">
                {elearnings.length !== 0 &&
                  elearnings.map((elearning, i) => (
                    <div
                      key={i}
                      className="col-md-4 col-xs-12 pbDiv position-relative"
                    >
                      <div className="e-learning-container">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/img/news/news${
                            (i + 1) % 6 === 0 ? "6" : (i + 1) % 6
                          }.svg`}
                          alt=""
                          style={{
                            position: "absolute",
                            width: "100%",
                            zIndex: -2,
                          }}
                        />
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
                                <p className="bottom-title">
                                  by {elearning.author}
                                </p>
                              </div>
                              <div className="col-5" style={{ zIndex: -2 }}>
                                <img
                                  className="e-learning-img img-responsive"
                                  src={config.apiEndPoint + elearning.image}
                                  alt=""
                                  style={{
                                    zIndex: -1,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="blogs">
              <Blogs />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Fragment>
  );
};

export const SinglePost = ({ match }) => {
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.singlePost);
  const { loading, post, error } = singlePost;

  useEffect(() => {
    dispatch(singleBlogAction(match.params.slug));
  }, [dispatch, match]);

  return (
    <Fragment>
      {loading && <LoadingScreen />}
      {error && console.log(error)}
      {post && (
        <Fragment>
          {console.log(post)}
          <SectionTitle
            title="one Single Post"
            breadcrumbs={[
              { link: "/", name: "Home" },
              {
                link: `/post/${match.params.slug}`,
                name: post.title,
                active: true,
              },
            ]}
          />
          <div className="container px-md-5 mb-4">
            <img
              src={post.image}
              alt=""
              className="img-responsive img-thumbnail mb-4"
            />
            {parse(post.content)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ELearningTab;
