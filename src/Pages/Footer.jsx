import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <p className="title">FoodiesDev.com</p>
        <p>
          FoodiesDev is a place wher you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutly
          free.
        </p>
        <p>&copy; 2023 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>foodies@dev.com</p>
        <p>021 - 7888894</p>
        <p>Jakarta Indonesia</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;
