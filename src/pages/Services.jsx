import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="px-6 md:px-20 py-16 text-center">
      <h1 className="text-4xl font-bold mb-12">Nos Services</h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Location */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-600 mb-6">Découvrez nos biens à louer.</p>
          <Link
            to="/location"
            className="bg-[#c2b5a9] text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir Locations
          </Link>
        </motion.div>

        {/* Achat */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Achat</h2>
          <p className="text-gray-600 mb-6">
            Trouvez votre futur bien immobilier.
          </p>
          <Link
            to="/achat"
            className="bg-[#c2b5a9] text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir Achats
          </Link>
        </motion.div>

        {/* Vente */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Vente</h2>
          <p className="text-gray-600 mb-6">
            Faites estimer votre bien gratuitement.
          </p>
          <Link
            to="/estimation"
            className="bg-[#c2b5a9] text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Estimer mon bien
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
