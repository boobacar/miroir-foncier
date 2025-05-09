import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_lmcu1pv", "template_58euxyv", formData, "9qn63zGYBlOWwPvlm")
      .then(
        () => {
          setFeedbackMessage("✅ Message envoyé avec succès !");
          // Réinitialiser le formulaire
          setFormData({
            name: "",
            phone: "",
            subject: "",
            message: "",
          });
          // Masquer après 5 secondes
          setTimeout(() => setFeedbackMessage(""), 5000);
        },
        () => {
          setFeedbackMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#c2b5a9]">Contactez-nous</h1>

      {feedbackMessage && (
        <div className="mt-4 mb-4 p-3 text-white rounded bg-green-600">
          {feedbackMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border mt-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Votre téléphone"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border mt-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          className="p-2 border mt-2 w-full rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 border mt-2 w-full rounded h-32"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-[#c2b5a9] hover:bg-[#726961] text-white p-2 w-full rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
