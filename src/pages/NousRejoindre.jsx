import React from "react";
import { motion } from "framer-motion";
import { Send, Briefcase, Mail, Phone, User } from "lucide-react";

function NousRejoindre() {
  const handleSendMail = (e) => {
    e.preventDefault();

    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const telephone = e.target.telephone.value;
    const poste = e.target.poste.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:info@miroirfoncier.com?subject=Candidature%20au%20poste%20de%20${encodeURIComponent(
      poste,
    )}&body=${encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone}\nPoste souhaité : ${poste}\n\nLettre de motivation : ${message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12 px-4 md:px-12 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <span className="text-[#c2b5a9] font-bold tracking-widest text-sm uppercase mb-2 block">
            Carrières
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-4">
            Rejoignez l'Excellence
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Vous partagez notre passion pour l'immobilier et notre exigence de
            qualité ? Construisons ensemble l'avenir de Miroir Foncier.
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
            <div className="bg-[#2b2b2b] text-white p-8 md:col-span-2 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2b5a9]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c2b5a9]/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 bg-[#c2b5a9] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#c2b5a9]/20">
                  <Briefcase size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">
                  Pourquoi nous rejoindre ?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Intégrer Miroir Foncier, c'est évoluer dans un environnement
                  stimulant, bienveillant et résolument tourné vers
                  l'innovation.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mt-1">
                    <User size={16} className="text-[#c2b5a9]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Formation continue
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Développez vos compétences avec nos experts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mt-1">
                    <Briefcase size={16} className="text-[#c2b5a9]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Carrière évolutive
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Des opportunités de croissance réelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-10 md:col-span-3">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2b2b2b] mb-1">
                  Postulez maintenant
                </h3>
                <p className="text-sm text-gray-500">
                  Remplissez le formulaire ci-dessous pour nous envoyer votre
                  candidature spontanée.
                </p>
              </div>

              <form onSubmit={handleSendMail} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-3.5 text-gray-400"
                      />
                      <input
                        type="text"
                        name="nom"
                        required
                        placeholder="Votre nom"
                        className="w-full pl-10 p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-3 top-3.5 text-gray-400"
                      />
                      <input
                        type="tel"
                        name="telephone"
                        required
                        placeholder="Votre numéro"
                        className="w-full pl-10 p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-3.5 text-gray-400"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="votreemail@exemple.com"
                      className="w-full pl-10 p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                    Poste souhaité
                  </label>
                  <input
                    type="text"
                    name="poste"
                    required
                    placeholder="Ex: Agent Commercial, Assistant(e)..."
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                    Lettre de motivation
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Parlez-nous de vous et de vos motivations..."
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#c2b5a9] focus:ring-1 focus:ring-[#c2b5a9] outline-none bg-gray-50 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#c2b5a9] hover:bg-[#a99b8e] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#c2b5a9]/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Envoyer ma candidature
                  </button>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Note: Une fenêtre de messagerie s'ouvrira pour envoyer votre
                    CV en pièce jointe.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NousRejoindre;
