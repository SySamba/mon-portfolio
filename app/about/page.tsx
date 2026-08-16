import Link from "next/link";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";

export const metadata = {
  title: "À Propos de Samba SY - Parcours Data Scientist IA | Expert Cloud AWS Dakar",
  description:
    "Parcours professionnel de Samba SY, Data Scientist expert en IA et Machine Learning à Dakar. Master IA & Big Data, certifié AWS, spécialisé en solutions innovantes pour l'Afrique.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "À Propos de Samba SY - Parcours Data Scientist IA | Expert Cloud AWS Dakar",
    description:
      "Parcours professionnel de Samba SY, Data Scientist expert en IA et Machine Learning à Dakar. Master IA & Big Data, certifié AWS, spécialisé en solutions innovantes pour l'Afrique.",
    url: "/about/",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos de Samba SY - Parcours Data Scientist IA | Expert Cloud AWS Dakar",
    description:
      "Parcours professionnel de Samba SY, Data Scientist expert en IA et Machine Learning à Dakar. Master IA & Big Data, certifié AWS, spécialisé en solutions innovantes pour l'Afrique.",
    images: ["/profil.png"],
  },
};

const education = [
  {
    date: "2024 - 2025",
    title: "Master en Intelligence Artificielle et Big Data",
    school: "Université Cheikh Anta Diop de Dakar",
    description:
      "Expertise avancée dans l'analyse de données massives et la conception de modèles prédictifs. Compétences approfondies en apprentissage automatique, traitement du langage naturel et techniques de visualisation de données.",
  },
  {
    date: "2021 - 2022",
    title: "Licence en Technicien Informatique",
    school: "Université Cheikh Anta Diop de Dakar",
    description:
      "Maîtrise des concepts avancés en mathématiques appliquées et en programmation informatique. Expérience dans la modélisation mathématique, l'analyse des données et le développement de logiciels.",
  },
  {
    date: "2017",
    title: "Baccalauréat Scientifique",
    school: "Lycée C.D.G de Khombole",
    description:
      "Solide fondement en mathématiques, physique, et chimie. Capacité démontrée à analyser, résoudre des problèmes complexes et à penser de manière logique.",
  },
];

const experience = [
  {
    title: "Développeur Full Stack & Data Scientist",
    date: "Février 2025 - Présent",
    company: "Porokhane Digital Consulting - CDD",
    description:
      "Développement de solutions complètes combinant expertise en data science et développement web. Création d'applications intelligentes intégrant des modèles d'IA et solutions innovantes pour les clients.",
  },
  {
    title: "Data Analyst",
    date: "Août 2024 - Février 2025",
    company: "Aéroport de Yoff, Dakar, Sénégal",
    description:
      "En tant que Data Analyst chez Aéroport de Yoff, je suis chargé de l'analyse des données pour optimiser les processus décisionnels. J'exploite des outils d'analyse avancés pour extraire des insights significatifs à partir de grands volumes de données. Mon rôle inclut la création de tableaux de bord interactifs et de rapports détaillés, permettant aux équipes de mieux comprendre les tendances et d'anticiper les besoins des clients. Je collabore étroitement avec différentes équipes pour identifier les opportunités d'amélioration et soutenir la prise de décision stratégique par une approche basée sur les données.",
  },
  {
    title: "Stage Développeur Full Stack",
    date: "Août 2022 - Janvier 2023",
    company: "Webgram, Dakar, Sénégal",
    description:
      "Au cours de ce stage, j'ai contribué à des projets clés, tels que le développement d'un système de gestion interne pour l'entreprise et la création d'une application client interactive. J'ai pris en charge des tâches de débogage, d'optimisation des performances, et d'amélioration de l'expérience utilisateur (UX). En collaborant étroitement avec des designers, développeurs, et chefs de projet, j'ai acquis une expérience précieuse en gestion de projets et en travail d'équipe.",
  },
];

const certifications = [
  {
    icon: "fab fa-aws",
    title: "AWS re/Start Cloud Practitioner",
    date: "Avril 2024 - Juillet 2024",
    org: "Sonatel Académie",
    description:
      "Certification AWS couvrant l'infrastructure cloud, la scalabilité, la sécurité, la conformité et les services principaux.",
  },
  {
    icon: "fas fa-brain",
    title: "Intelligence Artificielle",
    date: "Octobre 2023 - Mars 2024",
    org: "Université numérique Cheikh Hamidou KANE",
    description:
      "Expertise en IA, apprentissage profond, NLP, utilisation de TensorFlow et PyTorch pour développer des solutions innovantes.",
  },
  {
    icon: "fab fa-docker",
    title: "DevOps on AWS: Code, Build, and Test",
    date: "Mai 2024 - Juillet 2024",
    org: "Coursera",
    description:
      "Maîtrise des pratiques DevOps sur AWS, CI/CD, automatisation et déploiement continu.",
  },
  {
    icon: "fas fa-database",
    title: "Database Programming with PL/SQL",
    date: "Novembre 2023 - Avril 2024",
    org: "Oracle Academy",
    description:
      "Compétences en création et gestion de procédures stockées, fonctions, triggers et packages PL/SQL.",
  },
];

const skills = [
  {
    title: "Data Science & IA",
    icon: "fas fa-brain",
    tags: ["Python", "R", "Scala", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Cloud & DevOps",
    icon: "fas fa-cloud",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD", "CloudFormation", "ECS", "EKS"],
  },
  {
    title: "Data Analytics",
    icon: "fas fa-chart-line",
    tags: ["SQL", "NoSQL", "Power BI", "Tableau", "Matplotlib", "Talend", "Alteryx", "ETL"],
  },
  {
    title: "Développement",
    icon: "fas fa-code",
    tags: ["JavaScript", "PHP", "Java", "HTML/CSS", "React", "Node.js", "MySQL", "PostgreSQL"],
  },
  {
    title: "Référencement & SEO",
    icon: "fas fa-search",
    tags: ["SEO On-Page", "SEO Off-Page", "SEO Technique", "Recherche de mots-clés", "Google Analytics", "Google Search Console"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero About */}
      <PageHero
        title="À Propos de Moi"
        subtitle="Passionné par l'Intelligence Artificielle et les technologies émergentes"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-text-secondary">
              <h2 className="text-3xl font-bold text-text-primary mb-6">Mon Histoire</h2>
              <p>
                Passionné par l'exploration des données, le cloud computing, les pratiques DevOps et le développement
                logiciel, je suis un data scientist avec une expertise croissante dans l'analyse de données, la
                conception de solutions cloud et le développement web.
              </p>
              <p>
                Maîtrisant les langages comme <strong className="text-text-primary">Python, R, SQL, Java</strong>,
                ainsi que des technologies web telles que <strong className="text-text-primary">HTML, CSS, JavaScript et PHP</strong>,
                j'excelle dans l'analyse exploratoire des données, la modélisation prédictive, et le développement
                d'applications web et logicielles robustes.
              </p>
              <p>
                Mon parcours polyvalent me permet de combiner des compétences en data science, en développement
                logiciel et en cloud computing pour créer des solutions innovantes, performantes et adaptées aux
                besoins des utilisateurs.
              </p>
              <p>
                Parallèlement, j'ai une solide expérience dans le déploiement et la gestion de solutions analytiques
                dans des environnements cloud comme <strong className="text-text-primary">AWS</strong>. Grâce à
                ma compréhension des pipelines CI/CD et de l'infrastructure en tant que code (IaC), je suis capable de
                fournir des solutions robustes et évolutives.
              </p>

              <div className="space-y-3 pt-4 text-text-primary">
                <p className="flex items-center gap-3">
                  <i className="fas fa-phone text-accent"></i> +221 773784814
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-envelope text-accent"></i> sambasy837@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-accent"></i> Dakar, Sénégal
                </p>
              </div>
            </div>

            <div className="profile-card">
              <div className="ai-avatar">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <h3 className="text-xl font-bold mb-1">Samba SY</h3>
              <p className="text-text-secondary mb-6">Data Scientist | Cloud & DevOps Expert</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="number">3+</span>
                  <p className="text-xs text-text-muted mt-1">Années d'expérience</p>
                </div>
                <div className="text-center">
                  <span className="number">15+</span>
                  <p className="text-xs text-text-muted mt-1">Projets réalisés</p>
                </div>
                <div className="text-center">
                  <span className="number">5+</span>
                  <p className="text-xs text-text-muted mt-1">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Formation</h2>
          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                <div className="text-sm text-accent font-semibold mb-1">{item.date}</div>
                <h3 className="text-xl font-bold text-text-primary mb-1">{item.title}</h3>
                <h4 className="text-text-secondary mb-2">{item.school}</h4>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.title} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {item.title} <span className="text-sm font-normal text-accent">{item.date}</span>
                </h3>
                <h4 className="text-text-secondary mb-2">{item.company}</h4>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="service-card">
                <div className="service-icon mb-4">
                  <i className={cert.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-accent mb-1">{cert.date}</p>
                <p className="text-sm text-text-muted mb-3">{cert.org}</p>
                <p className="text-text-secondary text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Detail */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Compétences Détaillées</h2>
          <div className="space-y-8">
            {skills.map((category) => (
              <div key={category.title} className="bg-dark-card border border-border-color rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <i className={`${category.icon} text-accent`}></i> {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-dark-surface border border-border-color text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2>Travaillons Ensemble</h2>
          <p>Intéressé par mes compétences ? Discutons de votre projet</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Me Contacter
            </Link>
            <a href="/CV_Samba_SY.pdf" download className="btn-secondary">
              Télécharger CV
            </a>
          </div>
        </div>
      </section>
    <SEOLocalSection page="about" />
    </>
  );
}
