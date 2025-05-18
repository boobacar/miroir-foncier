import React from "react";

function RessourcesHumaines() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Ressources Humaines
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Miroir Foncier</strong>, nous croyons que la richesse d’une entreprise repose avant tout sur ses talents humains.
          Nos services en Ressources Humaines visent à accompagner les entreprises du secteur immobilier et foncier dans la gestion efficace
          de leurs collaborateurs, de leur recrutement à leur développement professionnel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#c2b5a9] text-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Recrutement & Intégration</h3>
            <p className="text-sm">
              Nous identifions les meilleurs profils pour renforcer vos équipes, avec un processus de sélection rigoureux adapté au secteur foncier.
            </p>
          </div>

          <div className="bg-[#c2b5a9] text-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Formation & Développement</h3>
            <p className="text-sm">
              Des programmes de formation continue pour améliorer les compétences techniques, managériales et relationnelles de vos collaborateurs.
            </p>
          </div>

          <div className="bg-[#c2b5a9] text-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Gestion Administrative</h3>
            <p className="text-sm">
              Externalisation partielle ou complète de vos démarches administratives : contrats, fiches de paie, absences, obligations sociales.
            </p>
          </div>

          <div className="bg-[#c2b5a9] text-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Conseil RH Stratégique</h3>
            <p className="text-sm">
              Diagnostic organisationnel, accompagnement au changement, climat social… Nous vous aidons à prendre les bonnes décisions RH.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 text-sm">
            Pour toute demande ou collaboration, contactez notre département RH à{" "}
            <a
              href="mailto:rh@miroirfoncier.com"
              className="text-[#a9806a] font-semibold underline hover:text-[#8b6e5c]"
            >
              rh@miroirfoncier.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RessourcesHumaines;
