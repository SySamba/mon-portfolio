import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";

export const metadata = {
  title: "Services - Samba SY | Expert IA, Cloud & Data Science",
  description:
    "Découvrez mes services en Intelligence Artificielle, Cloud Computing, Data Analytics et Développement Full Stack. Solutions sur mesure pour vos projets technologiques.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services - Samba SY | Expert IA, Cloud & Data Science",
    description:
      "Découvrez mes services en Intelligence Artificielle, Cloud Computing, Data Analytics et Développement Full Stack. Solutions sur mesure pour vos projets technologiques.",
    url: "/services/",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Samba SY | Expert IA, Cloud & Data Science",
    description:
      "Découvrez mes services en Intelligence Artificielle, Cloud Computing, Data Analytics et Développement Full Stack. Solutions sur mesure pour vos projets technologiques.",
    images: ["/profil.png"],
  },
};

const services = [
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
      },
      {
        icon: "fas fa-shopping-cart",
        title: "E-commerce",
        description: "Plateformes de vente en ligne complètes avec paiement, stock et gestion commandes.",
        details: ["Catalogue produits", "Paiement intégré", "Gestion de stock", "Admin dashboard"],
      },
      {
        icon: "fas fa-plug",
        title: "API & Backend",
        description: "Conception et développement d'APIs robustes et sécurisées pour vos applications.",
        details: ["REST API", "GraphQL", "Authentification", "Base de données"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Mes Services"
        subtitle="Solutions technologiques innovantes pour transformer votre business"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5 space-y-20">
          {services.map((service) => (
            <div id={service.id} key={service.id} className="scroll-mt-24">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
                <div className="w-full md:w-40 h-32 md:h-32 rounded-2xl overflow-hidden border border-border-color shrink-0">
                  <ServiceCover id={service.id} title={service.title} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-text-secondary text-lg">{service.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {service.offerings.map((offering) => (
                  <div key={offering.title} className="service-card">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                      <i className={`${offering.icon} text-accent`}></i> {offering.title}
                    </h3>
                    <p className="text-text-secondary mb-4">{offering.description}</p>
                    <ul className="space-y-2">
                      {offering.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-text-muted">
                          <i className="fas fa-check text-accent text-xs"></i> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2>Prêt à Démarrer Votre Projet ?</h2>
          <p>Obtenez un devis gratuit et personnalisé pour vos besoins</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="btn-primary">
              Demander un Devis
            </Link>
            <Link href="/contact" className="btn-secondary">
              Me Contacter
            </Link>
          </div>
        </div>
      </section>
    <SEOLocalSection page="services" />
    </>
  );
}
