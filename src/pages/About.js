import React from "react";
import foraboutus from "../assets/for about us.jfif";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${foraboutus})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Customer satisfaction is our top priority. We are committed to providing you with excellent customer service, 
        prompt assistance, and a secure shopping environment. 
        Our checkout process is seamless, and we offer multiple payment options for your convenience.
         We also provide fast and reliable shipping, ensuring that your orders arrive at your doorstep in a timely manner.
        </p>
      </div>
    </div>
  );
}

export default About;
