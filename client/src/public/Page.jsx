import { Fragment, useEffect, useState } from "react";
import http from "../utils/http";
import parse from "html-react-parser";
import LoadingScreen from "../utils/loadingScreen";

function Page({ match }) {
  const [page, setPage] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    console.log("started req");
    const getData = async () => {
      console.log("getting data");
      const { data } = await http.get("/page/" + match.params.slug);
      console.log("recieved data");
      setPage(data);
      console.log("set data");
      setLoadingScreen(false);
      console.log("showed data");
    };
    getData();
  }, [match.params.slug]);
  console.log(process.env);
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
      <div className="container">{parse(String(page.content))}</div>
    </Fragment>
  );
}

export default Page;
