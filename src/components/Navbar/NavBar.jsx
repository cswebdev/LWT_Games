import React from "react";
import "./NavBar.css";

const NavBar = () => {
   return (
      <div className="nav-wrapper">
         <div className="nav-content">
            <div className="logo-wrapper">
               <div className="logo"></div>
            </div>
            <ul>
               <li>
                  <a href="#">Games</a>
               </li>
               <li>
                  <a href="#">LWT</a>
               </li>
               <li>
                  <a href="#">About Us</a>
               </li>
               <li>
                  <a href="#">Get Involved</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default NavBar;
