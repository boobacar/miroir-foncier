import React from "react";

function RessourcesHumaines() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Ressources Humaines
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Chez <strong>Miroir Foncier</strong>, chaque collaborateur accède rapidement à des responsabilités stimulantes.  
Notre force ? Une diversité d’expertises et de métiers pour que chacun puisse révéler son talent et s’accomplir pleinement.  

Nous sommes convaincus que l’épanouissement professionnel repose sur un principe fondamental :  
La bonne personne, au bon moment, dans le bon environnement.  

Forte de cette vision, Miroir Foncier a su évoluer avec agilité et ambition pour s’imposer comme l’un des acteurs incontournables de l’immobilier au Sénégal.  

Notre groupe structure son excellence autour de 5 pôles d’expertise :  
- Immobilier résidentiel (Vente & investissement)  
- Résidences gérées (Confort et services premium)  
- Grands projets urbains (Aménagement et développement durable)  
- Tertiaire (Bureaux, commerces & structures de santé)  
- Logistique (Solutions adaptées aux enjeux économiques)  

Autant de secteurs porteurs, animés par des compétences complémentaires et une vision partagée : celle de bâtir l’avenir.
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
