import React from "react";
import "../Styles/Sidebar.css";
import navlogo from "../Assets/logo.svg";

function Navbar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="center-nav">
          <div className="mx-2">
            <img src={navlogo} alt="snap" className="img-fluid" />
          </div>

          <div className="">
            <ul className="d-flex">
            <li className="mx-2">Feature</li>
            <li className="mx-2">Company</li>
            <li className="mx-2">Careers</li>
            <li className="mx-2">About</li>

            </ul>
            
          </div>
          <div className="login-register">
            <button className="mx-2 btn-snap btn-snap-login">Login</button>
            <button className="mx-2 btn-snap btn-snap-login">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
