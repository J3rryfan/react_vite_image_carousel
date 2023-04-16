import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { slides } from "./data/CarouselData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  );
}

export default App;
