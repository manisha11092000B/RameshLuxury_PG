import React from "react";
import "./Aminities.css";
import { FaWifi, FaCar, FaUtensils, FaHotTub, FaBuilding,FaShieldAlt, FaClock} from "react-icons/fa";

function Amenities() {
  const data = [
    { icon: <FaWifi />, title: "Free WiFi" },
    { icon: <FaCar />, title: "Parking" },
    { icon: <FaHotTub />, title: "Hot Water" },
    { icon: <FaBuilding />, title: "Lift Facility" },
    { icon: <FaUtensils />, title: "Food Available" },
    { icon: <FaShieldAlt />, title: "24x7 Security" },
    { icon: <FaClock />, title: "Flexible Timings" }
  ];

  return (
    <div  id="Aminities" className="amenities-section">
      <div className="container text-center">

        <h2 className="section-title mb-5">Our Amenities</h2>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="amenity-card">
                <div className="icon">{item.icon}</div>
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Amenities;