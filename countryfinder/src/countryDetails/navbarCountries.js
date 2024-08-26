
import React from "react";
import {  NavLink } from "react-router-dom";
 function CountriesNavBar(){
    const LinkStyle={
        textDecoration:"none",
    }
    const ListStyle={
        margin:10,
    }
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light" >
  <div className="container-fluid" style={{backgroundColor:"black", height:"65px"}}>
    <ul className="navbar-nav">
     
      <li className="nav-item" style={ListStyle}>
        <NavLink to={"/"} style={LinkStyle}>Home</NavLink>
      </li>

      <li className="nav-item" style={ListStyle}>
        <NavLink to={"/currency"} style={LinkStyle}>Currency</NavLink>
      </li>

      <li className="nav-item" style={ListStyle}>
        <NavLink to={"/whether"} style={LinkStyle}>Whether</NavLink>
      </li>

      
      <li className="nav-item" style={ListStyle}>
        <NavLink to={"/About"} style={LinkStyle}>About</NavLink>
      </li>

    </ul>
  </div>
</nav>
    )

}
export default CountriesNavBar;