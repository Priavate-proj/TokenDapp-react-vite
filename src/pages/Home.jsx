import { useState } from "react";
import Hero from "../component/Home/Hero";
import Service from "../component/Home/service";
import Cta from "../component/Home/CTA";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Service />

      <Cta />
    </div>
  );
};

export default Home;
