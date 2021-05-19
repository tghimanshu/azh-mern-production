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
