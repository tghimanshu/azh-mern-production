import { Fragment } from "react";
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
  const loadScript = (src) => {
    console.log("object");
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    window.document.getElementsByTagName("body")[0].appendChild(script);
  };
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
