import DevisForm from "@/components/DevisForm";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Devis Gratuit : Site Web, Application & Data à Dakar | Samba SY",
  description:
    "Demandez un devis gratuit pour votre site web, application mobile, tableau de bord Power BI ou projet IA à Dakar. Réponse sous 24h, sans engagement.",
  path: "/devis/",
  keywords: [
    "devis site web Dakar",
    "prix site web Sénégal",
    "devis application mobile Sénégal",
    "tarif développeur web Dakar",
  ],
});

const steps = [
  { title: "Décrivez votre besoin", text: "Donnez un titre clair à votre projet et décrivez vos objectifs en quelques phrases." },
  { title: "Choisissez le type de projet", text: "Sélectionnez le type le plus proche de votre besoin. Vous pourrez préciser ensuite." },
  { title: "Recevez votre estimation", text: "Plus vous donnez de détails, plus l'estimation sera précise. Réponse sous 24h." },
];

export default function DevisPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Devis", path: "/devis/" }])} />
      {/* Hero */}
      <PageHero
        eyebrow="Devis gratuit"
        title={<>Demander <em>un devis.</em></>}
        subtitle="Obtenez une estimation personnalisée pour votre site web, votre application ou votre projet data, en quelques minutes."
      >
        <ul className="mt-10 flex flex-wrap gap-2">
          {["Gratuit et sans engagement", "Réponse sous 24h", "Confidentialité garantie", "Paiement Wave, Orange Money ou virement"].map((t) => (
            <li key={t} className="t-chip">
              <span className="w-1.5 h-1.5 rotate-45 bg-[var(--terracotta)] mr-2.5" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.7fr] gap-14 lg:gap-20 items-start">
          {/* Étapes */}
          <aside className="lg:sticky lg:top-28">
            <p className="t-label"><b>3</b> étapes</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6 mb-10">
              Comment <em>ça marche.</em>
            </h2>
            <ol>
              {steps.map((s, i) => (
                <li key={s.title} className="t-row grid-cols-[56px_1fr] gap-x-4 py-6 px-2">
                  <span className="font-display italic text-3xl text-accent">0{i + 1}</span>
                  <span>
                    <span className="block font-display text-xl">{s.title}</span>
                    <span className="block text-sm text-text-secondary mt-1 leading-relaxed">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 text-sm text-text-secondary space-y-2">
              <p className="font-bold text-text-primary">Besoin d&apos;aide ?</p>
              <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent">
                <i className="fab fa-whatsapp text-accent" aria-hidden="true" /> +221 77 378 48 14
              </a>
              <a href="mailto:sambasy837@gmail.com" className="flex items-center gap-3 hover:text-accent">
                <i className="fas fa-envelope text-accent" aria-hidden="true" /> sambasy837@gmail.com
              </a>
            </div>
          </aside>

          {/* Formulaire */}
          <div className="bg-dark-card border border-border-color rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)]">
            <div className="t-weave" aria-hidden="true" />
            <div className="p-7 md:p-10">
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">Votre projet</h2>
              <DevisForm />
            </div>
          </div>
        </div>
      </section>
    <SEOLocalSection page="devis" />
    </>
  );
}
