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
import Transaction from "./pages/Transaction";
import Amenagement from "./pages/Amenagement";
import GestionPatrimoine from "./pages/GestionPatrimoine";
import Conseils from "./pages/Conseils";


const basename = import.meta.env.MODE === "development" ? "/" : "/miroir-foncier";

function App() {
  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/achat" element={<Achat />} />
        <Route path="/estimation" element={<Estimation />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/amenagement" element={<Amenagement />} />
        <Route path="/gestion-patrimoine" element={<GestionPatrimoine />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
