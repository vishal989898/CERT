import React from "react";
import cert from "../Images/about3.jpg";
import AboutUs from "./AboutUs";
import Button from "./Button";
const Section = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${cert})` }} className="bg-cover bg-center bg-no-repeat h-screen w-full">
        <div className="bg-black/60 h-screen w-full  ">
          <div>
            <h1 className="text-white text-8xl font-bold size-10rem text-center pt-5">College of Engineering & Rural Techonology</h1>
            <p className="text-center text-4xl text-white mt-4 pt-6">Best Engineering College in Meerut | Shaping Future Engineers Since 1999 | AKTU Affiliated
            </p>
          </div>
          <div className="flex justify-center gap-8 pt-10">
            <Button/>
            <Button/>
            <Button/>
          </div>
        </div>
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
