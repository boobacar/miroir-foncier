import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdApartment, MdBusiness, MdHome } from "react-icons/md";
import {
  FaTags,
  FaDraftingCompass,
  FaHandHoldingUsd,
  FaBookOpen,
} from "react-icons/fa";
import { ChevronRight } from "lucide-react";

const servicesList = [
  {
    icon: MdHome,
    title: "Location",
    description:
      "Découvrez notre sélection exclusive de biens disponibles à la location, du studio cosy à la villa familiale.",
    link: "/location",
  },
  {
    icon: FaTags,
    title: "Vente",
    description:
      "Vous souhaitez vendre ? Nous valorisons votre bien pour une transaction rapide et au meilleur prix.",
    link: "/estimation",
  },
  {
    icon: MdApartment,
    title: "Achat",
    description:
      "Trouvez le bien de vos rêves. Nos experts vous accompagnent à chaque étape de votre acquisition.",
    link: "/achat",
  },
  {
    icon: FaDraftingCompass,
    title: "Aménagement",
    description:
      "Conception, rénovation et aménagement. Nous donnons vie à vos projets immobiliers les plus ambitieux.",
    link: "/amenagement",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Gestion",
    description:
      "Libérez-vous des contraintes. Nous gérons votre patrimoine avec rigueur et transparence.",
    link: "/gestion-patrimoine",
  },
  {
    icon: MdBusiness,
    title: "Conseil",
    description:
      "Stratégie d'investissement, fiscalité et juridique. Profitez de notre expertise pour sécuriser vos avoirs.",
    link: "/conseils",
  },
  {
    icon: FaBookOpen,
    title: "Lexique",
    description:
      "Maîtrisez le jargon de l'immobilier grâce à notre lexique complet et accessible.",
    link: "/lexique",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-6">
            Nos Expertises
          </h1>
          <p className="text-gray-600 text-lg">
            Miroir Foncier vous propose une gamme complète de services pour
            répondre à toutes vos problématiques immobilières, avec excellence
            et intégrité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#c2b5a9]/30 transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#f2e3d1]/30 flex items-center justify-center mb-6 group-hover:bg-[#c2b5a9] transition-colors duration-300">
                <service.icon
                  size={24}
                  className="text-[#c2b5a9] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#2b2b2b] mb-3 group-hover:text-[#c2b5a9] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-flex items-center text-[#c2b5a9] font-semibold hover:text-[#a99b8e] transition-colors mt-auto"
              >
                En savoir plus{" "}
                <ChevronRight
                  size={18}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
