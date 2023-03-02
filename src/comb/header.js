import React from 'react';
import { NavLink , Link, Routes, Route } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* start first */}
      <div className="first">
        <a
          href="./home"
          title="alhdaf company"
          style={{ paddingLeft: 30 }}
        >
          a<span>l</span>h<span>d</span>a<span>f</span>
        </a>
      </div>
      {/* start first */}
      {/* start navbar */}
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/home" className="navclass">home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="navclass">about us</NavLink>
          </li>
          <li>
            <NavLink to="/registration-host" className="navclass" >Registration host &amp; domain</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="navclass" >contact us</NavLink>
          </li>
        </ul>
      </div>
      {/* end navbar */}
      
    </>
  );
}

export default Header;
