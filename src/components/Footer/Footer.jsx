import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="Footer">
         <div className="row footer-row">
            <div className="col-4 col-logo">
               <div className="logo-placeholder"></div>
               <p>Tegan's House</p>
               <p>39 LWT Games Drive</p>
               <p>Portland, Oregon, USA </p>
            </div>
            <div className="col-2">
               <h2>Explore</h2>
               <ul>
                  <li className="footer-item">Home</li>
                  <li className="footer-item">About Us</li>
                  <li className="footer-item">Contact US</li>
               </ul>
            </div>
            <div className="col-2">
               <h2>Follow</h2>
               <ul>
                  <li className="footer-item">Instagram</li>
                  <li className="footer-item">Twitter</li>
                  <li className="footer-item">Linkedin</li>
               </ul>
            </div>
            <div className="col-4">
               <button className="btn btn-primary">Play Bingo</button>
            </div>
         </div>
      </div>
   );
};

export default Footer;
