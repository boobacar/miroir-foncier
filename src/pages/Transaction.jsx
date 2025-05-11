import React from "react";

function Transaction() {
  return (
    <div className="p-6">
      <h1 className="text-[#c2b5a9] text-3xl font-bold mb-7">Transaction Immobilière</h1>
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
  );
}

export default Transaction;
