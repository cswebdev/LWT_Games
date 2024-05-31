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
         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
         <div className="nav-wrapper">
            <div className="nav-content">
               <div className="logo-wrapper">
                  <div className="logo">
                     <Link to="/home">
                        <img src={logo} alt="LWT logo" />
                     </Link>
                  </div>
               </div>
               <ul>
                  <li>
                     <a href="/about" className="menu-item nav-link">
                        ABOUT US
                     </a>
                  </li>
                  <li>
                     <Link to="/faq" className="menu-item nav-link">
                        FAQ
                     </Link>
                  </li>
                  <li>
                     <Link to="/GET INVOLVED" className="menu-item nav-link">
                        GET INVOLVED
                     </Link>
                  </li>
                  <button type="button" className="btn-info nav-play-btn">
                     <a href="https://laneecho.github.io/LWT-bingo/">
                        PLAY BINGO
                     </a>
                  </button>
               </ul>
               </div>
            </div>
      </>
   );
};

export default NavBar;
