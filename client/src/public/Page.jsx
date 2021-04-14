import { Fragment, useEffect, useState } from "react";
import http from "../utils/http";
import parse from "html-react-parser";
import LoadingScreen from "../utils/loadingScreen";
import SectionTitle from "../advisor/sectionTitle";

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
      <SectionTitle
        title={page.name}
        breadcrumbs={[
          { link: "/", name: "Home" },
          { link: "/" + page.slug, name: page.name, active: true },
        ]}
      />
      <div className="container mt-2">{parse(String(page.content))}</div>
    </Fragment>
  );
}

export default Page;
