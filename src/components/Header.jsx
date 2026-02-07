import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'rh' | null

  const dropdownTimeout = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (menu) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navLinks = [
    { name: "Accueil", path: "/" },
    {
      name: "Expertises",
      path: "/services",
      dropdown: "services",
      items: [
        { name: "Location", path: "/location" },
        { name: "Vente", path: "/estimation" },
        { name: "Achat", path: "/achat" },
        { name: "Transaction Immobilière", path: "/transaction" },
        { name: "Aménagement & Grands Projets", path: "/amenagement" },
        { name: "Gestion de Patrimoine", path: "/gestion-patrimoine" },
        { name: "Lexique de l'Immobilier", path: "/lexique" },
        { separator: true },
        { name: "Immobilier à Dakar", path: "/immobilier-dakar" },
        { name: "Immobilier à Saly", path: "/immobilier-saly" },
        { name: "Immobilier à Diamniadio", path: "/immobilier-diamniadio" },
      ],
    },
    { name: "Nos Conseils", path: "/conseils" },
    { name: "Blog", path: "/blog" },
    {
      name: "Ressources Humaines",
      path: "/ressources-humaines",
      dropdown: "rh",
      items: [
        { name: "Nos Métiers", path: "/nos-metiers" },
        { name: "Nous Rejoindre", path: "/nous-rejoindre" },
      ],
    },
    { name: "Estimation", path: "/estimation" },
    { name: "À Propos", path: "/a-propos" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              src={logo}
              alt="Miroir Foncier"
            />
            <span
              className={`text-xl md:text-2xl font-cinzel font-bold tracking-widest text-[#2b2b2b] hidden md:block group-hover:text-[#c2b5a9] transition-colors`}
            >
              Miroir Foncier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.dropdown && handleMouseEnter(link.dropdown)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 py-2 hover:text-[#c2b5a9] transition-colors ${
                    location.pathname === link.path
                      ? "text-[#c2b5a9] font-semibold"
                      : ""
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.dropdown ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      >
                        {link.items.map((item, idx) =>
                          item.separator ? (
                            <div
                              key={`sep-${idx}`}
                              className="h-px bg-gray-100 my-2 mx-4"
                            />
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2.5 text-gray-600 hover:bg-[#f2e3d1]/30 hover:text-[#c2b5a9] transition-colors text-[13px]"
                            >
                              {item.name}
                            </Link>
                          ),
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-[#c2b5a9] text-white rounded-lg hover:bg-[#a99b8e] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#c2b5a9] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto lg:hidden"
            >
              <div className="p-6 flex flex-col gap-2 pb-20">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="border-b border-gray-100 last:border-0 pb-2"
                  >
                    {link.dropdown ? (
                      <div className="py-2">
                        <div
                          className="flex justify-between items-center font-semibold text-lg text-gray-800 mb-2"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.dropdown
                                ? null
                                : link.dropdown,
                            )
                          }
                        >
                          {link.name}
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${activeDropdown === link.dropdown ? "rotate-180" : ""}`}
                          />
                        </div>
                        <AnimatePresence>
                          {activeDropdown === link.dropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 border-l-2 border-[#f2e3d1] flex flex-col gap-3"
                            >
                              <Link
                                to={link.path}
                                className="text-gray-500 block py-1"
                              >
                                Vue d'ensemble
                              </Link>
                              {link.items.map(
                                (item) =>
                                  !item.separator && (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className="text-gray-600 block py-1 text-base hover:text-[#c2b5a9]"
                                    >
                                      {item.name}
                                    </Link>
                                  ),
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className="block py-3 text-lg font-semibold text-gray-800 hover:text-[#c2b5a9]"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="mt-6 w-full py-3.5 bg-[#c2b5a9] text-white text-center rounded-xl font-bold text-lg shadow-md"
                >
                  Nous Contacter
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-[80px]" />
    </>
  );
}

export default Header;
