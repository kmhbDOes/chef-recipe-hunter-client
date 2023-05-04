import React, { useEffect, useState } from "react";
import ChefDetail from "../Card/ChefDetail/ChefDetail";
import Banner from "../pages/Banner/Banner";
import SectionOne from "./Extra Sections/SectionOne";
import SectionTwo from "./Extra Sections/SectionTwo";
import Spinner from "./Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds to simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Home;
