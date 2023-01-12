import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel />
      <Contact />
      <AboutUs />
    </div>
  );
}

export default App;
