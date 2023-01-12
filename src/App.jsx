import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel />
    </div>
  );
}

export default App;
