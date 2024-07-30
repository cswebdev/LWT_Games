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
         <div className="nav-wrapper">
            <div className="nav-content">
               <div className="logo-wrapper">
                  <div className="logo">
                     <Link to="/">
                        <img
                           src={imageAssets.logo}
                           alt="InCo logo with rainbor carabiners interconnected like Olympic rings"
                           className="logo-img"
                        />
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
                     <Link to="/get-involved" className="menu-item nav-link">
                        GET INVOLVED
                     </Link>
                  </li>
               </ul>
               <button type="button" className="btn-info nav-play-btn">
                  <a href="http://bingo.incocollective.com/">PLAY BINGO</a>
               </button>
               <button className="menu-btn" onClick={toggleMenu}>
                  <span
                     className={"material-symbols-outlined"}
                     style={{ fontSize: "1.8rem" }}
                  >
                     {openMenu ? "close" : "menu"}
                  </span>
               </button>
            </div>
         </div>
      </>
   );
};

export default NavBar;
