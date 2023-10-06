import { useState } from "react";
import "./App.css";
import Catalog from "./components/Catalog";
import Navigation from "./components/Navigation";
import Start from "./components/Start";
import Details from "./components/Details"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
