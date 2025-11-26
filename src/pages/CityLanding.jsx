import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import heroImage from "../assets/hero.jpg";

const cities = {
  dakar: {
    name: "Dakar",
    path: "/immobilier-dakar",
    h1: "Immobilier à Dakar",
    pitch:
      "Capitale dynamique, demande locative forte et marché premium en croissance. Nous sécurisons vos acquisitions et ventes à Dakar.",
    description:
      "Appartements, villas et bureaux à Dakar. Due diligence foncière, négociation, financement et mise en location clés en main.",
    keywords: [
      "immobilier Dakar",
      "agence immobilière Dakar",
      "achat appartement Dakar",
      "villa à vendre Dakar",
      "location Dakar",
    ],
    points: [
      "Quartiers premium : Almadies, Fann, Mermoz, Point E, Plateau.",
      "Demandes locatives soutenues (expats, ONG, entreprises).",
      "Sécurisation juridique : titres fonciers, notaire, certificats.",
    ],
    neighborhoods: [
      "Almadies",
      "Mermoz",
      "Plateau",
      "Fann-Point E",
      "Ngor / Yoff",
      "Foire / VDN",
    ],
    metrics: [
      { label: "Rendement locatif moyen", value: "5–8 %" },
      { label: "Délai moyen de vente", value: "45–90 jours" },
      { label: "Clients qualifiés en base", value: "800+" },
    ],
  },
  saly: {
    name: "Saly & Petite Côte",
    path: "/immobilier-saly",
    h1: "Immobilier à Saly / Mbour",
    pitch:
      "Destination balnéaire prisée, parfaite pour résidence secondaire et location saisonnière. Nous optimisons votre rendement.",
    description:
      "Villas pieds dans l’eau, résidences gardiennées, terrains à Saly, Mbour et Somone. Mise en location saisonnière et gestion.",
    keywords: [
      "immobilier Saly",
      "acheter villa Saly",
      "location saisonnière Saly",
      "villa à vendre Petite Côte",
      "agence immobilière Mbour",
    ],
    points: [
      "Biens recherchés : villas avec piscine, résidences sécurisées, terrains viabilisés.",
      "Location saisonnière dynamique (tourisme, séjours professionnels).",
      "Accompagnement complet : acte de vente, ameublement, gestion locative.",
    ],
    neighborhoods: ["Saly Center", "Saly Nord", "Ngaparou", "Somone", "Mbour"],
    metrics: [
      { label: "Occupation saisonnière", value: "55–75 %" },
      { label: "Rendement brut cible", value: "8–12 %" },
      { label: "Partenaires conciergerie", value: "5+" },
    ],
  },
  diamniadio: {
    name: "Diamniadio",
    path: "/immobilier-diamniadio",
    h1: "Immobilier à Diamniadio",
    pitch:
      "Nouveau hub urbain (administrations, universités, industrie). Fort potentiel de valorisation à moyen terme.",
    description:
      "Terrains viabilisés, immeubles neufs et zones industrielles à Diamniadio. Études, permis, notaire et suivi chantier.",
    keywords: [
      "immobilier Diamniadio",
      "terrain à Diamniadio",
      "investir Diamniadio",
      "zone économique Diamniadio",
      "permis construire Diamniadio",
    ],
    points: [
      "Proximité AIBD, TER, autoroute : accessibilité nationale.",
      "Opportunités VEFA et terrains à viabiliser avec fortes perspectives.",
      "Montage de dossiers administratifs : urbanisme, permis, morcellement.",
    ],
    neighborhoods: [
      "Zone Ministérielle",
      "Université Amadou Mahtar Mbow",
      "Zone Industrielle",
      "Cité du Savoir",
      "Prolongement AIBD",
    ],
    metrics: [
      { label: "Potentiel de valorisation", value: "+15–30 % (3 ans)" },
      { label: "Délai moyen d’instruction", value: "4–8 semaines" },
      { label: "Projets accompagnés", value: "30+" },
    ],
  },
};

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-3xl font-bold text-[#6b5f55] mb-2">{title}</h2>
      {subtitle && <p className="text-gray-700">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="bg-[#f7efe7] border border-[#e5d8c6] text-[#6b5f55] rounded-full px-3 py-1 text-sm">
      {children}
    </span>
  );
}

export default function CityLanding({ cityKey }) {
  const city = cities[cityKey];

  if (!city) {
    return (
      <div className="bg-[#f2e3d1] py-16 px-4 md:px-20">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-[#6b5f55] mb-4">
            Ville non trouvée
          </h1>
          <p className="text-gray-700 mb-6">
            La page demandée n’existe pas encore. Retour à l’accueil pour
            découvrir nos offres immobilières au Sénégal.
          </p>
          <Link to="/" className="underline text-[#6b5f55]">
            Revenir à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: `Miroir Foncier - ${city.name}`,
      areaServed: city.name,
      url: `https://www.miroirfoncier.com${city.path}`,
      logo: "https://www.miroirfoncier.com/logo.png",
      image: "https://www.miroirfoncier.com/og-banner.webp",
      sameAs: [
        "https://www.facebook.com/miroirfoncier",
        "https://www.instagram.com/miroirfoncier",
        "https://www.linkedin.com/company/miroirfoncier",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "SN",
        addressLocality: "Dakar",
      },
      makesOffer: ["Vente", "Location", "Estimation", "Gestion"].map(
        (service) => ({
          "@type": "Offer",
          itemOffered: service,
        })
      ),
    },
  ];

  return (
    <div className="bg-[#f2e3d1]">
      <SEO
        title={`${city.h1} | Miroir Foncier`}
        description={city.description}
        path={city.path}
        keywords={city.keywords}
        jsonLd={jsonLd}
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 text-white">
          <div className="max-w-3xl">
            <p className="uppercase text-sm tracking-[0.2em] text-[#f5d8c1] mb-3">
              Immobilier au Sénégal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {city.h1}
            </h1>
            <p className="text-lg md:text-xl text-[#f7eee6] mb-6">
              {city.pitch}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {city.keywords.slice(0, 4).map((kw) => (
                <Pill key={kw}>{kw}</Pill>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#6b5f55] px-5 py-3 rounded font-semibold shadow hover:-translate-y-0.5 transition transform"
              >
                Parler à un conseiller
              </Link>
              <Link
                to="/estimation"
                className="bg-[#c2b5a9] text-white px-5 py-3 rounded font-semibold shadow hover:-translate-y-0.5 transition transform"
              >
                Estimer mon bien
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <SectionTitle
          title={`Pourquoi investir à ${city.name} ?`}
          subtitle={city.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {city.points.map((point) => (
            <div
              key={point}
              className="bg-white card-glass rounded-lg shadow p-5 border border-[#e5d8c6]"
            >
              <p className="text-gray-800 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-12">
        <SectionTitle
          title="Services clés sur ce marché"
          subtitle="Nous combinons expertise terrain, juridique et marketing pour accélérer votre projet."
        />
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-[#fdf9f3] border border-[#e5d8c6] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#6b5f55] mb-2">
              Acheter en toute sécurité
            </h3>
            <p className="text-gray-700 mb-4">
              Due diligence foncière, négociation, notaire et montage
              financier/VEFA. Accompagnement de l’offre à la signature.
            </p>
            <Link to="/achat" className="underline text-[#6b5f55]">
              Voir nos biens à vendre
            </Link>
          </div>
          <div className="p-6 bg-[#fdf9f3] border border-[#e5d8c6] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#6b5f55] mb-2">
              Louer & gérer
            </h3>
            <p className="text-gray-700 mb-4">
              Recherche de locataires, baux sécurisés, état des lieux, suivi des
              loyers et reporting. Locations longues et saisonnières.
            </p>
            <Link to="/location" className="underline text-[#6b5f55]">
              Découvrir la location
            </Link>
          </div>
          <div className="p-6 bg-[#fdf9f3] border border-[#e5d8c6] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#6b5f55] mb-2">
              Valoriser & céder
            </h3>
            <p className="text-gray-700 mb-4">
              Estimation précise, home staging digital, stratégie de mise en
              marché et gestion des offres jusqu’à l’acte authentique.
            </p>
            <Link to="/estimation" className="underline text-[#6b5f55]">
              Estimer mon bien
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <SectionTitle
          title={`Quartiers à ${city.name}`}
          subtitle="Cibles prioritaires pour la liquidité, la location et la valorisation."
        />
        <div className="flex flex-wrap gap-3">
          {city.neighborhoods.map((q) => (
            <Pill key={q}>{q}</Pill>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-12">
        <SectionTitle
          title="Chiffres clés"
          subtitle="Indicateurs de marché pour guider votre décision."
        />
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {city.metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-lg shadow-sm border border-[#e5d8c6] text-center"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                {m.label}
              </p>
              <p className="text-2xl font-bold text-[#6b5f55]">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="bg-[#c2b5a9] text-white rounded-lg p-8 md:p-10 shadow">
          <h3 className="text-2xl font-bold mb-3">
            Un conseiller Miroir Foncier vous répond sous 24h
          </h3>
          <p className="mb-6 text-[#f7eee6]">
            Expliquez-nous votre projet à {city.name} : achat, vente,
            location/gestion ou étude de terrain. Nous organisons une visite ou
            un audit rapide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#6b5f55] px-5 py-3 rounded font-semibold shadow hover:-translate-y-0.5 transition transform"
            >
              Contact rapide
            </Link>
            <Link
              to="/estimation"
              className="border border-white text-white px-5 py-3 rounded font-semibold hover:bg-white/10 transition"
            >
              Estimer mon bien
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const cityLandingConfig = cities;
