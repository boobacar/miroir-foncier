import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Location from "./pages/Location";
import Achat from "./pages/Achat";
import Estimation from "./pages/Estimation";
import Details from "./pages/Details"; // pour afficher un bien spécifique
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/miroir-foncier">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/achat" element={<Achat />} />
        <Route path="/estimation" element={<Estimation />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
