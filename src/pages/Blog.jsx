import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/animations";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 6;

  const totalPosts = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
  const currentPage =
    Number.isNaN(pageParam) || pageParam < 1
      ? 1
      : pageParam > totalPages
      ? totalPages
      : pageParam;

  const startIndex = (currentPage - 1) * pageSize;
  const currentPosts = blogPosts.slice(startIndex, startIndex + pageSize);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function goToPage(page) {
    const next = Math.min(Math.max(page, 1), totalPages);
    const params = new URLSearchParams(searchParams);
    if (next === 1) {
      params.delete("page");
    } else {
      params.set("page", String(next));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
      <SEO
        title="Blog immobilier au Sénégal | Miroir Foncier"
        description="Actualités, guides et conseils pour acheter, vendre, louer et investir au Sénégal. Prix à Dakar, procédures foncières et bonnes pratiques."
        path="/blog"
        type="website"
        keywords={[
          "blog immobilier Sénégal",
          "marché immobilier Dakar",
          "investissement locatif",
          "prix m2 Dakar 2025",
          "conseils achat terrain Sénégal",
        ]}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#6b5f55] mb-6">
          Blog immobilier au Sénégal
        </h1>
        <p className="text-gray-700 mb-8">
          Guides pratiques, tendances du marché et procédures pour sécuriser vos
          projets immobiliers à Dakar et dans tout le Sénégal.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {currentPosts.map((p, idx) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5f55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2e3d1] rounded-lg"
            >
              <motion.article
                className="bg-white card-glass rounded-lg shadow p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.03,
                }}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded"
                  loading="lazy"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-[#6b5f55]">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(p.date)} · {p.author}
                  </p>
                  <p className="text-gray-700 mb-3">{p.description}</p>
                  <div className="flex gap-2 flex-wrap text-xs text-[#6b5f55]">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="bg-[#f7efe7] border border-[#e5d8c6] rounded px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border text-sm ${
                  currentPage === 1
                    ? "border-gray-300 text-gray-400 cursor-not-allowed"
                    : "border-[#6b5f55] text-[#6b5f55] bg-white hover:bg-[#f7efe7]"
                }`}
              >
                Page précédente
              </button>
              <div className="flex gap-1">
                {pages.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`min-w-8 px-3 py-1 rounded text-sm border ${
                      page === currentPage
                        ? "bg-[#6b5f55] text-white border-[#6b5f55]"
                        : "bg-white text-[#6b5f55] border-[#e5d8c6] hover:bg-[#f7efe7]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border text-sm ${
                  currentPage === totalPages
                    ? "border-gray-300 text-gray-400 cursor-not-allowed"
                    : "border-[#6b5f55] text-[#6b5f55] bg-white hover:bg-[#f7efe7]"
                }`}
              >
                Page suivante
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Page {currentPage} sur {totalPages}
            </p>
          </div>
        )}

        <div className="mt-12 p-5 bg-white border border-[#e5d8c6] rounded">
          <h3 className="text-lg font-semibold text-[#6b5f55] mb-2">
            Besoin d’un accompagnement ?
          </h3>
          <p className="text-gray-700">
            Découvrez nos services: {" "}
            <Link to="/achat" className="underline">Achat</Link>, {" "}
            <Link to="/estimation" className="underline">Vente</Link>, {" "}
            <Link to="/location" className="underline">Location</Link>, {" "}
            <Link to="/transaction" className="underline">Transaction</Link> {" "}
            et {" "}
            <Link to="/amenagement" className="underline">Aménagement</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
