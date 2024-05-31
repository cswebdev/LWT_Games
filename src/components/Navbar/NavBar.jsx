import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";
import imageAssets from "../../utils/Utils";

const NavBar = () => {
   const [openMenu, setOpenMenu] = useState(false);
   const [showMenuBtn, setShowMenuBtn] = useState(true);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
      setShowMenuBtn(!showMenuBtn);
   };

   const closeMobileNav = () => {
      setOpenMenu(false);
      setShowMenuBtn(true);
   };

   return (
      <>
         <MobileNav isOpen={openMenu} closeMenu={closeMobileNav} />
         <nav className="navbar nav-wrapper">
            <div className="container">
               <div className="d-flex align-items-center justify-content-between position-relative">
                  <Link to="/home" className="navbar-brand logo-wrapper">
                     <img
                        src={imageAssets.logo}
                        alt="InCO logo"
                        className="logo-img m-0 p-0"
                     />
                  </Link>
                  {showMenuBtn && (
                     <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined m-0 p-0"}>
                           menu
                        </span>
                     </button>
                  )}
               </div>
               <div className="nav-content">
                  <ul className="navbar-nav">
                     <li className="">
                        <a href="/about" className="menu-item nav-link">
                           ABOUT US
                        </a>
                     </li>
                     <li className="">
                        <Link to="/faq" className="menu-item nav-link">
                           FAQ
                        </Link>
                     </li>
                     <li className="">
                        <Link to="/GET INVOLVED" className="menu-item nav-link">
                           GET INVOLVED
                        </Link>
                     </li>
                  </ul>
                  <button type="button" className="btn-info nav-play-btn">
                     <a href="https://laneecho.github.io/LWT-bingo/">
                        PLAY BINGO
                     </a>
                  </button>
               </div>
            </div>
         </nav>
      </>
   );
};

export default NavBar;
