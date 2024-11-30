import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
