import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle, Calculator, Send } from "lucide-react";

export default function Estimation() {
  const [formData, setFormData] = useState({
    propertyType: "",
    address: "",
    surface: "",
    rooms: "",
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      ...formData,
      email: formData.email || "info@miroirfoncier.com",
      message: `
        Type: ${formData.propertyType}
        Adresse: ${formData.address}
        Surface: ${formData.surface}m²
        Pièces: ${formData.rooms}
        Nom: ${formData.name}
        Email: ${formData.email || "Non renseigné"}
        
        Note: ${formData.email ? "" : "Le client n'a pas renseigné d'email."}
      `,
    };

    emailjs
      .send(
        "service_449u1y8", // replace with your service ID
        "template_twnehah", // replace with your template ID
        templateParams,
        {
          publicKey: "9qn63zGYBlOWwPvlm",
        },
      )
      .then(
        (response) => {
          console.log(
            "Email envoyé avec succès",
            response.status,
            response.text,
          );
          setSuccessMessage("✅ Votre demande a été envoyée avec succès !");
          // Reset fields
          setFormData({
            propertyType: "",
            address: "",
            surface: "",
            rooms: "",
            name: "",
            email: "",
          });
          // Hide message after 5 seconds
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-4">
            Estimation Gratuite
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Remplissez ce formulaire pour recevoir une estimation précise de
            votre bien immobilier par nos experts.
          </p>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:grid md:grid-cols-5 h-full">
            {/* Sidebar Info */}
            <div className="bg-[#2b2b2b] text-white p-8 md:col-span-2 flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-12 h-12 bg-[#c2b5a9] rounded-xl flex items-center justify-center mb-4">
                  <Calculator size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Pourquoi nous choisir ?
                </h3>
                <p className="text-gray-400 text-sm">
                  Notre expertise locale nous permet de vous offrir l'estimation
                  la plus juste du marché.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#c2b5a9]" />
                  <span className="text-sm font-light">
                    Estimation sous 48h
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#c2b5a9]" />
                  <span className="text-sm font-light">Expertise locale</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#c2b5a9]" />
                  <span className="text-sm font-light">
                    Confidentialité assurée
                  </span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="p-8 md:col-span-3">
              {successMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg text-sm font-medium ${successMessage.includes("✅") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                >
                  {successMessage}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Type de bien
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="Appartement">Appartement</option>
                      <option value="Villa">Villa</option>
                      <option value="Terrain">Terrain</option>
                      <option value="Immeuble">Immeuble</option>
                      <option value="Local Commercial">Local Commercial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Surface (m²)
                    </label>
                    <input
                      type="number"
                      name="surface"
                      placeholder="Ex: 120"
                      value={formData.surface}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                    Adresse du bien
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Quartier, région..."
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                    Nombre de pièces
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    placeholder="Ex: 4"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <hr className="my-6 border-gray-100" />

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Votre nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom Prénom"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Votre Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="contact@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-[#c2b5a9] hover:bg-[#a99b8e] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#c2b5a9]/40 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send size={18} /> Demander une estimation
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
