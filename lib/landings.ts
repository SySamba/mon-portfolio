/**
 * Pages de service (landing pages) ciblant une intention commerciale précise.
 * Une page = une requête principale. Les prix reprennent la grille officielle
 * du site (page /blog/prix-site-web-dakar/) : ne pas les modifier ici seuls.
 */

export type Landing = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  serviceType: string;
  eyebrow: string;
  titleStart: string;
  titleEm: string;
  subtitle: string;
  intro: { heading: string; paragraphs: string[] };
  features: { icon: string; title: string; text: string }[];
  offers: { name: string; price: string; text: string; items: string[] }[];
  offersNote?: string;
  steps: { title: string; text: string }[];
  stack?: string[];
  projects: { title: string; tag: string; image: string; link?: string; text: string }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const landings: Record<string, Landing> = {
  "application-mobile-dakar": {
    slug: "application-mobile-dakar",
    metaTitle: "Création d'Application Mobile à Dakar : Prix & Devis | Samba SY",
    metaDescription:
      "Développeur d'application mobile à Dakar : apps Android, iOS et PWA en Flutter ou React Native, paiement Wave et Orange Money. De 800 000 à 3 000 000 FCFA, devis gratuit sous 24h.",
    keywords: [
      "création application mobile Dakar",
      "développeur application mobile Dakar",
      "prix application mobile Sénégal",
      "développeur application mobile freelance",
      "développeur web et mobile Sénégal",
      "application Android Sénégal",
      "Flutter Dakar",
    ],
    serviceType: "Développement d'application mobile",
    eyebrow: "Application mobile",
    titleStart: "Création d'application mobile",
    titleEm: "à Dakar.",
    subtitle:
      "Applications Android, iOS et PWA pour les entreprises, institutions et entrepreneurs du Sénégal : rapides sur les téléphones du marché, utilisables avec une connexion faible et prêtes pour Wave et Orange Money.",
    intro: {
      heading: "Une application pensée pour vos utilisateurs au Sénégal",
      paragraphs: [
        "Au Sénégal, la grande majorité des internautes se connecte depuis un smartphone Android, souvent avec un forfait limité. Une application mobile réussie doit donc être légère, rapide et capable de fonctionner même quand le réseau est faible. C'est le point de départ de chaque projet que je développe.",
        "Développeur full stack basé à Dakar, je prends en charge l'ensemble du projet : cadrage, maquettes, développement de l'application et de son back-office, intégration des paiements mobiles, mise en ligne et suivi. Vous avez un seul interlocuteur du premier échange jusqu'à la publication.",
      ],
    },
    features: [
      { icon: "fas fa-mobile-screen", title: "Android & iOS", text: "Une seule base de code en Flutter ou React Native pour les deux plateformes : délais et budget maîtrisés." },
      { icon: "fas fa-wifi", title: "Mode hors ligne", text: "Données mises en cache et synchronisation automatique au retour du réseau, idéal pour le terrain." },
      { icon: "fas fa-wallet", title: "Wave & Orange Money", text: "Paiement mobile intégré pour encaisser vos clients directement depuis l'application." },
      { icon: "fas fa-gauge-high", title: "Back-office web", text: "Un tableau de bord pour gérer contenus, utilisateurs, commandes et statistiques." },
      { icon: "fas fa-bell", title: "Notifications push", text: "Relances, confirmations et alertes envoyées au bon moment pour fidéliser vos utilisateurs." },
      { icon: "fas fa-download", title: "PWA installable", text: "Une alternative économique : l'application s'installe depuis le navigateur, sans passer par les stores." },
    ],
    offers: [
      {
        name: "Application PWA",
        price: "à partir de 800 000 FCFA",
        text: "Application web installable sur l'écran d'accueil, parfaite pour démarrer vite avec un budget maîtrisé.",
        items: ["Android, iPhone et ordinateur", "Mode hors ligne", "Back-office inclus", "Pas de frais de store"],
      },
      {
        name: "Application Android & iOS",
        price: "1 500 000 – 3 000 000 FCFA",
        text: "Application native multiplateforme publiée sur Google Play et l'App Store.",
        items: ["Flutter ou React Native", "Comptes utilisateurs", "Paiement Wave / Orange Money", "Publication sur les stores"],
      },
      {
        name: "Plateforme sur mesure",
        price: "sur devis",
        text: "Marketplace, application de livraison ou de réservation, multi-rôles avec géolocalisation.",
        items: ["Plusieurs profils (client, livreur, admin)", "Géolocalisation", "Tableaux de bord", "Maintenance évolutive"],
      },
    ],
    offersNote:
      "Les applications mobiles se situent entre 800 000 et 3 000 000 FCFA selon les fonctionnalités. Le devis détaillé est gratuit et le paiement peut se faire en plusieurs tranches (Wave, Orange Money, virement).",
    steps: [
      { title: "Cadrage", text: "Un échange pour définir vos utilisateurs, les fonctionnalités indispensables et le budget." },
      { title: "Maquettes", text: "Vous validez les écrans de l'application avant le début du développement." },
      { title: "Développement", text: "Application, back-office et API, avec des démonstrations régulières pour suivre l'avancement." },
      { title: "Tests", text: "Essais sur de vrais téléphones Android et iPhone, corrections et optimisation de la vitesse." },
      { title: "Publication & suivi", text: "Mise en ligne sur les stores ou en PWA, formation de votre équipe et maintenance." },
    ],
    stack: ["Flutter", "React Native", "PWA", "React", "Node.js", "Laravel", "MySQL", "MongoDB", "Firebase", "AWS"],
    projects: [
      {
        title: "Service Mairie",
        tag: "Web & Mobile",
        image: "/projects/servicemairie.webp",
        link: "https://servicemairie.sambasy.com",
        text: "Plateforme communale web et mobile : état civil, signalements et espace citoyen accessibles 24h/24.",
      },
      {
        title: "MKA Station",
        tag: "PWA hors ligne",
        image: "/projects/mka-station.webp",
        link: "https://station.sambasy.com",
        text: "Gestion d'une station-service : ventes, caisse et stock des cuves, utilisable même sans connexion internet.",
      },
      {
        title: "Natte — Tontines",
        tag: "PWA",
        image: "/projects/natte-tontine.webp",
        link: "https://natte.sambasy.com",
        text: "Suivi des tontines et des cotisations journalières depuis le téléphone, installable comme une application.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte une application mobile au Sénégal ?",
        answer:
          "Une application mobile coûte entre 800 000 et 3 000 000 FCFA selon les fonctionnalités : une PWA démarre à 800 000 FCFA, une application Android et iOS avec comptes utilisateurs et paiement mobile se situe entre 1 500 000 et 3 000 000 FCFA. Les plateformes plus complexes (livraison, marketplace) sont chiffrées sur devis.",
      },
      {
        question: "Combien de temps faut-il pour développer une application mobile ?",
        answer:
          "Comptez 4 à 6 semaines pour une PWA, et 6 à 12 semaines pour une application Android et iOS avec back-office, selon le nombre d'écrans et d'intégrations. Le planning est fixé dans le devis.",
      },
      {
        question: "Flutter, React Native ou PWA : que choisir ?",
        answer:
          "Flutter et React Native permettent de publier une seule application sur Android et iOS, avec un accès complet au téléphone (caméra, GPS, notifications). La PWA est moins chère et s'installe sans passer par les stores : c'est souvent le meilleur choix pour démarrer ou pour un outil interne.",
      },
      {
        question: "Pouvez-vous intégrer le paiement Wave et Orange Money ?",
        answer:
          "Oui. J'intègre les paiements mobiles Wave et Orange Money ainsi que la carte bancaire, avec le suivi des transactions dans le back-office.",
      },
      {
        question: "Travaillez-vous en freelance ou en agence ?",
        answer:
          "Je travaille en développeur freelance basé à Dakar : vous échangez directement avec la personne qui développe votre application, sans intermédiaire, par WhatsApp, téléphone ou en rendez-vous.",
      },
    ],
    related: [
      { href: "/logiciel-gestion-stock-senegal/", label: "Logiciel de gestion de stock au Sénégal" },
      { href: "/logiciel-gestion-scolaire-senegal/", label: "Logiciel de gestion scolaire" },
      { href: "/blog/prix-site-web-dakar/", label: "Prix d'un site web et d'une application à Dakar" },
      { href: "/blog/developpeur-freelance-dakar/", label: "Travailler avec un développeur freelance à Dakar" },
    ],
    ctaTitle: "Vous avez une idée d'application ?",
    ctaText: "Expliquez-moi votre projet : je vous réponds sous 24h avec une estimation claire.",
  },

  "logiciel-gestion-stock-senegal": {
    slug: "logiciel-gestion-stock-senegal",
    metaTitle: "Logiciel de Gestion de Stock au Sénégal sur Mesure | Samba SY",
    metaDescription:
      "Application de gestion de stock et de ventes sur mesure pour commerces, boutiques, dépôts et stations au Sénégal : inventaire, alertes, caisse, rapports PDF/Excel, mode hors ligne. Devis gratuit.",
    keywords: [
      "logiciel de gestion de stock Sénégal",
      "application de gestion de stock",
      "logiciel de gestion commerciale Sénégal",
      "application de gestion de stock et vente",
      "logiciel de gestion Dakar",
      "logiciel de caisse Sénégal",
    ],
    serviceType: "Développement de logiciel de gestion de stock",
    eyebrow: "Gestion de stock",
    titleStart: "Logiciel de gestion de stock",
    titleEm: "au Sénégal.",
    subtitle:
      "Une application sur mesure pour suivre vos produits, vos ventes et votre caisse en temps réel, depuis l'ordinateur ou le téléphone, même quand internet coupe.",
    intro: {
      heading: "Fini les cahiers et les fichiers Excel qui ne tombent jamais juste",
      paragraphs: [
        "Ruptures de stock imprévues, écarts de caisse, inventaires qui prennent des jours : la plupart des commerces et dépôts au Sénégal perdent de l'argent faute d'un outil adapté. Les logiciels étrangers sont souvent chers, en abonnement, et mal adaptés au fonctionnement local (vente au détail, crédit client, paiement Wave et Orange Money).",
        "Je développe des logiciels de gestion de stock et de ventes construits autour de votre activité réelle : boutique, quincaillerie, pharmacie, dépôt, grossiste ou station-service. Vous êtes propriétaire de l'outil, sans abonnement imposé.",
      ],
    },
    features: [
      { icon: "fas fa-boxes-stacked", title: "Produits & inventaire", text: "Catalogue, catégories, codes-barres et inventaire rapide, avec l'historique de chaque mouvement." },
      { icon: "fas fa-triangle-exclamation", title: "Alertes de rupture", text: "Seuils minimum par produit et alertes avant que le stock ne soit épuisé." },
      { icon: "fas fa-cash-register", title: "Ventes & caisse", text: "Enregistrement des ventes, factures, crédit client et clôture de caisse journalière." },
      { icon: "fas fa-truck", title: "Achats & fournisseurs", text: "Bons de commande, réceptions de marchandises et suivi des fournisseurs." },
      { icon: "fas fa-chart-line", title: "Tableaux de bord", text: "Chiffre d'affaires, marges, produits les plus vendus et rapports exportables en PDF et Excel." },
      { icon: "fas fa-users-gear", title: "Multi-utilisateurs", text: "Accès par rôle (gérant, caissier, magasinier) et suivi de plusieurs boutiques ou dépôts." },
    ],
    offers: [
      {
        name: "Gestion de stock essentielle",
        price: "à partir de 1 000 000 FCFA",
        text: "Pour une boutique ou un dépôt : produits, entrées et sorties, ventes, alertes et rapports.",
        items: ["Produits & inventaire", "Ventes et factures", "Alertes de rupture", "Rapports PDF / Excel"],
      },
      {
        name: "Gestion commerciale complète",
        price: "sur devis",
        text: "Plusieurs points de vente, fournisseurs, crédit client, caisse et tableaux de bord avancés.",
        items: ["Multi-boutiques", "Achats & fournisseurs", "Mode hors ligne (PWA)", "Tableau de bord du gérant"],
      },
    ],
    offersNote:
      "Les logiciels métier sur mesure démarrent à 1 000 000 FCFA. Le prix final dépend du nombre de modules et de points de vente : le devis est gratuit et détaillé.",
    steps: [
      { title: "Analyse", text: "Je viens comprendre comment circulent vos produits, vos ventes et votre caisse." },
      { title: "Maquettes", text: "Vous validez les écrans principaux avant le développement." },
      { title: "Développement", text: "Livraison par modules, avec des démonstrations régulières." },
      { title: "Reprise des données", text: "Import de vos produits et stocks existants depuis Excel." },
      { title: "Formation & suivi", text: "Formation de votre équipe sur place et maintenance après la mise en service." },
    ],
    stack: ["Laravel", "React", "PHP", "MySQL", "PWA hors ligne", "Export PDF / Excel"],
    projects: [
      {
        title: "MKA Station",
        tag: "Station-service",
        image: "/projects/mka-station.webp",
        link: "https://station.sambasy.com",
        text: "Ventes de carburant, caisse et stock des cuves en temps réel, avec mode hors ligne et rapports PDF/Excel.",
      },
      {
        title: "StockMaster",
        tag: "Gestion de stock",
        image: "/projects/stockmaster.webp",
        link: "https://test2.teranganumerique.com",
        text: "Produits, inventaire, alertes, fournisseurs, ventes et tableaux de bord dans une seule application.",
      },
      {
        title: "Dashboard Ventes & Stock",
        tag: "Power BI",
        image: "/projects/sales-stock.webp",
        text: "Analyse des ventes et des stocks : réduction des ruptures de 20 % et identification des produits phares.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte un logiciel de gestion de stock sur mesure au Sénégal ?",
        answer:
          "Un logiciel de gestion de stock sur mesure démarre à 1 000 000 FCFA pour une boutique ou un dépôt. Une gestion commerciale complète avec plusieurs points de vente, fournisseurs et crédit client est chiffrée sur devis. Il n'y a pas d'abonnement imposé : vous êtes propriétaire du logiciel.",
      },
      {
        question: "Le logiciel fonctionne-t-il sans internet ?",
        answer:
          "Oui, en version PWA hors ligne : les ventes continuent d'être enregistrées pendant une coupure et se synchronisent automatiquement au retour de la connexion, comme sur la plateforme MKA Station.",
      },
      {
        question: "Puis-je reprendre mes données Excel existantes ?",
        answer:
          "Oui. Vos listes de produits, prix et stocks peuvent être importées depuis Excel au moment de la mise en service.",
      },
      {
        question: "Peut-on gérer plusieurs boutiques ou dépôts ?",
        answer:
          "Oui. Le logiciel peut suivre plusieurs points de vente avec un stock séparé pour chacun et un tableau de bord global pour le gérant.",
      },
    ],
    related: [
      { href: "/application-mobile-dakar/", label: "Création d'application mobile à Dakar" },
      { href: "/blog/consultant-power-bi-senegal/", label: "Tableaux de bord Power BI au Sénégal" },
      { href: "/blog/site-ecommerce-dakar/", label: "Vendre en ligne : site e-commerce à Dakar" },
      { href: "/logiciel-gestion-scolaire-senegal/", label: "Logiciel de gestion scolaire" },
    ],
    ctaTitle: "Reprenez le contrôle de votre stock",
    ctaText: "Décrivez votre activité : je vous propose une solution adaptée et un devis gratuit sous 24h.",
  },

  "logiciel-gestion-scolaire-senegal": {
    slug: "logiciel-gestion-scolaire-senegal",
    metaTitle: "Logiciel de Gestion Scolaire au Sénégal sur Mesure | Samba SY",
    metaDescription:
      "Plateforme de gestion scolaire et universitaire au Sénégal : inscriptions, élèves, notes, bulletins, paiements des frais de scolarité (Wave, Orange Money) et espace parents. Devis gratuit.",
    keywords: [
      "logiciel de gestion scolaire Sénégal",
      "application de gestion scolaire",
      "logiciel de gestion d'école",
      "logiciel de gestion de notes",
      "plateforme gestion académique",
      "gestion scolaire Dakar",
    ],
    serviceType: "Développement de logiciel de gestion scolaire",
    eyebrow: "Gestion scolaire",
    titleStart: "Logiciel de gestion scolaire",
    titleEm: "au Sénégal.",
    subtitle:
      "Une plateforme pour les écoles privées, instituts et centres de formation : inscriptions, notes, bulletins et frais de scolarité réunis dans un seul outil, accessible en ligne.",
    intro: {
      heading: "Une école mieux organisée, des parents mieux informés",
      paragraphs: [
        "Registres papier, bulletins saisis à la main, frais de scolarité difficiles à suivre : la gestion administrative prend un temps considérable dans les établissements privés au Sénégal. Un logiciel adapté automatise ces tâches et réduit les erreurs.",
        "J'ai conçu la plateforme de gestion académique de l'Institut Polytechnique Panafricain et les outils de formation et de certification en ligne de l'ANACIM. Je développe des solutions sur mesure pour les écoles, instituts supérieurs et centres de formation, adaptées au système de notation et aux modes de paiement locaux.",
      ],
    },
    features: [
      { icon: "fas fa-user-graduate", title: "Inscriptions & dossiers", text: "Inscriptions en ligne, dossiers élèves, classes, filières et années scolaires." },
      { icon: "fas fa-file-pen", title: "Notes & bulletins", text: "Saisie des notes par les enseignants, calcul des moyennes et bulletins générés automatiquement." },
      { icon: "fas fa-money-bill-wave", title: "Frais de scolarité", text: "Échéancier, reçus, relances des impayés et paiement par Wave ou Orange Money." },
      { icon: "fas fa-chalkboard-user", title: "Espace enseignants", text: "Emplois du temps, absences et gestion des évaluations." },
      { icon: "fas fa-people-roof", title: "Espace parents & élèves", text: "Consultation des notes, absences et paiements depuis le téléphone." },
      { icon: "fas fa-laptop-file", title: "Examens en ligne", text: "QCM et évaluations avec correction automatique, comme pour la certification ANACIM." },
    ],
    offers: [
      {
        name: "Gestion scolaire essentielle",
        price: "à partir de 1 000 000 FCFA",
        text: "Inscriptions, élèves, classes, notes et bulletins pour une école ou un centre de formation.",
        items: ["Dossiers élèves", "Notes et bulletins PDF", "Suivi des paiements", "Tableau de bord direction"],
      },
      {
        name: "Plateforme académique complète",
        price: "sur devis",
        text: "Pour les instituts et universités privées : multi-filières, espaces enseignants, parents et examens en ligne.",
        items: ["Espaces par profil", "Paiement Wave / Orange Money", "Examens en ligne", "Documents administratifs automatisés"],
      },
    ],
    offersNote:
      "Les plateformes sur mesure démarrent à 1 000 000 FCFA ; le prix dépend du nombre de modules et d'établissements. Devis gratuit après un échange sur votre fonctionnement.",
    steps: [
      { title: "Analyse", text: "Étude de votre organisation : cycles, filières, système de notes, frais." },
      { title: "Maquettes", text: "Validation des écrans avec la direction et les enseignants." },
      { title: "Développement", text: "Livraison par modules : inscriptions, notes, paiements, espaces." },
      { title: "Import des données", text: "Reprise de vos listes d'élèves et de classes existantes." },
      { title: "Formation & suivi", text: "Formation du personnel et accompagnement pendant la première année." },
    ],
    stack: ["PHP", "Laravel", "MySQL", "React", "Bootstrap", "Génération PDF"],
    projects: [
      {
        title: "Institut Polytechnique Panafricain",
        tag: "Gestion académique",
        image: "/projects/ipp.webp",
        link: "https://ipp.teranganumerique.com",
        text: "Étudiants, enseignants, notes, paiements et documents administratifs dans une plateforme centralisée.",
      },
      {
        title: "ANACIM — Certification",
        tag: "Examens en ligne",
        image: "/projects/anacim-certification.webp",
        link: "https://anacim.teranganumerique.com/index.php",
        text: "Inscription et examen en ligne avec correction automatique pour les inspecteurs de l'ANACIM.",
      },
      {
        title: "ANACIM — Formations",
        tag: "Suivi des formations",
        image: "/projects/anacim-formation.webp",
        link: "https://digitalisation-formation.teranganumerique.com/register.php",
        text: "Inscription, suivi des formations des agents et tableau de bord administrateur.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte un logiciel de gestion scolaire au Sénégal ?",
        answer:
          "Un logiciel de gestion scolaire sur mesure démarre à 1 000 000 FCFA pour une école ou un centre de formation (élèves, notes, bulletins, paiements). Une plateforme complète pour un institut ou une université privée est chiffrée sur devis.",
      },
      {
        question: "Les parents peuvent-ils payer la scolarité par Wave ou Orange Money ?",
        answer:
          "Oui. Le paiement des frais de scolarité par Wave et Orange Money peut être intégré, avec génération automatique des reçus et suivi des impayés.",
      },
      {
        question: "Le logiciel s'adapte-t-il à notre système de notation ?",
        answer:
          "Oui, c'est l'intérêt du sur-mesure : coefficients, moyennes, appréciations et format des bulletins sont configurés selon vos règles.",
      },
      {
        question: "Faut-il installer quelque chose dans l'école ?",
        answer:
          "Non. La plateforme est accessible en ligne depuis un ordinateur ou un téléphone. L'hébergement, les sauvegardes et la sécurité sont pris en charge.",
      },
    ],
    related: [
      { href: "/application-mobile-dakar/", label: "Création d'application mobile à Dakar" },
      { href: "/site-web-association-senegal/", label: "Site web pour association" },
      { href: "/logiciel-gestion-stock-senegal/", label: "Logiciel de gestion de stock" },
      { href: "/blog/data-scientist-senegal/", label: "Analyse de données au Sénégal" },
    ],
    ctaTitle: "Modernisez la gestion de votre établissement",
    ctaText: "Présentez-moi votre école ou institut : devis gratuit et démonstration sous 24h.",
  },

  "site-web-association-senegal": {
    slug: "site-web-association-senegal",
    metaTitle: "Site Web pour Association au Sénégal : Création & Gestion | Samba SY",
    metaDescription:
      "Création de site web pour association, ASC, mouvement, tontine ou ONG au Sénégal : présentation, actualités, gestion des membres, cotisations Wave/Orange Money et cartes de membre. Dès 150 000 FCFA.",
    keywords: [
      "site internet pour association",
      "site web association Sénégal",
      "gestion des membres association",
      "application tontine Sénégal",
      "site web ASC",
      "gestion des cotisations",
    ],
    serviceType: "Création de site web pour association",
    eyebrow: "Associations",
    titleStart: "Site web pour association",
    titleEm: "au Sénégal.",
    subtitle:
      "Associations sportives et culturelles, mouvements de jeunes, tontines, dahiras et ONG : un site pour vous faire connaître et un espace pour gérer membres et cotisations simplement.",
    intro: {
      heading: "Plus de visibilité, moins de paperasse",
      paragraphs: [
        "Une association vit de sa communauté. Un site web lui donne une vitrine crédible auprès des partenaires, des sponsors et des nouveaux membres, et un outil de gestion lui évite les cahiers de cotisations et les listes WhatsApp impossibles à suivre.",
        "J'ai développé les plateformes de l'ASC Jappo, du mouvement À l'Appel de Khombole et de la tontine Natte. Je connais le fonctionnement des associations sénégalaises : adhésions, cotisations, cartes de membre, événements et comptes rendus.",
      ],
    },
    features: [
      { icon: "fas fa-house-flag", title: "Site vitrine", text: "Présentation, historique, bureau, actualités, galerie photos et contact." },
      { icon: "fas fa-id-card", title: "Cartes de membre", text: "Cartes d'adhésion numériques générées automatiquement, prêtes à imprimer ou à partager." },
      { icon: "fas fa-users", title: "Gestion des membres", text: "Adhésions, fiches membres, statuts et recherche rapide." },
      { icon: "fas fa-hand-holding-dollar", title: "Cotisations & tontines", text: "Suivi des cotisations journalières ou mensuelles, relances et paiement Wave / Orange Money." },
      { icon: "fas fa-calendar-days", title: "Événements", text: "Agenda des activités, matchs, rencontres et inscriptions en ligne." },
      { icon: "fas fa-file-invoice", title: "Finances & équipements", text: "Recettes, dépenses et inventaire du matériel pour une gestion transparente." },
    ],
    offers: [
      {
        name: "Site vitrine association",
        price: "150 000 – 500 000 FCFA",
        text: "Une présence en ligne professionnelle pour présenter l'association et ses activités.",
        items: ["4 à 6 pages", "Actualités et galerie", "Formulaire d'adhésion", "Référencement Google"],
      },
      {
        name: "Site + espace de gestion",
        price: "à partir de 1 000 000 FCFA",
        text: "Le site vitrine avec un espace d'administration pour les membres, cotisations et finances.",
        items: ["Gestion des membres", "Cartes de membre", "Suivi des cotisations", "Finances et équipements"],
      },
    ],
    offersNote:
      "Un site vitrine coûte de 150 000 à 500 000 FCFA ; avec un espace de gestion sur mesure, comptez à partir de 1 000 000 FCFA. Paiement possible en plusieurs tranches.",
    steps: [
      { title: "Échange", text: "Présentation de l'association, de ses activités et de ses besoins." },
      { title: "Contenus", text: "Collecte des textes, photos, logo et liste des membres." },
      { title: "Création", text: "Design aux couleurs de l'association et mise en place de l'espace de gestion." },
      { title: "Mise en ligne", text: "Nom de domaine, hébergement et référencement sur Google." },
      { title: "Formation", text: "Formation du bureau pour publier et gérer en toute autonomie." },
    ],
    stack: ["Next.js", "Laravel", "PHP", "MySQL", "PWA", "Bootstrap"],
    projects: [
      {
        title: "ASC Jappo",
        tag: "Association sportive",
        image: "/projects/jappo.webp",
        link: "https://jappo.sambasy.com",
        text: "Site de l'association et administration des membres, finances, joueurs et équipements, avec cartes de membre.",
      },
      {
        title: "À l'Appel de Khombole",
        tag: "Mouvement de jeunes",
        image: "/projects/appel-khombole.webp",
        link: "https://appeldekhombole.com/login.php",
        text: "Gestion des adhésions et des cartes de membre numériques pour le mouvement des jeunes de Khombole.",
      },
      {
        title: "Natte — Tontines",
        tag: "Tontine",
        image: "/projects/natte-tontine.webp",
        link: "https://natte.sambasy.com",
        text: "Gestion des tontines et des cotisations journalières, accessible sur mobile en PWA.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte un site web pour une association au Sénégal ?",
        answer:
          "Un site vitrine pour association coûte de 150 000 à 500 000 FCFA. Avec un espace de gestion des membres, des cotisations et des finances, comptez à partir de 1 000 000 FCFA. Le paiement peut se faire en plusieurs tranches.",
      },
      {
        question: "Peut-on suivre les cotisations des membres en ligne ?",
        answer:
          "Oui. Chaque cotisation est enregistrée, les retards sont visibles en un coup d'œil et les membres peuvent payer par Wave ou Orange Money.",
      },
      {
        question: "Les cartes de membre peuvent-elles être générées automatiquement ?",
        answer:
          "Oui. Les cartes d'adhésion sont créées automatiquement à partir de la fiche du membre, prêtes à imprimer ou à partager, comme pour l'ASC Jappo et À l'Appel de Khombole.",
      },
      {
        question: "Le bureau pourra-t-il mettre à jour le site lui-même ?",
        answer:
          "Oui. Une formation est incluse pour publier les actualités, ajouter des photos et gérer les membres sans compétence technique.",
      },
    ],
    related: [
      { href: "/blog/creation-site-web-dakar/", label: "Création de site web à Dakar : le guide complet" },
      { href: "/blog/prix-site-web-dakar/", label: "Prix d'un site web à Dakar" },
      { href: "/application-mobile-dakar/", label: "Création d'application mobile à Dakar" },
      { href: "/logiciel-gestion-scolaire-senegal/", label: "Logiciel de gestion scolaire" },
    ],
    ctaTitle: "Donnez de la visibilité à votre association",
    ctaText: "Parlez-moi de votre association : devis gratuit et réponse sous 24h.",
  },
};
