import React, { useState } from "react";
import emailjs from "emailjs-com";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_449u1y8",      // replace with your service ID
        "template_twnehah",     // replace with your template ID
        formData,
        "9qn63zGYBlOWwPvlm"          // replace with your public key
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès", response);
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
          console.error("Erreur lors de l'envoi de l'email", error);
          setSuccessMessage("❌ Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="bg-[#f2e3d1]  py-10 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">
        Estimez votre bien gratuitement
      </h2>

      {successMessage && (
        <div className="mb-4 p-3 text-white rounded bg-green-600">
          {successMessage}
        </div>
      )}

      <form
        className="max-w-xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Type de bien"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Adresse"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Surface (m²)"
          name="surface"
          value={formData.surface}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Nombre de pièces"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Votre nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Votre email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#c2b5a9] text-white p-2 mt-3 mb-[17vh] rounded hover:bg-[#726961]"
        >
          Envoyer
        </button>
      </form>
    </div>
    </div>
  );
}
