import React from "react";

function Transaction() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Transaction Immobilière</h2>
      <p className="mb-4">
        Nous vous accompagnons dans toutes vos opérations immobilières au Sénégal : **achat**, **vente**, **permutation** ou **cession** de biens.
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Évaluation juste et fiable de votre bien</li>
        <li>Rédaction de contrats en collaboration avec des notaires</li>
        <li>Assistance pour les démarches administratives et fiscales</li>
        <li>Accompagnement pour les négociations et visites</li>
      </ul>

      <p>
        Grâce à notre connaissance approfondie du marché sénégalais et notre réseau de partenaires (notaires, banques, promoteurs),
        nous assurons des transactions **transparentes, sécurisées et rapides**.
      </p>
    </div>
    </div>
  );
}

export default Transaction;
