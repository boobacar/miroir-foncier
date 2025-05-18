import React from "react";

function Conseils() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Nos conseils immobiliers au Sénégal</h2>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Vérification des titres fonciers</h2>
        <p>
          Avant tout achat ou vente de terrain, assurez-vous que le bien dispose d’un **titre foncier** ou d’un **bail régulier**. 
          Consultez les services du **cadastre** ou un **notaire** pour éviter les litiges.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Éviter les achats sans notaire</h2>
        <p>
          Ne réalisez jamais une transaction foncière sans passer par un **notaire agréé**. 
          Il garantit la légalité du contrat, l’enregistrement et la protection juridique de l’acheteur comme du vendeur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Acheter dans une zone sécurisée</h2>
        <p>
          Privilégiez des zones reconnues et accessibles avec un plan d’urbanisme clair (Dakar, Diamniadio, Thiès, Saly, etc.).
          Évitez les terrains situés dans des zones de litige ou de spéculation illégale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Prévoir un budget pour l’aménagement</h2>
        <p>
          L’achat n’est que la première étape. Prévoyez un **budget complémentaire pour les travaux** : électricité, eau, 
          clôture, voirie… surtout dans les nouvelles zones de lotissement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Location meublée ou vide ?</h2>
        <p>
          Si vous voulez mettre votre bien en location, pensez à vos cibles. À Dakar, les **locations meublées** sont très recherchées 
          par les expatriés et professionnels en mission courte. En région, la **location vide** est plus stable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Astuce fiscale</h2>
        <p>
          Enregistrer votre bien et déclarer vos revenus locatifs vous permet d’éviter les pénalités fiscales et d’être en règle 
          avec la **Direction générale des impôts et domaines (DGID)**.
        </p>
      </section>
    </div>
    </div>
  );
}

export default Conseils;
