import { Fragment } from "react";
import HeroSection from "./hero-section";
import WhyAZH from "./whyazh";
import HowItWorks from "./how_it_works";
import Initiative from "./Initiatives";
import Figures from "./figures";
import EndToEnd from "./end-to-end";
import Newsletter from "./newsletter";
function Home() {
  return (
    <Fragment>
      <HeroSection />
      <WhyAZH />
      <HowItWorks />
      <Initiative />
      <Figures />
      <EndToEnd />
      <Newsletter />
    </Fragment>
  );
}

export default Home;
