import React from "react";
import Home from "./components/home/Home";
import "./App.css";
import Benefits from "./components/Benefits/Benefits";
import TreatmentOptions from "./components/TreatmentOptions/TreatmentOptions";

function App() {
  return (
    <div>
      <Home />
      <Benefits />
      <TreatmentOptions />
    </div>
  );
}

export default App;
