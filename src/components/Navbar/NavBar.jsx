import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";

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
                  <div className="logo">LWT GAMES</div>
               </div>
               <ul>
                  <li>
                     <a href="#" className="menu-item">
                        Games
                     </a>
                  </li>
                  <li>
                     <a href="#" className="menu-item">
                        LWT
                     </a>
                  </li>
                  <li>
                     <a href="#" className="menu-item">
                        About Us
                     </a>
                  </li>
                  <li>
                     <a href="#" className="menu-item">
                        Get Involved
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
