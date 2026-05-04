import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Aminities from "./Components/Aminities";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Aminities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;