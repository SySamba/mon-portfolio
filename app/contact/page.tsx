import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";
import JsonLd from "@/components/JsonLd";
import { CONTACT, SITE_URL, breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact - Développeur Web & Data Scientist à Dakar | Samba SY",
  description:
    "Contactez Samba SY à Dakar pour votre site web, application mobile, tableau de bord Power BI ou projet IA. Réponse sous 24h, devis gratuit et sans engagement.",
  path: "/contact/",
  keywords: [
    "contacter développeur web Dakar",
    "développeur freelance Sénégal",
    "devis site web Dakar",
    "Data Scientist Dakar contact",
  ],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact/#page`,
  url: `${SITE_URL}/contact/`,
  name: "Contact - Samba SY",
  inLanguage: "fr-FR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@id": `${SITE_URL}/#business`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT.telephone,
      email: CONTACT.email,
      availableLanguage: ["fr", "en"],
      areaServed: "SN",
    },
  },
};

const channels = [
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+221 77 378 48 14",
    note: "Le plus rapide — réponse dans la journée",
    href: "https://wa.me/221773784814",
    external: true,
  },
  {
    icon: "fas fa-phone",
    label: "Téléphone",
    value: "+221 77 378 48 14",
    note: "Disponible 9h-18h",
    href: "tel:+221773784814",
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "sambasy837@gmail.com",
    note: "Réponse sous 24h",
    href: "mailto:sambasy837@gmail.com",
  },
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "in/samba-sy",
    note: "Parcours et recommandations",
    href: "https://www.linkedin.com/in/samba-sy/",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[contactPageSchema, breadcrumbSchema([{ name: "Contact", path: "/contact/" }])]}
      />
      {/* Hero */}
      <PageHero
        eyebrow="Contact"
        title={<>Contactez-<em>moi.</em></>}
        subtitle="Discutons de votre projet et créons ensemble des solutions innovantes. Basé à Dakar, disponible partout au Sénégal et à distance."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.35fr] gap-14 lg:gap-20 items-start">
          {/* Canaux */}
          <div>
            <p className="t-label"><b>01</b> Me joindre</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6 mb-10">
              Informations <em>de contact.</em>
            </h2>
            <div>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="t-row grid-cols-[48px_1fr_auto] gap-x-5 items-center py-6 px-2"
                >
                  <span className="service-icon !w-12 !h-12 !text-lg !rounded-full !mb-0">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-text-muted">{c.label}</span>
                    <span className="block font-display text-lg sm:text-xl md:text-2xl mt-1 [overflow-wrap:anywhere]">{c.value}</span>
                    <span className="block text-sm text-text-secondary mt-1">{c.note}</span>
                  </span>
                  <span className="t-arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right text-sm" />
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-3 text-text-secondary">
              <i className="fas fa-location-dot text-accent" aria-hidden="true" /> Dakar, Sénégal
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-dark-card border border-border-color rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)]">
            <div className="t-weave" aria-hidden="true" />
            <div className="p-7 md:p-10">
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-2">Envoyez-moi un message</h2>
              <p className="text-text-secondary mb-8">Quelques lignes suffisent : je reviens vers vous sous 24h.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2>Besoin d&apos;un devis ?</h2>
          <p>Obtenez une estimation personnalisée et gratuite pour votre projet.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="btn-primary uppercase tracking-[0.08em]">
              Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    <SEOLocalSection page="contact" />
    </>
  );
}
