import React, { useEffect, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import LoadingScreen from "utils/loadingScreen";
import config from "utils/config";
import SectionTitle from "./sectionTitle";

import "./advisors.css";
import {
  listAdvisorsAction,
  listCategoriesAction,
} from "redux/actions/actions";

export const AdvisorCategories = () => {
  const dispatch = useDispatch();

  const catList = useSelector((state) => state.categories);
  const { loading, categories, error } = catList;

  useEffect(() => {
    dispatch(listCategoriesAction());
  }, [dispatch]);

  return (
    <Fragment>
      {loading && <LoadingScreen />}
      {error && console.log(error)}
      <SectionTitle
        title="DISCOVER ADVISORS"
        breadcrumbs={[
          { link: "/categories", name: "Discover Advisors", active: true },
        ]}
      />
      <Container>
        <Row>
          {categories.length === 0 && <h3>There are no Advisors</h3>}
          {categories.length !== 0 &&
            categories.map((category, i) => (
              <Col xs={12} md={6} key={i} className="mb-3">
                <Link to={"categories/" + category.slug} className="a-unstyled">
                  <Card className="adv-category">
                    <Card.Img
                      src={
                        config.apiEndPoint +
                        "/uploads/categories/" +
                        category.imageUrl
                      }
                    />
                    <Card.Body className="adv-category-details">
                      <Card.Title as="h1" className="title">
                        <div>{category.title}</div>
                        <Card.Subtitle as="small">
                          {category.shortDesc}
                        </Card.Subtitle>
                      </Card.Title>
                      <p className="description">{category.description}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export const AllAdvisors = ({ match }) => {
  const dispatch = useDispatch();
  const advList = useSelector((state) => state.advisors);
  const { loading, advisors, error } = advList;
  const allAdvisors = advisors.filter(
    (adv) =>
      adv.isApproved === true &&
      adv.categories &&
      adv.categories.includes(match.params.slug)
  );

  useEffect(() => {
    dispatch(listAdvisorsAction());
  }, [dispatch]);

  return (
    <Fragment>
      {loading && <LoadingScreen />}
      {error && console.log(error)}
      <SectionTitle
        title="DISCOVER ADVISORS"
        breadcrumbs={[
          { link: "/categories", name: "Discover Advisors", active: true },
          {
            link: "/categories",
            name: match.params.slug,
            active: true,
          },
        ]}
      />
      <Container>
        <Row className="d-none d-md-flex">
          {allAdvisors.length !== 0 &&
            allAdvisors.map((advisor, i) => (
              <Col key={i} xs={12} md={4} className="p-0 one-advisor mb-2">
                <Link to={"/advisors/" + advisor.username}>
                  <div className="position-relative mx-1">
                    <img
                      src={(config.apiEndPoint + advisor.profile_pic)
                        .split("\\")
                        .join("/")}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      onError={(e) => {
                        e.target.src =
                          process.env.PUBLIC_URL +
                          "/assets/advisors-alternative.png";
                      }}
                    />
                    <div className="advDetails">
                      <h3 className="title">{advisor.name}</h3>
                      <p className="position">{advisor.expertise}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
        <div className="d-block d-md-none">
          <Carousel infiniteLoop={true} showArrows={true} showThumbs={true}>
            {advisors.length !== 0 &&
              advisors.map((advisor, i) => (
                <div key={i} xs={12} md={4} className="one-advisor mb-2">
                  <Link to={"/advisors/" + advisor.username}>
                    <div className="position-relative mx-1">
                      <img
                        src={(config.apiEndPoint + advisor.profile_pic)
                          .split("\\")
                          .join("/")}
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        onError={(e) => {
                          e.target.src =
                            process.env.PUBLIC_URL +
                            "/assets/advisors-alternative.png";
                        }}
                      />
                      <div className="advDetails">
                        <h3 className="title">{advisor.name}</h3>
                        <p className="position">{advisor.expertise}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </Carousel>
        </div>
      </Container>
    </Fragment>
  );
};
