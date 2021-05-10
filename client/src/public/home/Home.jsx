import { Fragment } from "react";
// import http from "../../utils/http";
// import LoadingScreen from "../../utils/loadingScreen";

import {
  HeroSection,
  WhoAreWe,
  News,
  Blogs,
  Events,
  Figures,
  Brands,
} from "./HomePage";

function Home(props) {
  // const [homePageData, setHomePageData] = useState(null);
  // const [loadingScreen, setLoadingScreen] = useState(true);

  // useEffect(() => {
  //   const getHomePage = async () => {
  //     const { data } = await http.get("/admin/hpdata");
  //     setHomePageData(data);
  //     setLoadingScreen(false);
  //   };
  //   getHomePage();
  // }, []);
  return (
    <Fragment>
      {/* {loadingScreen && <LoadingScreen />} */}
      <HeroSection {...props} />
      <WhoAreWe />
      <News />
      <Blogs />
      <Events />
      <Figures />
      <Brands />
      {/* {homePageData && <WhyAZH homePageData={homePageData} />} */}
      {/* {homePageData && <HowItWorks homePageData={homePageData} />} */}
      {/* <WantAnAdvisor /> */}
      {/* <Initiative /> */}
      {/* <Figures /> */}
      {/* {homePageData && <EndToEnd homePageData={homePageData} />} */}
      {/* <Newsletter /> */}
    </Fragment>
  );
}

export default Home;
