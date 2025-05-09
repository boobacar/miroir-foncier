import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import biens from "../data/biens";

function Achat() {
  const biensAchat = biens.filter((b) => b.type === "achat");

  return (
    <div className="px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Biens à Acheter</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {biensAchat.map((bien) => (
          <motion.div
            key={bien.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={bien.image}
              alt={bien.title}
              className="h-48 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{bien.title}</h2>
            <p className="text-gray-600">{bien.price}</p>
            <Link
              to={`/details/${bien.id}`}
              className="inline-block mt-4 text-[#c2b5a9] font-semibold hover:underline"
            >
              Voir Détails
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Achat;
