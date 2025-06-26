import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import maphoto from "../assets/moi.webp";

const DevInfoModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
    >
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center relative shadow-xl">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X />
        </button>

        {/* Photo + nom */}
        <img
          src={maphoto}
          alt="Boubacar Fall"
          className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
        />
        <h3 className="text-xl font-bold text-[#ad9d64]">Boubacar Fall</h3>
        <p className="text-sm text-gray-600">Développeur Fullstack</p>

        {/* Contacts directs */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-[#ad9d64]" />
            <span>+221 77 626 00 20</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-[#ad9d64]" />
            <span>fallcontech@gmail.com</span>
          </div>
        </div>

        {/* Liens externes */}
        <div className="flex justify-center gap-6 mt-5 text-[#ad9d64] text-xl">
          <a
            href="https://github.com/boobacar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/boubsfal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/221776260020"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DevInfoModal;
