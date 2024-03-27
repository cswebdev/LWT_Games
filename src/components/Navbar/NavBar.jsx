import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";
import logo from "../../assets/LWT_logo.png";
import { Link } from "react-router-dom";

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
                     <Link to="/home">
                        <img src={logo} alt="LWT logo" />
                     </Link>
                  </div>
               </div>
               <ul>
                  <li>
                     <a
                        href="https://laneecho.github.io/LWT-bingo/"
                        className="menu-item"
                     >
                        Play Bingo
                     </a>
                  </li>
                  <li>
                     <Link to="/about" className="menu-item">
                        About
                     </Link>
                  </li>
                  <li>
                     <Link to="/FAQ" className="menu-item">
                        FAQ
                     </Link>
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
