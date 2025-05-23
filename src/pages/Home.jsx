import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import { MdHome } from "react-icons/md"; // maison / location
import { FaTags } from "react-icons/fa"; // étiquette / vente
import { FiShoppingCart } from "react-icons/fi"; // achat

function Home() {
  const [offsetY, setOffsetY] = useState(0);

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
            className="bg-white text-[#c2b5a9] font-semibold px-6 py-3 rounded hover:bg-[#f2e3d1] transition"
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
              className="inline-block mt-6 bg-[#c2b5a9] text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
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
              className="bg-[#c2b5a9] h-[300px] rounded shadow-md object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Nos services */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Nos Services
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="service-card bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
            className="service-card bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            className="service-card bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
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
        </div>
        <Link
          to="/services"
          className="flex justify-center sm:w-[40%] mt-6 bg-[#c2b5a9] mx-auto text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
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
          className="bg-white text-[#c2b5a9] font-semibold px-6 py-3 rounded hover:bg-[#f2e3d1] transition"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.532666776776!2d-17.4627771!3d14.7389937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d229b42f8af%3A0xd4764d8b257ada4c!2sClinique%20Dentaire%20Dabia!5e0!3m2!1sfr!2ssn!4v1748014589067!5m2!1sfr!2ssn"
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
    </div>
  );
}

export default Home;
