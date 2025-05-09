import React from "react";
import { useParams, Link } from "react-router-dom";
import biens from "../data/biens";

function Details() {
  const { id } = useParams();
  const bien = biens.find((b) => b.id === parseInt(id));

  if (!bien) {
    return (
      <div className="px-6 md:px-20 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Bien Introuvable</h1>
        <Link to="/" className="text-[#c2b5a9] font-semibold hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-8">{bien.title}</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={bien.image}
          alt={bien.title}
          className="h-96 w-full object-cover mb-6 rounded"
        />
        <h2 className="text-2xl font-semibold mb-4">{bien.price}</h2>
        <p className="text-gray-700 leading-relaxed">{bien.description}</p>

        <Link
          to="/"
          className="inline-block mt-8 text-[#c2b5a9] font-semibold hover:underline"
        >
          Retour Accueil
        </Link>
      </div>
    </div>
  );
}

export default Details;
