import React from 'react';
import { NavLink , Link, Routes, Route } from "react-router-dom";

const Footer = () => {
  return (
    <>
     {/* start footer */}
     <footer>
        <Link href="www.facebook.com">
          <img src="FormatFactoryface.png" title="facebook" className="logo" />
        </Link>
        <Link href="www.youtube.com">
          <img
            src="youtube-logo_318-49909.png"
            title="youtube"
            className="logo"
          />
        </Link>
        <Link href="www.twitter.com">
          <img
            src="twitter-logo_318-40459.png"
            title="twitter"
            className="logo"
          />
        </Link>
        <label style={{ color: "white" }}>
          COPY ©
          <Link to="" title="ELGEZ GROUP" style={{ color: "white" }}>
            ELGEZ
          </Link>
        </label>
      </footer>
      {/* end footer */} 
    </>
  );
}

export default Footer;
