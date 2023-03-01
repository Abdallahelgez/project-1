import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import AboutUs from "./about-us";
import RegistrationHost from "./registration-host";
import ContactUs from "./contact-us";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>sorry</h2>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <h2>sorry</h2>,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <h2>sorry</h2>,
  },
  {
    path: "/registration-host",
    element: <RegistrationHost />,
    errorElement: <h2>sorry</h2>,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <h2>sorry</h2>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
