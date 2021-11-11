import React, { Fragment, useEffect } from "react";
// import http from "utils/http";

import {
  HeroSection,
  WhoAreWe,
  News,
  HPElearning,
  Blogs,
  Events,
  Figures,
  Brands,
} from "./HomePage";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 100,
    });
  }, []);
  function reloadAnimation() {
    const [head] = document.getElementsByTagName("head");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = process.env.PUBLIC_URL + "assets/js/main.js";
    const script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.src = process.env.PUBLIC_URL + "assets/js/main2.js";
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = process.env.PUBLIC_URL + "assets/js/typewriter.js";
    head.appendChild(script);
    head.appendChild(script3);
    head.appendChild(script2);
  }
  useEffect(() => {
    reloadAnimation();
  });

  return (
    <Fragment>
      <HeroSection />
      <WhoAreWe />
      {/* <HPElearning /> */}
      <News />
      <Blogs />
      <Events />
      <Figures />
      <Brands />
    </Fragment>
  );
}

export default Home;
