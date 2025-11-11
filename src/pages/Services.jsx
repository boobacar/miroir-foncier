import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaTags, FaHandshake, FaProjectDiagram, FaChartLine, FaBookOpen } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Expertises</h2>

      <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center mx-auto lg:w-[80%]">
        {/* Location */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <MdHome size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-600 mb-6">Découvrez nos biens à louer.</p>
          <Link
            to="/location"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir Locations
          </Link>
        </motion.div>

        {/* Achat */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FiShoppingCart size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Achat</h2>
          <p className="text-gray-600 mb-6">
            Trouvez votre futur bien immobilier.
          </p>
          <Link
            to="/achat"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir Achats
          </Link>
        </motion.div>

        {/* Vente */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaTags size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Vente</h2>
          <p className="text-gray-600 mb-6">
            Faites estimer votre bien gratuitement.
          </p>
          <Link
            to="/estimation"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Estimer mon bien
          </Link>
        </motion.div>

        {/* Transaction Immobilière */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaHandshake size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Transaction Immobilière</h2>
          <p className="text-gray-600 mb-6">
            Sécurisez vos transactions avec nos experts juridiques.
          </p>
          <Link
            to="/transaction"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir les details
          </Link>
        </motion.div>

        {/* Aménagement & Grands Projets */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaProjectDiagram size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Aménagement & Grands Projets
          </h2>
          <p className="text-gray-600 mb-6">
            Assistance et gestion de projets d’envergure sur tout le territoire.
          </p>
          <Link
            to="/amenagement"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir les details
          </Link>
        </motion.div>

        {/* Gestion de Patrimoine */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Gestion de Patrimoine</h2>
          <p className="text-gray-600 mb-6">
            Optimisez la valeur et la rentabilité de votre patrimoine immobilier.
          </p>
          <Link
            to="/gestion-patrimoine"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir les details
          </Link>
        </motion.div>

        {/* Lexique de l'immobilier */}
        <motion.div
          className="bg-white card-glass p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaBookOpen size={56} color="#c2b5a9" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Lexique de l'immobilier</h2>
          <p className="text-gray-600 mb-6">
            Comprenez facilement les termes et notions de l’univers immobilier.
          </p>
          <Link
            to="/lexique"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Consulter le lexique
          </Link>
        </motion.div>
        
      </div>
    </div>
    </div>
  );
}

export default Services;
