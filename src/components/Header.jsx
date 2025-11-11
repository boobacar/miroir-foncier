import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isRHDropdownOpen, setIsRHDropdownOpen] = useState(false);
  const [isMobileExpertisesOpen, setIsMobileExpertisesOpen] = useState(false);
  const [isMobileRHOpen, setIsMobileRHOpen] = useState(false);

  const dropdownTimeout = useRef(null);
  const rhDropdownTimeout = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsRHDropdownOpen(false);
    setIsMobileExpertisesOpen(false);
    setIsMobileRHOpen(false);
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

  const handleRHEenter = () => {
    if (rhDropdownTimeout.current) clearTimeout(rhDropdownTimeout.current);
    setIsRHDropdownOpen(true);
  };

  const handleRHLeave = () => {
    rhDropdownTimeout.current = setTimeout(() => {
      setIsRHDropdownOpen(false);
    }, 300);
  };

  return (
    <>
      <header className="text-black fixed top-0 left-0 right-0 z-50 w-full p-4 border-b border-white/20 bg-[#c2b5a9]/70 backdrop-blur-md supports-[backdrop-filter]:bg-[#c2b5a9]/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1" onClick={closeMenu}>
            <img className="h-[50px] rounded-md" src={logo} alt="logo" />
            <h1 className="hidden md:block text-3xl font-bold">
              Miroir Foncier
            </h1>
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-bold">
            <Link to="/" className="hover:text-white">
              Accueil
            </Link>

            {/* Expertises Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services" className="cursor-pointer hover:text-white">
                Expertises
              </Link>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10 transition-all duration-300 ease-in-out ${
                  isServicesDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link
                  to="/location"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Location
                </Link>
                <Link
                  to="/estimation"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Vente
                </Link>
                <Link
                  to="/achat"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Achat
                </Link>
                <Link
                  to="/transaction"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Transaction Immobilière
                </Link>
                <Link
                  to="/amenagement"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Aménagement & Grands Projets
                </Link>
                <Link
                  to="/gestion-patrimoine"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Gestion de Patrimoine
                </Link>
                <Link
                  to="/lexique"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Lexique de l'Immobilier
                </Link>
              </div>
            </div>

            <Link to="/conseils" className="hover:text-white">
              Nos conseils
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>

            {/* RH Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleRHEenter}
              onMouseLeave={handleRHLeave}
            >
              <Link
                to="/ressources-humaines"
                className="cursor-pointer hover:text-white"
              >
                Ressources Humaines
              </Link>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10 transition-all duration-300 ease-in-out ${
                  isRHDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link
                  to="/nos-metiers"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Nos Métiers
                </Link>
                <Link
                  to="/nous-rejoindre"
                  className="block px-4 py-2 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Nous Rejoindre
                </Link>
              </div>
            </div>

            <Link to="/estimation" className="hover:text-white">
              Estimation
            </Link>
            <Link to="/a-propos" className="hover:text-white">
              À propos
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
                className="md:hidden absolute top-[80px] left-0 right-0 bg-[#c2b5a9]/95 backdrop-blur-md text-white shadow-md z-50 rounded-b-xl overflow-hidden"
              >
                <Link
                  to="/"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>

                {/* Expertises mobile */}
                <div className="flex justify-between items-center px-4 py-2">
                  <Link to="/services" onClick={closeMenu}>
                    Expertises
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileExpertisesOpen(!isMobileExpertisesOpen)
                    }
                  >
                    {isMobileExpertisesOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isMobileExpertisesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 text-sm overflow-hidden"
                    >
                      <Link
                        to="/location"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Location
                      </Link>
                      <Link
                        to="/estimation"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Vente
                      </Link>
                      <Link
                        to="/achat"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Achat
                      </Link>
                      <Link
                        to="/transaction"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Transaction Immobilière
                      </Link>
                      <Link
                        to="/amenagement"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Aménagement & Grands Projets
                      </Link>
                      <Link
                        to="/gestion-patrimoine"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Gestion de Patrimoine
                      </Link>
                      <Link
                        to="/lexique"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Lexique de l'Immobilier
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/conseils"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Nos conseils
                </Link>

                {/* RH mobile */}
                <div className="flex justify-between items-center px-4 py-2">
                  <Link to="/ressources-humaines" onClick={closeMenu}>
                    Ressources Humaines
                  </Link>
                  <button onClick={() => setIsMobileRHOpen(!isMobileRHOpen)}>
                    {isMobileRHOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isMobileRHOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 text-sm overflow-hidden"
                    >
                      <Link
                        to="/nos-metiers"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Nos Métiers
                      </Link>
                      <Link
                        to="/nous-rejoindre"
                        className="block p-1 hover:bg-[#f2e3d1]"
                        onClick={closeMenu}
                      >
                        Nous Rejoindre
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/estimation"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Estimation
                </Link>
                <Link
                  to="/blog"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  to="/a-propos"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  À propos
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-4 hover:bg-[#f2e3d1]"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      {/* Header spacer to avoid content being hidden behind fixed bar */}
      <div className="h-[80px]" aria-hidden></div>
    </>
  );
}

export default Header;
