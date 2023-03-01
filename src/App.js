function App() {
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
            <a href="">home</a>
          </li>
          <li>
            <a href="">about us</a>
          </li>
          <li>
            <a href="">Registration host &amp; domain</a>
          </li>
          <li>
            <a href="">contact us</a>
          </li>
        </ul>
      </div>
      {/* end navbar */}
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
export default App;
