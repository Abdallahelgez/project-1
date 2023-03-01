const Home = () => {
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
        <h1>home page</h1>
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
          <a href="" title="ELGEZ GROUP" style={{ color: "#999" }}>
            ELGEZ
          </a>
        </label>
      </div>
      {/* end copy */}
    </>
  );
}

export default Home;
