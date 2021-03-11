import { Fragment, useEffect, useState } from "react";
import http from "../utils/http";
import parse from "html-react-parser";
import LoadingScreen from "../utils/loadingScreen";

function Page({ match }) {
  const [page, setPage] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get("/page/" + match.params.slug);
      setPage(data);
      setLoadingScreen(false);
    };
    getData();
  }, [match.params.slug]);
  return (
    <Fragment>
      {loadingScreen && <LoadingScreen />}
      <div className="p-title">
        <section className="p-title-inner py-5">
          <div className="container d-flex justify-content-center">
            <h1>{page.name}</h1>
          </div>
        </section>
      </div>
      <div className="container mt-2">{parse(String(page.content))}</div>
    </Fragment>
  );
}

export default Page;
