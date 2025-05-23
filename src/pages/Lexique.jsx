import React from "react";

const lexique = {
  A: [
    {
      terme: "Acte authentique de vente",
      definition:
        "Il s’agit du contrat officiel finalisant la vente d’un bien immobilier et le transfert de propriété. Signé par les deux parties devant notaire, l’acte authentique de vente se concrétise par le versement des échéances correspondant à l’avancement des travaux, auquel s’ajoute le montant des frais de notaire calculés sur le montant total du prix d’acquisition.",
    },
    {
      terme: "Administrateur de biens",
      definition:
        "Professionnel qui effectue des opérations de gestion immobilière dans le cadre d'un mandat. On distingue : la gestion d'immeubles en copropriété où le gestionnaire occupe la fonction de syndic, et la gestion de biens immobiliers pour le compte de propriétaires où le gestionnaire s'occupe de la gestion locative : recouvrement des loyers, paiement des charges, entretien, réparations...",
    },
    {
      terme: "Appel de fonds",
      definition:
        "Pour tout achat d’un logement neuf en VEFA, le paiement du bien s’effectue au fur et à mesure de l’avancée des travaux. Lors de la signature du contrat de réservation, l’échéancier des appels de fonds est transmis à l’acheteur. Celui-ci mentionne les dates prévisionnelles ainsi que le pourcentage du prix demandé à chaque étape de la construction.",
    },
  ],
  B: [
    {
      terme: "Bail",
      definition:
        "Document définissant les relations contractuelles entre propriétaire et locataire. Certains sont soumis à une réglementation particulière, d'autres relèvent de la libre volonté des parties dans le cadre des dispositions du Code civil. On les appelle aussi 'contrats de location'.",
    },
  ],
  C: [
    {
      terme: "Cadastre",
      definition:
        "Documents administratifs incluant le plan parcellaire, l'état de section et la matrice cadastrale, permettant d'identifier les propriétés de chaque commune et pouvant être consultés à la Mairie correspondante.",
    },
    {
      terme: "Certificat d'urbanisme",
      definition:
        "Document précisant la situation d'un immeuble (terrain ou bâtiment) par rapport au plan d'urbanisme de la ville et indiquant les règles auxquelles toute nouvelle construction doit être soumise. Il est indispensable avant toute transaction immobilière et doit être demandé en Mairie ou à la DDE.",
    },
    {
      terme: "Constructeur",
      definition:
        "Terme pris au sens large recouvrant l'ensemble des 'intervenants à l'acte de construire' : architectes, techniciens, ingénieurs-conseils, bureaux d'études, promoteurs-constructeurs, entrepreneurs du bâtiment, fabricants et importateurs de 'composants' ou matériaux préfabriqués, contrôleurs techniques... En fait, toute personne qui vend, après achèvement, un ouvrage qu'elle a construit ou fait construire est réputée constructeur.",
    },
    {
      terme: "Contrat de réservation",
      definition:
        "Contrat préliminaire par lequel un vendeur s'engage à réserver à un acheteur, un immeuble ou une partie d'immeuble, l'acheteur devant en contrepartie verser sur un compte spécial un dépôt de garantie.",
    },
  ],
  D: [
    {
      terme: "Déclaration d'achèvement des travaux",
      definition:
        "Déclaration signée du constructeur qui doit être adressée à la mairie et à la Direction Départementale à l'Équipement (DDE) dans un délai de 30 jours à compter de l'achèvement des travaux.",
    },
    {
      terme: "Devis descriptif",
      definition:
        "Document donnant les caractéristiques détaillées de l'immeuble à construire, des travaux d'équipements extérieurs et intérieurs indispensables à l'implantation et à l'utilisation de l'immeuble.",
    },
    {
      terme: "DPE",
      definition:
        "Le Diagnostic de Performance Énergétique (DPE) doit être effectué avant la vente ou la mise en location d’un bien immobilier à usage principal d’habitation. Ce document technique sert à mesurer la consommation énergétique d’un logement. Il est établi par un diagnostiqueur qualifié, qui procède à l’évaluation de différents paramètres comme l’isolation, le type de chauffage, la production de gaz à effet de serre…",
    },
  ],
  E: [
    {
      terme: "Expert immobilier",
      definition:
        "Professionnel dont la fonction est d'évaluer la valeur vénale ou locative de biens immobiliers : immeubles d'habitation ou industriels, fonds de commerce, locaux, etc. En réalité, l'expertise immobilière recouvre deux sortes d'activités : ∙ l'une est réglementée, il s'agit de l'expertise judiciaire effectuée sur désignation de l'expert par un tribunal, ∙ l'autre est libre, il s'agit des expertises amiables ou conventionnelles.",
    },
  ],

  G: [
    {
      terme: "Garantie biennale",
      definition:
        "Souscrite par le constructeur, elle assure l'acheteur contre tous vices de construction pendant 2 ans.",
    },
    {
      terme: "Garantie d'achèvement",
      definition:
        "Souscrite par le constructeur auprès d'un organisme agréé, elle assure à l'acheteur l'achèvement de la construction ou le remboursement des sommes avancées.",
    },
    {
      terme: "Garantie de livraison",
      definition:
        "Souscrite par le constructeur dans le cadre d'une vente en état futur d'achèvement, elle garantit à l'acheteur qu'il sera livré à date et prix convenus. Elle est obligatoire dans les contrats de construction individuelle.",
    },
    {
      terme: "Garantie de parfait achèvement",
      definition:
        "Souscrite par l'entrepreneur, elle assure l'acheteur contre toutes les imperfections relevées par l'acheteur pendant 1 an.",
    },
    {
      terme: "Garantie décennale",
      definition:
        "Souscrite par le constructeur, elle assure l'acheteur contre tous vices de construction pendant 10 ans.",
    },
  ],
  H: [
    {
      terme: "Hors d'air",
      definition:
        "Un immeuble est déclaré hors d'air lorsqu'il est clos et couvert, mais que ses travaux de cloisonnement restent à faire.",
    },
    {
      terme: "Hors d'eau",
      definition:
        "Un immeuble est mis hors d'eau quand son gros œuvre est terminé (les murs extérieurs sont complètement édifiés) et que la toiture est posée ou la terrasse achevée.",
    },
    {
      terme: "HQE",
      definition:
        "La démarche Haute Qualité Environnementale® (HQE®) vise à améliorer durablement la qualité de vie du bâtiment. Elle minimise les impacts environnementaux et sanitaires résultant de la conception, de la construction, de l’usage ou de l’exploitation du bâtiment dans toutes les phases de son cycle de vie.",
    },
  ],

  I: [
    {
      terme: "Indice BT 01",
      definition:
        "Indice national du bâtiment, référence officielle de révision des prix de construction qui mesure l'évolution du coût des facteurs de production dans le bâtiment ; publié chaque mois.",
    },
    {
      terme: "Indice du Coût de la Construction (I.C.C.)",
      definition:
        "Il traduit l'évolution des prix dans le secteur immobilier. Il sert de référence pour l'indexation des mensualités de certaines formules de prêts et pour la révision des loyers.",
    },
  ],
  L: [
    {
      terme: "Levée des réserves",
      definition:
        "Dans le cadre d’une VEFA, l’acheteur a la possibilité d’émettre des réserves dans le procès-verbal de réception de son bien immobilier, s’il découvre des malfaçons ou des défauts de conformité. Du fait de l’application de la garantie de parfait achèvement, le promoteur est tenu d’effectuer la levée des réserves dans l’année qui suit.",
    },
    {
      terme: "Lot",
      definition:
        "Parcelle délimitée et bornée faisant partie d'un lotissement.",
    },
  ],

  M: [
    {
      terme: "Maître d'œuvre",
      definition:
        "Professionnel ou entreprise (architecte, constructeur, responsable de chantier...) qui dirige les travaux de construction.",
    },
    {
      terme: "Maître d'ouvrage",
      definition:
        "Personne physique ou morale pour le compte de qui les ouvrages de construction ou les travaux sont exécutés.",
    },
    {
      terme: "Marchand de biens",
      definition:
        "Commerçant dont l'activité consiste à acheter des immeubles pour son propre compte et à les revendre ensuite avec l'intention de réaliser un bénéfice. Cette activité n'est pas réglementée, donc n'offre pas les mêmes garanties que celles de l'agent immobilier.",
    },
  ],
  N: [
    {
      terme: "NF HABITAT",
      definition:
        "La certification NF Habitat concerne les logements neufs et garantit à l’acheteur la qualité technique de construction et un excellent niveau de confort et de sécurité. Avec la certification NF Habitat, le promoteur s’engage à respecter des niveaux très exigeants en termes de confort acoustique et thermique, de sécurité contre les risques d’intrusion, d’accessibilité aux personnes à mobilité réduite, de performance énergétique, de durabilité et d’aménagement des équipements ménagers. Il doit en outre fournir un service de qualité à l’acquéreur et en particulier une information claire, à toutes les étapes de son acquisition.",
    },
  ],

  P: [
    {
      terme: "Plan de masse",
      definition:
        "Plan présentant l'emplacement du projet de construction par rapport à son voisinage immédiat et indiquant les limites et l'orientation du terrain, l'implantation et la hauteur de la construction, le tracé des voies de desserte et des raccordements.",
    },
    {
      terme: "Plan de situation",
      definition:
        "Plan donnant la situation géographique du terrain concerné dans le périmètre de la commune dont il dépend.",
    },
    {
      terme: "Plan d'urbanisme",
      definition:
        "Plan dressé par un urbaniste et fixant le programme de l'aménagement d'une ville ou d'une agglomération : tracé des voies de circulation, emplacement des espaces libres et boisés, des installations publiques... Ce plan détermine l'affectation des différentes zones (quartiers d'affaires, zones industrielles, habitations collectives ou individuelles...) et prescrit les règles d'utilisation du sol et de construction.",
    },
    {
      terme: "P.O.S (Plan d'Occupation des Sols)",
      definition:
        "Consultable en mairie, il permet de connaître l'évolution prévue de l'environnement : zones protégées, implantations de routes, d'autoroutes, logements frappés d'alignement, etc.",
    },
    {
      terme: "Primo accédant",
      definition:
        "Personne qui n'a jamais été titulaire d'un droit de propriété immobilière, et qui achète pour la première fois un logement destiné à son propre usage.",
    },
    {
      terme: "Promoteur",
      definition:
        "Personne physique ou morale qui prend l'initiative de réaliser des opérations immobilières et assume toutes les étapes et démarches d'un projet de construction.",
    },
  ],
  R: [
    {
      terme: "Réception des travaux",
      definition:
        "Acte par lequel le maître d'ouvrage déclare accepter l'ouvrage (ou les travaux) sans ou avec réserves, en présence du constructeur. Cet acte intervient à la demande du maître d'ouvrage ou du constructeur. Si la réception n'est pas accomplie à l'amiable, elle peut être accordée judiciairement. Elle constitue le point de départ des différents délais de garantie.",
    },
    {
      terme: "Revenu cadastral",
      definition:
        "Il est égal à la valeur locative cadastrale diminuée d'un abattement forfaitaire de 50%.",
    },
    {
      terme: "Revenu foncier",
      definition:
        "Revenu émanant de la propriété foncière. Perçu par le propriétaire, il provient de la location ou de la vente d'un bien immobilier.",
    },
    {
      terme: "Revenu net foncier",
      definition:
        "Il est égal au revenu brut foncier diminué des charges fiscalement admises, à savoir : dépenses de réparation, d'entretien, d'amélioration, frais de gérance, intérêts des emprunts relatifs aux opérations précitées et à l'achat de l'immeuble, déduction forfaitaire.",
    },
    {
      terme: "RT 2012",
      definition:
        "La réglementation thermique (RT) française impose aux constructions neuves de respecter des niveaux de consommation énergétique plafonnés. La plus récente, mise en place en 2012, prévoit ainsi un plafond de 50 kilowattheures d’énergie primaire par an et par m². Cette limite est modulée en fonction de la zone géographique, de l’altitude, de la surface et de la destination du bâtiment.",
    },
  ],

  S: [
    {
      terme: "SCI (Société Civile Immobilière)",
      definition:
        "Société non commerciale destinée à être propriétaire d'un bien immobilier. Chaque associé fait des apports (immeubles, liquidités) et reçoit en contrepartie et proportionnellement des parts sociales nominatives. La loi n'impose aucun montant minimum de capital social.",
    },
    {
      terme: "SCPI (Société Civile de Placement Immobilier)",
      definition:
        "Société qui a pour objet l'acquisition et la gestion pour le compte d'associés, d'un patrimoine immobilier locatif à usage industriel, commercial ou privé. Elle est représentée par des parts non cotées en bourse.",
    },
    {
      terme: "Surface corrigée",
      definition:
        "Surface habitable de l'appartement, à laquelle on ajoute ou on retranche une certaine superficie suivant que le logement répond ou ne répond pas aux normes de confort.",
    },
    {
      terme: "Surface de plancher (hors œuvre nette)",
      definition:
        "Somme des surfaces des planchers de chaque niveau après déduction des combles et des sous-sols non aménageables pour l'habitation, des toitures terrasses, des balcons, des loggias, des surfaces non closes situées au rez-de-chaussée et des garages. Application ensuite d'une réduction forfaitaire de 5%.",
    },
    {
      terme: "Surface habitable",
      definition:
        "Surface d'un appartement strictement réservée à l'habitation. Elle ne tient donc pas compte de la superficie des escaliers, de la cave, des balcons et même de l'épaisseur des murs.",
    },
    {
      terme: "Surface hors œuvre brute (SHOB)",
      definition:
        "Ensemble des surfaces des planchers de chaque niveau d'une construction.",
    },
    {
      terme: "Surface hors tout",
      definition: "Surface résultant du mesurage extérieur d'une construction.",
    },
  ],
  T: [
    {
      terme: "Taxes immobilières",
      definition:
        "Elles se divisent en trois catégories : La taxe foncière est payable chaque année par les propriétaires fonciers. Le montant de cette taxe s'obtient en multipliant la valeur locative du bien par un taux révisable chaque année par les municipalités. La taxe d'habitation, calculée sur le même mode que la taxe foncière, est payée par la personne, propriétaire ou locataire, qui occupe les lieux. La taxe régionale (ou la taxe locale d'équipement) est payable par la personne qui effectue des travaux de construction ou d'agrandissement.",
    },
    {
      terme: "TMA",
      definition:
        "Dans le cadre d’un contrat d’acquisition, l’acheteur d’un logement neuf peut vouloir des travaux d’aménagement et de personnalisation, ayant des incidences sur le plan, appelés Travaux Modificatifs Acquéreurs (TMA). Pour être valides, ces travaux de modification doivent être conformes aux règles d’urbanisme et ne pas rallonger le calendrier prévu initialement. Les TMA peuvent faire l’objet d’un supplément de prix.",
    },
  ],

  V: [
    {
      terme: "Valeur locative",
      definition:
        "Montant du loyer que peut espérer obtenir un propriétaire en louant son appartement. La valeur locative est un élément d'appréciation non négligeable au moment de la vente du bien.",
    },
    {
      terme: "Valeur locative cadastrale",
      definition:
        "Fixée par l'administration fiscale, elle correspond, après actualisation, à la valeur locative de propriété appréciée lors de la dernière révision des évaluations foncières.",
    },
    {
      terme: "Valeur vénale",
      definition:
        "Estimation en argent de la valeur d'un bien à une période donnée.",
    },
    {
      terme: "Vente en l'état futur d'achèvement (VEFA)",
      definition:
        "Vente d'un logement avant sa construction. Acheté sur 'plans', le bien immobilier est payé en plusieurs fois, au fur et à mesure des étapes de la construction (fondations, gros œuvre...).",
    },
    {
      terme: "Vente clés en main",
      definition:
        "Vente d'un immeuble déjà construit que l'acquéreur achète sur la base d'un prix ferme et définitif.",
    },
    {
      terme: "Vente en viager",
      definition:
        "Contrat de vente immobilière par lequel l'acheteur, outre un versement initial librement choisi entre les parties (le 'bouquet'), versera au vendeur une rente durant toute la vie de ce dernier.",
    },
    {
      terme: "Vente par adjudication",
      definition:
        "Déclaration par laquelle un officier public attribue au plus offrant un bien mis aux enchères. Ce type de vente peut résulter soit d'une décision volontaire du propriétaire soit d'une procédure judiciaire.",
    },
  ],
};

const alphabet = Object.keys(lexique);

function Lexique() {
  const scrollToLetter = (letter) => {
    const section = document.getElementById(`letter-${letter}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
          Lexique de l'immobilier
        </h2>

        {/* Navigation alphabétique */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className="text-[#c2b5a9] font-semibold hover:underline"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Sections par lettre */}
        {alphabet.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mb-10">
            <div className="text-6xl font-bold text-[#e5d8c6] mb-6">
              {letter}
            </div>
            <div className="space-y-6">
              {lexique[letter].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#fdf9f3] border border-[#e5d8c6] rounded-lg shadow"
                >
                  <h4 className="text-xl font-semibold mb-2 text-[#c2b5a9]">
                    {item.terme}
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#c2b5a9] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#aa9e94] transition duration-300"
        aria-label="Retour en haut"
      >
        ↑ Haut
      </button>
    </div>
  );
}

export default Lexique;
