import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import LoadingScreen from "utils/loadingScreen";
import SectionTitle from "advisor/sectionTitle";
import { getSinglePageAction } from "redux/actions/actions";

function Page({ match }) {
  const dispatch = useDispatch();

  const pageData = useSelector((state) => state.page);
  const { loading, page, error } = pageData;

  useEffect(() => {
    dispatch(getSinglePageAction(match.params.slug));
  }, [dispatch, match.params.slug]);

  return (
    <Fragment>
      {loading && <LoadingScreen />}
      {error && <p>{error}</p>}
      {page && (
        <Fragment>
          <SectionTitle
            title={page.name}
            breadcrumbs={[
              { link: "/", name: "Home" },
              { link: "/" + page.slug, name: page.name, active: true },
            ]}
          />
          <div className="container mt-2">{parse(String(page.content))}</div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Page;
