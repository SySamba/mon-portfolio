import type { Metadata } from "next";
import SEOLocalSection from "@/components/SEOLocalSection";
import Image from "next/image";
import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import VideoPopup from "@/components/VideoPopup";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Développeur Web à Dakar — Sites, Apps & IA | Samba SY",
  description:
    "Développeur web full stack à Dakar : création de sites web, e-commerce, applications et solutions IA au Sénégal. Data Scientist & certifié AWS. Devis gratuit sous 24h.",
  path: "/",
  keywords: [
    "développeur web Sénégal",
    "développeur web Dakar",
    "développeur full stack Sénégal",
    "création site web Sénégal",
    "création application mobile Sénégal",
    "consultant Power BI Sénégal",
    "Data Analyst Sénégal",
    "Data Scientist Sénégal",
    "intelligence artificielle Sénégal",
    "développement logiciel Sénégal",
    "développeur React Sénégal",
    "développeur Next.js Sénégal",
    "développeur Flutter Sénégal",
    "référencement SEO Sénégal",
    "Samba SY",
  ],
});

const faqs = [
  {
    question: "Combien coûte la création d'un site web au Sénégal ?",
    answer:
      "Le prix d'un site web à Dakar dépend du type de projet : un site vitrine professionnel coûte de 150 000 à 500 000 FCFA, un site e-commerce de 400 000 à 1 500 000 FCFA, une application mobile de 800 000 à 3 000 000 FCFA, et une plateforme sur mesure à partir de 1 000 000 FCFA. Chaque projet fait l'objet d'un devis gratuit et détaillé.",
  },
  {
    question: "Quels sont les délais de réalisation d'un projet ?",
    answer:
      "Un site vitrine est livré en 2 à 3 semaines, un site e-commerce en 4 à 6 semaines et une application web ou mobile sur mesure en 6 à 12 semaines selon les fonctionnalités. Les délais sont confirmés dans le devis.",
  },
  {
    question: "Travaillez-vous avec des clients hors de Dakar ?",
    answer:
      "Oui. Basé à Dakar, j'accompagne des clients partout au Sénégal (Thiès, Saint-Louis, Ziguinchor…), en Afrique de l'Ouest ainsi qu'en Europe, en télétravail avec des points de suivi réguliers.",
  },
  {
    question: "Le référencement SEO est-il inclus dans la création du site ?",
    answer:
      "Oui, chaque site est livré avec les bases du référencement naturel : structure technique optimisée, balises title et meta, données structurées, sitemap, vitesse de chargement et configuration Google Search Console. Un accompagnement SEO avancé est proposé en option.",
  },
  {
    question: "Quels services de data et d'intelligence artificielle proposez-vous ?",
    answer:
      "Je réalise des tableaux de bord Power BI, des pipelines de données (ETL), de l'analyse prédictive, des modèles de machine learning, du NLP et de la computer vision, ainsi que des déploiements cloud sur AWS et Azure.",
  },
];

// Articles mis en avant sur l'accueil : on privilégie les requêtes commerciales
// locales, ce sont elles qui amènent des prospects (et elles reçoivent ainsi un
// lien depuis la page la plus forte du site, ce qui accélère leur indexation).
const articles = [
  {
    slug: "prix-site-web-dakar",
    date: "28 Août 2026",
    title: "Prix Création Site Web à Dakar : Combien Ça Coûte en 2026 ?",
    description:
      "Tarifs détaillés pour votre site internet au Sénégal : site vitrine, e-commerce, application métier.",
    tags: ["prix création site web Dakar", "devis site internet Sénégal", "tarif site web"],
  },
  {
    slug: "creation-site-web-dakar",
    date: "28 Août 2026",
    title: "Création de Site Web à Dakar et au Sénégal : le Guide Complet 2026",
    description: "Toutes les étapes, les types de sites, les délais et les bonnes pratiques pour créer votre site web à Dakar.",
    tags: ["création site web Dakar", "création site web Sénégal", "créer site vitrine Dakar"],
  },
  {
    slug: "site-ecommerce-dakar",
    date: "28 Août 2026",
    title: "Création de Site E-commerce à Dakar : Vendre en Ligne au Sénégal",
    description:
      "Créez votre boutique en ligne avec paiements Wave, Orange Money et cartes bancaires au Sénégal.",
    tags: ["e-commerce Sénégal", "boutique en ligne Dakar", "Wave & Orange Money"],
  },
  {
    slug: "developpeur-freelance-dakar",
    date: "28 Août 2026",
    title: "Développeur Freelance à Dakar : Tarif Journalier, Modalités et Contrat",
    description: "Combien coûte un développeur freelance à Dakar, comment se déroule la collaboration et quelles garanties exiger ?",
    tags: ["développeur freelance Dakar", "tarif journalier développeur", "freelance ou agence"],
  },
  {
    slug: "developpeur-web-senegal",
    date: "29 Juillet 2026",
    title: "Développeur Web au Sénégal : Comment Choisir un Expert Local à Dakar",
    description: "Compétences à vérifier, technologies maîtrisées et avantages concrets de travailler avec un développeur full stack basé à Dakar.",
    tags: ["développeur web Dakar", "développeur web Sénégal", "développeur full stack"],
  },
  {
    slug: "consultant-power-bi-senegal",
    date: "29 Juillet 2026",
    title: "Consultant Power BI au Sénégal : Visualisez Vos Performances",
    description:
      "Un consultant Power BI au Sénégal vous aide à concevoir des tableaux de bord interactifs.",
    tags: ["consultant Power BI Sénégal", "Business Intelligence", "dashboard"],
  },
];

// Services mis en avant : le développement web passe en premier, cohérent avec
// le positionnement « Développeur Web à Dakar » du titre et du H1.
const services = [
  {
    id: "dev",
    title: "Sites web & applications",
    description:
      "Sites vitrines, boutiques en ligne avec Wave et Orange Money, applications métier sur mesure. Rapides sur mobile, pensés pour convertir et bien référencés sur Google.",
    features: ["Next.js & React", "Laravel", "E-commerce", "SEO"],
  },
  {
    id: "ai",
    title: "Intelligence Artificielle",
    description:
      "Modèles de machine learning, NLP et computer vision pour automatiser vos processus et transformer vos données en décisions.",
    features: ["Machine Learning", "NLP", "Computer Vision"],
  },
  {
    id: "data",
    title: "Data Analytics & BI",
    description:
      "Tableaux de bord Power BI, pipelines ETL et analyse prédictive pour piloter votre activité avec des chiffres fiables.",
    features: ["Power BI", "ETL & SQL", "Analyse prédictive"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Architecture AWS, conteneurisation Docker et déploiements automatisés pour des applications fiables et évolutives.",
    features: ["AWS", "Docker & Kubernetes", "CI/CD"],
  },
];

const stack = [
  "Next.js", "React", "TypeScript", "Laravel", "Node.js", "Python", "SQL",
  "Power BI", "TensorFlow", "AWS", "Azure", "Docker", "Flutter", "MySQL",
];

const toolbox = [
  { title: "Développement", items: ["React", "Next.js", "TypeScript", "Laravel", "PHP", "Node.js", "Flutter", "MySQL", "PostgreSQL"] },
  { title: "Data & IA", items: ["Python", "R", "SQL", "Scikit-learn", "TensorFlow", "NLP", "Power BI", "DAX", "ETL"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Git"] },
];

const facts = [
  { label: "Formation", value: "Master IA & Big Data", detail: "Université Cheikh Anta Diop" },
  { label: "Certification", value: "AWS", detail: "Sonatel Academy · 2024" },
  { label: "Expérience", value: "Data Analyst", detail: "Aéroport de Dakar-Yoff" },
  { label: "Aujourd'hui", value: "Full Stack & Data", detail: "Porokhane Digital Consulting" },
];

export default function Home() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section id="home" className="relative overflow-hidden">
        <div className="t-diamond-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden="true" />
        <div className="max-w-[1240px] mx-auto px-5 relative z-10 pt-14 pb-16 lg:pt-20 lg:pb-20">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-20 items-center">
            <div>
              <h1 className="animate-fade-in-up delay-1">
                <span className="block text-lg md:text-xl font-bold tracking-wide text-text-secondary mb-4">
                  Samba SY
                </span>
                <span className="t-display block text-[3.4rem] sm:text-7xl lg:text-[5.6rem]">
                  Développeur Web <em>à&nbsp;Dakar</em>
                </span>
              </h1>

              <h2 className="mt-7 text-sm md:text-base font-bold tracking-[0.18em] uppercase text-text-muted animate-fade-in-up delay-2">
                Développeur Full Stack · Data Scientist · IA
              </h2>

              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl animate-fade-in-up delay-2">
                Basé à Dakar, je crée des sites web, des boutiques en ligne et des applications métier
                pour les entreprises du Sénégal et d'ailleurs. Certifié AWS, expert en IA et data,
                je conçois des solutions rapides, fiables et pensées pour convertir.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up delay-3">
                <Link href="/projects" className="btn-primary">
                  Voir mes projets <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                </Link>
                <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <i className="fab fa-whatsapp" aria-hidden="true" /> Discutons sur WhatsApp
                </a>
                <a href="/CV_Samba_SY.pdf" download className="text-sm font-bold text-text-secondary hover:text-accent underline underline-offset-4 decoration-border-color transition-colors">
                  Télécharger le CV
                </a>
              </div>

              <dl className="mt-14 grid grid-cols-3 max-w-lg border-t border-border-color animate-fade-in-up delay-4">
                {[
                  { n: "25+", l: "Projets livrés" },
                  { n: "3+", l: "Années d'expérience" },
                  { n: "AWS", l: "Certifié" },
                ].map((s, i) => (
                  <div key={s.l} className={`pt-5 ${i ? "pl-5 border-l border-border-color" : ""}`}>
                    <dt className="sr-only">{s.l}</dt>
                    <dd className="font-display text-4xl md:text-5xl font-medium">{s.n}</dd>
                    <dd className="text-xs md:text-sm text-text-muted mt-1">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Portrait en arche, soleil couchant sur l'Atlantique */}
            <div className="relative mx-auto w-full max-w-[420px] animate-fade-in-up delay-2">
              <div className="t-sun w-[62%] aspect-square -top-6 -right-8" aria-hidden="true" />
              <div className="t-arch">
                <Image
                  src="/portrait.webp"
                  alt="Samba SY, développeur web à Dakar"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-bottom"
                />
                <div className="t-weave absolute bottom-0 left-0 right-0" aria-hidden="true" />
              </div>
              <VideoPopup />

              <div className="t-float-card left-3 md:-left-12 bottom-16 px-5 py-4 flex items-center gap-3">
                <span className="t-pulse" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold leading-tight">Disponible</p>
                  <p className="text-xs text-text-muted">pour de nouveaux projets</p>
                </div>
              </div>

              <div className="t-float-card right-3 md:-right-8 top-[38%] px-4 py-3 text-center">
                <p className="font-display text-2xl leading-none text-accent">5,0</p>
                <p className="text-[10px] tracking-wider uppercase text-text-muted mt-1">
                  <i className="fab fa-google" aria-hidden="true" /> Avis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Stack défilante ───────────── */}
      <div className="border-y border-border-color bg-dark-surface py-5 overflow-hidden" aria-label="Technologies maîtrisées">
        <div className="t-marquee">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 font-display text-2xl md:text-3xl italic text-text-secondary whitespace-nowrap">
              {t}
              <span className="w-2 h-2 rotate-45 bg-[var(--terracotta)] not-italic" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* ───────────── À propos ───────────── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
          <div>
            <p className="t-label"><b>01</b> À propos</p>
            <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6">
              De la donnée <em>au produit fini.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-text-secondary leading-relaxed max-w-2xl">
              <p>
                Passionné par l'exploration des données, le cloud computing, les pratiques DevOps et le développement
                logiciel, je suis un data scientist avec une expertise croissante dans l'analyse de données, la
                conception de solutions cloud et le développement web.
              </p>
              <p>
                Maîtrisant les langages comme <strong className="text-text-primary">Python, R, SQL, Java</strong>, ainsi que des
                technologies web telles que <strong className="text-text-primary">HTML, CSS, JavaScript et PHP</strong>, j'excelle
                dans l'analyse exploratoire des données, la modélisation prédictive, et le développement d'applications
                web robustes.
              </p>
              <p>
                Mon parcours polyvalent me permet de combiner des compétences en data science, en développement
                logiciel et en cloud computing pour créer des solutions innovantes, performantes et adaptées aux
                besoins des utilisateurs.
              </p>
            </div>
            <Link href="/about" className="btn-secondary mt-10">
              Mon parcours complet <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>

          <div className="bg-dark-card border border-border-color rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)]">
            <div className="t-weave" aria-hidden="true" />
            <div className="p-8">
              <p className="t-label">Fiche</p>
              <dl className="mt-6 divide-y divide-[var(--border-color)]">
                {facts.map((f) => (
                  <div key={f.label} className="py-5 grid grid-cols-[110px_1fr] gap-4">
                    <dt className="text-xs font-bold uppercase tracking-wider text-text-muted pt-1">{f.label}</dt>
                    <dd>
                      <p className="font-display text-xl">{f.value}</p>
                      <p className="text-sm text-text-secondary">{f.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section id="services-preview" className="py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="t-label"><b>02</b> Services</p>
              <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6">
                Ce que je <em>construis.</em>
              </h2>
            </div>
            <Link href="/services" className="btn-secondary self-start md:self-auto">
              Tous les services <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>

          <div>
            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="t-row grid-cols-[auto_1fr_auto] md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.3fr)_auto] gap-x-6 md:gap-x-10 gap-y-3 items-center py-8 md:py-10 px-2 md:px-4"
              >
                <span className="font-display italic text-2xl md:text-3xl text-accent">0{i + 1}</span>
                <h3 className="font-display text-2xl md:text-[2.1rem] leading-tight font-normal">{s.title}</h3>
                <div className="col-span-3 row-start-2 md:col-span-1 md:row-start-1 md:col-start-3">
                  <p className="text-text-secondary leading-relaxed">{s.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs font-bold uppercase tracking-wider text-text-muted">{f}</span>
                    ))}
                  </div>
                </div>
                <span className="t-arrow row-start-1 col-start-3 md:col-start-4" aria-hidden="true">
                  <i className="fas fa-arrow-right text-sm" />
                </span>
              </Link>
            ))}
          </div>

          <nav className="mt-10 flex flex-wrap items-center gap-2" aria-label="Solutions par besoin">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted mr-2">Solutions</span>
            <Link href="/application-mobile-dakar/" className="t-chip">Application mobile à Dakar</Link>
            <Link href="/logiciel-gestion-stock-senegal/" className="t-chip">Logiciel de gestion de stock</Link>
            <Link href="/logiciel-gestion-scolaire-senegal/" className="t-chip">Logiciel de gestion scolaire</Link>
            <Link href="/site-web-association-senegal/" className="t-chip">Site web pour association</Link>
          </nav>
        </div>
      </section>

      <FeaturedProjects />

      <Testimonials />

      {/* ───────────── Boîte à outils ───────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>05</b> Compétences techniques</p>
          <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-14">
            Ma <em>boîte à outils.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {toolbox.map((group) => (
              <div key={group.title} className="border-t-2 border-[var(--terracotta)] pt-6">
                <h3 className="font-display text-2xl mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="t-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Articles ───────────── */}
      <section id="blog-preview" className="py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="t-label"><b>06</b> Journal</p>
              <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6">
                Derniers <em>articles.</em>
              </h2>
            </div>
            <Link href="/blog" className="btn-secondary self-start md:self-auto">
              Tous les articles <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>

          <div>
            {articles.map((article) => (
              <article key={article.slug} className="t-row md:grid-cols-[160px_1fr_auto] gap-x-8 gap-y-2 items-center py-7 px-2 md:px-4">
                <p className="text-xs font-bold uppercase tracking-wider text-text-muted">{article.date}</p>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-normal leading-snug">
                    <Link href={`/blog/${article.slug}/`} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 max-w-2xl">{article.description}</p>
                </div>
                <span className="t-arrow hidden md:inline-flex" aria-hidden="true">
                  <i className="fas fa-arrow-right text-sm" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Appel à l'action ───────────── */}
      <section className="relative bg-[var(--terracotta)] text-[#fff8ef] overflow-hidden">
        <div className="t-weave" aria-hidden="true" />
        <div className="t-sun w-[520px] aspect-square -right-40 -bottom-64 opacity-40" aria-hidden="true" />
        <div className="max-w-[1240px] mx-auto px-5 py-24 lg:py-28 relative">
          <h2 className="t-display text-4xl md:text-6xl lg:text-7xl max-w-4xl [&_em]:!text-[var(--ink)]">
            Un projet de site ou d'application <em>à Dakar ?</em>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#fff8ef]/85 max-w-2xl">
            Décrivez-moi votre besoin : je réponds sous 24h avec un premier avis et une estimation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/devis" className="btn-primary !bg-[var(--ink)] hover:!bg-black uppercase tracking-[0.08em]">
              Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-secondary !border-[#fff8ef]/70 !text-[#fff8ef] hover:!bg-[#fff8ef] hover:!text-[var(--terracotta)]">
              <i className="fab fa-whatsapp" aria-hidden="true" /> +221 77 378 48 14
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.6fr] gap-14">
          <div>
            <p className="t-label"><b>07</b> FAQ</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">
              Questions <em>fréquentes.</em>
            </h2>
            <p className="mt-6 text-text-secondary">
              Une autre question ?{" "}
              <Link href="/contact" className="text-accent font-bold underline underline-offset-4">Écrivez-moi</Link>.
            </p>
          </div>
          <div>
            {faqs.map((faq) => (
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

      <JsonLd data={faqSchema(faqs)} />
      <SEOLocalSection page="home" />
    </>
  );
}
