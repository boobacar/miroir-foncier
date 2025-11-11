import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInX,
  scaleIn,
  staggerContainer,
} from "../components/animations";
import heroImage from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import { MdHome } from "react-icons/md"; // maison / location
import { FaTags } from "react-icons/fa"; // étiquette / vente
import { FiShoppingCart } from "react-icons/fi"; // achat
import { AiOutlineFilePdf } from "react-icons/ai";
import PdfViewerModal from "../components/PdfViewerModal";
import VilleVerteSlider from "../components/VilleVerteSlider";
import brochureVilleVerte from "../assets/BROCHURE VILLE VERTE (compressed).pdf";
import plaquetteLesDunes from "../assets/PLAQUETTE LES DUNES v2 (compressed).pdf";
import { blogPosts } from "../data/blogPosts";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [pdf, setPdf] = useState(null); // {src, title}

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-800 bg-[#f2e3d1]">
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPositionY: `${offsetY * 0.5}px`,
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          className="bg-black/50 p-6 rounded-md z-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trouvez votre bien idéal avec Miroir Foncier
          </h1>
          <p className="text-white text-lg mb-6">
            Location, Vente, Achat – Votre rêve, notre priorité.
          </p>
          <Link
            to="/services"
            className="bg-white btn-glass text-[#c2b5a9] font-semibold px-6 py-3 rounded hover:bg-[#f2e3d1] transition"
          >
            Voir nos services
          </Link>
        </motion.div>

        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </section>

      {/* À propos */}
      <section className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
            <p className="text-gray-600 leading-relaxed">
              Miroir Foncier, le reflet d’une vision responsable et humaine de
              l’immobilier. Plus qu’un cabinet immobilier, nous sommes des
              bâtisseurs de projets de vie. À l’écoute de vos aspirations, nous
              conjuguons expertise, engagement et élégance pour donner naissance
              à des biens qui ont du sens — pour vous, pour demain. Notre
              signature : un accompagnement sur mesure, une approche éthique et
              une exigence de qualité à chaque étape. Du premier échange à la
              concrétisation de votre projet, nous cultivons la transparence, la
              confiance et l’excellence relationnelle. L’immobilier selon Miroir
              Foncier, c’est allier l’utile au durable, le beau à l’essentiel.
            </p>
            <Link
              to="/a-propos"
              className="inline-block mt-6 bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
            >
              En savoir plus
            </Link>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="qui sommes-nous"
              className="bg-[#c2b5a9] h-[300px] mx-auto rounded shadow-md object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Projet Ville Verte */}
      <section className="py-16 px-4 sm:px-6 md:px-10 xl:px-20 bg-[#f9f9f9] overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-[#6b5f55]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projet partenaire · Ville Verte
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-12 items-start w-full overflow-hidden"
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Texte à gauche sur md/lg */}
            <motion.div
              className="md:col-span-6 md:col-start-1 lg:col-span-6 lg:col-start-1 flex flex-col gap-6 min-w-0"
              variants={fadeInX(0.05, 20)}
            >
              <div className="bg-white card-glass rounded-xl shadow p-6">
                <h3 className="text-2xl font-semibold text-[#6b5f55] mb-4">
                  Ville Verte, un écosystème urbain durable
                </h3>
                <p className="text-gray-700 mb-4">
                  Ville Verte, première ville verte et intégrée d’Afrique de
                  l’Ouest, portée par CASAORASCOM, incarne une vision urbaine
                  moderne, durable et inclusive, au service d’un équilibre entre
                  nature et innovation.
                </p>
                <p className="text-gray-700 mb-4">
                  Située entre le Lac Rose, l’océan Atlantique et la forêt
                  classée, Ville Verte s’étend sur 216 hectares, dont :
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  <li>90 ha de forêt de filaos</li>
                  <li>40 ha de parcs et espaces verts</li>
                  <li>3 km de plage préservée</li>
                  <li>1,5 km de bordure du lac</li>
                </ul>

                <h4 className="text-lg font-semibold text-[#6b5f55] mb-2">
                  Biens disponibles – Prix à partir de
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  <li>T1 – 30,7 m² : dès 13 000 000 F CFA</li>
                  <li>T2 – 48,56 m² : dès 24 800 000 F CFA</li>
                  <li>T3 – 80,42 m² : dès 42 000 000 F CFA</li>
                  <li>T4 – 102,8 m² : dès 58 400 000 F CFA</li>
                  <li>T5 – 125 m² : dès 85 800 000 F CFA</li>
                </ul>

                <h4 className="text-lg font-semibold text-[#6b5f55] mb-2">
                  Conditions d’acquisition
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  <li>VEFA (Vente en l’État Futur d’Achèvement)</li>
                  <li>
                    Option apport : 25–30% d’acompte, solde sur 24 à 60 mois
                  </li>
                  <li>Location-vente : possible selon étude de dossier</li>
                </ul>

                <h4 className="text-lg font-semibold text-[#6b5f55] mb-2">
                  Informations clés
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  <li>Démarrage des travaux: avril 2026</li>
                  <li>Livraison immeuble: 24 mois</li>
                </ul>

                <div className="flex flex-wrap gap-4 text-[#6b5f55]">
                  <a
                    href="https://www.villeverte.sn"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Site Ville Verte
                  </a>
                  <a
                    href="https://www.casaorascom.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    CASAORASCOM
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Colonne droite: slider + PDFs empilés */}
            <motion.div
              className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7 min-w-0"
              variants={fadeInX(0.1, -20)}
            >
              <VilleVerteSlider
                images={[
                  "https://villeverte.sn/wp-content/uploads/2025/09/Cam-02-Villa-type-E.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/MID-COURT-DRONE.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/CENTRAL-MID-COURT.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/COURT-DRONE-VIEW.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/CENTRAL-COURT.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/VILLE-VERTE-DRONE-VIEW.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/09/VILLE-VERTE-TERRACE-VIEW.webp",
                  "https://villeverte.sn/wp-content/uploads/2025/08/CAM11-DRONE-VIEW_-scaled.jpg",
                  "https://villeverte.sn/wp-content/uploads/2025/08/CAM02-TERRACE-VIEW-1-1-scaled.jpg",
                ]}
              />

              <motion.div
                className="mt-4 grid gap-6"
                variants={staggerContainer(0.1, 0.08)}
              >
                {[
                  {
                    title: "Brochure Ville Verte",
                    file: brochureVilleVerte,
                  },
                  {
                    title: "Plaquette Les Dunes",
                    file: plaquetteLesDunes,
                  },
                ].map((doc) => (
                  <motion.div
                    key={doc.title}
                    className="bg-white card-glass rounded-xl shadow p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                    variants={scaleIn(0.05)}
                  >
                    <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
                      <div className="w-12 h-12 rounded-xl bg-[#f7efe7] grid place-items-center">
                        <AiOutlineFilePdf
                          size={26}
                          className="text-[#c0392b]"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-[#6b5f55] truncate">
                          {doc.title}
                        </p>
                        <p className="text-sm text-gray-500">PDF</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:shrink-0 w-full sm:w-auto justify-end">
                      <button
                        onClick={() =>
                          setPdf({ src: doc.file, title: doc.title })
                        }
                        className="px-3 py-2 rounded-lg bg-[#c2b5a9] btn-glass text-white hover:bg-[#a99b8e]"
                      >
                        Voir
                      </button>
                      <a
                        href={doc.file}
                        download
                        className="px-3 py-2 rounded-lg btn-glass text-[#6b5f55] hover:bg-[#f7efe7]"
                      >
                        Télécharger
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Articles récents */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Articles récents
        </motion.h2>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts
            .slice() // copy
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map((p, idx) => (
              <motion.article
                key={p.slug}
                className="bg-white card-glass rounded-lg shadow p-5"
                variants={fadeIn(idx * 0.06, 16)}
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
                  <h3 className="text-lg font-semibold text-[#6b5f55]">
                    <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(p.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-700 line-clamp-3">{p.description}</p>
                </div>
              </motion.article>
            ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <Link
            to="/blog"
            className="bg-[#c2b5a9] btn-glass text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Voir tous les articles
          </Link>
        </div>
      </section>

      {/* Nos services */}
      <section className="bg-white py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Nos Services
        </motion.h2>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="service-card bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
              delay: 0.05,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <MdHome size={64} color="#c2b5a9" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-600 mb-6">
              Trouvez rapidement un appartement ou une maison à louer.
            </p>
            <Link
              to="/location"
              className="text-[#c2b5a9] font-semibold hover:underline"
            >
              En savoir plus
            </Link>
          </motion.div>

          <motion.div
            className="service-card bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
              delay: 0.12,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FaTags size={64} color="#c2b5a9" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Vente</h3>
            <p className="text-gray-600 mb-6">
              Vendez votre bien au meilleur prix avec notre expertise locale.
            </p>
            <Link
              to="/estimation"
              className="text-[#c2b5a9] font-semibold hover:underline"
            >
              En savoir plus
            </Link>
          </motion.div>

          <motion.div
            className="service-card bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.6,
              delay: 0.18,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <FiShoppingCart
              size={64}
              color="#c2b5a9"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Achat</h3>
            <p className="text-gray-600 mb-6">
              Devenez propriétaire en toute sécurité grâce à notre
              accompagnement.
            </p>
            <Link
              to="/achat"
              className="text-[#c2b5a9] font-semibold hover:underline"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
        <Link
          to="/services"
          className="flex justify-center sm:w-[40%] mt-6 bg-[#c2b5a9] btn-glass mx-auto text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
        >
          Voir tous nos services
        </Link>
      </section>

      {/* Estimation gratuite */}
      <motion.section
        className="py-16 bg-[#c2b5a9] text-white text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Estimez votre bien gratuitement
        </h2>
        <p className="mb-8">
          Obtenez une évaluation précise de votre propriété en ligne.
        </p>
        <Link
          to="/estimation"
          className="bg-white btn-glass text-[#c2b5a9] font-semibold px-6 py-3 rounded hover:bg-[#f2e3d1] transition"
        >
          Estimer mon bien
        </Link>
      </motion.section>

      {/* Section Nous Trouver */}
      <section className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6">
            Nous Trouver
          </h2>
          <p className="text-gray-600 mb-8">
            Venez nous rendre visite dans nos bureaux ou contactez-nous pour un
            rendez-vous personnalisé.
          </p>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Localisation Miroir Foncier"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6014258582723!2d-17.4650575!3d14.735112099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d0056b0b3ff%3A0x3002b3e3d77bbae3!2sMiroir%20Foncier!5e0!3m2!1sfr!2ssn!4v1759377311850!5m2!1sfr!2ssn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <PdfViewerModal
        open={!!pdf}
        onClose={() => setPdf(null)}
        src={pdf?.src || ""}
        title={pdf?.title || "Document"}
      />
    </div>
  );
}

export default Home;
