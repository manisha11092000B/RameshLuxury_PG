import React, { useState , useRef } from "react";
import "./Gallery.css";
import g1 from  "./image/img1.jpg";
import g2 from  "./image/img3.jpg";
import g3 from  "./image/room1.jpg";
import g4 from  "./image/room2.jpg";
import g5 from  "./image/img2.jpg";


const images =[
    g1,g2,g3,g4,g5
];
const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null); // ✅ NEW
  const scrollRef = useRef(null); // 👈 for slider

  // 👉 Scroll Right
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // 👉 Scroll Left
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <section id="Gallery" className="gallery">
      <h2>Our Gallery</h2>
      <p className="subtitle">Explore beautiful moments of our PG</p>
        {/* 🔥 Arrows */}
      <div className="gallery-wrapper">
        <button className="arrow left" onClick={scrollLeft}>❮</button>

      <div className="gallery-container" ref={scrollRef}>
        {images.map((img, index) => (
          <div 
            className="gallery-card" 
            key={index}
            onClick={() => setSelectedImg(img)}   // ✅ CLICK EVENT
          >
            <img src={img} alt="gallery" />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      
      <button className="arrow right" onClick={scrollRight}>❯</button>
      </div> 

      {/* 🔥 FULL SCREEN VIEW */}
      {selectedImg && (
        <div className="fullscreen" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="full" />
        </div>
      )}
    </section>
  );
};

export default Gallery;