import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-96 rounded-lg"
      style={{
        backgroundImage: `url("https://www.leaseplan.com/-/media/leaseplan-digital/ch/images/business/slb/leaseplan_sales_leaseback_h2.jpg?rev=e600db6681044deb83fbc0f4e2360fa7")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-white">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-secondary">
            THE EASIEST WAY TO BUY YOUR NEXT CAR
          </h1>
          <p className="mb-5">We help you get a great deal on a Car !</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
