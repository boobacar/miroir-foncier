import { useEffect } from "react";
import { SITE_URL } from "../data/blogPosts";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  path = "",
  image = "/og-banner.webp",
  type = "website",
  keywords = [],
  jsonLd = [],
}) {
  const keywordsContent = Array.isArray(keywords)
    ? keywords.filter(Boolean).join(", ")
    : keywords;
  const ldSignature = JSON.stringify(jsonLd || []);

  useEffect(() => {
    const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

    if (title) {
      document.title = title;
      setMeta("title", title);
    }
    setMeta("description", description);
    setMeta("keywords", keywordsContent);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", `${SITE_URL}${image}`, "property");
    if (image.endsWith(".webp")) {
      setMeta("og:image:type", "image/webp", "property");
    }
    setMeta("og:locale", "fr_SN", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}${image}`);
    setLink("canonical", canonical);

    // Structured data (JSON-LD)
    document
      .querySelectorAll('script[data-dynamic-ld="true"]')
      .forEach((el) => el.remove());
    const ldArray = Array.isArray(jsonLd)
      ? jsonLd.filter(Boolean)
      : jsonLd
      ? [jsonLd]
      : [];
    ldArray.forEach((payload, idx) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.dynamicLd = "true";
      script.dataset.ldIndex = String(idx);
      script.text = JSON.stringify(payload);
      document.head.appendChild(script);
    });
  }, [title, description, path, image, type, keywordsContent, ldSignature]);

  return null;
}
