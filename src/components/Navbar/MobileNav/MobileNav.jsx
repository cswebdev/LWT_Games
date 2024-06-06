import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, closeMenu }) => {
   return (
      <>
         <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={closeMenu}
         >
            <div className="mobile-menu-container position-relative">
               <button className="menu-btn" onClick={closeMenu}>
                  <span className="material-symbols-outlined m-0 p-0">
                     close
                  </span>
               </button>
               <div className="logo-wrapper"></div>
               <ul>
                  <li className="">
                     <a href="/about" className="mobile-menu-item nav-link">
                        ABOUT US
                     </a>
                  </li>
                  <li className="">
                     <Link to="/faq" className="mobile-menu-item nav-link">
                        FAQ
                     </Link>
                  </li>
                  <li className="">
                     <Link
                        to="/GET INVOLVED"
                        className="mobile-menu-item nav-link"
                     >
                        GET INVOLVED
                     </Link>
                  </li>
               </ul>
               <button type="button" className="btn-info nav-play-btn">
                  <a href="https://laneecho.github.io/LWT-bingo/">PLAY BINGO</a>
               </button>
            </div>
         </div>
      </>
   );
};

export default MobileNav;
