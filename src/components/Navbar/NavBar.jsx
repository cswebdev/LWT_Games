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
                  <a href="#">Link 1</a>
               </li>
               <li>
                  <a href="#">Link 2</a>
               </li>
               <li>
                  <a href="#">Link 3</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default NavBar;
