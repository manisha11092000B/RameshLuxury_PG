import React from "react";
import "./About.css";
import BG from "./image/img.jpg";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* 📸 Image */}
          <div className="col-md-6 mb-4">
            <img
              src={BG}
              alt="PG Room"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* 📝 Content */}
          <div className="col-md-6 text-white">
            <h2 className="about-title mb-3">About Ramesh PG</h2>

            <p>
              Ramesh PG offers a comfortable and affordable living space for 
              students and working professionals. Located in a prime area, 
              we provide fully furnished rooms with modern amenities to ensure 
              a safe and convenient stay.
            </p>

            <p>
              Our focus is on cleanliness, security, and quality service. 
              Whether you are staying short-term or long-term, we make sure 
              you feel at home.
            </p>

            {/* Highlights */}
            <ul className="about-list">
              <li>✔️ Fully Furnished Rooms</li>
              <li>✔️ 24x7 Security</li>
              <li>✔️ High-Speed WiFi</li>
              <li>✔️ Food & Laundry Facility</li>
            </ul>

            
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;