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
  { key: "tutorial", label: "Tutoriels" },
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
    slug: "power-bi-dashboards",
    category: "data",
    badge: "Data Science",
    image: "/3.png",
    date: "12 Janvier 2024",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
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
    authorAvatar: "/profil.png",
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
    authorAvatar: "/profil.png",
    title: "Détection de Fake News : Techniques de NLP Avancées",
    description: "Exploration des algorithmes de traitement du langage naturel pour identifier automatiquement les fausses informations en ligne.",
    tags: ["NLP", "Fake News", "Machine Learning"],
  },
  {
    slug: "docker-kubernetes-ml",
    category: "tutorial",
    badge: "Tutoriel",
    image: "/image.jpg",
    date: "02 Janvier 2024",
    readingTime: "12 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Déployer une Application ML avec Docker et Kubernetes",
    description: "Tutoriel step-by-step pour containeriser et orchestrer vos modèles de machine learning en production.",
    tags: ["Docker", "Kubernetes", "MLOps"],
  },
  {
    slug: "etl-vs-elt",
    category: "data",
    badge: "Data",
    image: "/1.png",
    date: "28 Décembre 2023",
    readingTime: "5 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "ETL vs ELT : Quelle Approche Choisir en 2024 ?",
    description: "Comparaison détaillée des architectures de données modernes et conseils pour choisir la meilleure stratégie.",
    tags: ["ETL", "Data Pipeline", "Architecture"],
  },
  {
    slug: "tendances-tech-2024",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "25 Décembre 2023",
    readingTime: "8 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Les Tendances Tech à Suivre en 2024",
    description: "Analyse des technologies émergentes qui vont façonner l'avenir : IA générative, edge computing, quantum computing et plus.",
    tags: ["Tendances", "Innovation", "Futur"],
  },
  {
    slug: "computer-vision-entreprise",
    category: "ai",
    badge: "IA",
    image: "/image.jpg",
    date: "22 Décembre 2023",
    readingTime: "9 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Computer Vision : Applications Pratiques en Entreprise",
    description: "Découvrez comment la vision par ordinateur révolutionne les processus industriels, de la qualité produit à la sécurité.",
    tags: ["Computer Vision", "Industrie", "Automatisation"],
  },
  {
    slug: "terraform-vs-cloudformation",
    category: "cloud",
    badge: "DevOps",
    image: "/image.jpg",
    date: "18 Décembre 2023",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Infrastructure as Code : Terraform vs CloudFormation",
    description: "Comparaison approfondie des outils IaC les plus populaires pour automatiser votre infrastructure cloud.",
    tags: ["IaC", "Terraform", "CloudFormation"],
  },
  {
    slug: "chatbot-python-streamlit",
    category: "tutorial",
    badge: "Tutoriel",
    image: "/image.jpg",
    date: "15 Décembre 2023",
    readingTime: "15 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Créer un Chatbot IA avec Python et Streamlit",
    description: "Guide complet pour développer votre premier chatbot intelligent en utilisant les dernières technologies NLP.",
    tags: ["Chatbot", "Python", "Streamlit"],
  },
  {
    slug: "developpeur-web-senegal",
    category: "tech",
    badge: "Tech",
    image: "/image.jpg",
    date: "29 Juillet 2026",
    readingTime: "7 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
    title: "Développeur Web au Sénégal : Pourquoi Choisir un Expert Local ?",
    description: "Vous cherchez un développeur web au Sénégal ? Découvrez les avantages de travailler avec un développeur full stack à Dakar.",
    tags: ["développeur web Sénégal", "développeur web Dakar", "création site web", "Next.js", "React"],
  },
  {
    slug: "data-scientist-senegal",
    category: "data",
    badge: "Data",
    image: "/image.jpg",
    date: "29 Juillet 2026",
    readingTime: "6 min",
    author: "Samba SY",
    authorAvatar: "/profil.png",
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
    authorAvatar: "/profil.png",
    title: "Consultant Power BI au Sénégal : Visualisez Vos Performances",
    description: "Un consultant Power BI au Sénégal vous aide à concevoir des tableaux de bord interactifs.",
    tags: ["consultant Power BI Sénégal", "Business Intelligence", "dashboard", "Data Analyst"],
  },
];

const popularTags = [
  "Intelligence Artificielle", "Machine Learning", "Python", "AWS", "Data Science",
  "Cloud Computing", "DevOps", "Docker", "Kubernetes", "NLP", "Computer Vision",
  "Big Data", "Power BI", "Streamlit", "TensorFlow", "PyTorch",
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
        title="Blog Tech"
        subtitle="Actualités, insights et tendances en IA, Data Science et technologies émergentes"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Filters */}
      <section className="py-8 border-b border-border-color">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  activeFilter === filter.key
                    ? "bg-gradient-ai border-transparent text-white"
                    : "border-border-color text-text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {showFeatured && (
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="bg-dark-card border border-border-color rounded-2xl overflow-hidden grid lg:grid-cols-2">
              <div className="project-image min-h-[300px] lg:min-h-full relative">
                <BlogCover slug={featured.slug} title={featured.title} category={featured.category} className="object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-dark-card text-accent border border-border-color z-10">
                  {featured.badge}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-white bg-black/50 px-3 py-1 rounded-full z-10">
                  <i className="fas fa-clock"></i> {featured.readingTime}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                  <span>{featured.date}</span>
                  <div className="flex items-center gap-2">
                    {featured.authorAvatar && (
                      <Image src={featured.authorAvatar} alt={featured.author} width={24} height={24} className="rounded-full object-cover" />
                    )}
                    <span>Par {featured.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featured.title}</h2>
                <p className="text-text-secondary mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="project-tech-span">{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-primary w-fit">
                  Lire l'article complet <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="project-card">
                <div className="project-image relative">
                  <BlogCover slug={article.slug} title={article.title} category={article.category} className="object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-dark-card text-accent border border-border-color z-10">
                    {article.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-white bg-black/50 px-3 py-1 rounded-full z-10">
                    <i className="fas fa-clock"></i> {article.readingTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-3">
                    <span>{article.date}</span>
                    <span>{article.category}</span>
                    {article.author && (
                      <div className="flex items-center gap-1.5">
                        {article.authorAvatar && (
                          <Image src={article.authorAvatar} alt={article.author} width={20} height={20} className="rounded-full object-cover" />
                        )}
                        <span>{article.author}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {article.tags.map((tag) => (
                      <span key={tag} className="project-tech-span">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${article.slug}`} className="text-accent hover:underline font-medium flex items-center gap-2">
                    Lire la suite <i className="fas fa-arrow-right text-sm"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-[600px] mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-2">Restez Informé</h2>
          <p className="text-text-secondary mb-6">
            Recevez les derniers articles et insights directement dans votre boîte mail
          </p>
          <form
            action="https://formspree.io/f/xojgbljz"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 bg-dark-card border border-border-color rounded-full px-5 py-3 text-text-primary focus:outline-none focus:border-accent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              S'abonner
            </button>
          </form>
          <p className="text-xs text-text-muted mt-4">Pas de spam, désabonnement en un clic</p>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="section-title">Tags Populaires</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm border border-border-color text-text-secondary hover:border-accent hover:text-accent cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
