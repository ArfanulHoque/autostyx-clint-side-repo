import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <p className="text-4xl font-bold bg-secondary text-center m-4 p-2">
        About Us
      </p>
      <About></About>
    </div>
  );
};

export default Home;
