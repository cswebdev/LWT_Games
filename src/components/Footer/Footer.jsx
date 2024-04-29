import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="Footer">
         <div className="row footer-row">
            <div className="col-3 col-logo">
               <div className="logo-placeholder"></div>
               <p>
                  Tegan's House 39 LWT Games <br /> Drive Portland, Oregon, USA,
                  ZIP
               </p>
            </div>
            <div className="col-1">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col-2 col-about">
               <h2>Explore</h2>
               <ul>
                  <li className="footer-item">Home</li>
                  <li className="footer-item">About Us</li>
                  <li className="footer-item">Contact US</li>
               </ul>
            </div>
            <div className="col-1">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col-2 col-follow">
               <h2>Follow</h2>
               <ul>
                  <li className="footer-item">Instagram</li>
                  <li className="footer-item">Twitter</li>
                  <li className="footer-item">Linkedin</li>
               </ul>
            </div>
            <div className="col-1">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
