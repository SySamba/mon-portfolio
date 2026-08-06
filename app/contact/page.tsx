import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact - Samba SY | Expert Data Science & IA",
  description:
    "Contactez Samba SY pour vos projets en Data Science, Intelligence Artificielle et Cloud Computing. Devis gratuit et consultation personnalisée.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact - Samba SY | Expert Data Science & IA",
    description:
      "Contactez Samba SY pour vos projets en Data Science, Intelligence Artificielle et Cloud Computing. Devis gratuit et consultation personnalisée.",
    url: "/contact",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Samba SY | Expert Data Science & IA",
    description:
      "Contactez Samba SY pour vos projets en Data Science, Intelligence Artificielle et Cloud Computing. Devis gratuit et consultation personnalisée.",
    images: ["/profil.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Contactez-Moi"
        subtitle="Discutons de votre projet et créons ensemble des solutions innovantes"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-dark-card border border-border-color rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-dark-card border border-border-color rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center text-accent">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-text-secondary">+221 77 378 48 14</p>
                      <span className="text-xs text-text-muted">Disponible 9h-18h</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center text-accent">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-text-secondary">sambasy837@gmail.com</p>
                      <span className="text-xs text-text-muted">Réponse sous 24h</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark-surface flex items-center justify-center text-accent">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-text-secondary">Dakar, Sénégal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-card border border-border-color rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/samba-sy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="https://github.com/SySamba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Besoin d'un Devis ?</h3>
                <p className="text-white/80 mb-4">Obtenez une estimation personnalisée pour votre projet.</p>
                <Link href="/devis" className="inline-block px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
