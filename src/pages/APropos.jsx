import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg"; // Re-using hero image as placeholder if needed, or better, no image for now but sleek text.

function APropos() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero / Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#c2b5a9] font-bold tracking-widest text-sm uppercase mb-4 block">
            Notre Philosophie
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2b2b2b] mb-8 leading-tight">
            Façonner l'avenir en valorisant <br className="hidden md:block" />{" "}
            l'instant présent.
          </h1>
          <div className="w-24 h-1 bg-[#c2b5a9] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Content */}
      {/* Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold text-[#2b2b2b] mb-4">
              Notre Mission
            </h2>
            <p>
              Chez <strong className="text-[#2b2b2b]">Miroir Foncier</strong>,
              nous ne vendons pas seulement des murs, nous bâtissons des cadres
              de vie. Notre mission est d'offrir une expérience immobilière
              unique, fondée sur l'excellence, la transparence et une
              connaissance approfondie du marché sénégalais.
            </p>
            <p>
              Que vous soyez investisseur, primo-accédant ou propriétaire, nous
              nous engageons à sécuriser vos transactions et à maximiser la
              valeur de votre patrimoine.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">
              <div className="absolute inset-0 bg-[#c2b5a9]/10 group-hover:bg-[#c2b5a9]/0 transition-colors duration-500"></div>
              <img
                src={heroImage}
                alt="Notre Vision"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#c2b5a9] font-bold tracking-widest text-sm uppercase mb-3 block">
            Nos Valeurs
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b2b2b] mb-12">
            Ce qui nous distingue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#fafafa] rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#c2b5a9]/30 transition-all">
              <div className="w-12 h-1 bg-[#c2b5a9] mb-6"></div>
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-3">
                Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une maîtrise parfaite du droit foncier et des dynamiques du
                marché local pour des conseils avisés.
              </p>
            </div>
            <div className="p-8 bg-[#fafafa] rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#c2b5a9]/30 transition-all">
              <div className="w-12 h-1 bg-[#c2b5a9] mb-6"></div>
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-3">
                Intégrité
              </h3>
              <p className="text-gray-600 leading-relaxed">
                La confiance est notre capital le plus précieux. Nous agissons
                avec éthique et transparence totale.
              </p>
            </div>
            <div className="p-8 bg-[#fafafa] rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#c2b5a9]/30 transition-all">
              <div className="w-12 h-1 bg-[#c2b5a9] mb-6"></div>
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Des outils modernes et une approche digitale pour simplifier et
                accélérer vos projets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 md:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#2b2b2b] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c2b5a9]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6 text-[#c2b5a9]">
                  Notre Vision de l'Avenir
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  "Nous repensons les standards de l’immobilier en intégrant
                  pleinement l’écoresponsabilité à chaque étape. De la
                  conception à la commercialisation, nous développons des biens
                  neufs, durables et porteurs de sens."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c2b5a9] flex items-center justify-center text-[#2b2b2b] font-bold font-serif">
                    MF
                  </div>
                  <div>
                    <div className="font-bold">La Direction</div>
                    <div className="text-xs text-[#c2b5a9]">Miroir Foncier</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 space-y-6 text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold text-[#2b2b2b] mb-4">
              Engagement Durable
            </h2>
            <p>
              Face aux défis climatiques et urbains, nous avons choisi d'être
              acteurs du changement. Nous privilégions les projets qui
              respectent l'environnement et améliorent la qualité de vie des
              résidents.
            </p>
            <p>
              Notre projet phare, la <strong>Ville Verte</strong>, incarne cette
              vision : un écosystème urbain intégré, où nature et modernité
              coexistent harmonieusement.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default APropos;
