import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import biens from "../data/biens";
import SEO from "../components/SEO";
import { SITE_URL } from "../data/blogPosts";

function Details() {
  const { id } = useParams();
  const bien = biens.find((b) => b.id === parseInt(id));
  const priceValue = useMemo(() => {
    if (!bien?.price) return undefined;
    const numeric = bien.price.replace(/[^\d]/g, "");
    return numeric ? Number(numeric) : undefined;
  }, [bien]);

  if (!bien) {
    return (
      <div className="px-6 md:px-20 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Bien Introuvable</h1>
        <Link to="/" className="text-[#c2b5a9] font-semibold hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const path = `/details/${bien.id}`;
  const intentKeywords =
    bien.type === "location"
      ? ["location Dakar", "louer appartement Sénégal", "villa à louer"]
      : ["achat immobilier Sénégal", "maison à vendre Dakar", "terrain Sénégal"];
  const imageUrl = new URL(bien.image, SITE_URL).href;
  const offer = {
    "@type": "Offer",
    priceCurrency: "XOF",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}${path}`,
    itemCondition: "https://schema.org/NewCondition",
    ...(priceValue ? { price: priceValue } : {}),
  };
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: bien.title,
      description: bien.description,
      image: imageUrl,
      url: `${SITE_URL}${path}`,
      offers: offer,
    },
  ];

  return (
    <div className="px-6 md:px-20 py-16">
      <SEO
        title={`${bien.title} | Immobilier au Sénégal - Miroir Foncier`}
        description={bien.description}
        path={path}
        type="product"
        keywords={intentKeywords}
        image={bien.image}
        jsonLd={structuredData}
      />
      <h1 className="text-4xl font-bold mb-8">{bien.title}</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={bien.image}
          alt={bien.title}
          className="h-96 w-full object-cover mb-6 rounded"
        />
        <h2 className="text-2xl font-semibold mb-4">{bien.price}</h2>
        <p className="text-gray-700 leading-relaxed">{bien.description}</p>

        <Link
          to="/"
          className="inline-block mt-8 text-[#c2b5a9] font-semibold hover:underline"
        >
          Retour Accueil
        </Link>
      </div>
    </div>
  );
}

export default Details;
