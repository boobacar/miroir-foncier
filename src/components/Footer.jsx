import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import DevInfoModal from "./DevInfoModal";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="bg-[#c2b5a9] text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Infos de contact */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Miroir Foncier</h2>
          <p>Dakar, Sénégal</p>
          <p>Mobile : 78 438 93 93 | Fixe : 33 865 06 47</p>
          <p>Email : info@miroirfoncier.com</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 flex-wrap justify-center mt-4 md:mt-0 text-sm">
          <Link to="/" className="hover:underline">
            Accueil |
          </Link>
          <Link to="/services" className="hover:underline">
            Nos Services |
          </Link>
          <Link to="/estimation" className="hover:underline">Estimation |</Link>
          <Link to="/blog" className="hover:underline"> Blog |</Link>
          <Link to="/a-propos" className="hover:underline">
            À propos |
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-6 flex justify-center gap-4">
        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3b5998] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <FaFacebookF size={20} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e1306c] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <FaInstagram size={20} />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <FaLinkedinIn size={20} />
        </motion.a>
        <motion.a
          href="https://wa.me/221784389393"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25D366] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <FaWhatsapp size={20} />
        </motion.a>
      </div>

      {/* Footer bottom */}
      <div className="">
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Miroir Foncier. Tous droits réservés.
        </p>
        <div className="flex text-gray-600 items-center justify-center">
          Designed by{" "}
          <button
            onClick={() => setShowModal(true)}
            className="font-bold animate-bounce text-white ml-1 hover:underline"
          >
            Fallcon Tech
          </button>
        </div>

        <AnimatePresence>
          {showModal && (
            <DevInfoModal
              open={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}

export default Footer;
