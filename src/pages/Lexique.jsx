import React from "react";

function Lexique() {
  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
            Lexique de l'immobilier</h2>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Acte de vente</h2>
          <p className="text-gray-700">
            Document juridique signé entre l’acheteur et le vendeur d’un bien immobilier, officialisant le transfert de propriété. Il est généralement rédigé par un notaire.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Compromis de vente</h2>
          <p className="text-gray-700">
            Avant-contrat dans lequel les deux parties s’engagent à conclure la vente à un prix déterminé. Il a une valeur légale importante et peut être accompagné d’un dépôt de garantie.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Frais de notaire</h2>
          <p className="text-gray-700">
            Ensemble des frais et taxes payés lors de la signature d’un acte authentique chez le notaire. Ils représentent environ 7 à 8% du prix de vente dans l’ancien.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Hypothèque</h2>
          <p className="text-gray-700">
            Garantie prise par une banque sur un bien immobilier en contrepartie d’un prêt. En cas de non-remboursement, la banque peut saisir le bien.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Surface habitable</h2>
          <p className="text-gray-700">
            Partie du logement utilisée pour l’habitation. Elle exclut les murs, escaliers, caves, balcons et combles non aménagés.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Titre foncier</h2>
          <p className="text-gray-700">
            Document officiel prouvant la propriété d’un terrain ou d’un immeuble. Il est délivré par les services du cadastre ou du domaine.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Viager</h2>
          <p className="text-gray-700">
            Mode de vente immobilière dans lequel l’acheteur paie une rente au vendeur jusqu’à son décès. Le vendeur conserve souvent un droit d’usage du logement.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Lexique;
