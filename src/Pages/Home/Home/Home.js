import { useQuery } from "@tanstack/react-query";
import React from "react";
import About from "../About/About";
import Advertised from "../Advertised/Advertised";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  const { data: advertise = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("https://y-alpha-ten.vercel.app/advertise");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mx-5">
      <Banner></Banner>

      {/* category */}

      <Category></Category>

      {/* Advertised */}

      {advertise.length > 0 && <Advertised advertise={advertise}></Advertised>}

      {/* About */}
      <p className="text-4xl font-bold bg-secondary text-center m-4 p-2">
        About Us
      </p>
      <About></About>
    </div>
  );
};

export default Home;
