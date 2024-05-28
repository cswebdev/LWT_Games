import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";
import imageAssets from "../../utils/Utils";

const NavBar = () => {
   const [openMenu, setOpenMenu] = useState(false);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
   };

   return (
      <>
         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
         <nav className="navbar navbar-expand-lg">
            <div className="container">
               <Link to="/home" className="navbar-brand">
                  <img
                     src={imageAssets.logo}
                     alt="InCO logo"
                     className="logo-img"
                  />
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleMenu}
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className={`collapse navbar-collapse ${
                     openMenu ? "show" : ""
                  }`}
               >
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <a href="/about" className="nav-link">
                           ABOUT US
                        </a>
                     </li>
                     <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                           FAQ
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/GET INVOLVED" className="nav-link">
                           GET INVOLVED
                        </Link>
                     </li>
                     <li className="nav-item">
                        <a
                           href="https://laneecho.github.io/LWT-bingo/"
                           className="btn btn-info nav-play-btn"
                        >
                           PLAY BINGO
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default NavBar;
