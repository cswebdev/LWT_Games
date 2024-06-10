import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import imageAssets from "../../utils/Utils";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
   return (
      <>
      <div className="Footer">
         <div className="row footer-row">
            <div className="logo-frame">
               <img src={imageAssets.logo} alt="" className="footer-logo" />
            </div>
            <div className="col-newsletter">
               <NewsletterForm />
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-menu">
               <h3 className="footer-title">Explore</h3>
               <ul className="footer-items">
                  <li className="footer-item"><Link to="/about">About Us</Link></li>
                  <li className="footer-item"><Link to="/faq">FAQ</Link></li>
                  <li className="footer-item"> <Link to="/get-involved">Join Us</Link></li>
                  <li className="footer-item"><Link to="https://bingo.incocollective.com">Play Bingo</Link></li>
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
            <div className="Footer-boring-stuff">
               <Link to="/terms-of-service">Terms of Use</Link>
               &nbsp;/&nbsp;
               &copy; 2024 Interconnected Collective
            </div>
         </div>
      </div>

      <div className="Footer-mobile">
         <div className="row footer-row">
            <div className="logo-frame">
               <img src={imageAssets.logo} alt="" className="footer-logo" />
            </div>
            <div className="col-newsletter">
               <NewsletterForm />
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
                  <li className="footer-item"><a href="https://bingo.incocollective.com">Play Bingo</a></li>
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
            <div className="Footer-boring-stuff">
               <Link to="/terms-of-service">Terms of Use</Link>
               &nbsp;/&nbsp;
               &copy; 2024 Interconnected Collective
            </div>
         </div>
      </div>
      </>
   );
};

export default Footer;
