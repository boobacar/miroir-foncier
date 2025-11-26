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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import RessourcesHumaines from "./pages/RessourcesHumaines";
import Lexique from "./pages/Lexique";
import NosMetiers from "./pages/NosMetiers";
import NousRejoindre from "./pages/NousRejoindre";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumbs from "./components/Breadcrumbs";
import RouteSEO from "./components/RouteSEO";
import CityLanding from "./pages/CityLanding";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteSEO />
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/location" element={<Location />} />
        <Route path="/achat" element={<Achat />} />
        <Route path="/nos-metiers" element={<NosMetiers />} />
        <Route path="/nous-rejoindre" element={<NousRejoindre />} />
        <Route path="/estimation" element={<Estimation />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/amenagement" element={<Amenagement />} />
        <Route path="/gestion-patrimoine" element={<GestionPatrimoine />} />
        <Route path="/lexique" element={<Lexique />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ressources-humaines" element={<RessourcesHumaines />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/immobilier-dakar" element={<CityLanding cityKey="dakar" />} />
        <Route path="/immobilier-saly" element={<CityLanding cityKey="saly" />} />
        <Route path="/immobilier-diamniadio" element={<CityLanding cityKey="diamniadio" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
