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
               <div className="logo-wrapper">Interconnected Collective</div>
               <ul>
                  <li className="menu-item">Games</li>
                  <li className="menu-item">InCo</li>
                  <li className="menu-item">About Us</li>
                  <li className="menu-item">Get Involved</li>
               </ul>
            </div>
         </div>
      </>
   );
};
export default MobileNav;
