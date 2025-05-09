import React from "react";

function Footer() {
  return (
    <footer className="bg-[#c2b5a9] text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Miroir Foncier</h2>
          <p>Dakar, Sénégal</p>
          <p>Téléphone : 77 123 45 67</p>
          <p>Email : fallcontech@gmail.com</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/" className="hover:underline">
            Accueil
          </a>
          <a href="/services" className="hover:underline">
            Nos Services
          </a>
          <a href="/estimation" className="hover:underline">
            Estimation
          </a>
          <a href="/a-propos" className="hover:underline">
            À propos
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
