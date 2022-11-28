import React from "react";
import About from "../About/About";
import Advertised from "../Advertised/Advertised";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>

      {/* category */}
      <p className="text-4xl font-bold text-center mt-9">Category</p>
      <Category></Category>

      {/* Advertised */}
      <p className="text-4xl font-bold text-center mt-9">Advertised</p>
      <Advertised></Advertised>

      {/* About */}
      <p className="text-4xl font-bold bg-secondary text-center m-4 p-2">
        About Us
      </p>
      <About></About>
    </div>
  );
};

export default Home;
