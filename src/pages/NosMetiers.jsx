import React from "react";
import { motion } from "framer-motion";

function NosMetiers() {
  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Nos Métiers
        </h2>

        <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center mx-auto lg:w-[80%]">
          {/* Développement Foncier */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Développement Foncier</h2>
            <p className="text-gray-600 mb-6">
              Recherche et valorisation de terrains pour de futurs projets immobiliers.
            </p>
          </motion.div>

          {/* Programme */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Programme</h2>
            <p className="text-gray-600 mb-6">
              Élaboration de projets immobiliers : de l’idée jusqu’à la livraison.
            </p>
          </motion.div>

          {/* Conception Technique */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Conception Technique</h2>
            <p className="text-gray-600 mb-6">
              Planification architecturale et technique selon les normes en vigueur.
            </p>
          </motion.div>

          {/* Achats Techniques */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Achats Techniques</h2>
            <p className="text-gray-600 mb-6">
              Sélection des prestataires et gestion des contrats de travaux.
            </p>
          </motion.div>

          {/* Conseiller en Immobilier Neuf */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Conseiller en Immobilier Neuf</h2>
            <p className="text-gray-600 mb-6">
              Accompagnement personnalisé pour l’achat de biens neufs.
            </p>
          </motion.div>

          {/* Conduite de Travaux */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Conduite de Travaux</h2>
            <p className="text-gray-600 mb-6">
              Supervision quotidienne des chantiers pour garantir qualité et délais.
            </p>
          </motion.div>

          {/* Métiers Transverses */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md md:w-[350px] hover:shadow-xl hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Métiers Transverses</h2>
            <p className="text-gray-600 mb-6">
              Fonctions support clés : juridique, RH, finance, marketing, etc.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NosMetiers;
