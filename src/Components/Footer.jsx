import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer id="Footer" className="footer-section">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* 📍 Address */}
          <div className="col-md-4 mb-4">
            <h5>Our Address</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Pune, Maharashtra, India
            </p>
          </div>

          {/* 📞 Contact */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>

            <p>
              <FaPhoneAlt className="me-2" />
              <a href="tel:+919620881234">+91 9620881234</a>
            </p>

            <p>
              <FaWhatsapp className="me-2 text-success" />
              <a
                href="https://wa.me/919620881234"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* 🧾 About */}
          <div className="col-md-4 mb-4">
            <h5>Ramesh PG</h5>
            <p>Comfortable & Affordable Stay for Students & Professionals.</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p>
            © 2026 Ramesh PG | Made by <span>KA IT Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;