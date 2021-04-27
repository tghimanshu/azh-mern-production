import { Fragment, useState, useEffect } from "react";
import HeroSection from "./hero-section";
import WhyAZH from "./whyazh";
import { HowItWorks, WantAnAdvisor } from "./how_it_works";
import Initiative from "./Initiatives";
import Figures from "./figures";
import EndToEnd from "./end-to-end";
import Newsletter from "./newsletter";
import http from "../../utils/http";
import LoadingScreen from "../../utils/loadingScreen";

function Home(props) {
  const [homePageData, setHomePageData] = useState(null);
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    const getHomePage = async () => {
      const { data } = await http.get("/admin/hpdata");
      setHomePageData(data);
      setLoadingScreen(false);
    };
    getHomePage();
  }, []);
  return (
    <Fragment>
      {loadingScreen && <LoadingScreen />}
      <HeroSection {...props} />
      {homePageData && <WhyAZH homePageData={homePageData} />}
      {homePageData && <HowItWorks homePageData={homePageData} />}
      <WantAnAdvisor />
      <Initiative />
      <Figures />
      {homePageData && <EndToEnd homePageData={homePageData} />}
      <Newsletter />
    </Fragment>
  );
}

export default Home;
