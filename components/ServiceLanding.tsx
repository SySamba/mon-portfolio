import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import type { Landing } from "@/lib/landings";

export function landingMetadata(page: Landing) {
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}/`,
    keywords: page.keywords,
  });
}

function serviceSchema(page: Landing) {
  const url = `${SITE_URL}/${page.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    name: `${page.titleStart} ${page.titleEm.replace(/\.$/, "")}`,
    description: page.metaDescription,
    serviceType: page.serviceType,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Dakar" },
      { "@type": "Country", name: "Sénégal" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: page.serviceType,
      itemListElement: page.offers.map((o) => ({
        "@type": "Offer",
        priceCurrency: "XOF",
        description: `${o.name} : ${o.price}`,
        itemOffered: { "@type": "Service", name: o.name, description: o.text },
      })),
    },
  };
}

export default function ServiceLanding({ page }: { page: Landing }) {
  const path = `/${page.slug}/`;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(page),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: "Services", path: "/services/" },
            { name: page.eyebrow, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={<>{page.titleStart} <em>{page.titleEm}</em></>}
        subtitle={page.subtitle}
      >
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/devis" className="btn-primary uppercase tracking-[0.08em]">
            Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
          <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <i className="fab fa-whatsapp" aria-hidden="true" /> Discutons sur WhatsApp
          </a>
        </div>
        <nav className="mt-10 flex flex-wrap items-center gap-2 text-sm text-text-muted" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-accent">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services/" className="hover:text-accent">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="text-text-secondary">{page.eyebrow}</span>
        </nav>
      </PageHero>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <p className="t-label"><b>01</b> Pourquoi</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">{page.intro.heading}</h2>
          </div>
          <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
            {page.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 lg:py-28 bg-dark-surface">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>02</b> Fonctionnalités</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-12">
            Ce que vous <em>obtenez.</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.features.map((f) => (
              <div
                key={f.title}
                className="bg-dark-card border border-border-color rounded-[22px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--terracotta)]"
              >
                <span className="service-icon !w-12 !h-12 !text-lg !rounded-full !mb-5">
                  <i className={f.icon} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-normal">{f.title}</h3>
                <p className="text-text-secondary mt-2 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          {page.stack && (
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="t-label !tracking-[0.18em]">Technologies</span>
              {page.stack.map((t) => (
                <span key={t} className="text-xs font-bold uppercase tracking-wider text-text-muted">{t}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>03</b> Tarifs</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-12">
            Des prix <em>clairs, en FCFA.</em>
          </h2>
          <div className={`grid gap-6 ${page.offers.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {page.offers.map((o, i) => (
              <div
                key={o.name}
                className={`relative rounded-[24px] border p-8 flex flex-col overflow-hidden ${
                  i === 1 ? "border-[var(--terracotta)] bg-dark-card shadow-[var(--shadow-lg)]" : "border-border-color bg-dark-card"
                }`}
              >
                {i === 1 && <div className="t-weave absolute top-0 left-0 right-0" aria-hidden="true" />}
                <h3 className="font-display text-2xl font-normal">{o.name}</h3>
                <p className="font-display text-3xl text-accent mt-4">
                  {o.price.replace(/(\d) (?=\d)/g, "$1\u00a0").replace(/ FCFA/g, "\u00a0FCFA")}
                </p>
                <p className="text-text-secondary mt-4 leading-relaxed">{o.text}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rotate-45 bg-[var(--terracotta)] shrink-0" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href="/devis" className={`${i === 1 ? "btn-primary" : "btn-secondary"} mt-8 justify-center uppercase tracking-[0.08em]`}>
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
          {page.offersNote && <p className="mt-8 text-text-muted max-w-3xl leading-relaxed">{page.offersNote}</p>}
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 lg:py-28 bg-dark-surface">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="t-label"><b>04</b> Réalisations</p>
              <h2 className="t-display text-4xl md:text-5xl mt-6">
                Déjà en <em>production.</em>
              </h2>
            </div>
            <Link href="/projects" className="btn-secondary self-start md:self-auto">
              Tous les projets <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {page.projects.map((p) => (
              <article key={p.title} className="group">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] border border-border-color bg-dark-card">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.tag}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="t-label !tracking-[0.18em] mt-5">{p.tag}</p>
                <h3 className="font-display text-2xl font-normal mt-2">{p.title}</h3>
                <p className="text-text-secondary mt-2 leading-relaxed">{p.text}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-accent hover:underline underline-offset-4"
                  >
                    Voir en ligne <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>05</b> Méthode</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-12">
            Comment se passe <em>le projet.</em>
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {page.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[var(--terracotta)] pt-5">
                <span className="font-display italic text-3xl text-accent">0{i + 1}</span>
                <h3 className="font-display text-xl mt-2">{s.title}</h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 border-t border-border-color">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.6fr] gap-14">
          <div>
            <p className="t-label"><b>FAQ</b> Questions</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">
              Questions <em>fréquentes.</em>
            </h2>
            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">À voir aussi</p>
              <ul className="space-y-3">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-accent font-semibold underline underline-offset-4">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {page.faqs.map((faq) => (
              <details key={faq.question} className="t-faq border-t border-border-color last:border-b py-6">
                <summary className="flex items-start justify-between gap-6">
                  <span className="font-display text-xl md:text-2xl">{faq.question}</span>
                  <span className="t-plus t-arrow !w-10 !h-10" aria-hidden="true">
                    <i className="fas fa-plus text-xs" />
                  </span>
                </summary>
                <p className="text-text-secondary mt-4 leading-relaxed max-w-2xl">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="btn-primary uppercase tracking-[0.08em]">
              Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
