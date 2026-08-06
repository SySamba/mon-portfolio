import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";

export const metadata = {
  title: "Devis Gratuit Samba SY - Projets IA Data Science | Cloud AWS Dakar",
  description:
    "Demandez un devis gratuit à Samba SY pour vos projets IA, Data Science, Cloud AWS et développement web à Dakar. Expert certifié, réponse sous 24h, consultation gratuite.",
  alternates: { canonical: "/devis" },
  openGraph: {
    title: "Devis Gratuit Samba SY - Projets IA Data Science | Cloud AWS Dakar",
    description:
      "Demandez un devis gratuit à Samba SY pour vos projets IA, Data Science, Cloud AWS et développement web à Dakar. Expert certifié, réponse sous 24h, consultation gratuite.",
    url: "/devis",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis Gratuit Samba SY - Projets IA Data Science | Cloud AWS Dakar",
    description:
      "Demandez un devis gratuit à Samba SY pour vos projets IA, Data Science, Cloud AWS et développement web à Dakar. Expert certifié, réponse sous 24h, consultation gratuite.",
    images: ["/profil.png"],
  },
};

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Demander un Devis"
        subtitle="Obtenez une estimation personnalisée pour votre projet en quelques minutes"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-text-secondary">
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle text-accent"></i>
            <span>Devis gratuit et sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-accent"></i>
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-accent"></i>
            <span>Confidentialité garantie</span>
          </div>
        </div>
      </PageHero>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-dark-card border border-border-color rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-lightbulb text-accent"></i> Conseils Rapides
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3 text-sm text-text-secondary">
                    <i className="fas fa-check-circle text-accent mt-1"></i>
                    <span>Donnez un titre clair à votre projet et décrivez vos objectifs en quelques phrases.</span>
                  </div>
                  <div className="flex gap-3 text-sm text-text-secondary">
                    <i className="fas fa-layer-group text-accent mt-1"></i>
                    <span>Sélectionnez le type de projet le plus proche de votre besoin. Vous pourrez préciser ensuite.</span>
                  </div>
                  <div className="flex gap-3 text-sm text-text-secondary">
                    <i className="fas fa-paperclip text-accent mt-1"></i>
                    <span>Plus vous donnez de détails, plus l'estimation sera précise.</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border-color">
                  <strong className="block mb-2">Besoin d'aide ?</strong>
                  <p className="text-sm text-text-secondary">
                    <i className="fas fa-envelope text-accent mr-2"></i> sambasy837@gmail.com<br />
                    <i className="fas fa-phone text-accent mr-2"></i> +221 77 378 48 14
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-dark-card border border-border-color rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Demander un Devis</h2>
              <DevisForm />
            </div>
          </div>
        </div>
      </section>
    <SEOLocalSection page="devis" />
    </>
  );
}
