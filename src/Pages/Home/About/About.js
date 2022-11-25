import React from "react";
import img from "../../../assets/images/about-1 (1).jpg";
import img2 from "../../../assets/images/about-2.jpg";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content grid md:grid-cols-2 ">
          <img src={img} className=" rounded-lg shadow-2xl" alt="" />
          <div>
            <p className="py-6">
              Since 1984 , AutoStyx Industries Ltd., began as a family run car
              dealership with the vision of providing clean, quality used cars
              for our customers. We saw a need in the Gaston County area for an
              honest and loyal car dealer to serve those needs.
            </p>
            <h1 className="text-2xl font-bold">What Provides?</h1>
            <p>
              AutoStyx is a buy-here, pay-here used car dealership that provides
              quality used cars, SUV and vans for our customer reliable
              transportation. All of our vehicles are put through an extensive
              inspection process to ensure you, the customer, are able to
              purchase a vehicle that is reliable for you and your family. We
              look forward to serving you in the future and we hope to see you
              soon!
            </p>
          </div>
        </div>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img2} className="max-w-xl rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-3xl font-bold">
              COME BUILD YOUR CREDIT WITH AutoStyx !
            </h1>
            <p className="py-6">
              Good Credit, Bad Credit, No Credit – We finance! Our cars are hand
              selected after rigorous inspections. Car Fare offers fair prices
              and fantastic service, serving Gaston County and surrounding
              areas. We have a great selection of cars, trucks and SUVs from
              luxury to economy for you to view. Check out our inventory page or
              stop by to see us at 1320 Bessemer City Hwy. If you are looking
              for Gastonia used cars we are your best choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
