import React from "react";
import "../assets/navbar.css";
import navLogo from "../assets/gfg_logo.png";
import "../assets/homepage.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={navLogo} alt="nav_logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  to="/">
                  Home
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="mailto:gfg.amity@gmail.com">
                  <button>Contact Us</button>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
