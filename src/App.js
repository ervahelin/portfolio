import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles/index.css";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Gradien from "./pages/Gradien";
import Journey from "./pages/Journey";
import Future from "./pages/Future";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
