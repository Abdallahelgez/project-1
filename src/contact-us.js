import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import Header from "./comb/header";
import Footer from "./comb/footer";
const ContactUs = () => {
  return (
    <>
    <Header />

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
    <Footer />
    </>
  );
};

export default ContactUs;
