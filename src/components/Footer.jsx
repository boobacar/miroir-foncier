import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import DevInfoModal from "./DevInfoModal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com", color: "#3b5998" },
    { icon: FaInstagram, url: "https://instagram.com", color: "#e1306c" },
    { icon: FaLinkedinIn, url: "https://linkedin.com", color: "#0077b5" },
    { icon: FaWhatsapp, url: "https://wa.me/221784389393", color: "#25D366" },
  ];

  return (
    <footer className="bg-[#2b2b2b] text-gray-300 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Miroir Foncier
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Votre partenaire de confiance pour tous vos projets immobiliers au
            Sénégal. Expertise, transparence et accompagnement personnalisé.
          </p>
          <div className="flex gap-4 pt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1, color: social.color }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-[#c2b5a9] transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Nos Expertises
              </Link>
            </li>
            <li>
              <Link
                to="/estimation"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Estimation
              </Link>
            </li>
            <li>
              <Link
                to="/transaction"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Transaction
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                to="/a-propos"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Nos Services</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/location"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/achat"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Achat & Vente
              </Link>
            </li>
            <li>
              <Link
                to="/amenagement"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Aménagement
              </Link>
            </li>
            <li>
              <Link
                to="/gestion-patrimoine"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Gestion de Patrimoine
              </Link>
            </li>
            <li>
              <Link
                to="/conseils"
                className="hover:text-[#c2b5a9] transition-colors"
              >
                Conseils Immobiliers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#c2b5a9]" />
              <span>Dakar, Sénégal</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#c2b5a9]" />
              <span>78 438 93 93 / 33 865 06 47</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c2b5a9]" />
              <span>info@miroirfoncier.com</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-6 py-2 border border-[#c2b5a9] text-[#c2b5a9] hover:bg-[#c2b5a9] hover:text-white rounded transition-colors duration-300"
            >
              Nous écrire
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Miroir Foncier. Tous droits réservés.
        </p>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          <span>Designed by</span>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-400 hover:text-[#c2b5a9] font-medium transition-colors"
          >
            Fallcon Tech
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <DevInfoModal open={showModal} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
