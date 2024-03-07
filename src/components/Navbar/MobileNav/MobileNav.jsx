import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
   return (
      <>
         <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
         >
            <div className="mobile-menu-container">
               <div className="logo-wrapper">LWT GAMES</div>
               <ul>
                  <li className="menu-item">Games</li>
                  <li className="menu-item">LWT</li>
                  <li className="menu-item">About Us</li>
                  <li className="menu-item">Get Involved</li>
               </ul>
            </div>
         </div>
      </>
   );
};
export default MobileNav;
