import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> MarketSquare </h1>
        <p> Destination for all your online shopping needs.</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
