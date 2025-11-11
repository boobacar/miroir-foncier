import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
      <SEO
        title="Blog immobilier au Sénégal | Miroir Foncier"
        description="Actualités, guides et conseils pour acheter, vendre, louer et investir au Sénégal. Prix à Dakar, procédures foncières et bonnes pratiques."
        path="/blog"
        type="website"
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
          {blogPosts.map((p, idx) => (
            <motion.article
              key={p.slug}
              className="bg-white card-glass rounded-lg shadow p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.03 }}
            >
              <Link to={`/blog/${p.slug}`} className="block">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded"
                  loading="lazy"
                />
              </Link>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-[#6b5f55]">
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
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
          ))}
        </div>

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
