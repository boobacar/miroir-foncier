import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300);
  };

  return (
    <header className="bg-[#c2b5a9] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1" onClick={closeMenu}>
          <img className="h-[50px] rounded-md" src={logo} alt="logo" />
          <h1 className="text-3xl font-bold text-white">Miroir Foncier</h1>
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-white">
          <Link to="/" className="hover:text-[#f2e3d1]">Accueil</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#f2e3d1]">Nos Services</button>
            <div
              className={`absolute ${
                isServicesDropdownOpen ? "block" : "hidden"
              } bg-white text-black py-2 rounded shadow-md mt-2 w-40 z-10`}
            >
              <Link to="/location" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Location</Link>
              <Link to="/estimation" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Vente</Link>
              <Link to="/achat" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Achat</Link>
              <Link to="/transaction" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Transaction Immobilière</Link>
              <Link to="/amenagement" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Aménagement & Grands Projets</Link>
              <Link to="/gestion-patrimoine" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Gestion de Patrimoine</Link>
            </div>
          </div>
          <Link to="/conseils" className="hover:text-[#f2e3d1]">Nos conseils</Link>
          <Link to="/estimation" className="hover:text-[#f2e3d1]">Estimation</Link>
          <Link to="/a-propos" className="hover:text-[#f2e3d1]">À propos</Link>
          <Link to="/contact" className="hover:text-[#f2e3d1]">Contact</Link>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#c2b5a9] text-white shadow-md mt-4 z-50">
            <Link to="/" className="block py-2 px-4 hover:bg-[#f2e3d1]" onClick={closeMenu}>Accueil</Link>
            <div className="relative">
              <button
                className="block py-2 px-4 w-full text-left"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Nos Services
              </button>
              {isServicesDropdownOpen && (
                <div className="bg-[#c2b5a9] text-white py-2 rounded  ml-4 w-40">
                  <Link to="/location"  className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Location</Link>
                  <Link to="/estimation" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Vente</Link>
                  <Link to="/achat" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Achat</Link>
                  <Link to="/transaction" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Transaction Immobilière</Link>
                  <Link to="/amenagement" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Aménagement & Grands Projets</Link>
                  <Link to="/gestion-patrimoine" className="block p-1 hover:bg-[#f2e3d1]" onClick={closeMenu}>Gestion de Patrimoine</Link>

                </div>
              )}
            </div>
            <Link to="/conseils" className="block py-2 px-4 hover:bg-[#f2e3d1]" onClick={closeMenu}>Nos conseils</Link>
            <Link to="/estimation" className="block py-2 px-4 hover:bg-[#f2e3d1]" onClick={closeMenu}>Estimation</Link>
            <Link to="/a-propos" className="block py-2 px-4 hover:bg-[#f2e3d1]" onClick={closeMenu}>À propos</Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-[#f2e3d1]" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
