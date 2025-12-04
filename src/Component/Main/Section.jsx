import React from "react";
import Fresher from "../Images/fresher_party.png";
import AboutUs from "./AboutUs";
const Section = () => {
  return (
    <div>
      <div>
        <img className="" src={Fresher} alt="" />
      </div>

      <div className="text-center mt-10 mx-20 space-y-2 mb-10">
        <h1 className=" text-2xl font-bold ">Welcome to College of Engineering & Rural Technology (CERT)</h1>
        <p className="mx-[20%] text-lg">Established in 1999, CERT College is a leading institution dedicated to quality education in B.Tech, MBA, and Polytechnic programmes. Under the Chitragupt Social Welfare & Educational Society, we strive to develop skilled professionals ready to excel in today’s dynamic industry.</p>
      </div>
      <AboutUs/>
    </div>
  );
};

export default Section;
