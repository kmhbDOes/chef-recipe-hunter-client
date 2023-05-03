import React from "react";
import ChefDetail from "../Card/ChefDetail/ChefDetail";
import Banner from "../pages/Banner/Banner";
import SectionOne from "./Extra Sections/SectionOne";
import SectionTwo from "./Extra Sections/SectionTwo";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="py-4">
        <SectionOne></SectionOne>
      </div>
      <div className="py-4">
        <ChefDetail></ChefDetail>
      </div>
      <div className="py-4">
        <SectionTwo></SectionTwo>
      </div>
    </>
  );
};

export default Home;
