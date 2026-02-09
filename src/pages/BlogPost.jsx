import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getPostBySlug, SITE_URL } from "../data/blogPosts";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

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

function jsonLdForFAQ(post) {
  if (!post?.faq || post.faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.a,
      },
    })),
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-[#2b2b2b] mb-4">
            Article introuvable
          </h1>
          <p className="text-gray-600 mb-8">
            L’article que vous cherchez n’existe pas ou a été déplacé.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-[#c2b5a9] font-semibold hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" /> Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const path = `/blog/${post.slug}`;
  const structuredData = [
    jsonLdForArticle(post, path),
    jsonLdForFAQ(post),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12">
      <SEO
        title={`${post.title} | Miroir Foncier`}
        description={post.description}
        path={path}
        type="article"
        keywords={post.tags}
        imageAlt={post.title}
        publishedTime={post.date}
        modifiedTime={post.date}
        section="Immobilier au Sénégal"
        articleTags={post.tags}
        jsonLd={structuredData}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cover Image */}
        {/* Header without Cover Image */}
        <div className="p-6 md:p-10 w-full border-b border-gray-100">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#c2b5a9]/10 text-[#c2b5a9] rounded-full text-xs font-bold tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-[#2b2b2b]">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm md:text-base text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <User size={18} />
              {post.author}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-12 lg:px-20">
          {/* Post Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#2b2b2b] prose-a:text-[#c2b5a9] prose-img:rounded-xl">
            <p className="lead text-xl text-gray-600 mb-10 border-l-4 border-[#c2b5a9] pl-6 italic">
              {post.description}
            </p>

            {post.sections.map((s, i) => (
              <section key={i} className="mb-10">
                <h2
                  id={s.heading.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}
                  className="text-2xl md:text-3xl font-bold text-[#2b2b2b] mb-4 mt-8"
                >
                  {s.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ Section */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-16 pt-10 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-[#2b2b2b] mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {post.faq.map((qa, idx) => (
                  <details
                    key={idx}
                    className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[#2b2b2b]">
                      <span>{qa.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-2">
                      {qa.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA Box */}
          <div className="mt-16 bg-[#2b2b2b] rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Vous avez un projet immobilier ?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Que ce soit pour acheter, vendre ou louer, nos experts sont là
              pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#c2b5a9] hover:bg-[#a99b8e] text-white font-bold rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
              <Link
                to="/estimation"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-lg transition-colors"
              >
                Demander une estimation
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-500 hover:text-[#c2b5a9] transition-colors font-medium"
            >
              <ArrowLeft size={18} className="mr-2" /> Retour à la liste des
              articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
