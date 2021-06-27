// import axios from "axios";
import { Fragment } from "react";
// import XMLParser from "react-xml-parser";
// import http from "utils/http";

import {
  HeroSection,
  WhoAreWe,
  News,
  Blogs,
  Events,
  Figures,
  Brands,
} from "./HomePage";

function Home() {
  // const loadScript = (src) => {
  //   console.log("object");
  //   var script = document.createElement("script");
  //   script.src = src;
  //   script.async = true;
  //   window.document.getElementsByTagName("body")[0].appendChild(script);
  // };
  // useEffect(() => {
  //   fetch(
  //     "https://www.freepressjournal.in/stories.rss?section-id=9759&format=jio-news",
  //     {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     }
  //   )
  //     .then((res) => res.text())
  //     .then((data) => {
  //       var xml = new XMLParser().parseFromString(data);
  //       console.log(xml);
  //     })
  //     .catch((err) => console.log("Error is ", err));
  //   axios
  //     .get(
  //       "https://www.freepressjournal.in/stories.rss?section-id=9759&format=jio-news",
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "http://localhost:3000",
  //         },
  //       }
  //     )
  //     .then((res) => res.text())
  //     .then((data) => {
  //       var xml = new XMLParser().parseFromString(data);
  //       console.log(xml);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Fragment>
      <HeroSection />
      <WhoAreWe />
      <News />
      <Blogs />
      <Events />
      <Figures />
      <Brands />
    </Fragment>
  );
}

export default Home;
