import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getPostBySlug, SITE_URL } from "../data/blogPosts";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function jsonLdForArticle(post, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}${post.cover}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: "Miroir Foncier",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-[#6b5f55] mb-4">
            Article introuvable
          </h1>
          <p>
            L’article que vous cherchez n’existe pas. Retourner au {" "}
            <Link to="/blog" className="underline">blog</Link>.
          </p>
        </div>
      </div>
    );
  }

  const path = `/blog/${post.slug}`;

  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20">
      <SEO
        title={`${post.title} | Miroir Foncier`}
        description={post.description}
        path={path}
        type="article"
      />

      <script type="application/ld+json">
        {JSON.stringify(jsonLdForArticle(post, path))}
      </script>

      <nav className="max-w-3xl mx-auto text-sm mb-4 text-gray-600">
        <Link to="/" className="underline">Accueil</Link> · {" "}
        <Link to="/blog" className="underline">Blog</Link> · {" "}
        <span className="text-gray-800">{post.title}</span>
      </nav>

      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#6b5f55] mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {formatDate(post.date)} · {post.author}
          </p>

          {post.sections.map((s, i) => (
            <section key={i} className="mb-6">
              <h2
                id={s.heading.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}
                className="text-xl font-semibold text-[#6b5f55] mb-2"
              >
                {s.heading}
              </h2>
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </section>
          ))}

          <div className="mt-8 p-4 bg-[#fdf9f3] border border-[#e5d8c6] rounded">
            <p className="text-gray-800">
              Vous avez un projet d’{" "}
              <Link to="/achat" className="underline">achat</Link>, {" "}
              <Link to="/estimation" className="underline">vente</Link> ou {" "}
              <Link to="/location" className="underline">location</Link> ? {" "}
              Contactez {" "}
              <Link to="/contact" className="underline">Miroir Foncier</Link>.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

