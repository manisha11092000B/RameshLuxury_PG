import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div  id="Hero" className="hero d-flex align-items-center">
      <div className="container text-white">
        <div className="row">
          
          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="hero-title">
              Comfortable PG for Students & Professionals
            </h1>

            <p className="hero-subtitle">
              Safe, Affordable & Fully Furnished Rooms in Pune
            </p>

            <div className="mt-4">
              <button className="btn btn-warning me-3 px-4">
                Book Now
              </button>

              <button className="btn btn-outline-light px-4">
                View Rooms
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;