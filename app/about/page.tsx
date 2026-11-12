import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SEOLocalSection from "@/components/SEOLocalSection";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À Propos de Samba SY - Parcours Data Scientist IA | Expert Cloud AWS Dakar",
  description:
    "Parcours professionnel de Samba SY, Data Scientist expert en IA et Machine Learning à Dakar. Master IA & Big Data, certifié AWS, spécialisé en solutions innovantes pour l'Afrique.",
  path: "/about/",
  keywords: [
    "Samba SY",
    "Data Scientist Dakar",
    "Data Analyst Sénégal",
    "développeur full stack Dakar",
    "certifié AWS Sénégal",
    "Master IA Big Data UCAD",
  ],
});

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

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about/#profilepage`,
  url: `${SITE_URL}/about/`,
  name: "À Propos de Samba SY",
  inLanguage: "fr-FR",
  mainEntity: personSchema,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[profilePageSchema, breadcrumbSchema([{ name: "À Propos", path: "/about/" }])]}
      />
      {/* Hero */}
      <PageHero
        eyebrow="À propos"
        title={<>À propos <em>de moi.</em></>}
        subtitle="Data Scientist, développeur full stack et ingénieur cloud basé à Dakar. Passionné par l'intelligence artificielle et les technologies émergentes."
      />

      {/* Histoire */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1.35fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="t-label"><b>01</b> Mon histoire</p>
            <h2 className="t-display text-4xl md:text-5xl mt-6">
              Mon <em>histoire.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-text-secondary leading-relaxed">
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
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-text-primary font-semibold">
              <a href="tel:+221773784814" className="flex items-center gap-3 hover:text-accent transition-colors">
                <i className="fas fa-phone text-xs text-accent" aria-hidden="true"></i> +221 77 378 48 14
              </a>
              <a href="mailto:sambasy837@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <i className="fas fa-envelope text-xs text-accent" aria-hidden="true"></i> sambasy837@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <i className="fas fa-location-dot text-xs text-accent" aria-hidden="true"></i> Dakar, Sénégal
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px] lg:sticky lg:top-28">
            <div className="t-sun w-[55%] aspect-square -top-6 -right-6" aria-hidden="true" />
            <div className="t-arch">
              <Image
                src="/portrait.webp"
                alt="Samba SY, Data Scientist et développeur full stack à Dakar"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-top"
              />
              <div className="t-weave absolute bottom-0 left-0 right-0" aria-hidden="true" />
            </div>
            <dl className="mt-8 grid grid-cols-3 border-t border-border-color">
              {[
                { n: "3+", l: "Années d'expérience" },
                { n: "25+", l: "Projets réalisés" },
                { n: "5+", l: "Certifications" },
              ].map((s, i) => (
                <div key={s.l} className={`pt-5 ${i ? "pl-4 border-l border-border-color" : ""}`}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-display text-4xl">{s.n}</dd>
                  <dd className="text-xs text-text-muted mt-1">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Formation */}
      <Timeline
        index="02"
        label="Formation"
        title={<>Ma <em>formation.</em></>}
        surface
        items={education.map((e) => ({ date: e.date, title: e.title, place: e.school, description: e.description }))}
      />

      {/* Expérience */}
      <Timeline
        index="03"
        label="Expérience"
        title={<>Expérience <em>professionnelle.</em></>}
        items={experience.map((e) => ({ date: e.date, title: e.title, place: e.company, description: e.description }))}
      />

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>04</b> Certifications</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-14">
            Mes <em>certifications.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-dark-card border border-border-color rounded-[22px] overflow-hidden">
                <div className="t-weave !h-[6px]" aria-hidden="true" />
                <div className="p-7 flex gap-5">
                  <span className="service-icon !w-12 !h-12 !text-lg !rounded-full !mb-0 shrink-0">
                    <i className={cert.icon} aria-hidden="true"></i>
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-normal leading-snug">{cert.title}</h3>
                    <p className="text-sm font-bold text-text-primary mt-2">{cert.org}</p>
                    <p className="text-xs uppercase tracking-wider text-text-muted mt-1">{cert.date}</p>
                    <p className="text-text-secondary mt-3 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5">
          <p className="t-label"><b>05</b> Compétences</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6 mb-14">
            Compétences <em>détaillées.</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((category) => (
              <div key={category.title} className="border-t-2 border-[var(--terracotta)] pt-6">
                <h3 className="font-display text-2xl mb-5 flex items-center gap-3">
                  <i className={`${category.icon} text-accent text-base`} aria-hidden="true"></i> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="t-chip">{tag}</span>
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
          <h2>Travaillons ensemble</h2>
          <p>Intéressé par mes compétences ? Discutons de votre projet.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Me contacter <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
            <a href="/CV_Samba_SY.pdf" download className="btn-secondary">
              Télécharger le CV
            </a>
          </div>
        </div>
      </section>
    <SEOLocalSection page="about" />
    </>
  );
}

function Timeline({
  index,
  label,
  title,
  items,
  surface,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  items: { date: string; title: string; place: string; description: string }[];
  surface?: boolean;
}) {
  return (
    <section className={`py-24 lg:py-32 ${surface ? "bg-dark-surface" : ""}`}>
      <div className="max-w-[1240px] mx-auto px-5 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <p className="t-label"><b>{index}</b> {label}</p>
          <h2 className="t-display text-4xl md:text-5xl mt-6">{title}</h2>
        </div>
        <div>
          {items.map((item) => (
            <div key={item.title} className="t-row md:grid-cols-[170px_1fr] gap-x-8 gap-y-2 py-8 px-2">
              <p className="font-display italic text-lg text-accent">{item.date}</p>
              <div>
                <h3 className="font-display text-2xl md:text-[1.7rem] font-normal leading-snug">{item.title}</h3>
                <p className="text-sm font-bold text-text-primary mt-2">{item.place}</p>
                <p className="text-text-secondary mt-3 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
