import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      ...formData,
      email: formData.email || "info@miroirfoncier.com",
      message: formData.email
        ? formData.message
        : `${formData.message}\n\n(Note: Le client n'a pas renseigné d'email, contactez-le par téléphone: ${formData.phone})`,
    };

    emailjs
      .send("service_449u1y8", "template_gr0c1vo", templateParams, {
        publicKey: "9qn63zGYBlOWwPvlm",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFeedbackMessage("✅ Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setFeedbackMessage(""), 5000);
        },
        (err) => {
          console.log("FAILED...", err);
          setFeedbackMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour concrétiser vos projets
            immobiliers. N'hésitez pas à nous écrire ou à nous rendre visite.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#2b2b2b] mb-6">
              Envoyez-nous un message
            </h2>

            {feedbackMessage && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm font-medium ${feedbackMessage.includes("✅") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
              >
                {feedbackMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email (optionnel)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Comment pouvons-nous vous aider ?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 h-32 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c2b5a9] hover:bg-[#a99b8e] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#c2b5a9]/40 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={18} /> Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#2b2b2b] p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-xl font-bold mb-6 text-[#c2b5a9]">
                Nos Coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="text-[#c2b5a9]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-300 text-sm">
                      Sacré Cœur 3, VDN
                      <br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="text-[#c2b5a9]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-300 text-sm">
                      <a
                        href="tel:+221774044040"
                        className="hover:text-white transition"
                      >
                        +221 77 404 40 40
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="text-[#c2b5a9]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300 text-sm">
                      <a
                        href="mailto:contact@miroirfoncier.com"
                        className="hover:text-white transition"
                      >
                        contact@miroirfoncier.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
