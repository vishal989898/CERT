import React from "react";
import Cert_logo from "../Images/LOGO-2.png";

const Footer = () => {
  return (
    <div className="bg-[#114272] mt-15 rounded-t-lg">
      <div className="mt-15 flex justify-around gap-4 pt-10">
      <div className="w-[25%]  ml-7 ">
        <img src={Cert_logo} alt="" />
        <p className="text-white">
          CERT College is a leading institution dedicated to quality education
          in B.Tech, MBA, and Polytechnic programs. Under the Chitragupt Social
          Welfare & Educational Society, we strive to develop skilled
          professionals ready to excel in today’s dynamic industry
        </p>
      </div>
      <div className="text-white ">
        <h1 className="text-3xl font-bold">Explore</h1>
        <div className="flex flex-col space-y-3  mt-5">
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            About Us
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Admission
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Events
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Placement
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Academic
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Hostel
          </a>
        </div>
      </div>
      <div className="text-white ">
        <h1 className="text-3xl font-bold">Our College</h1>
        <div className="flex flex-col space-y-3  mt-5">
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            CERT College of Law
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            SRS Global School
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Shree Ram Ayurvedic Medical College
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Shree Ram College of Pharmacy
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Shree Ram Nursing College
          </a>
          <a href="">
            <ion-icon name="chevron-forward"></ion-icon>
            Shree Ram Ayurvedic Medical College & Hospital
          </a>
        </div>
      </div></div>
    </div>
  );
};

export default Footer;
