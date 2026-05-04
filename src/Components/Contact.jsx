import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, room, date, message } = formData;

    const whatsappNumber = "919620881234";

    const text = `Hello, I want to book a stay:

Name: ${name}
Email: ${email}
Phone: ${phone}
Room: ${room}
Date: ${date}
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div id="Contact" className="container my-5">
      <div className="row g-4">

        {/* 📋 Form */}
        <div className="col-md-6">
          <div className="booking-card p-4 shadow rounded">
            <h3 className="mb-3 text-center">Book Your Stay</h3>

            <form onSubmit={handleSubmit}>
              <input className="form-control mb-3" name="name" placeholder="Full Name" onChange={handleChange} required />

              <input className="form-control mb-3" name="email" type="email" placeholder="Email" onChange={handleChange} required />

              <input className="form-control mb-3" name="phone" placeholder="Mobile Number" onChange={handleChange} required />

              <select className="form-control mb-3" name="room" onChange={handleChange}>
                <option>Select Room</option>
                <option>Single</option>
                <option>Double</option>
              </select>

              <input className="form-control mb-3" name="date" type="date" onChange={handleChange} />

              <textarea className="form-control mb-3" name="message" placeholder="Message" onChange={handleChange}></textarea>

              <button type="submit" className="btn btn-warning w-100">
                📲 Book on WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* 📍 Google Map */}
        <div className="col-md-6">
          <div className="shadow rounded overflow-hidden h-100">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Ramesh%20PG%20TECH%20MAHINDRA%20near%20TCS%20Jai%20Ganesh%20Colony%20Phase%203%20Hinjawadi%20Pune%20Maharashtra%20411057&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "450px", border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;