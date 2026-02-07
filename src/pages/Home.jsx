import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "../components/animations";
import heroNewImage from "../assets/hero-v2.png";
import logo from "../assets/logo.png";
import { MdApartment, MdBusiness } from "react-icons/md"; // Updated icons
import {
  FaTags,
  FaKey,
  FaDraftingCompass,
  FaHandHoldingUsd,
} from "react-icons/fa"; // Updated icons
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import PdfViewerModal from "../components/PdfViewerModal";
import VilleVerteSlider from "../components/VilleVerteSlider";
import brochureVilleVerte from "../assets/BROCHURE VILLE VERTE (compressed).pdf";
import plaquetteLesDunes from "../assets/PLAQUETTE LES DUNES v2 (compressed).pdf";
import { blogPosts } from "../data/blogPosts";
import { ChevronRight, Eye, Download } from "lucide-react";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [pdf, setPdf] = useState(null); // {src, title}

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-800 bg-white font-sans selection:bg-[#c2b5a9] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{
            backgroundImage: `url(${heroNewImage})`,
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
        />
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

        <motion.div
          className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#c2b5a9]"></div>
              <span className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] uppercase">
                Agence Immobilière de Prestige
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              L'Art de Vivre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f2e3d1] to-[#c2b5a9]">
                au Sénégal
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-[#c2b5a9] pl-6">
              Achat, Vente, Location, Gestion. Nous concrétisons vos projets les
              plus ambitieux avec une expertise sans faille et une élégance
              rare.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/services"
                className="px-8 py-4 bg-[#c2b5a9] hover:bg-[#a99b8e] text-white font-bold rounded-none border-l-4 border-white transition-all transform hover:translate-x-2 shadow-2xl flex items-center gap-3 w-fit"
              >
                Découvrir nos services <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium rounded-none hover:bg-white hover:text-[#2b2b2b] transition-all transform hover:-translate-y-1 w-fit"
              >
                Nous contacter
              </Link>
            </div>

            {/* Quick Stats or Trust Indicators */}
            <div className="mt-16 flex items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="bg-[#c2b5a9] rounded-full p-1">
                  <FiCheck size={12} className="text-white" />
                </div>
                <span className="text-sm tracking-wide">Expertise Locale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#c2b5a9] rounded-full p-1">
                  <FiCheck size={12} className="text-white" />
                </div>
                <span className="text-sm tracking-wide">
                  Accompagnement VIP
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 right-10 z-20 text-white/50 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-2 mb-8">
            Défiler
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro / À propos */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-[#c2b5a9] uppercase">
                À propos de nous
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2b2b2b] leading-tight">
                Une vision éthique et humaine de l'immobilier
              </h3>
              <div className="w-20 h-1 bg-[#c2b5a9]"></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Miroir Foncier incarne une approche renouvelée de l'immobilier au
              Sénégal. Plus qu'une agence, nous sommes des partenaires de vie.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous conjuguons expertise locale et standards internationaux pour
              offrir un accompagnement sur-mesure. Transparence, réactivité et
              rigueur sont les piliers de notre engagement auprès de nos
              clients, qu'ils soient particuliers ou investisseurs.
            </p>

            <Link
              to="/a-propos"
              className="group inline-flex items-center gap-2 text-[#2b2b2b] font-semibold hover:text-[#c2b5a9] transition-colors"
            >
              En savoir plus sur notre expertise
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#c2b5a9] rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
            <img
              src={logo}
              alt="Miroir Foncier"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-white p-2 object-contain aspect-square"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-[#c2b5a9] uppercase">
              Nos Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2b2b2b]">
              Notre expertise à votre service
            </h3>
            <p className="text-gray-600">
              Des solutions complètes pour tous vos besoins immobiliers.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: FaKey,
                title: "Location",
                desc: "Trouvez votre futur chez-vous parmi notre sélection de biens de qualité.",
                link: "/location",
              },
              {
                icon: FaTags,
                title: "Vente",
                desc: "Valorisez votre patrimoine. Nous vendons votre bien au meilleur prix et dans les meilleurs délais.",
                link: "/estimation",
              },
              {
                icon: MdApartment,
                title: "Achat",
                desc: "Investissez en toute sécurité. Nous vous accompagnons de la recherche à la signature.",
                link: "/achat",
              },
              {
                icon: FaDraftingCompass,
                title: "Aménagement",
                desc: "Solutions d'aménagement et grands projets pour valoriser vos espaces.",
                link: "/amenagement",
              },
              {
                icon: FaHandHoldingUsd,
                title: "Gestion",
                desc: "Gestion locative rigoureuse pour maximiser vos rendements en toute sérénité.",
                link: "/gestion-patrimoine",
              },
              {
                icon: MdBusiness,
                title: "Conseil",
                desc: "Expertise juridique et fiscale pour optimiser vos investissements.",
                link: "/conseils",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#c2b5a9]/30 transition-all duration-300 group"
                variants={scaleIn(0.05)}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#f2e3d1]/30 flex items-center justify-center mb-6 group-hover:bg-[#c2b5a9] transition-colors duration-300">
                  <service.icon
                    size={24}
                    className="text-[#c2b5a9] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#2b2b2b] mb-3 group-hover:text-[#c2b5a9] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-[#c2b5a9] hover:text-[#a99b8e]"
                >
                  En savoir plus <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 border-2 border-[#c2b5a9] text-[#c2b5a9] font-medium rounded-lg hover:bg-[#c2b5a9] hover:text-white transition-all duration-300"
            >
              Voir toutes nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* Projet Ville Verte - Feature Section */}
      <section className="py-24 bg-[#2b2b2b] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#c2b5a9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#f2e3d1]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="text-[#c2b5a9] font-bold tracking-widest text-sm uppercase mb-2 block">
                  Projet Phare
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Ville Verte <span className="text-[#c2b5a9]">.</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Première ville verte et intégrée d’Afrique de l’Ouest. Un
                  écosystème urbain durable entre le Lac Rose et l'Atlantique.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-[#c2b5a9] mb-1">
                    216
                  </div>
                  <div className="text-sm text-gray-400">
                    Hectares de superficie
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-[#c2b5a9] mb-1">
                    90
                  </div>
                  <div className="text-sm text-gray-400">Hectares de forêt</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-[#c2b5a9] mb-1">
                    T1-T5
                  </div>
                  <div className="text-sm text-gray-400">
                    Typologies disponibles
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-[#c2b5a9] mb-1">
                    VEFA
                  </div>
                  <div className="text-sm text-gray-400">Contrat sécurisé</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="relative z-10 font-semibold text-white mb-4 flex items-center gap-2">
                  <AiOutlineFilePdf className="text-[#c2b5a9]" size={20} />{" "}
                  Documentation
                </h4>
                <div className="grid gap-3">
                  {[
                    { title: "Brochure Ville Verte", file: brochureVilleVerte },
                    { title: "Plaquette Les Dunes", file: plaquetteLesDunes },
                  ].map((doc) => (
                    <div
                      key={doc.title}
                      className="flex items-center justify-between p-3 rounded bg-neutral-800 hover:bg-neutral-700 border border-white/10 transition relative z-20"
                    >
                      <span className="text-sm font-medium truncate mr-4 text-white">
                        {doc.title}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setPdf({ src: doc.file, title: doc.title })
                          }
                          className="p-2 rounded bg-[#c2b5a9] text-white hover:bg-[#a99b8e] transition"
                          title="Voir le document"
                        >
                          <Eye size={16} />
                        </button>
                        <a
                          href={doc.file}
                          download
                          className="p-2 rounded border border-white/30 hover:bg-white hover:text-black transition text-white"
                          title="Télécharger le document"
                        >
                          <Download size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Estimation */}
      <section className="py-20 bg-[#c2b5a9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <motion.div
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Vous souhaitez vendre votre bien ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Obtenez une estimation précise et gratuite de votre propriété en
            quelques clics.
          </p>
          <Link
            to="/estimation"
            className="inline-block px-8 py-4 bg-white text-[#c2b5a9] font-bold rounded-lg shadow-lg hover:bg-[#f9f9f9] hover:scale-105 transition-all duration-300"
          >
            Estimer mon bien gratuitement
          </Link>
        </motion.div>
      </section>

      {/* Articles Récents */}
      <section className="py-24 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b2b2b] mb-12 text-center">
            Actualités & Conseils
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {blogPosts
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3)
              .map((p) => (
                <motion.article
                  key={p.slug}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#c2b5a9]/30 transition-all duration-300 overflow-hidden flex flex-col h-full group"
                  variants={scaleIn(0.05)}
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
                    {p.tags && p.tags.length > 0 && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2b2b2b] uppercase tracking-wide">
                        {p.tags[0]}
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold text-[#c2b5a9] mb-3 uppercase tracking-wider">
                      {new Date(p.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-[#2b2b2b] mb-3 leading-snug hover:text-[#c2b5a9] transition-colors">
                      <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                      {p.description}
                    </p>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="text-[#c2b5a9] font-semibold text-sm hover:underline"
                    >
                      Lire l'article
                    </Link>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
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
