import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles/index.css";
import Gradien from "./pages/Gradien";
import Journey from "./pages/Journey";
import Future from "./pages/Future";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Gradien" element={<Gradien />} />
        <Route path="/Future" element={<Future />} />
      </Routes>
    </Router>
  );
}

export default App;
