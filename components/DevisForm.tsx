"use client";

export default function DevisForm() {
  return (
    <form
      action="https://formspree.io/f/xpqvnlwv"
      method="POST"
      className="space-y-5"
    >

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Nom complet *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Votre nom et prénom"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Téléphone *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+221 77 123 45 67"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Entreprise</label>
          <input
            type="text"
            name="company"
            placeholder="Nom de votre société (optionnel)"
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type de projet *</label>
        <select
          name="projectType"
          required
          className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
        >
          <option value="">Sélectionnez le type de projet</option>
          <option value="web">Site Web / E-commerce</option>
          <option value="data">Analyse de Données / BI</option>
          <option value="ai">Intelligence Artificielle</option>
          <option value="cloud">Cloud / DevOps</option>
          <option value="mobile">Application Mobile</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Budget estimé</label>
        <select
          name="budget"
          className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
        >
          <option value="">Sélectionnez votre budget</option>
          <option value="< 500k">Moins de 500 000 FCFA</option>
          <option value="500k-1M">500 000 - 1 000 000 FCFA</option>
          <option value="1M-2M">1 000 000 - 2 000 000 FCFA</option>
          <option value="2M+">Plus de 2 000 000 FCFA</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description du projet *</label>
        <textarea
          name="projectDescription"
          rows={6}
          placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités attendues, contraintes, délais..."
          required
          className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <i className="fas fa-paper-plane"></i> Envoyer ma Demande
      </button>
    </form>
  );
}
