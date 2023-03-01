import React from 'react';

const ContactUs = () => {
  return (
    <>
      {/* start first */}
      <div className="first">
        <a
          href=""
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
            <a href="home" >home</a>
          </li>
          <li>
            <a href="about-us">about us</a>
          </li>
          <li>
            <a href="registration-host">Registration host &amp; domain</a>
          </li>
          <li>
            <a href="contact-us">contact us</a>
          </li>
        </ul>
      </div>
      {/* end navbar */}
      {/* start content */}
      <div className="content">
        
        
        {/* start right */}
        <div className="right">
          <br />
          <b style={{ color: "#933" }}>Mobile: </b>
          <b style={{ color: "#fff" }}> 01014403379</b>
          <br />
          <br />
          <b style={{ color: "#933" }}>Mobile: </b>
          <b style={{ color: "#fff" }}> 01155433782.</b>
          <br />
          <br />
          <table border={0} align="center">
            <tbody>
              <tr height={40}>
                <td align="left" width="auto">
                  <b style={{ color: "#933" }}>E-Mail: </b>
                </td>
                <td align="left">
                  <b style={{ color: "#fff" }}>info@k14k.com</b>
                </td>
              </tr>
              <tr height={40}>
                <td align="left" width={62}>
                  <b style={{ color: "#933" }}> </b>
                </td>
                <td align="left">
                  <b style={{ color: "#fff" }}>kk916114@yahoo.com</b>
                </td>
              </tr>
              <tr height={40}>
                <td align="left" width={62}>
                  <b style={{ color: "#933" }}> </b>
                </td>
                <td align="left">
                  <b style={{ color: "#fff" }}>abdallahelgez@yahoo.com</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* end right */}
      </div>
      {/* end content */}
      {/* start copy */}
      <div className="copy">
        <a href="www.facebook.com">
          <img src="FormatFactoryface.png" title="facebook" className="logo" />
        </a>
        <a href="www.youtube.com">
          <img
            src="youtube-logo_318-49909.png"
            title="youtube"
            className="logo"
          />
        </a>
        <a href="www.twitter.com">
          <img
            src="twitter-logo_318-40459.png"
            title="twitter"
            className="logo"
          />
        </a>
        <label style={{ color: "#666" }}>
          COPY ©
          <a href="exambel.html" title="ELGEZ GROUP" style={{ color: "#999" }}>
            ELGEZ
          </a>
        </label>
      </div>
      {/* end copy */}
    </>
      
    
  );
}

export default ContactUs;
