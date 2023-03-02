import { NavLink , Link, Routes, Route } from "react-router-dom";
import Header from './comb/header';
import Footer from './comb/footer';
const Home = () => {
  return (
    <>
          <Header />

      {/* start content */}
      <div className="content">
        <h1>home page</h1>
      </div>
      {/* end content */}
      <Footer/>
    </>
  );
}

export default Home;
