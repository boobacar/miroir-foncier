// src/data/biens.js
import apf3 from "../assets/apf3.jpeg";
import villasaly from "../assets/villasaly.jpg"
import terrainngor from "../assets/terrainngor.jpg"
import appartHS from "../assets/appartHS.JPEG"
import villaalmadies from "../assets/villaalmadies.jpg"
import studiomermoz from "../assets/studiomermoz.jpg"

const biens = [
  {
    id: 1,
    type: "location",
    title: "Appartement F3 Dakar Plateau",
    price: "300.000 FCFA/mois",
    image: apf3, // <--- CORRECT
    description:
      "Bel appartement lumineux situé en plein cœur du Plateau, proche de toutes commodités.",
  },
  {
    id: 2,
    type: "location",
    title: "Villa aux Almadies",
    price: "1.200.000 FCFA/mois",
    image: villaalmadies,
    description:
      "Villa moderne avec piscine privée, idéale pour famille ou diplomate.",
  },
  {
    id: 3,
    type: "location",
    title: "Studio Mermoz",
    price: "150.000 FCFA/mois",
    image: studiomermoz,
    description:
      "Studio meublé à Mermoz, parfait pour étudiant ou jeune professionnel.",
  },
  {
    id: 101,
    type: "achat",
    title: "Terrain à Ngor",
    price: "35.000.000 FCFA",
    image: terrainngor,
    description: "Terrain de 300m² idéalement situé pour projet immobilier.",
  },
  {
    id: 102,
    type: "achat",
    title: "Appartement Haut Standing Point E",
    price: "90.000.000 FCFA",
    image: appartHS,
    description:
      "Appartement 3 chambres + salon moderne, quartier résidentiel sécurisé.",
  },
  {
    id: 103,
    type: "achat",
    title: "Villa à vendre Saly",
    price: "120.000.000 FCFA",
    image: villasaly,
    description:
      "Magnifique villa pieds dans l'eau, 4 chambres, piscine, jardin tropical.",
  },
];

export default biens;
