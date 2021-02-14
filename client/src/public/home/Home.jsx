import { Fragment } from "react";
import HeroSection from "./hero-section";
import HowItWorks from "./how_it_works";
import AdvisorySolutions from "./advisory-solution";
import Initiative from "./Initiatives";
import Figures from "./figures";
import EndToEnd from "./end-to-end";
import Newsletter from "./newsletter";
function Home() {
  return (
    <Fragment>
      <HeroSection />
      <HowItWorks />
      <AdvisorySolutions />
      <Initiative />
      <Figures />
      <EndToEnd />
      <Newsletter />
    </Fragment>
  );
}

export default Home;
