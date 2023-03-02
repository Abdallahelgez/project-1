import React from 'react';
import { NavLink , Link, Routes, Route } from "react-router-dom";
import Header from './comb/header';
import Footer from './comb/footer';
const RegistrationHost = () => {
  return (
      <>
        <Header />

    {/* start content */}
    <div className="content">
      {/* start left */}
      <div className="left">
        {/* start table */}
        <table border={0} width={550} align="center">
          <tbody>
            <tr align="center" height={50}>
              <td className="lefticon">Name:</td>
              <td className="righticon">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="enter your name"
                  size={48}
                  maxLength={50}
                  onkeyup="checkname()"
                />
                <label id="checkname" />
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon">E-Mail:</td>
              <td className="righticon">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="@gmail or @yahoo"
                  size={48}
                  maxLength={50}
                  onkeyup="checkemail()"
                />
                <label id="checkemail"> </label>
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon">Phone :</td>
              <td className="righticon">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="enter your number phone"
                  size={48}
                  maxLength={11}
                  onkeyup="checkphone()"
                />
                <label id="checkphone"> </label>
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon">Address:</td>
              <td className="righticon">
                <input
                  type="text"
                  id="address"
                  name="Address"
                  size={48}
                  maxLength={60}
                  placeholder="enter your address"
                  onkeyup="checkaddress()"
                />
                <label id="checkaddress"> </label>
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon">City:</td>
              <td className="righticon">
                <input
                  type="text"
                  id="city"
                  placeholder="enter your city"
                  name="City"
                  size={48}
                  maxLength={30}
                  onkeyup="checkcity()"
                />
                <label id="checkcity"> </label>
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon">Zip:</td>
              <td className="righticon">
                <input
                  type="text"
                  id="zip"
                  name="Zip"
                  size={48}
                  maxLength={5}
                  placeholder="enter your zip number"
                  onkeyup="checkzip()"
                />
                <label id="checkzip"> </label>
              </td>
            </tr>
            <tr align="center" height={50}>
              <td className="lefticon"> Domain (website):</td>
              <td className="righticon">
                <input
                  type="text"
                  size={48}
                  maxLength={30}
                  placeholder="enter your website"
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* end table */}
        <input
          type="button"
          defaultValue="register now"
          style={{ marginTop: 10 }}
          id="button"
        />
      </div>
      {/* end left */}
      {/* start right */}
      
      {/* end right */}
    </div>
    {/* end content */}
    <Footer/>
  
      
    </>
  );
}

export default RegistrationHost;
