function NousRejoindre() {
  const handleSendMail = (e) => {
    e.preventDefault();

    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const telephone = e.target.telephone.value;
    const poste = e.target.poste.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:boubsfal@gmail.com?subject=Candidature%20au%20poste%20de%20${encodeURIComponent(poste)}&body=${encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone}\nPoste souhaité : ${poste}\n\nLettre de motivation : ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#f2e3d1] py-10 px-4 md:px-20 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-[#c2b5a9] mb-6 border-b pb-2">Nous Rejoindre</h2>
        <form onSubmit={handleSendMail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Nom complet</label>
            <input type="text" name="nom" required className="mt-1 w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Téléphone</label>
            <input type="tel" name="telephone" required className="mt-1 w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Poste souhaité</label>
            <input type="text" name="poste" required className="mt-1 w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full border p-2 rounded" />
          </div>

          <div className="flex justify-between">
            <button
            type="submit"
            className="bg-[#c2b5a9] text-white px-6 py-3 rounded hover:bg-[#a99b8e] transition"
          >
            Envoyer ma candidature
          </button>
          <p className="text-xs text-red-600">Veuillez envoyer votre CV en pièce jointe dans votre mail.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NousRejoindre;
