import type { Metadata } from "next";
import SEOLocalSection from "@/components/SEOLocalSection";
import Image from "next/image";
import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";
import BlogCover from "@/components/BlogCover";
import ServiceCover from "@/components/ServiceCover";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Samba SY - Data Analyst, Data Scientist & SEO au Sénégal | Développeur Web Dakar",
  description:
    "Samba SY, Data Analyst, Data Scientist, SEO et développeur web full stack au Sénégal. Création de sites web, applications mobiles et solutions IA à Dakar.",
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Samba SY - Développeur Web & Data Scientist au Sénégal",
    description:
      "Développeur web full stack, Data Scientist et consultant Power BI à Dakar. Sites web, mobile, IA et Business Intelligence.",
    url: "/",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
};

const services = [
  {
    id: "ai",
    icon: "fa-brain",
    title: "Intelligence Artificielle",
    description:
      "Développement de modèles ML/DL, NLP, Computer Vision et systèmes de recommandation intelligents pour transformer vos données en solutions innovantes.",
    features: ["Machine Learning", "Deep Learning", "NLP & Computer Vision"],
  },
  {
    id: "cloud",
    icon: "fa-cloud",
    title: "Cloud & DevOps",
    description:
      "Architecture cloud AWS, CI/CD, Infrastructure as Code, containerisation Docker/Kubernetes pour des déploiements scalables et sécurisés.",
    features: ["AWS Cloud Architecture", "CI/CD Pipeline", "Docker & Kubernetes"],
  },
  {
    id: "data",
    icon: "fa-chart-line",
    title: "Data Analytics & BI",
    description:
      "Analyse prédictive, tableaux de bord interactifs, ETL et visualisation de données avancée pour optimiser vos décisions business.",
    features: ["Tableaux de Bord", "Analyse Prédictive", "ETL & Data Pipeline"],
  },
];

const projects = [
  {
    category: "data-science",
    title: "Détection Fake News",
    description:
      "Application IA capable d'analyser vidéos et textes pour déterminer leur véracité. Déployée sur Azure avec Docker.",
    tech: ["Python", "NLP", "Azure", "Docker"],
  },
  {
    category: "data-science",
    title: "Prédiction du Diabète",
    description:
      "Modèle ML prédictif pour anticiper les risques de diabète à partir de données cliniques.",
    tech: ["Machine Learning", "Python", "Scikit-learn"],
  },
  {
    category: "data-science",
    title: "Analyse du Trafic Aérien",
    description:
      "Pipeline automatisé de collecte, transformation et chargement des données (ETL) avec restitution dans Power BI. Tableaux de bord modernes, KPIs opérationnels et design orienté décision.",
    tech: ["Power BI", "ETL", "SQL", "DAX"],
    gallery: ["/1.png", "/2.png", "/3.png", "/4.png"],
  },
  {
    category: "development",
    title: "Site Digital Porokhane",
    description:
      "Plateforme digitale moderne pour la présentation et gestion des services Porokhane.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://digital-porokhane.com/",
  },
  {
    category: "development",
    title: "Site Mairie de Khombole",
    description:
      "Site web moderne pour la Mairie de Khombole avec gestion des services municipaux et informations citoyennes.",
    tech: ["React", "Laravel", "MySQL"],
    link: "https://mairiedekhombole.sn/",
  },
  {
    category: "development",
    title: "Site Saveur Deco",
    description:
      "Plateforme e-commerce moderne pour la décoration d'intérieur avec catalogue produits et interface utilisateur élégante.",
    tech: ["React", "E-commerce", "Responsive"],
    link: "https://saveurdeco.fr/",
  },
];

const skills = [
  {
    title: "Data Science & IA",
    items: [
      { name: "Python, R, Scala", width: 85 },
      { name: "Machine Learning", width: 90 },
      { name: "Deep Learning", width: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS Cloud", width: 75 },
      { name: "Docker & Kubernetes", width: 90 },
      { name: "CI/CD", width: 80 },
    ],
  },
  {
    title: "Développement",
    items: [
      { name: "Full Stack Development", width: 85 },
      { name: "Bases de Données", width: 75 },
      { name: "Data Visualization", width: 80 },
    ],
  },
];

const articles = [
  {
    slug: "developpeur-web-senegal",
    date: "29 Juillet 2026",
    title: "Développeur Web au Sénégal : Pourquoi Choisir un Expert Local ?",
    description:
      "Vous cherchez un développeur web au Sénégal ? Découvrez les avantages de travailler avec un développeur full stack à Dakar.",
    tags: ["développeur web Sénégal", "développeur web Dakar", "création site web"],
  },
  {
    slug: "data-scientist-senegal",
    date: "29 Juillet 2026",
    title: "Data Analyst et Data Scientist au Sénégal : Booster Vos Décisions",
    description:
      "Exploitez la puissance de vos données avec un Data Analyst ou Data Scientist au Sénégal.",
    tags: ["Data Analyst Sénégal", "Data Scientist Sénégal", "intelligence artificielle"],
  },
  {
    slug: "consultant-power-bi-senegal",
    date: "29 Juillet 2026",
    title: "Consultant Power BI au Sénégal : Visualisez Vos Performances",
    description: "Un consultant Power BI au Sénégal vous aide à concevoir des tableaux de bord interactifs.",
    tags: ["consultant Power BI Sénégal", "Business Intelligence", "dashboard"],
  },
  {
    slug: "ia-afrique",
    date: "15 Janvier 2024",
    title: "L'Avenir de l'Intelligence Artificielle en Afrique",
    description:
      "Opportunités, défis et cas d'usage concrets pour accélérer la transformation numérique du continent.",
    tags: ["IA", "Innovation", "Stratégie"],
  },
  {
    slug: "power-bi-dashboards",
    date: "12 Janvier 2024",
    title: "Comment Créer des Tableaux de Bord Efficaces avec Power BI",
    description:
      "De la modélisation des données au storytelling visuel: bonnes pratiques et checklists professionnelles.",
    tags: ["Data Viz", "Power BI", "BI"],
  },
  {
    slug: "aws-migration-guide",
    date: "08 Janvier 2024",
    title: "Migration vers AWS : Guide Complet pour les Entreprises",
    description:
      "Stratégies et étapes clés pour réussir votre migration cloud. De la planification au déploiement, découvrez les meilleures pratiques.",
    tags: ["AWS", "Cloud", "DevOps"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero relative overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-[1200px] mx-auto px-5 w-full relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Bonjour, je suis{" "}
                <span className="highlight">Samba SY</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 bg-gradient-to-r from-[var(--accent-color)] to-[#8b5cf6] bg-clip-text text-transparent">
                DATA SCIENTIST · DATA ANALYST · DÉVELOPPEUR FULL STACK & IA
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl">
                Passionné par l'Intelligence Artificielle et les technologies cloud, je transforme les données en
                solutions innovantes. Expert en Machine Learning, AWS Cloud et DevOps, je crée des applications
                intelligentes qui révolutionnent les processus métier.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/projects" className="btn-primary">
                  Voir mes Projets
                </Link>
                <a href="/CV_Samba_SY.pdf" download className="btn-secondary">
                  <i className="fas fa-download"></i> Télécharger CV
                </a>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div className="stat text-center">
                  <h3 className="text-3xl md:text-4xl">26</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Projets IA</p>
                </div>
                <div className="stat text-center">
                  <h3 className="text-3xl md:text-4xl">3+</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Années d'expérience</p>
                </div>
                <div className="stat text-center">
                  <h3 className="text-3xl md:text-4xl">AWS</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">Certifié</p>
                </div>
              </div>
            </div>

            <div className="hero-profile-wrapper w-80 h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] animate-fade-in-up delay-2 mx-auto lg:ml-auto lg:mr-0 lg:pl-12">
              <div className="hero-profile-ring"></div>
              <div className="hero-profile-particles"></div>
              <div className="hero-profile-image w-full h-full">
                <Image
                  src="/image.jpg"
                  alt="Samba SY Profile"
                  fill
                  className="object-cover rounded-full"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator hidden lg:block">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[var(--dark-surface)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left mb-8">À Propos de Moi</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Passionné par l'exploration des données, le cloud computing, les pratiques DevOps et le développement
                logiciel, je suis un data scientist avec une expertise croissante dans l'analyse de données, la
                conception de solutions cloud et le développement web.
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                Maîtrisant les langages comme <strong>Python, R, SQL, Java</strong>, ainsi que des technologies web
                telles que <strong>HTML, CSS, JavaScript et PHP</strong>, j'excelle dans l'analyse exploratoire des
                données, la modélisation prédictive, et le développement d'applications web robustes.
              </p>
              <p className="text-[var(--text-secondary)] mb-8">
                Mon parcours polyvalent me permet de combiner des compétences en data science, en développement
                logiciel et en cloud computing pour créer des solutions innovantes, performantes et adaptées aux
                besoins des utilisateurs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <i className="fas fa-graduation-cap text-[var(--accent-color)]"></i>
                  <span>Master IA & Big Data</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <i className="fas fa-cloud text-[var(--accent-color)]"></i>
                  <span>Certifié AWS</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <i className="fas fa-code text-[var(--accent-color)]"></i>
                  <span>Full Stack Developer</span>
                </div>
              </div>

              <Link href="/about" className="btn-primary">
                En Savoir Plus
              </Link>
            </div>

            <div className="profile-card">
              <div className="ai-avatar">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <h3 className="text-xl font-bold mb-1">Samba SY</h3>
              <p className="text-[var(--text-secondary)] mb-6">Data Scientist | Cloud & DevOps Expert</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="number">3+</span>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Années d'expérience</p>
                </div>
                <div className="text-center">
                  <span className="number">26</span>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Projets réalisés</p>
                </div>
                <div className="text-center">
                  <span className="number">5+</span>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services-preview" className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Mes Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="h-36 w-full rounded-2xl overflow-hidden mb-4 border border-[var(--border-color)]">
                  <ServiceCover id={service.id} title={service.title} />
                </div>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)] mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-sm text-[var(--accent-color)] flex items-center gap-1">
                      <i className="fas fa-check text-xs"></i> {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-primary">
              Voir Tous les Services
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <Testimonials />

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div key={category.title} className="bg-[var(--dark-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>{item.name}</span>
                        <span className="text-[var(--accent-color)]">{item.width}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${item.width}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog-preview" className="py-20 bg-[var(--dark-surface)]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Derniers Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <article key={article.slug} className="project-card">
                <div className="project-image relative">
                  <BlogCover slug={article.slug} title={article.title} category={article.tags[0]} className="object-cover" />
                  <div className="project-overlay z-10">
                    <Link href="/blog" className="project-link">
                      <i className="fas fa-book-open"></i>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[var(--text-muted)] text-sm mb-2 flex items-center gap-2">
                    <i className="fas fa-calendar text-xs"></i> {article.date}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="btn-primary">
              Voir Tous les Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5">
          <h2>Prêt à Transformer Vos Données en Solutions Intelligentes ?</h2>
          <p>Discutons de votre projet et créons ensemble des solutions IA innovantes</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Me Contacter
            </Link>
            <Link href="/devis" className="btn-secondary">
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Samba SY",
            image: "https://sambasy.com/profil.png",
            telephone: "+221 77 378 48 14",
            email: "sambasy837@gmail.com",
            url: "https://sambasy.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dakar",
              addressCountry: "SN",
            },
            areaServed: "Sénégal",
            serviceType: [
              "Développement web",
              "Data Science",
              "Intelligence Artificielle",
              "Business Intelligence",
              "Consulting SEO",
            ],
            description:
              "Développeur web full stack, Data Scientist, Data Analyst et consultant Power BI au Sénégal. Création de sites web, applications mobiles et solutions IA à Dakar.",
            priceRange: "$$",
          }),
        }}
      />
    <SEOLocalSection page="home" />
    </>
  );
}
