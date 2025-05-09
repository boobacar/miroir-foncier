// src/data/biens.js
import image from "../assets/hero.jpg"; // Juste pour tester

const biens = [
  {
    id: 1,
    type: "location",
    title: "Appartement F3 Dakar Plateau",
    price: "300.000 FCFA/mois",
    image: image, // <--- CORRECT
    description:
      "Bel appartement lumineux situé en plein cœur du Plateau, proche de toutes commodités.",
  },
  {
    id: 2,
    type: "location",
    title: "Villa aux Almadies",
    price: "1.200.000 FCFA/mois",
    image: image,
    description:
      "Villa moderne avec piscine privée, idéale pour famille ou diplomate.",
  },
  {
    id: 3,
    type: "location",
    title: "Studio Mermoz",
    price: "150.000 FCFA/mois",
    image: image,
    description:
      "Studio meublé à Mermoz, parfait pour étudiant ou jeune professionnel.",
  },
  {
    id: 101,
    type: "achat",
    title: "Terrain à Ngor",
    price: "35.000.000 FCFA",
    image: image,
    description: "Terrain de 300m² idéalement situé pour projet immobilier.",
  },
  {
    id: 102,
    type: "achat",
    title: "Appartement Haut Standing Point E",
    price: "90.000.000 FCFA",
    image: image,
    description:
      "Appartement 3 chambres + salon moderne, quartier résidentiel sécurisé.",
  },
  {
    id: 103,
    type: "achat",
    title: "Villa à vendre Saly",
    price: "120.000.000 FCFA",
    image: image,
    description:
      "Magnifique villa pieds dans l'eau, 4 chambres, piscine, jardin tropical.",
  },
];

export default biens;
