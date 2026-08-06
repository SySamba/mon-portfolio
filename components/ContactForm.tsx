"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/meeydzed"
      method="POST"
      className="space-y-5"
    >

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Nom Complet *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Téléphone</label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Entreprise</label>
          <input
            type="text"
            name="company"
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Sujet *</label>
          <select
            name="subject"
            required
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="">Sélectionnez</option>
            <option value="ia">Projet IA</option>
            <option value="cloud">Cloud &amp; DevOps</option>
            <option value="data">Data Analytics &amp; BI</option>
            <option value="web">Développement Web</option>
            <option value="consultation">Consultation</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Budget Estimé</label>
          <select
            name="budget"
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="">Sélectionnez</option>
            <option value="< 500k">Moins de 500 000 FCFA</option>
            <option value="500k-1M">500 000 - 1 000 000 FCFA</option>
            <option value="1M-2M">1 000 000 - 2 000 000 FCFA</option>
            <option value="2M-5M">2 000 000 - 5 000 000 FCFA</option>
            <option value="> 5M">Plus de 5 000 000 FCFA</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Délai Souhaité</label>
          <select
            name="timeline"
            className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="">Sélectionnez</option>
            <option value="urgent">Urgent (&lt; 1 mois)</option>
            <option value="court">Court terme (1-3 mois)</option>
            <option value="moyen">Moyen terme (3-6 mois)</option>
            <option value="long">Long terme (&gt; 6 mois)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
          required
          className="w-full bg-dark-surface border border-border-color rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary">
        <i className="fas fa-paper-plane"></i> Envoyer le Message
      </button>
    </form>
  );
}
