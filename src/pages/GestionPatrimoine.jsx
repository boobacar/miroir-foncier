import React from "react";

function GestionPatrimoine() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Gestion de Patrimoine</h2>
      <p className="mb-4">
        Confiez-nous la gestion de vos biens immobiliers : nous vous garantissons **tranquillité, rentabilité et sécurité**.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ce que nous faisons :</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Gestion locative : loyers, états des lieux, contrats, entretien</li>
        <li>Suivi administratif et fiscal : taxes foncières, assurances</li>
        <li>Représentation du propriétaire en cas d’absence ou d’expatriation</li>
        <li>Optimisation du rendement locatif et valorisation du bien</li>
      </ul>

      <p>
        Que vous soyez au Sénégal ou à l’étranger, nous assurons la gestion professionnelle de votre patrimoine avec **transparence et rigueur**.
      </p>
    </div>
    </div>
  );
}

export default GestionPatrimoine;
