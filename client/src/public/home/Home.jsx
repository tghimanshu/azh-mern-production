import { Fragment } from "react";
import HeroSection from "./hero-section";
import WhyAZH from "./whyazh";
import { HowItWorks, WantAnAdvisor } from "./how_it_works";
import Initiative from "./Initiatives";
import Figures from "./figures";
import EndToEnd from "./end-to-end";
import Newsletter from "./newsletter";
function Home(props) {
  return (
    <Fragment>
      <HeroSection {...props} />
      <WhyAZH />
      <HowItWorks />
      <WantAnAdvisor />
      <Initiative />
      <Figures />
      <EndToEnd />
      <Newsletter />
    </Fragment>
  );
}

export default Home;
