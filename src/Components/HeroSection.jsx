import React from "react";
import "../Styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>FoodiesDev</h1>
        <p>
          FoodiesDev is a place wher you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutly
          free.
        </p>
        <a href="/recipe" className="btn-dark">
          Read Recipes
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
