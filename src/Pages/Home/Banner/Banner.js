import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-96 rounded-lg"
      style={{
        backgroundImage: `url("https://www.carfareinc.com/wp-content/uploads/slide3.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-white"></div>
    </div>
  );
};

export default Banner;
