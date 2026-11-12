import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

// Le cluster « création de site web à Dakar » appartient à la page pilier
// /blog/creation-site-web-dakar/ : cette page reste la page de conversion et
// cible la palette de prestations, sans lui disputer la requête principale.
export const metadata = pageMetadata({
  title: "Services : Applications, Data, IA, Cloud & SEO à Dakar | Samba SY",
  description:
    "Applications web et mobiles, tableaux de bord Power BI, machine learning, cloud AWS et référencement SEO à Dakar, Sénégal. Devis gratuit et réponse sous 24h.",
  path: "/services/",
  keywords: [
    "développement application mobile Sénégal",
    "consultant Power BI Sénégal",
    "référencement SEO Dakar",
    "développement logiciel Sénégal",
    "intelligence artificielle Sénégal",
    "cloud AWS Sénégal",
  ],
});

const services = [
  {
    id: "dev",
    icon: "fas fa-laptop-code",
    title: "Développement Full Stack",
    subtitle: "Création d'applications web et mobiles modernes, performantes et scalables",
    offerings: [
      {
        icon: "fas fa-globe",
        title: "Développement Web",
        description: "Sites vitrines, applications web et plateformes e-commerce sur mesure.",
        details: ["React / Next.js", "PHP / Laravel", "Node.js", "SEO & Performance"],
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Applications Mobiles",
        description: "Développement d'applications mobiles cross-platform adaptées à vos besoins.",
        details: ["React Native", "PWA", "UX Mobile", "API Integration"],
        link: { href: "/application-mobile-dakar/", label: "Création d'application mobile à Dakar : prix et délais" },
      },
      {
        icon: "fas fa-shopping-cart",
        title: "E-commerce",
        description: "Plateformes de vente en ligne complètes avec paiement, stock et gestion commandes.",
        details: ["Catalogue produits", "Paiement intégré", "Gestion de stock", "Admin dashboard"],
        link: { href: "/blog/site-ecommerce-dakar/", label: "Création de site e-commerce à Dakar : prix et délais" },
      },
      {
        icon: "fas fa-plug",
        title: "API & Backend",
        description: "Conception et développement d'APIs robustes et sécurisées pour vos applications.",
        details: ["REST API", "GraphQL", "Authentification", "Base de données"],
      },
    ],
  },
  {
    id: "ai",
    icon: "fas fa-brain",
    title: "Intelligence Artificielle",
    subtitle: "Développement de solutions IA avancées pour automatiser et optimiser vos processus métier",
    offerings: [
      {
        icon: "fas fa-robot",
        title: "Machine Learning",
        description: "Création de modèles prédictifs personnalisés pour l'analyse de données, la classification et la régression.",
        details: ["Modèles de prédiction de ventes", "Systèmes de recommandation", "Détection d'anomalies", "Classification automatique"],
      },
      {
        icon: "fas fa-comments",
        title: "Traitement du Langage Naturel",
        description: "Solutions NLP pour analyser et comprendre le langage humain dans vos applications.",
        details: ["Chatbots intelligents", "Analyse de sentiment", "Extraction d'entités", "Traduction automatique"],
      },
      {
        icon: "fas fa-eye",
        title: "Computer Vision",
        description: "Analyse et traitement d'images pour automatiser la reconnaissance et la classification visuelle.",
        details: ["Reconnaissance d'objets", "Détection de visages", "OCR (reconnaissance de texte)", "Analyse d'images médicales"],
      },
      {
        icon: "fas fa-shield-alt",
        title: "Détection de Fake News",
        description: "Systèmes avancés pour identifier et classifier les fausses informations en temps réel.",
        details: ["Analyse de contenu textuel", "Vérification de sources", "Scoring de crédibilité", "API de vérification"],
      },
    ],
  },
  {
    id: "cloud",
    icon: "fas fa-cloud",
    title: "Cloud Computing & DevOps",
    subtitle: "Architecture cloud moderne et automatisation des déploiements pour une scalabilité optimale",
    offerings: [
      {
        icon: "fab fa-aws",
        title: "Solutions AWS",
        description: "Conception et déploiement d'infrastructures cloud robustes et sécurisées sur Amazon Web Services.",
        details: ["Architecture cloud native", "Migration vers le cloud", "Optimisation des coûts", "Sécurité et conformité"],
      },
      {
        icon: "fab fa-docker",
        title: "Containerisation",
        description: "Déploiement d'applications avec Docker et orchestration Kubernetes pour une scalabilité maximale.",
        details: ["Containerisation Docker", "Orchestration Kubernetes", "Microservices architecture", "Load balancing"],
      },
      {
        icon: "fas fa-code-branch",
        title: "CI/CD Pipeline",
        description: "Automatisation complète des processus de développement, test et déploiement.",
        details: ["Pipeline automatisé", "Tests automatiques", "Déploiement continu", "Monitoring et alertes"],
      },
      {
        icon: "fas fa-cogs",
        title: "Infrastructure as Code",
        description: "Gestion d'infrastructure avec Terraform, Ansible et CloudFormation pour une reproductibilité parfaite.",
        details: ["Terraform automation", "Ansible configuration", "CloudFormation templates", "Version control"],
      },
    ],
  },
  {
    id: "data",
    icon: "fas fa-chart-line",
    title: "Data Analytics & Business Intelligence",
    subtitle: "Transformation de vos données en insights actionnables pour des décisions éclairées",
    offerings: [
      {
        icon: "fas fa-chart-bar",
        title: "Tableaux de Bord",
        description: "Création de dashboards interactifs et en temps réel pour visualiser vos KPIs métier.",
        details: ["Dashboards Power BI", "Visualisations Tableau", "Rapports automatisés", "KPI monitoring"],
      },
      {
        icon: "fas fa-database",
        title: "ETL & Data Pipeline",
        description: "Conception de pipelines de données robustes pour l'extraction, transformation et chargement.",
        details: ["ETL avec Talend", "Data pipeline automation", "Data quality management", "Data warehousing"],
      },
      {
        icon: "fas fa-search",
        title: "Analyse Prédictive",
        description: "Utilisation du machine learning pour anticiper les tendances et optimiser vos stratégies.",
        details: ["Forecasting", "Segmentation clients", "Scoring", "Optimisation des processus"],
      },
      {
        icon: "fas fa-broom",
        title: "Data Cleaning",
        description: "Préparation et nettoyage des données pour garantir la qualité et la fiabilité des analyses.",
        details: ["Détection d'erreurs", "Normalisation", "Imputation", "Dédoublonnage"],
      },
    ],
  },
];

const solutions = [
  {
    href: "/application-mobile-dakar/",
    icon: "fas fa-mobile-screen",
    title: "Application mobile",
    text: "Android, iOS et PWA en Flutter ou React Native, avec paiement Wave et Orange Money.",
  },
  {
    href: "/logiciel-gestion-stock-senegal/",
    icon: "fas fa-boxes-stacked",
    title: "Gestion de stock",
    text: "Stock, ventes et caisse en temps réel pour boutiques, dépôts et stations-service.",
  },
  {
    href: "/logiciel-gestion-scolaire-senegal/",
    icon: "fas fa-user-graduate",
    title: "Gestion scolaire",
    text: "Inscriptions, notes, bulletins et frais de scolarité pour écoles et instituts.",
  },
  {
    href: "/site-web-association-senegal/",
    icon: "fas fa-people-group",
    title: "Site pour association",
    text: "Site vitrine, gestion des membres, cotisations et cartes de membre.",
  },
];

const servicesFaqs = [
  {
    question: "Quel est le prix d'un site web professionnel à Dakar ?",
    answer:
      "Un site vitrine professionnel coûte de 150 000 à 500 000 FCFA, un site e-commerce de 400 000 à 1 500 000 FCFA et une plateforme sur mesure à partir de 1 000 000 FCFA. Le tarif dépend du nombre de pages, des fonctionnalités et de l'intégration de contenus. Le devis est gratuit.",
  },
  {
    question: "Proposez-vous la maintenance du site après la livraison ?",
    answer:
      "Oui. Chaque projet inclut une période de garantie, puis un contrat de maintenance optionnel couvrant les mises à jour, les sauvegardes, la sécurité, l'hébergement et le suivi des performances SEO.",
  },
  {
    question: "Pouvez-vous créer un tableau de bord Power BI pour mon entreprise ?",
    answer:
      "Oui. J'accompagne les entreprises sénégalaises de la collecte des données (ETL) à la modélisation et à la création de tableaux de bord Power BI interactifs avec KPIs métiers, formation des équipes incluse.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Côté web : React, Next.js, Laravel, Node.js, MySQL et PostgreSQL. Côté mobile : Flutter. Côté data et IA : Python, R, SQL, scikit-learn, TensorFlow et Power BI. Côté cloud : AWS, Azure, Docker et Kubernetes.",
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services/#page`,
      url: `${SITE_URL}/services/`,
      name: "Services Samba SY",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    ...services.map((service) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services/#${service.id}`,
      name: service.title,
      description: service.subtitle,
      serviceType: service.title,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "Country", name: "Sénégal" },
        { "@type": "City", name: "Dakar" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: service.title,
        itemListElement: service.offerings.map((offering) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offering.title,
            description: offering.description,
          },
        })),
      },
    })),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema,
          faqSchema(servicesFaqs),
          breadcrumbSchema([{ name: "Services", path: "/services/" }]),
        ]}
      />
      {/* Hero */}
      <PageHero
        eyebrow="Services"
        title={<>Mes <em>services.</em></>}
        subtitle="Des solutions technologiques concrètes pour transformer votre activité : sites et applications, intelligence artificielle, data et cloud."
      >
        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Pôles de services">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="t-chip">
              <span className="font-display italic text-accent mr-2">0{i + 1}</span>
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Services */}
      {services.map((service, i) => (
        <section
          id={service.id}
          key={service.id}
          className={`scroll-mt-24 py-20 lg:py-28 ${i % 2 ? "bg-dark-surface" : ""}`}
        >
          <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="t-label"><b>0{i + 1}</b> Pôle</p>
              <h2 className="t-display text-4xl md:text-5xl mt-6">{service.title}</h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">{service.subtitle}</p>
              <div className="mt-8 h-40 rounded-[22px] overflow-hidden border border-border-color hidden lg:block saturate-[.8]">
                <ServiceCover id={service.id} title={service.title} />
              </div>
            </div>

            <div>
              {service.offerings.map((offering) => (
                <div key={offering.title} className="t-row grid-cols-[48px_1fr] gap-x-5 py-8 px-2">
                  <span className="service-icon !w-12 !h-12 !text-lg !rounded-full !mb-0">
                    <i className={offering.icon} aria-hidden="true"></i>
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-normal">{offering.title}</h3>
                    <p className="text-text-secondary mt-2 leading-relaxed">{offering.description}</p>
                    {offering.link && (
                      <Link href={offering.link.href} className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-accent underline underline-offset-4">
                        {offering.link.label} <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                      </Link>
                    )}
                    <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {offering.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rotate-45 bg-[var(--terracotta)] shrink-0" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Solutions par secteur */}
      <section id="solutions" className="py-24 lg:py-32 border-t border-border-color">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>05</b> Solutions</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-12">
            Solutions <em>par besoin.</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-dark-card border border-border-color rounded-[22px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--terracotta)]"
              >
                <span className="service-icon !w-12 !h-12 !text-lg !rounded-full !mb-5">
                  <i className={s.icon} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-normal">{s.title}</h3>
                <p className="text-text-secondary mt-2 leading-relaxed text-sm">{s.text}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-accent">
                  En savoir plus <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 border-t border-border-color">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_1.6fr] gap-14">
          <div>
            <p className="t-label"><b>FAQ</b> Questions</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">
              Questions fréquentes <em>sur mes services.</em>
            </h2>
          </div>
          <div>
            {servicesFaqs.map((faq) => (
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
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>Obtenez un devis gratuit et personnalisé pour vos besoins — réponse sous 24h.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="btn-primary uppercase tracking-[0.08em]">
              Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    <SEOLocalSection page="services" />
    </>
  );
}
