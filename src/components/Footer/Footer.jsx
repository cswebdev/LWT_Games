import React from "react";
import "./Footer.css";
import imageAssets from "../../utils/Utils";

const Footer = () => {
   return (
      <>
      <div className="Footer">
         <div className="row footer-row">
            <div className="logo-frame">
               <img src={imageAssets.logo} alt="" className="footer-logo" />
            </div>
            <div className="col-newsletter">
               <h3>Join our newsletter!</h3>
               <p>
                  Stay up to date with all things InCo!
               </p>
               <input placeholder="Enter Email Address"></input>
               <button type="button" className="btn btn-info subscribe">
                  SUBSCRIBE
               </button>
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-menu">
               <h3 className="footer-title">Explore</h3>
               <ul className="footer-items">
                  <li className="footer-item"><a href="/about">About Us</a></li>
                  <li className="footer-item"><a href="/faq">FAQ</a></li>
                  <li className="footer-item"> <a href="/get-involved">Join Us</a></li>
                  <li className="footer-item"><a href="/bingo-link">Play Bingo</a></li>
               </ul>
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-follow">
               <h3 className="footer-title">Follow</h3>
               <div className="share-logos">
                  <a href="https://www.instagram.com/interconnectedco/"><img className="share-logo" src={imageAssets.instagram} alt="instagram logo" /></a>
                  <a href="https://www.linkedin.com/company/interconnected-collective/"><img className="share-logo" src={imageAssets.linkedin} alt="linkedin logo" /></a>
                  <a href="https://www.facebook.com/profile.php?id=61558814939983"><img className="share-logo" src={imageAssets.facebook} alt="facebook logo" /></a>
               </div>
            </div>
         </div>
      </div>
      <div className="Footer-mobile">
         <div className="row footer-row">
            <div className="logo-frame">
               <img src={imageAssets.logo} alt="" className="footer-logo" />
            </div>
            <div className="col-newsletter">
               <h3>Join our newsletter!</h3>
               <p>
                  Stay up to date with all things InCo!
               </p>
               <input placeholder="Enter Email Address"></input>
               <button type="button" className="btn btn-info subscribe">
                  SUBSCRIBE
               </button>
            </div>
            <div className="col Loading-left">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-menu">
               <h3 className="footer-title">Explore</h3>
               <ul className="footer-items">
                  <li className="footer-item"><a href="/about">About Us</a></li>
                  <li className="footer-item"><a href="/faq">FAQ</a></li>
                  <li className="footer-item"> <a href="/get-involved">Join Us</a></li>
                  <li className="footer-item"><a href="/bingo-link">Play Bingo</a></li>
               </ul>
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-follow">
               <h3 className="footer-title">Follow</h3>
               <div className="share-logos">
                  <a href="https://www.instagram.com/interconnectedco/"><img className="share-logo" src={imageAssets.instagram} alt="instagram logo" /></a>
                  <a href="https://www.linkedin.com/company/interconnected-collective/"><img className="share-logo" src={imageAssets.linkedin} alt="linkedin logo" /></a>
                  <a href="https://www.facebook.com/profile.php?id=61558814939983"><img className="share-logo" src={imageAssets.facebook} alt="facebook logo" /></a>
               </div>
            </div>
         </div>
      </div>
      </>
   );
};

export default Footer;
