import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#c2b5a9] text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Miroir Foncier</h2>
          <p>Dakar, Sénégal</p>
        <p>Téléphone : 78 438 93 93 || 33 865 06 47</p>
          <p>Email : fallcontech@gmail.com</p>
        </div>
        <div className="flex gap-2 flex-wrap justify-center mt-4 md:mt-0">
          <Link to="/" className="hover:underline">
            Accueil |
          </Link>
          <Link to="/services" className="hover:underline">
            Nos Services |
          </Link>
          <Link to="/estimation" className="hover:underline">
            Estimation |
          </Link>
          <Link to="/a-propos" className="hover:underline">
            À propos |
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
