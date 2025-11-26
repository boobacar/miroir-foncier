import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import SEO from "./SEO";
import { SITE_URL } from "../data/blogPosts";

function breadcrumb(name, path) {
  const pageUrl = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  };
}

const ROUTE_SEO = [
  {
    match: (p) => p === "/",
    title: "Immobilier au Sénégal | Miroir Foncier - agence immobilière à Dakar",
    description:
      "Achat, vente, location, estimation et grands projets immobiliers à Dakar, Diamniadio, Saly et partout au Sénégal avec Miroir Foncier.",
    keywords: [
      "immobilier Sénégal",
      "agence immobilière Dakar",
      "achat maison Dakar",
      "location appartement Dakar",
      "estimation immobilière Sénégal",
    ],
    jsonLd: null,
  },
  {
    match: (p) => p === "/services",
    title: "Services immobiliers au Sénégal | Miroir Foncier",
    description:
      "Location, achat, vente, estimation, transaction sécurisée, aménagement et gestion de patrimoine immobilier au Sénégal.",
    keywords: [
      "services immobiliers Sénégal",
      "agence immobilière Dakar",
      "gestion locative Sénégal",
      "transaction immobilière sécurisée",
    ],
    jsonLd: breadcrumb("Services", "/services"),
  },
  {
    match: (p) => p === "/location",
    title: "Location immobilière à Dakar et au Sénégal | Miroir Foncier",
    description:
      "Appartements, villas et bureaux à louer à Dakar, Saly et partout au Sénégal avec bail sécurisé et accompagnement terrain.",
    keywords: [
      "location Dakar",
      "louer appartement Sénégal",
      "villa à louer Dakar",
      "bail locatif Sénégal",
    ],
    jsonLd: breadcrumb("Location", "/location"),
  },
  {
    match: (p) => p === "/achat",
    title: "Biens à vendre au Sénégal | Achat immobilier avec Miroir Foncier",
    description:
      "Terrains, appartements et villas à vendre au Sénégal. Due diligence, notaire et sécurisation des titres avec Miroir Foncier.",
    keywords: [
      "acheter immobilier Sénégal",
      "achat maison Dakar",
      "terrain à vendre Sénégal",
      "notaire immobilier Dakar",
    ],
    jsonLd: breadcrumb("Achat", "/achat"),
  },
  {
    match: (p) => p === "/estimation",
    title: "Estimation immobilière à Dakar et au Sénégal | Miroir Foncier",
    description:
      "Demandez une estimation fiable de votre maison, villa ou appartement au Sénégal pour vendre au juste prix.",
    keywords: [
      "estimation immobilière Sénégal",
      "estimer maison Dakar",
      "prix immobilier Dakar",
    ],
    jsonLd: breadcrumb("Estimation", "/estimation"),
  },
  {
    match: (p) => p === "/transaction",
    title: "Transaction immobilière sécurisée au Sénégal | Miroir Foncier",
    description:
      "Audit des titres, notaire, promesse de vente et acte authentique : sécurisez vos transactions immobilières au Sénégal.",
    keywords: [
      "transaction immobilière Sénégal",
      "sécuriser achat immobilier",
      "notaire Dakar",
    ],
    jsonLd: breadcrumb("Transaction", "/transaction"),
  },
  {
    match: (p) => p === "/amenagement",
    title: "Aménagement et grands projets immobiliers au Sénégal",
    description:
      "Assistance à maîtrise d’ouvrage, urbanisme, lotissements et projets d’envergure partout au Sénégal.",
    keywords: [
      "aménagement urbain Sénégal",
      "lotissement Sénégal",
      "projet immobilier Dakar",
    ],
    jsonLd: breadcrumb("Aménagement", "/amenagement"),
  },
  {
    match: (p) => p === "/gestion-patrimoine",
    title: "Gestion de patrimoine immobilier au Sénégal | Miroir Foncier",
    description:
      "Optimisation de la rentabilité locative, suivi d’actifs, fiscalité et transmission de patrimoine immobilier au Sénégal.",
    keywords: [
      "gestion de patrimoine Sénégal",
      "rentabilité locative Dakar",
      "gestion immobilière Sénégal",
    ],
    jsonLd: breadcrumb("Gestion de patrimoine", "/gestion-patrimoine"),
  },
  {
    match: (p) => p === "/a-propos",
    title: "À propos de Miroir Foncier | Agence immobilière au Sénégal",
    description:
      "Cabinet immobilier sénégalais engagé pour des projets éthiques et durables : vente, location, aménagement et conseil.",
    keywords: [
      "agence immobilière Sénégal",
      "cabinet immobilier Dakar",
      "immobilier responsable Sénégal",
    ],
    jsonLd: breadcrumb("À propos", "/a-propos"),
  },
  {
    match: (p) => p === "/contact",
    title: "Contact Miroir Foncier | Agence immobilière à Dakar",
    description:
      "Prenez rendez-vous avec Miroir Foncier pour vos projets immobiliers au Sénégal : achat, vente, location ou estimation.",
    keywords: [
      "contact agence immobilière Dakar",
      "immobilier Sénégal contact",
    ],
    jsonLd: breadcrumb("Contact", "/contact"),
  },
  {
    match: (p) => p === "/nos-metiers",
    title: "Métiers de Miroir Foncier | Développement foncier et construction",
    description:
      "Développement foncier, conception technique, conduite de travaux et métiers transverses au service de l’immobilier au Sénégal.",
    keywords: [
      "développement foncier Sénégal",
      "conception technique immobilier",
      "construction Dakar",
    ],
    jsonLd: breadcrumb("Nos métiers", "/nos-metiers"),
  },
  {
    match: (p) => p === "/nous-rejoindre",
    title: "Carrières | Rejoindre Miroir Foncier",
    description:
      "Déposez votre candidature pour rejoindre l’équipe Miroir Foncier et bâtir l’immobilier de demain au Sénégal.",
    keywords: [
      "emploi immobilier Sénégal",
      "recrutement immobilier Dakar",
    ],
    jsonLd: breadcrumb("Nous rejoindre", "/nous-rejoindre"),
  },
  {
    match: (p) => p === "/conseils",
    title: "Conseils immobiliers au Sénégal | Miroir Foncier",
    description:
      "Bonnes pratiques pour acheter, vendre ou louer au Sénégal : titres fonciers, notaire, budget et fiscalité.",
    keywords: [
      "conseils immobiliers Sénégal",
      "acheter terrain Sénégal",
      "vendre maison Dakar",
    ],
    jsonLd: breadcrumb("Conseils", "/conseils"),
  },
  {
    match: (p) => p === "/immobilier-dakar",
    title: "Immobilier à Dakar | Achat, vente, location | Miroir Foncier",
    description:
      "Agence immobilière à Dakar pour acheter, vendre ou louer : appartements, villas, bureaux. Due diligence, notaire et gestion locative.",
    keywords: [
      "immobilier Dakar",
      "agence immobilière Dakar",
      "achat appartement Dakar",
      "location Dakar",
      "vente villa Dakar",
    ],
    jsonLd: breadcrumb("Immobilier à Dakar", "/immobilier-dakar"),
  },
  {
    match: (p) => p === "/immobilier-saly",
    title: "Immobilier à Saly / Mbour | Villas et saisonnier | Miroir Foncier",
    description:
      "Villas, résidences et terrains à Saly, Mbour et Somone. Achat sécurisé, location saisonnière et gestion avec Miroir Foncier.",
    keywords: [
      "immobilier Saly",
      "agence immobilière Saly",
      "acheter villa Saly",
      "location saisonnière Saly",
      "immobilier Petite Côte",
    ],
    jsonLd: breadcrumb("Immobilier à Saly", "/immobilier-saly"),
  },
  {
    match: (p) => p === "/immobilier-diamniadio",
    title: "Immobilier à Diamniadio | Terrains et VEFA | Miroir Foncier",
    description:
      "Investir à Diamniadio : terrains viabilisés, VEFA, zones industrielles. Urbanisme, permis et notaire avec Miroir Foncier.",
    keywords: [
      "immobilier Diamniadio",
      "terrain Diamniadio",
      "investir Diamniadio",
      "VEFA Diamniadio",
      "zone économique Diamniadio",
    ],
    jsonLd: breadcrumb("Immobilier à Diamniadio", "/immobilier-diamniadio"),
  },
  {
    match: (p) => p === "/lexique",
    title: "Lexique immobilier Sénégal | Définitions juridiques et techniques",
    description:
      "Définitions claires des termes immobiliers et fonciers utilisés au Sénégal pour sécuriser vos projets.",
    keywords: [
      "lexique immobilier Sénégal",
      "vocabulaire foncier",
      "termes juridiques immobilier",
    ],
    jsonLd: breadcrumb("Lexique", "/lexique"),
  },
  {
    match: (p) => p === "/ressources-humaines",
    title: "Ressources humaines Miroir Foncier | Talents et formations",
    description:
      "Recrutement, formation et conseil RH dédiés aux métiers de l’immobilier et du foncier au Sénégal.",
    keywords: [
      "ressources humaines immobilier",
      "formation immobilier Sénégal",
      "talents fonciers Dakar",
    ],
    jsonLd: breadcrumb("Ressources humaines", "/ressources-humaines"),
  },
];

function normalizePath(pathname) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export default function RouteSEO() {
  const { pathname } = useLocation();

  const config = useMemo(() => {
    const normalized = normalizePath(pathname);

    // Pages blog et articles gèrent leur SEO individuellement
    if (normalized.startsWith("/blog")) return null;
    if (normalized.startsWith("/details")) return null;

    const matched = ROUTE_SEO.find((entry) =>
      typeof entry.match === "function"
        ? entry.match(normalized)
        : entry.match === normalized
    );

    if (matched) return { ...matched, path: normalized, type: "website" };

    return {
      title:
        "Immobilier au Sénégal | Miroir Foncier - agence immobilière à Dakar",
      description:
        "Achat, vente, location, estimation et accompagnement juridique pour vos projets immobiliers au Sénégal.",
      path: normalized,
      type: "website",
      keywords: ["immobilier Sénégal", "agence immobilière Dakar"],
    };
  }, [pathname]);

  if (!config) return null;
  return <SEO {...config} />;
}
