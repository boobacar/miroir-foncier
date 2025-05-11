import React from "react";

function GestionPatrimoine() {
  return (
    <div className="p-6">
      <h1 className="text-[#c2b5a9] text-3xl font-bold mb-7">Gestion de Patrimoine</h1>
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
  );
}

export default GestionPatrimoine;
