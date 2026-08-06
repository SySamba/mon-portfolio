"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "@/components/ProjectModal";
import ProjectCover from "@/components/ProjectCover";
import PageHero from "@/components/PageHero";

const filters = [
  { key: "all", label: "Tous les Projets" },
  { key: "ai", label: "Intelligence Artificielle" },
  { key: "data", label: "Data Analytics" },
  { key: "web", label: "Développement Web" },
  { key: "dashboard", label: "Tableaux de Bord" },
];

export const projects = [
  {
    id: "fake-news",
    category: "ai",
    badge: "IA",
    image: "/projects/fake-news-v4.jpg",
    title: "Système de Détection de Fake News",
    description: "Application web intelligente capable d'analyser le contenu d'une vidéo ou d'un texte pour en déterminer la véracité.",
    fullDescription:
      "Ce système multimodal combine des modèles de NLP de pointe et des techniques d'analyse vidéo pour identifier la désinformation. Développé en Python avec Streamlit, il est conteneurisé avec Docker et déployé sur Microsoft Azure pour garantir scalabilité et portabilité.",
    year: "2024",
    client: "Projet Académique",
    role: "Lead Data Scientist",
    challenge: "Contrer la propagation de fausses informations sur les réseaux sociaux en offrant une analyse rapide et fiable du contenu multimodal.",
    solution:
      "Pipeline NLP pour l'analyse textuelle, extraction audio/vidéo, modèle de scoring de crédibilité et API REST sécurisée pour une intégration dans des applications tierces.",
    features: [
      "Analyse de texte en temps réel",
      "Traitement vidéo automatisé",
      "Score de crédibilité explicable",
      "API REST intégrée",
      "Conteneurisation Docker",
      "Déploiement cloud Azure",
    ],
    architecture: [
      "Backend Python avec FastAPI pour l'API",
      "Interface utilisateur Streamlit",
      "Modèles Transformers (Hugging Face) pour le NLP",
      "OpenCV et whisper pour le traitement vidéo/audio",
      "Docker et Azure Container Instances pour le déploiement",
    ],
    results: [
      "Précision supérieure à 85% sur les contenus textuels",
      "Analyse multimodale en moins de 30 secondes",
      "Déployé et accessible via le cloud Azure",
    ],
    tech: ["Python", "NLP", "Streamlit", "Azure", "Docker", "Machine Learning"],
    articleLink: "/blog/fake-news-nlp",
  },
  {
    id: "diabetes",
    category: "ai",
    badge: "IA",
    image: "/projects/diabete-v1.jpeg",
    title: "Application de Prédiction du Diabète",
    description: "Outil prédictif exploitant un modèle de machine learning pour anticiper les risques de diabète.",
    fullDescription:
      "Cet outil médical d'aide à la décision exploite des données cliniques (glycémie, IMC, antécédents familiaux, etc.) pour estimer le risque diabétique. Le modèle est entraîné avec Scikit-learn, intégré à une interface web intuitive et mis à disposition via Azure DevOps.",
    year: "2023",
    client: "Santé Numérique",
    role: "Data Scientist & DevOps",
    challenge: "Permettre un dépistage précoce du diabète à partir de données cliniques souvent dispersées et hétérogènes.",
    solution:
      "Nettoyage et feature engineering des données médicales, comparaison de plusieurs modèles (Logistic Regression, Random Forest, XGBoost) et mise en production sécurisée sur Azure.",
    features: [
      "Formulaire de saisie des paramètres cliniques",
      "Prédiction en temps réel",
      "Interprétabilité des résultats",
      "CI/CD automatisée",
      "Monitoring du modèle",
    ],
    architecture: [
      "Modèle Scikit-learn serialisé (pickle / joblib)",
      "Interface web en Flask/Streamlit",
      "Pipeline CI/CD Azure DevOps",
      "Tests unitaires et validation croisée",
    ],
    results: [
      "AUC-ROC de 0,89 sur le jeu de test",
      "Réduction du temps d'évaluation clinique",
      "Solution reproductible et maintenable",
    ],
    tech: ["Machine Learning", "Python", "Scikit-learn", "Azure", "CI/CD"],
  },
  {
    id: "covid",
    category: "data",
    badge: "Data",
    image: "/projects/covid.png",
    title: "Dashboard COVID-19",
    description: "Tableau de bord interactif pour le suivi en temps réel des données COVID-19.",
    fullDescription:
      "Dashboard Streamlit permettant de visualiser l'évolution de la pandémie par région, pays et période. Intègre des graphiques interactifs Plotly, des analyses statistiques et des exports de données.",
    year: "2023",
    client: "Open Data",
    role: "Data Analyst",
    challenge: "Rendre accessibles et exploitables des données épidémiologiques complexes pour le grand public.",
    solution:
      "Collecte automatisée de sources publiques, transformation avec Pandas, visualisations dynamiques Plotly et publication sur Streamlit Cloud.",
    features: [
      "Cartes interactives",
      "Filtres temporels et géographiques",
      "Graphiques de tendance",
      "Export CSV",
    ],
    architecture: [
      "Source : API publiques Johns Hopkins / Our World in Data",
      "Traitement avec Pandas",
      "Visualisation avec Plotly",
      "Déploiement Streamlit Cloud",
    ],
    results: [
      "Dashboard consulté par des chercheurs et journalistes",
      "Mise à jour quotidienne automatique",
      "Visualisations partageables",
    ],
    tech: ["Streamlit", "Python", "Pandas", "Plotly", "Data Visualization"],
    link: "https://dashboardcovid19.streamlit.app/",
  },
  {
    id: "air-traffic",
    category: "dashboard data",
    badge: "BI",
    image: "/1.png",
    title: "Tableau de Bord Trafic Aérien",
    description: "Projet BI complet : ETL, modélisation et dashboards Power BI avec un design orienté décision.",
    fullDescription:
      "Projet Business Intelligence complet : extraction de données aériennes, transformation et nettoyage, modélisation en étoile, et création de dashboards Power BI interactifs suivant les KPIs opérationnels (ponctualité, flux de passagers, performance des vols).",
    year: "2024",
    client: "Projet Personnel",
    role: "BI Analyst & ETL Developer",
    challenge: "Consolider des sources de données aériennes disparates en un seul tableau de bord pertinent pour la prise de décision.",
    solution:
      "Pipeline ETL maîtrisé avec Power Query et SQL, modélisation en étoile, calculs DAX optimisés et design visuel soigné adapté aux utilisateurs métiers.",
    features: [
      "Suivi temps réel des vols",
      "KPIs opérationnels",
      "Modèle de données & DAX",
      "Filtres croisés entre rapports",
      "Exports PDF automatisés",
    ],
    architecture: [
      "Source : fichiers CSV/API aérien",
      "Nettoyage et transformation Power Query",
      "Modèle en étoile Power BI",
      "Mesures DAX pour les KPIs",
    ],
    results: [
      "Dashboard interactif de 5 pages",
      "Temps de chargement optimisé",
      "Décisions opérationnelles facilitées",
    ],
    tech: ["Power BI", "SQL", "DAX", "Data Modeling", "ETL"],
    gallery: ["/1.png", "/2.png", "/3.png", "/4.png", "/7.png"],
  },
  {
    id: "sales-stock",
    category: "dashboard data",
    badge: "BI",
    image: "/projects/sales-stock.jpeg",
    title: "Dashboard Ventes & Gestion de Stock",
    description: "Tableau de bord Power BI pour le suivi des ventes, analyse des produits et gestion optimisée des stocks.",
    fullDescription:
      "Tableau de bord Power BI pour le suivi des ventes, analyse des produits et gestion optimisée des stocks.",
    year: "2023",
    client: "Commerce de Détail",
    role: "BI Consultant",
    challenge: "Fournir une vision unifiée des ventes et du stock pour améliorer l'approvisionnement et réduire les ruptures.",
    solution:
      "Modèle de données relationnelles, indicateurs de performance clés, segments dynamiques et alertes visuelles sur les seuils critiques.",
    features: [
      "Suivi des ventes en temps réel",
      "Analyse des produits les plus vendus",
    ],
    results: [
      "Réduction des ruptures de stock de 20%",
      "Identification des tops / flops produits",
      "Pilotage commercial amélioré",
    ],
    tech: ["Power BI", "SQL Server", "DAX", "Business Intelligence"],
  },
  {
    id: "teranga",
    category: "web",
    badge: "Web",
    image: "/projects/teranga.png",
    title: "Site Teranga Numérique",
    description: "Site web professionnel pour l'entreprise Teranga Numérique.",
    fullDescription:
      "Site vitrine professionnel développé pour l'agence digitale Teranga Numérique. Intègre un design moderne, une navigation fluide, un formulaire de contact et une optimisation SEO complète.",
    year: "2023",
    client: "Teranga Numérique",
    role: "Développeur Full Stack",
    challenge: "Créer une présence en ligne professionnelle et performante pour une agence digitale sénégalaise.",
    solution:
      "Site responsive en HTML/CSS/JS/PHP, hébergement sécurisé, optimisation des performances et référencement naturel.",
    features: [
      "Design responsive",
      "Formulaire de contact",
      "Optimisation SEO",
      "Hébergement sécurisé",
      "Performance optimisée",
    ],
    results: [
      "Augmentation du trafic organique",
      "Temps de chargement réduit",
      "Image professionnelle renforcée",
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "SEO", "Responsive Design"],
    link: "https://teranganumerique.com/",
  },
  {
    id: "porokhane",
    category: "web",
    badge: "Web",
    image: "/porokhane.jpg",
    title: "Site Porokhane Digital Consulting",
    description: "Site vitrine moderne pour Porokhane Digital Consulting.",
    fullDescription:
      "Site vitrine professionnel pour Porokhane Digital Consulting. Design épuré, contenus optimisés pour le SEO, hébergement performant et sécurisé.",
    year: "2024",
    client: "Porokhane Digital Consulting",
    role: "Développeur Web",
    challenge: "Valoriser les services digitaux de Porokhane avec un site moderne et visible sur les moteurs de recherche.",
    solution:
      "Développement from-scratch en HTML/CSS/JS/PHP, intégration d'un blog léger et stratégie SEO on-page.",
    features: [
      "Design professionnel",
      "Stratégie SEO complète",
      "Hébergement sécurisé",
      "Pages de services détaillées",
    ],
    results: [
      "Amélioration du référencement local",
      "Augmentation des demandes de contact",
      "Présence digitale renforcée",
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "SEO", "Web Hosting"],
    link: "https://digital-porokhane.com/",
  },
  {
    id: "cv-khombole",
    category: "web",
    badge: "Web",
    image: "/projects/cv-khombole.png",
    title: "Plateforme de Collecte CV - Khombole",
    description: "Système web pour aider la commune de Khombole à collecter les CV des étudiants et professionnels.",
    fullDescription:
      "Plateforme communale de collecte et de gestion de CV. Les utilisateurs soumettent leur CV, et les administrateurs recherchent des candidats par domaine, les consultent et les contactent directement.",
    year: "2023",
    client: "Commune de Khombole",
    role: "Développeur Full Stack",
    challenge: "Numériser la collecte des CV pour faciliter l'emploi local et la gestion administrative.",
    solution:
      "Application web PHP/MySQL avec interface administrateur, recherche multicritère et gestion des documents.",
    features: [
      "Collecte automatisée de CV",
      "Recherche par domaine",
      "Interface administrateur",
      "Système de contact intégré",
      "Gestion des documents PDF",
    ],
    results: [
      "Plusieurs dizaines de CV collectés",
      "Suivi simplifié des candidats",
      "Processus de recrutement accéléré",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Admin Panel"],
    link: "https://khombole.teranganumerique.com/",
  },
  {
    id: "mairie-khombole",
    category: "web",
    badge: "Web",
    image: "/mairie-khombole.jpg",
    title: "Site Mairie de Khombole",
    description: "Site web institutionnel moderne pour la Mairie de Khombole.",
    fullDescription:
      "Site institutionnel complet pour la Mairie de Khombole : présentation des services municipaux, actualités, informations citoyennes et back-office d'administration.",
    year: "2023",
    client: "Mairie de Khombole",
    role: "Développeur Full Stack",
    challenge: "Moderniser la communication numérique de la mairie et faciliter l'accès aux services citoyens.",
    solution:
      "Application React front-end et API Laravel avec base MySQL, interface admin complète et design responsive.",
    features: [
      "Services municipaux",
      "Informations citoyennes",
      "Interface moderne",
      "Responsive design",
      "Back-office administrateur",
    ],
    results: [
      "Accessibilité mobile améliorée",
      "Centralisation de l'information communale",
      "Réduction des appels administratifs",
    ],
    tech: ["React", "Laravel", "MySQL", "API REST", "Responsive"],
    link: "https://mairiedekhombole.sn/",
  },
  {
    id: "arbitres",
    category: "web",
    badge: "Web",
    image: "/projects/arbitres.png",
    title: "Système de Désignation des Arbitres",
    description: "Plateforme de gestion pour la désignation et le suivi des arbitres.",
    fullDescription:
      "Système de gestion sportive permettant la désignation, le suivi et l'administration des arbitres. Gestion des authentifications, planification des matchs et historique des performances.",
    year: "2023",
    client: "Ligue Régionale de Football",
    role: "Développeur Backend",
    challenge: "Automatiser la désignation des arbitres et sécuriser l'accès aux informations sensibles.",
    solution:
      "Plateforme PHP/MySQL avec gestion de sessions, authentification sécurisée et tableau de bord administratif.",
    features: [
      "Authentification sécurisée",
      "Planification des matchs",
      "Historique des arbitres",
      "Interface administrative",
    ],
    results: [
      "Désignation facilitée",
      "Suivi historique fiable",
      "Sécurisation des accès",
    ],
    tech: ["PHP", "MySQL", "Session Management", "Authentication"],
    link: "https://test3.teranganumerique.com/login.php",
  },
  {
    id: "saveurdeco",
    category: "web",
    badge: "E-commerce",
    image: "/saveurdeco.jpg",
    title: "Site Saveur Deco",
    description: "Plateforme e-commerce moderne spécialisée dans la décoration d'intérieur.",
    fullDescription:
      "Site e-commerce complet avec catalogue produits, panier, tunnel d'achat simplifié et interface administrateur de gestion des commandes et des stocks.",
    year: "2024",
    client: "Saveur Deco",
    role: "Développeur E-commerce",
    challenge: "Lancer une boutique en ligne élégante et fonctionnelle pour la décoration d'intérieur.",
    solution:
      "Développement React avec intégration d'une solution e-commerce, design moderne et responsive, panier et checkout sécurisé.",
    features: [
      "Catalogue produits",
      "Panier et checkout",
      "Paiement sécurisé",
      "Responsive design",
      "Admin produits",
    ],
    results: [
      "Boutique en ligne opérationnelle",
      "Expérience d'achat fluide",
      "Design premium aligné à l'image de marque",
    ],
    tech: ["React", "E-commerce", "JavaScript", "Responsive Design", "Modern UI"],
    link: "https://saveurdeco.fr/",
  },
  {
    id: "magueye-boye",
    category: "web",
    badge: "Web",
    image: "/projects/magueye-boye.png",
    title: "Portfolio Magueye BOYE",
    description: "Site web officiel du Maire de Khombole, Magueye Boye.",
    fullDescription:
      "Portfolio institutionnel et personnel présentant le parcours, les projets et les actions du Maire de la commune de Khombole. Site moderne, responsive et optimisé pour le référencement.",
    year: "2024",
    client: "Magueye Boye",
    role: "Développeur Full Stack",
    challenge: "Créer une présence en ligne moderne et crédible pour un élu local avec un design professionnel.",
    solution:
      "Développement avec React et un framework CSS moderne, interface responsive, navigation fluide et optimisation SEO.",
    features: [
      "Design responsive",
      "Présentation du parcours",
      "Navigation fluide",
      "Optimisation SEO",
      "Performance optimisée",
    ],
    results: [
      "Image institutionnelle renforcée",
      "Accessibilité mobile améliorée",
      "Visibilité en ligne accrue",
    ],
    tech: ["React", "Tailwind CSS", "Responsive Design", "SEO", "Modern UI"],
    link: "https://www.magueyeboye.sn",
  },
  {
    id: "anacim-formation",
    category: "web",
    badge: "Web",
    image: "/projects/anacim-formation.png",
    title: "Digitalisation des Formations - ANACIM",
    description:
      "Système de gestion des formations pour les agents de l'ANACIM avec inscription, suivi et tableau de bord administrateur.",
    fullDescription:
      "Plateforme web complète permettant la digitalisation des formations au sein de l'ANACIM. Elle offre un espace agent pour l'inscription, le suivi des formations réalisées et à venir, ainsi qu'un tableau de bord administrateur pour visualiser l'ensemble des agents, leurs parcours et leurs statistiques de formation.",
    year: "2026",
    client: "ANACIM",
    role: "Développeur Full Stack",
    challenge:
      "Centraliser et digitaliser le suivi des formations des agents de l'ANACIM avec une interface administrative claire.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec un espace administrateur complet et une base de données relationnelle pour le suivi des agents et formations.",
    features: [
      "Inscription des agents",
      "Suivi des formations réalisées",
      "Suivi des formations non réalisées",
      "Tableau de bord administrateur",
      "Vue globale des agents et formations",
      "Interface responsive",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Espace administrateur sécurisé",
      "Authentification agents et admin",
    ],
    results: [
      "Suivi centralisé des formations",
      "Gestion simplifiée des agents",
      "Accessibilité web pour tous les agents",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://digitalisation-formation.teranganumerique.com/register.php",
  },
  {
    id: "anacim-certification",
    category: "web",
    badge: "Web",
    image: "/projects/anacim-certification.png",
    title: "ANACIM Certification - Inscription & Examen en Ligne",
    description:
      "Plateforme d'inscription en ligne et d'examen avec correction automatique pour les inspecteurs de l'ANACIM.",
    fullDescription:
      "Système web complet pour la certification du personnel de sûreté de l'ANACIM. Il permet l'inscription en ligne, le dépôt de dossier, la passation d'examens en ligne et la correction automatique, avec un tableau de bord administrateur pour suivre tous les inspecteurs.",
    year: "2026",
    client: "ANACIM",
    role: "Développeur Full Stack",
    challenge:
      "Digitaliser l'inscription et l'évaluation des inspecteurs de sûreté aviation civile avec un processus fiable et sécurisé.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript et AJAX avec gestion des dossiers, examens en ligne à correction automatique et espace administrateur.",
    features: [
      "Inscription en ligne des inspecteurs",
      "Dépôt de dossier de certification",
      "Examens en ligne",
      "Correction automatique",
      "Tableau de bord administrateur",
      "Vue d'ensemble des candidats",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Requêtes AJAX asynchrones",
      "Espace administrateur sécurisé",
      "Authentification et gestion des rôles",
    ],
    results: [
      "Inscription et certification 100% en ligne",
      "Correction et évaluation automatisées",
      "Suivi complet des inspecteurs par l'administrateur",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "AJAX", "Bootstrap"],
    link: "https://anacim.teranganumerique.com/index.php",
  },
  {
    id: "anacim-surete",
    category: "web",
    badge: "Web",
    image: "/projects/anacim-surete.png",
    title: "Système de Suivi des Événements de Sûreté - ANACIM",
    description:
      "Application web de suivi et d'analyse des événements de sûreté (incidents et accidents) pour l'ANACIM.",
    fullDescription:
      "Système complet de gestion, suivi et analyse des événements de sûreté pour l'ANACIM. Il permet la déclaration, l'enregistrement et l'analyse des incidents et accidents, avec authentification sécurisée, tableau de bord et rôles utilisateurs.",
    year: "2026",
    client: "ANACIM",
    role: "Développeur Full Stack",
    challenge:
      "Assurer le suivi rigoureux des événements de sûreté au sein de l'ANACIM avec une solution fiable, sécurisée et facile à utiliser.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec authentification, espace administrateur, saisie d'événements et tableaux de bord.",
    features: [
      "Authentification sécurisée",
      "Saisie et enregistrement des événements",
      "Suivi des incidents et accidents",
      "Tableau de bord et statistiques",
      "Gestion des rôles et permissions",
      "Export et historique des événements",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Authentification et gestion des rôles",
      "Tableaux de bord de suivi",
      "Espace administrateur",
    ],
    results: [
      "Traçabilité complète des événements de sûreté",
      "Tableaux de bord pour la prise de décision",
      "Amélioration continue de la sûreté opérationnelle",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    link: "https://gestion-evenement.teranganumerique.com/login.php",
  },
  {
    id: "ipp",
    category: "web",
    badge: "Web",
    image: "/projects/ipp.png",
    title: "Institut Polytechnique Panafricain - Gestion Académique",
    description:
      "Plateforme de Gestion Académique Intelligente : étudiants, enseignants, notes, paiements et bien plus encore.",
    fullDescription:
      "Plateforme complète de gestion académique pour l'Institut Polytechnique Panafricain. Elle centralise les inscriptions, le suivi des étudiants, la gestion des enseignants, la saisie des notes, les paiements, les bulletins et les tableaux de bord décisionnels.",
    year: "2026",
    client: "Institut Polytechnique Panafricain",
    role: "Développeur Full Stack",
    challenge:
      "Digitaliser l'ensemble de la gestion académique d'un établissement avec des modules interconnectés, une sécurité renforcée et une expérience fluide.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec base de données MySQL, espace étudiant, espace enseignant, module financier et tableaux de bord BI.",
    features: [
      "Gestion des inscriptions et dossiers étudiants",
      "Suivi des absences et scolarité",
      "Espace enseignants avec saisie des notes",
      "Gestion des classes et partage de documents",
      "Suivi des paiements et frais de scolarité",
      "Tableaux de bord et statistiques avancées",
      "Génération automatique de bulletins et relevés",
      "Sécurité, rôles et permissions",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Gestion des rôles et permissions",
      "Modules étudiants, enseignants et finance",
      "Tableaux de bord et rapports BI",
    ],
    results: [
      "Gestion académique centralisée",
      "Suivi en temps réel des notes et paiements",
      "Automatisation des documents administratifs",
      "Meilleure prise de décision grâce aux tableaux de bord",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    link: "https://ipp.teranganumerique.com",
  },
  {
    id: "stockmaster",
    category: "web",
    badge: "Web",
    image: "/projects/stockmaster.png",
    title: "StockMaster - Gestion de Stock Complète",
    description:
      "Application web de gestion de stock : produits, inventaire, alertes, fournisseurs, ventes et tableaux de bord.",
    fullDescription:
      "StockMaster est une solution complète de gestion de stock permettant de gérer les produits, les catégories, les fournisseurs, les clients, les achats, les ventes et les mouvements de stock. Elle offre un suivi en temps réel, des alertes de seuil critique et des tableaux de bord pour une prise de décision efficace.",
    year: "2026",
    client: "StockMaster",
    role: "Développeur Full Stack",
    challenge:
      "Permettre à une entreprise de suivre efficacement son stock, d'éviter les ruptures et les surstocks, et de piloter ses opérations commerciales.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec authentification, gestion des produits, des fournisseurs, des clients, des ventes, des achats et des tableaux de bord.",
    features: [
      "Gestion complète des produits (photos, descriptions, codes-barres)",
      "Suivi des stocks en temps réel",
      "Alertes automatiques pour les niveaux critiques",
      "Gestion des fournisseurs et des clients",
      "Gestion des achats et des ventes",
      "Authentification sécurisée et rôles",
      "Tableaux de bord et rapports",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Authentification et gestion des rôles",
      "Gestion des produits et du stock",
      "Rapports et tableaux de bord",
    ],
    results: [
      "Suivi précis du stock en temps réel",
      "Réduction des ruptures et surstocks",
      "Pilotage simplifié des achats et ventes",
      "Meilleure visibilité grâce aux tableaux de bord",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    link: "https://test2.teranganumerique.com",
  },
  {
    id: "vending-senegal",
    category: "web",
    badge: "Web",
    image: "/projects/vending-senegal.png",
    title: "Vending Sénégal - Distributeurs Automatiques de Snacks",
    description:
      "Site vitrine pour des distributeurs automatiques de snacks avec un SEO très solide.",
    fullDescription:
      "Site vitrine moderne présentant le concept de distributeurs automatiques de snacks au Sénégal. Développé avec Next.js et optimisé pour le référencement, il met en avant les produits, les avantages, le partenariat, le blog, la FAQ et les statistiques de rentabilité.",
    year: "2026",
    client: "Vending Sénégal",
    role: "Développeur Full Stack & SEO",
    challenge:
      "Créer un site vitrine performant, SEO-friendly et convaincant pour promouvoir l'installation de distributeurs automatiques de snacks.",
    solution:
      "Développement avec Next.js, React, Tailwind CSS et TypeScript, avec une architecture SEO solide, des performances optimisées et un design responsive.",
    features: [
      "Design moderne et responsive",
      "Optimisation SEO avancée",
      "Page d'accueil avec statistiques clés",
      "Section produits et avantages",
      "Blog et FAQ",
      "Formulaire de partenariat",
    ],
    architecture: [
      "Next.js App Router",
      "React et TypeScript",
      "Tailwind CSS",
      "Optimisation des métadonnées SEO",
      "Déploiement Vercel",
    ],
    results: [
      "Référencement naturel renforcé",
      "Présence en ligne professionnelle",
      "Génération de leads partenariat",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "SEO", "Vercel"],
    link: "https://vendingsenegal.com",
  },
  {
    id: "service-mairie",
    category: "web mobile",
    badge: "Web & Mobile",
    image: "/projects/servicemairie.png",
    title: "Service Mairie - Plateforme Communale en Ligne",
    description:
      "Plateforme de services municipaux numériques : état civil, accompagnement professionnel, soumission de projets, signalements et espace citoyen.",
    fullDescription:
      "Solution web et mobile dédiée aux collectivités pour digitaliser l'accès aux services communaux. Les citoyens peuvent effectuer des demandes d'état civil, bénéficier d'un accompagnement professionnel, soumettre des projets, signaler des problèmes et consulter des services en ligne 24/7. Les agents et administrateurs disposent d'un espace de suivi global des demandes, des citoyens et des activités de la mairie.",
    year: "2026",
    client: "Collectivité Locale",
    role: "Développeur Full Stack & Mobile",
    challenge:
      "Digitaliser et centraliser les services municipaux tout en proposant une expérience fluide sur web et mobile, avec un back-office de gestion et de suivi.",
    solution:
      "Développement d'une plateforme moderne avec React et Node.js, API REST sécurisée, espace citoyen authentifié, application mobile et interface d'administration pour le suivi global.",
    features: [
      "Services municipaux en ligne 24/7",
      "Demandes d'état civil",
      "Accompagnement professionnel",
      "Soumission de projets",
      "Signalement de problèmes",
      "Espace Citoyen avec authentification",
      "Application mobile dédiée",
      "Tableau de bord administrateur",
      "Suivi global des demandes",
    ],
    architecture: [
      "Frontend React",
      "Backend Node.js / Express",
      "API REST sécurisée",
      "Base de données MongoDB / MySQL",
      "Application mobile",
      "Authentification et gestion des rôles",
      "Back-office de suivi",
    ],
    results: [
      "Accès aux services municipaux 24/7",
      "Centralisation des demandes citoyennes",
      "Réduction des déplacements administratifs",
      "Suivi global pour les agents de la mairie",
    ],
    tech: ["React", "Node.js", "Express", "API REST", "MongoDB", "Mobile"],
    link: "https://servicemairie.sambasy.com",
  },
  {
    id: "digidocs",
    category: "web",
    badge: "Web",
    image: "/projects/digidocs.png",
    title: "DigiDocs - Gestion Électronique des Documents",
    description:
      "Plateforme de gestion électronique des documents avec authentification sécurisée.",
    fullDescription:
      "Système de Gestion Électronique des Documents (GED) permettant de centraliser, stocker et gérer les documents en ligne. Il offre une interface de connexion sécurisée, une gestion des accès utilisateurs et une navigation simple pour consulter et administrer les documents.",
    year: "2026",
    client: "Teranga Numérique",
    role: "Développeur Web",
    challenge:
      "Centraliser et sécuriser la gestion documentaire en ligne avec une interface accessible et un accès authentifié.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec espace de connexion sécurisé, gestion des utilisateurs et navigation documentaire.",
    features: [
      "Authentification sécurisée",
      "Connexion utilisateur",
      "Gestion des documents",
      "Gestion des accès",
      "Interface responsive",
      "Navigation documentaire",
    ],
    architecture: [
      "Backend PHP",
      "Frontend HTML / CSS / JavaScript",
      "Base de données MySQL",
      "Authentification et gestion des rôles",
      "Interface de connexion sécurisée",
    ],
    results: [
      "Centralisation des documents",
      "Accès sécurisé aux données",
      "Interface simple et rapide",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://ged.teranganumerique.com/auth/login.php",
  },
  {
    id: "appel-khombole",
    category: "web",
    badge: "Web",
    image: "/projects/appel-khombole.png",
    title: "À l'Appel de Khombole - Gestion des Membres",
    description:
      "Plateforme de gestion des membres et des cartes d'adhésion pour le mouvement des jeunes de Khombole.",
    fullDescription:
      "Système web de gestion des adhérents et des cartes membres pour le mouvement 'Les Jeunes du mouvement À L'APPEL DE KHOMBOLE'. Il permet l'inscription, l'authentification, la gestion des profils, l'édition des cartes membres et le suivi des adhésions.",
    year: "2026",
    client: "Les Jeunes du mouvement À L'APPEL DE KHOMBOLE",
    role: "Développeur Web",
    challenge:
      "Digitaliser la gestion des membres et faciliter l'édition des cartes d'adhésion pour un mouvement de jeunes.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec espace de connexion sécurisé, gestion des profils et génération des cartes membres.",
    features: [
      "Inscription des membres",
      "Authentification sécurisée",
      "Gestion des profils",
      "Cartes d'adhésion",
      "Suivi des membres",
      "Interface responsive",
    ],
    architecture: [
      "Backend PHP",
      "Frontend HTML / CSS / JavaScript",
      "Base de données MySQL",
      "Authentification",
      "Gestion des membres",
    ],
    results: [
      "Gestion centralisée des adhésions",
      "Cartes membres numériques",
      "Suivi facilité des membres",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://appeldekhombole.com/login.php",
  },
  {
    id: "salle-sport",
    category: "web",
    badge: "Web",
    image: "/projects/salle-sport.png",
    title: "Salle de Sport - Gestion d'Abonnements",
    description:
      "Application de gestion d'une salle de sport : adhérents, abonnements, paiements et espaces Admin / Adhérent.",
    fullDescription:
      "Plateforme web complète pour la gestion d'une salle de sport. Elle permet aux administrateurs de gérer les adhérents, les abonnements et les paiements, tandis que les adhérents disposent d'un espace personnel sécurisé pour accéder à leurs informations.",
    year: "2026",
    client: "Salle de Sport",
    role: "Développeur Full Stack",
    challenge:
      "Gérer les adhésions, les abonnements et les paiements d'une salle de sport avec des rôles différenciés.",
    solution:
      "Développement d'une application Laravel (backend) et React (frontend) avec authentification, espace admin et espace adhérent.",
    features: [
      "Espace Admin",
      "Espace Adhérent",
      "Gestion des abonnements",
      "Gestion des paiements",
      "Authentification sécurisée",
      "Interface responsive",
    ],
    architecture: [
      "Backend Laravel",
      "Frontend React",
      "API REST",
      "Base de données MySQL",
      "Authentification et rôles",
      "Espace Admin",
      "Espace Adhérent",
    ],
    results: [
      "Gestion simplifiée des adhérents",
      "Suivi des abonnements",
      "Accès sécurisé par rôle",
    ],
    tech: ["Laravel", "React", "PHP", "JavaScript", "MySQL"],
    link: "https://salle-sport.sambasy.com/login",
  },
  {
    id: "natte-tontine",
    category: "web",
    badge: "Web",
    image: "/projects/natte-tontine.png",
    title: "Natte - Gestion des Tontines",
    description:
      "Plateforme de gestion des tontines et des cotisations journalières.",
    fullDescription:
      "Application web de gestion des tontines permettant de suivre les cotisations journalières, gérer les membres et administrer les cycles d'épargne. Développée avec PHP, HTML, CSS et JavaScript, elle propose une interface de connexion sécurisée et une option d'installation mobile (PWA).",
    year: "2026",
    client: "Natte",
    role: "Développeur Web",
    challenge:
      "Digitaliser la gestion des tontines et des cotisations journalières pour un suivi simple et sécurisé.",
    solution:
      "Développement d'une application PHP / HTML / CSS / JavaScript avec authentification, gestion des membres, suivi des cotisations et PWA.",
    features: [
      "Authentification sécurisée",
      "Gestion des tontines",
      "Cotisations journalières",
      "Gestion des membres",
      "PWA installable",
      "Interface responsive",
    ],
    architecture: [
      "Backend PHP",
      "Frontend HTML / CSS / JavaScript",
      "Base de données MySQL",
      "Authentification",
      "PWA",
    ],
    results: [
      "Suivi simplifié des cotisations",
      "Gestion centralisée des tontines",
      "Accès mobile via PWA",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://natte.sambasy.com",
  },
  {
    id: "issasybio",
    category: "web",
    badge: "E-commerce",
    image: "/projects/issasybio.png",
    title: "SY BIO - Boutique en Ligne de Produits Naturels",
    description:
      "Site e-commerce de vente en ligne de produits de santé naturels et biologiques.",
    fullDescription:
      "Boutique en ligne WordPress pour SY BIO, spécialisée dans la vente de produits de santé naturels et biologiques au Sénégal. Le site propose des catégories de produits (capsules, comprimés, cosmétiques, poudres, thé), un moteur de recherche, un panier et un accompagnement personnalisé.",
    year: "2026",
    client: "SY BIO",
    role: "Développeur Web & E-commerce",
    challenge:
      "Créer une boutique en ligne claire et accessible pour vendre des produits de santé naturels et biologiques au Sénégal.",
    solution:
      "Développement d'un site e-commerce WordPress avec thème personnalisé, gestion des produits, panier, catégories et optimisation SEO.",
    features: [
      "Catalogue produits",
      "Panier",
      "Moteur de recherche",
      "Catégories",
      "Paiement",
      "Design responsive",
      "SEO",
    ],
    architecture: [
      "WordPress",
      "WooCommerce",
      "Thème personnalisé",
      "E-commerce",
      "SEO",
    ],
    results: [
      "Présence en ligne commerciale",
      "Vente en ligne de produits naturels",
      "Accessibilité mobile",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "E-commerce", "SEO"],
    link: "https://issasybio.com",
  },
  {
    id: "medical-distribution",
    category: "web",
    badge: "Web",
    image: "/projects/medical-distribution.png",
    title: "Médical Distribution - Matériels Médicaux à Dakar",
    description:
      "Site e-commerce WordPress pour la vente de matériels médicaux certifiés à Dakar, avec SEO et livraison rapide.",
    fullDescription:
      "Médical Distribution est une boutique en ligne de matériels médicaux à Dakar. Développé sur WordPress avec WooCommerce, le site propose un catalogue d'équipements fiables et certifiés pour hôpitaux, cliniques, cabinets et particuliers, avec un référencement optimisé et une navigation fluide.",
    year: "2026",
    client: "Médical Distribution",
    role: "Développeur Web",
    challenge:
      "Créer une boutique en ligne professionnelle pour vendre du matériel médical au Sénégal, en inspirant confiance et en assurant une bonne visibilité sur les moteurs de recherche.",
    solution:
      "Conception et développement d'un site e-commerce WordPress avec WooCommerce, thème personnalisé, catalogue produits, panier, pages de catégories et optimisation SEO.",
    features: [
      "Catalogue de matériels médicaux certifiés",
      "Panier et commande en ligne",
      "Catégories (Diagnostic, Urgence, Soin, etc.)",
      "Design responsive et professionnel",
      "Optimisation SEO",
      "Livraison rapide à Dakar et au Sénégal",
      "WhatsApp et contact intégrés",
    ],
    architecture: [
      "WordPress",
      "WooCommerce",
      "Thème personnalisé",
      "PHP / MySQL",
      "E-commerce",
      "SEO",
    ],
    results: [
      "Visibilité en ligne pour la vente de matériel médical",
      "Catalogue attractif et facile à parcourir",
      "Référencement amélioré",
      "Accessibilité mobile et desktop",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "SEO", "E-commerce"],
    link: "https://medicaldistribution.sn",
  },
  {
    id: "asc-jappo",
    category: "web",
    badge: "Web",
    image: "/projects/jappo.png",
    title: "ASC JAPPO - Association Sportive & Culturelle",
    description:
      "Site web de l'ASC JAPPO avec espace d'administration pour la gestion des membres, finances, joueurs et équipements.",
    fullDescription:
      "Site officiel de l'Association Sportive et Culturelle JAPPO de Khombole. Il présente l'association et intègre un espace de gestion complet pour administrer les adhésions, les finances (entrées, sorties, bilan), les joueurs, les équipements et les cartes de membre.",
    year: "2026",
    client: "ASC JAPPO",
    role: "Développeur Full Stack",
    challenge:
      "Digitaliser la gestion d'une association sportive pour faciliter le suivi financier, des membres, des joueurs et du matériel.",
    solution:
      "Développement d'un site PHP / HTML / CSS / JavaScript avec MySQL, incluant un espace d'administration sécurisé et un site vitrine public.",
    features: [
      "Site vitrine de l'association",
      "Gestion des finances et comptabilité",
      "Suivi des entrées et sorties",
      "Calcul du bilan",
      "Gestion des joueurs et membres",
      "Gestion des équipements",
      "Génération de cartes de membre",
      "Authentification admin sécurisée",
    ],
    architecture: [
      "Backend PHP",
      "Base de données MySQL",
      "Frontend HTML / CSS / JavaScript",
      "Site vitrine public",
      "Espace d'administration",
      "Gestion des utilisateurs et permissions",
    ],
    results: [
      "Présence en ligne de l'association",
      "Gestion centralisée des finances et membres",
      "Suivi efficace des joueurs et équipements",
      "Cartes de membre générées automatiquement",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    link: "https://jappo.sambasy.com",
  },
];

export default function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.split(" ").includes(activeFilter));

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Mes Projets"
        subtitle="Découvrez mes réalisations en IA, Data Science et développement web"
        image="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1920&q=80"
      />

    <section className="py-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card development">
              <div className="project-image relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <ProjectCover id={project.id} title={project.title} />
                )}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-dark-card text-accent border border-border-color z-10">
                  {project.badge}
                </div>
                <div className="project-overlay z-20">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="project-link"
                      aria-label={`Voir les détails de ${project.title}`}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  )}
                  {project.articleLink && (
                    <Link href={project.articleLink} className="project-link" aria-label="Lire l'article">
                      <i className="fas fa-book-open"></i>
                    </Link>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                {project.features && (
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((f) => (
                      <p key={f} className="text-xs text-text-muted flex items-center gap-2">
                        <i className="fas fa-check text-accent"></i> {f}
                      </p>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: `${projects.length}`, label: "Projets Réalisés" },
            { number: `${projects.filter((p) => p.category === "web").length}`, label: "Projets Développement" },
            { number: `${projects.filter((p) => p.category === "ai").length}`, label: "Modèles IA Développés" },
            { number: `${projects.filter((p) => p.category.includes("dashboard")).length}`, label: "Dashboards BI" },
          ].map((stat) => (
            <div key={stat.label} className="profile-card text-center py-6">
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
    </>
  );
}
