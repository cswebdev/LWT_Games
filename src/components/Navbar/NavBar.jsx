import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import logo from "../../assets/LWT_logo.png";
const NavBar = () => {
   const [openMenu, setOpenMenu] = useState(false);

   const toggleMenu = () => {
      setOpenMenu(!openMenu);
   };
   return (
      <>
         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
         <div className="nav-wrapper">
            <div className="nav-content">
               <div className="logo-wrapper">
                  <div className="logo">
                     <img src={logo} alt="LWT logo" />
                  </div>
               </div>
               <ul>
                  <li>
                     <a href="#" className="menu-item">
                        Play Bingo
                     </a>
                  </li>
                  <li>
                     <a href="/about" className="menu-item">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#" className="menu-item">
                        FAQ
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://lesbianswhotech.org/about/"
                        className="menu-item"
                     >
                        LWT
                     </a>
                  </li>
               </ul>
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
