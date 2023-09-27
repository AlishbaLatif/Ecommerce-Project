import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { UserStatusContext } from "../../App";
// import {AiOutlineHome} from  'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'

function Navbar() {
  const {isLoggedIn, setLoggedIn} =  useContext(UserStatusContext);
  return (
    <div className="navContainer">
      <div>
      
      <NavLink className="navbar" to="/">
      <AiOutlineHome/>Home
      </NavLink></div>
      <div>
      <NavLink className="navbar" to="product">
        Product
      </NavLink></div>
      <div>
      <NavLink className="navbar" to="catagories">
        Catagories
      </NavLink></div>
      {/* <NavLink className="navbar" to="loginPage">
        Login
      </NavLink> */}
      <div>
      {isLoggedIn ? <><NavLink className="navbar" to="/" onClick={()=>{setLoggedIn(!isLoggedIn)}}>Sign Out</NavLink></> : <></>}
      {isLoggedIn ? <></> : <><NavLink className="navbar" to="/loginPage">Login</NavLink></>}

      </div>
      
    </div>
  );
}

export default Navbar;
