import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand " href="/">
          🏠 Ramesh PG
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            <li className="nav-item">
              <a className="nav-link active fw-semibold" href="#Hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#Room">Gallery</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#Aminities">Facilities</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#Contact">Contact</a>
            </li>

            {/* CTA Button */}
            <li className="nav-item">
              <button className="btn btn-warning fw-bold px-4">
                Book Now
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;