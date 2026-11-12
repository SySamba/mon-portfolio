"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogCover from "@/components/BlogCover";
import PageHero from "@/components/PageHero";

const filters = [
  { key: "all", label: "Tous les Articles" },
  { key: "ai", label: "Intelligence Artificielle" },
  { key: "data", label: "Data Science" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "tech", label: "Technologies" },
];

const MONTHS: Record<string, number> = {
  Janvier: 0,
  Février: 1,
  Mars: 2,
  Avril: 3,
  Mai: 4,
  Juin: 5,
  Juillet: 6,
  "Août": 7,
  Septembre: 8,
  Octobre: 9,
  Novembre: 10,
  Décembre: 11,
};

function parseFrDate(dateStr: string) {
  const [day, month, year] = dateStr.split(" ");
  return new Date(Number(year), MONTHS[month] ?? 0, Number(day));
}

const articles = [
  {
    slug: "ia-afrique",
    category: "ai",
    badge: "IA",
    image: "/image.jpg",
    date: "15 Janvier 2024",
    readingTime: "8 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "L'Avenir de l'Intelligence Artificielle en Afrique : Opportunités et Défis",
    description: "Comment le continent africain peut tirer parti de la révolution IA pour accélérer son développement économique et social.",
    tags: ["IA", "Afrique", "Innovation", "Développement"],
  },
  {
    slug: "power-bi-dashboards",
    category: "data",
    badge: "Data Science",
    image: "/3.webp",
    date: "12 Janvier 2024",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Comment Créer des Tableaux de Bord Efficaces avec Power BI",
    description: "Guide pratique pour concevoir des dashboards qui transforment vos données en insights actionnables. Techniques avancées et bonnes pratiques.",
    tags: ["Power BI", "Dashboard", "Visualisation"],
  },
  {
    slug: "aws-migration-guide",
    category: "cloud",
    badge: "Cloud",
    image: "/image.jpg",
    date: "08 Janvier 2024",
    readingTime: "10 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Migration vers AWS : Guide Complet pour les Entreprises",
    description: "Stratégies et étapes clés pour réussir votre migration cloud. De la planification au déploiement, découvrez les meilleures pratiques.",
    tags: ["AWS", "Migration", "Cloud Strategy"],
  },
  {
    slug: "fake-news-nlp",
    category: "ai",
    badge: "IA",
    image: "/image.jpg",
    date: "05 Janvier 2024",
    readingTime: "7 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Détection de Fake News : Techniques de NLP Avancées",
    description: "Exploration des algorithmes de traitement du langage naturel pour identifier automatiquement les fausses informations en ligne.",
    tags: ["NLP", "Fake News", "Machine Learning"],
  },
  {
    slug: "developpeur-web-senegal",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "29 Juillet 2026",
    readingTime: "7 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Développeur Web au Sénégal : Comment Choisir un Expert Local à Dakar",
    description: "Compétences à vérifier, technologies maîtrisées et avantages concrets de travailler avec un développeur full stack basé à Dakar.",
    tags: ["développeur web Dakar", "développeur web Sénégal", "développeur full stack Dakar", "Next.js", "React"],
  },
  {
    slug: "data-scientist-senegal",
    category: "data",
    badge: "Data",
    image: "/image.jpg",
    date: "29 Juillet 2026",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Data Analyst et Data Scientist au Sénégal : Booster Vos Décisions",
    description: "Exploitez la puissance de vos données avec un Data Analyst ou Data Scientist au Sénégal.",
    tags: ["Data Analyst Sénégal", "Data Scientist Sénégal", "intelligence artificielle", "machine learning"],
  },
  {
    slug: "consultant-power-bi-senegal",
    category: "data",
    badge: "BI",
    image: "/image.jpg",
    date: "29 Juillet 2026",
    readingTime: "5 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Consultant Power BI au Sénégal : Visualisez Vos Performances",
    description: "Un consultant Power BI au Sénégal vous aide à concevoir des tableaux de bord interactifs.",
    tags: ["consultant Power BI Sénégal", "Business Intelligence", "dashboard", "Data Analyst"],
  },
  {
    slug: "developpeur-freelance-dakar",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "28 Août 2026",
    readingTime: "8 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Développeur Freelance à Dakar : Tarif Journalier, Modalités et Contrat",
    description: "Combien coûte un développeur freelance à Dakar, comment se déroule la collaboration et quelles garanties exiger ? Freelance, agence ou salarié.",
    tags: ["développeur freelance Dakar", "développeur freelance Sénégal", "tarif journalier développeur Dakar", "freelance ou agence"],
  },
  {
    slug: "agence-web-dakar",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "28 Août 2026",
    readingTime: "7 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Agence Web à Dakar : Comment Choisir le Bon Prestataire au Sénégal",
    description: "Agence web, entreprise informatique ou expert indépendant à Dakar ? Les critères pour évaluer un prestataire et les questions à poser avant de signer.",
    tags: ["agence web Dakar", "agence développement web Dakar", "entreprise développement informatique Dakar", "choisir prestataire web Sénégal"],
  },
  {
    slug: "creation-site-web-dakar",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "28 Août 2026",
    readingTime: "10 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Création de Site Web à Dakar et au Sénégal : le Guide Complet 2026",
    description: "Créer un site web à Dakar ou faire développer un site internet au Sénégal ? Toutes les étapes, les types de sites, les délais et les bonnes pratiques.",
    tags: ["création site web Dakar", "création site web Sénégal", "création site internet Dakar", "créer un site web à Dakar", "créer site vitrine Dakar"],
  },
  {
    slug: "site-ecommerce-dakar",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "28 Août 2026",
    readingTime: "8 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Création de Site E-commerce à Dakar : Vendre en Ligne au Sénégal",
    description: "Développeur site e-commerce à Dakar ? Créez votre boutique en ligne avec paiements Wave, Orange Money et cartes bancaires au Sénégal.",
    tags: ["développeur site e-commerce Dakar", "création boutique en ligne Dakar", "e-commerce Sénégal", "Wave", "Orange Money"],
  },
  {
    slug: "prix-site-web-dakar",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "28 Août 2026",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.webp",
    title: "Prix Création Site Web à Dakar : Combien Ça Coûte en 2026 ?",
    description: "Combien coûte la création d'un site web à Dakar ? Tarifs détaillés et devis pour votre site internet au Sénégal : vitrine, e-commerce, application.",
    tags: ["prix création site web Dakar", "devis site internet Sénégal", "tarif site web Dakar", "coût site internet Sénégal"],
  },
];

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const sortedArticles = [...articles].sort(
    (a, b) => parseFrDate(b.date).getTime() - parseFrDate(a.date).getTime()
  );
  const featured = sortedArticles[0];
  const gridArticles = sortedArticles.slice(1);
  const showFeatured = activeFilter === "all" || featured.category === activeFilter;
  const filteredArticles =
    activeFilter === "all"
      ? gridArticles
      : gridArticles.filter((a) => a.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Journal"
        title={<>Blog <em>tech.</em></>}
        subtitle="Création de sites web, data, intelligence artificielle et cloud : guides pratiques et retours d'expérience depuis Dakar."
      >
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les articles">
          {filters.map((filter) => {
            const active = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter.key)}
                className={`t-chip ${active ? "!bg-[var(--terracotta)] !border-[var(--terracotta)] !text-[#fff8ef]" : ""}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </PageHero>

      {/* Article à la une */}
      {showFeatured && (
        <section className="pt-16 lg:pt-24">
          <div className="max-w-[1240px] mx-auto px-5">
            <article className="group relative grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-14 items-center">
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden border border-border-color">
                <BlogCover slug={featured.slug} title={featured.title} category={featured.category} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="t-weave absolute bottom-0 left-0 right-0 z-10" aria-hidden="true" />
              </div>
              <div>
                <p className="t-label !tracking-[0.18em]"><b>À la une</b> {featured.badge}</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.7rem] font-normal leading-tight mt-5">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-text-secondary mt-5 text-lg leading-relaxed">{featured.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-2"><i className="far fa-clock" aria-hidden="true" /> {featured.readingTime}</span>
                  {featured.author && (
                    <span className="flex items-center gap-2">
                      {featured.authorAvatar && (
                        <Image src={featured.authorAvatar} alt="" width={22} height={22} className="rounded-full object-cover" />
                      )}
                      {featured.author}
                    </span>
                  )}
                </div>
                <span className="mt-8 inline-flex items-center gap-3 font-bold text-accent">
                  Lire l&apos;article
                  <span className="t-arrow !w-10 !h-10 transition-all duration-300 group-hover:!bg-[var(--terracotta)] group-hover:text-[#fff8ef] group-hover:-rotate-45" aria-hidden="true">
                    <i className="fas fa-arrow-right text-xs" />
                  </span>
                </span>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Grille */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="group relative">
                <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden border border-border-color">
                  <BlogCover slug={article.slug} title={article.title} category={article.category} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="pt-6">
                  <p className="t-label !tracking-[0.18em]"><b>{article.badge}</b> {article.readingTime}</p>
                  <h3 className="font-display text-2xl font-normal leading-snug mt-3">
                    <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-text-secondary mt-3 leading-relaxed">{article.description}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted mt-4">{article.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative bg-dark-surface border-t border-border-color overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-5 py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="t-label"><b>Newsletter</b> Restez informé</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">
              Les prochains articles, <em>dans votre boîte mail.</em>
            </h2>
          </div>
          <div>
            <form action="https://formspree.io/f/xojgbljz" method="POST" className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Votre adresse email</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Votre adresse email"
                required
                className="flex-1 bg-dark-card border border-border-color rounded-full px-6 py-3.5 text-text-primary focus:outline-none focus:border-accent"
              />
              <button type="submit" className="btn-primary justify-center whitespace-nowrap">
                S&apos;abonner <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </button>
            </form>
            <p className="text-xs text-text-muted mt-4">Pas de spam, désabonnement en un clic.</p>
          </div>
        </div>
      </section>
    </>
  );
}
