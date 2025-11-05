import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPostBySlug, SITE_URL } from "../data/blogPosts";

const LABELS = {
  services: "Expertises",
  location: "Location",
  estimation: "Estimation",
  achat: "Achat",
  transaction: "Transaction immobilière",
  amenagement: "Aménagement & Grands Projets",
  "gestion-patrimoine": "Gestion de Patrimoine",
  lexique: "Lexique de l'immobilier",
  conseils: "Nos conseils",
  "ressources-humaines": "Ressources humaines",
  "nos-metiers": "Nos métiers",
  "nous-rejoindre": "Nous rejoindre",
  details: "Détails",
  "a-propos": "À propos",
  contact: "Contact",
  blog: "Blog",
};

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length === 0) return [];

    const list = [{ label: "Accueil", to: "/" }];
    let acc = "";
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      acc += `/${seg}`;

      // Dynamic cases
      if (i > 0 && segments[i - 1] === "blog") {
        const post = getPostBySlug(seg);
        list.push({ label: post?.title || seg, to: acc });
        continue;
      }
      if (i > 0 && segments[i - 1] === "details") {
        list.push({ label: `Bien #${seg}`, to: acc });
        continue;
      }

      // Static label or fallback from segment
      const label = LABELS[seg] || seg.replace(/-/g, " ");
      list.push({ label, to: acc });
    }
    return list;
  }, [location.pathname]);

  if (crumbs.length <= 1) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.label,
      item: `${SITE_URL}${c.to}`,
    })),
  };

  return (
    <div className="bg-[#f2e3d1] px-4 md:px-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <nav aria-label="Fil d'Ariane" className="max-w-6xl mx-auto py-3 text-sm text-gray-700">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={c.to} className="inline-flex items-center">
              {i > 0 && <span className="mx-2 text-gray-400">›</span>}
              {isLast ? (
                <span className="text-gray-900" aria-current="page">{c.label}</span>
              ) : (
                <Link to={c.to} className="underline hover:text-[#6b5f55]">{c.label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

