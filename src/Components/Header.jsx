import React from "react";
import './styles/Header.css'
import {BsSearch} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return(
  <div className="header">
  <h2>Dashboard</h2>
  <div className="search-bar">
      <input type="text" placeholder="Search" />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
   <img src={require("./styles/Vector (5).png")}></img>
   <img src={require("./styles/Mask Group (1).png")}></img>

  </div>
  ) 
};
export default Header;