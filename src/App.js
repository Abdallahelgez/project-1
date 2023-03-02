import { NavLink , Link, Routes, Route } from "react-router-dom";
import Home from './home';
import ContactUs from './contact-us';
import AboutUs from './about-us';
import RegistrationHost from './registration-host';
function App() {
  return (
    <Routes>
      <route path="/" element={<Home />} />
      <route path="/home" element={<Home />} />
      <route path= "/about-us" element= {<AboutUs />} />
      <route path="/registration-host" element={<RegistrationHost />} />
      <route path="/contact-us" element={<Home />} />
    </Routes>

  );
}
export default App;
