import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, User, Tag } from "lucide-react";

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

  // tri décroissant pour afficher les articles les plus récents en premier
  const sortedPosts = blogPosts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPosts = sortedPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
  const currentPage =
    Number.isNaN(pageParam) || pageParam < 1
      ? 1
      : pageParam > totalPages
        ? totalPages
        : pageParam;

  const startIndex = (currentPage - 1) * pageSize;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + pageSize);

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
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12">
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

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c2b5a9] font-bold tracking-widest text-sm uppercase mb-2 block">
            Actualités
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-6">
            Le Blog Immobilier
          </h1>
          <p className="text-gray-600 text-lg">
            Guides pratiques, tendances du marché et conseils d'experts pour
            réussir vos projets immobiliers au Sénégal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((p, idx) => (
            <motion.article
              key={p.slug}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#c2b5a9]/30 transition-all duration-300 overflow-hidden flex flex-col h-full group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={`/blog/${p.slug}`}
                className="block relative h-56 overflow-hidden"
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2b2b2b] uppercase tracking-wide">
                  {p.tags[0]}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(p.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {p.author}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#2b2b2b] mb-3 leading-tight group-hover:text-[#c2b5a9] transition-colors">
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {p.description}
                </p>

                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-flex items-center text-[#c2b5a9] font-semibold text-sm hover:text-[#a99b8e] transition-colors mt-auto"
                >
                  Lire l'article{" "}
                  <ChevronRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Précédent
            </button>

            {pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                  page === currentPage
                    ? "bg-[#c2b5a9] text-white shadow-md transform scale-105"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
