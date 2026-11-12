import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCover from "@/components/BlogCover";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, frenchDateToIso, pageMetadata } from "@/lib/seo";

const PRICE_SLUG = "prix-site-web-dakar";

/**
 * FAQ de la page prix : formulations exactes des suggestions Google
 * (« combien coûte un site web au sénégal »…). Affichée dans l'article et
 * reprise telle quelle dans le schéma FAQPage.
 */
const priceFaqs = [
  {
    question: "Combien coûte un site web au Sénégal ?",
    answer:
      "Au Sénégal, un site vitrine coûte de 150 000 à 500 000 FCFA, un site e-commerce de 400 000 à 1 500 000 FCFA, une application mobile de 800 000 à 3 000 000 FCFA et une plateforme sur mesure à partir de 1 000 000 FCFA. Le prix dépend du nombre de pages, des fonctionnalités et du design.",
  },
  {
    question: "Combien coûte la création d'un site internet pour une petite entreprise ?",
    answer:
      "Pour une petite entreprise, un site vitrine professionnel de 4 à 6 pages, responsive et optimisé pour Google, coûte généralement entre 150 000 et 300 000 FCFA. C'est la formule la plus adaptée pour démarrer.",
  },
  {
    question: "Combien coûte un site e-commerce au Sénégal ?",
    answer:
      "Un site e-commerce coûte de 400 000 à 1 500 000 FCFA selon la taille du catalogue, les moyens de paiement (Wave, Orange Money, carte) et la gestion des livraisons.",
  },
  {
    question: "Y a-t-il des frais chaque mois après la création ?",
    answer:
      "Il faut prévoir le nom de domaine et l'hébergement, renouvelés chaque année, et éventuellement un contrat de maintenance pour les mises à jour, les sauvegardes et la sécurité. Ces frais sont indiqués clairement dans le devis.",
  },
];

const articles: Record<
  string,
  {
    title: string;
    subtitle: string;
    category: string;
    date: string;
    readingTime: string;
    tags: string[];
    image: string;
    content: React.ReactNode;
  }
> = {
  "ia-afrique": {
    title: "L'Avenir de l'Intelligence Artificielle en Afrique : Opportunités et Défis",
    subtitle:
      "L'Intelligence Artificielle transforme rapidement le paysage technologique mondial, et l'Afrique ne fait pas exception. Découvrez comment le continent peut tirer parti de cette révolution technologique pour accélérer son développement économique et social.",
    category: "Intelligence Artificielle",
    date: "15 Janvier 2024",
    readingTime: "8 min de lecture",
    tags: ["IA", "Afrique", "Innovation", "Développement"],
    image: "/image.jpg",
    content: (
      <>
        <h2 id="introduction">Introduction</h2>
        <p>
          L'Intelligence Artificielle (IA) n'est plus une technologie futuriste réservée aux pays développés. Aujourd'hui,
          l'Afrique se positionne comme un acteur majeur de cette révolution technologique, avec des initiatives innovantes
          qui transforment déjà de nombreux secteurs.
        </p>
        <p>
          De la santé à l'agriculture, en passant par l'éducation et la finance, l'IA offre des solutions concrètes aux défis
          spécifiques du continent africain. Cette transformation digitale représente une opportunité unique pour l'Afrique
          de "sauter" certaines étapes de développement et d'accélérer sa croissance économique.
        </p>
        <blockquote>
          "L'Afrique a l'opportunité unique de façonner l'avenir de l'IA en développant des solutions adaptées à ses besoins
          spécifiques et en valorisant sa diversité culturelle et linguistique."
        </blockquote>

        <h2 id="opportunites">Les Opportunités Majeures</h2>
        <h3>1. Transformation de l'Agriculture</h3>
        <p>
          L'agriculture, secteur vital pour l'économie africaine, bénéficie déjà des innovations en IA. Les systèmes de
          prédiction météorologique, l'analyse d'images satellites pour le monitoring des cultures, et les applications
          mobiles d'aide à la décision révolutionnent les pratiques agricoles.
        </p>
        <ul>
          <li><strong>iCow (Kenya)</strong> : Application utilisant l'IA pour optimiser l'élevage laitier</li>
          <li><strong>Plantix</strong> : Diagnostic automatique des maladies des plantes par vision par ordinateur</li>
          <li><strong>Farmerline (Ghana)</strong> : Plateforme d'information agricole alimentée par l'IA</li>
        </ul>

        <h3>2. Révolution de la Santé</h3>
        <p>
          Dans un contexte où l'accès aux soins reste un défi majeur, l'IA propose des solutions innovantes. Le diagnostic
          automatisé, la télémédecine assistée par IA, et les systèmes d'alerte épidémiologique transforment la delivery des
          soins de santé.
        </p>

        <h3>3. Inclusion Financière</h3>
        <p>
          Les fintech africaines intègrent massivement l'IA pour évaluer les risques de crédit, détecter les fraudes, et
          proposer des services financiers personnalisés aux populations non bancarisées.
        </p>

        <h2 id="defis">Les Défis à Relever</h2>
        <h3>Infrastructure et Connectivité</h3>
        <p>
          Le développement de l'IA nécessite une infrastructure technologique robuste. L'amélioration de la connectivité
          internet, le déploiement de centres de données, et l'accès à l'électricité restent des prérequis essentiels.
        </p>

        <h3>Formation et Compétences</h3>
        <p>
          Le développement d'un écosystème IA durable nécessite des investissements massifs dans l'éducation et la formation.
          Les universités africaines multiplient les programmes en data science et IA, mais l'écart reste important.
        </p>

        <h2 id="initiatives">Initiatives Prometteuses</h2>
        <ul>
          <li><strong>AI4D Africa</strong> : Programme de recherche et développement en IA</li>
          <li><strong>Deep Learning Indaba</strong> : Conférence annuelle de machine learning</li>
          <li><strong>Zindi</strong> : Plateforme de compétitions en data science</li>
          <li><strong>Data Science Nigeria</strong> : Initiative de formation en data science</li>
        </ul>

        <h2 id="recommandations">Recommandations Stratégiques</h2>
        <ul>
          <li><strong>Investir dans l'Éducation</strong> : Développer des programmes de formation adaptés aux besoins locaux.</li>
          <li><strong>Favoriser les Partenariats</strong> : Encourager la collaboration entre secteur public, privé et académique.</li>
          <li><strong>Développer un Cadre Éthique</strong> : Établir des réglementations pour un développement responsable.</li>
        </ul>

        <h2 id="conclusion">Conclusion</h2>
        <p>
          L'Afrique se trouve à un moment charnière de son histoire technologique. L'IA représente une opportunité exceptionnelle
          de transformer le continent, à condition de relever les défis structurels et de développer des solutions adaptées aux
          réalités locales.
        </p>
      </>
    ),
  },
  "power-bi-dashboards": {
    title: "Comment Créer des Tableaux de Bord Efficaces avec Power BI",
    subtitle:
      "Guide pratique pour concevoir des dashboards qui transforment vos données en insights actionnables. Découvrez les techniques avancées et bonnes pratiques pour maximiser l'impact de vos visualisations Power BI.",
    category: "Data Science",
    date: "12 Janvier 2024",
    readingTime: "6 min de lecture",
    tags: ["Power BI", "Dashboard", "Visualisation"],
    image: "/3.webp",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          Power BI s'est imposé comme l'un des outils de Business Intelligence les plus puissants du marché. Cependant, créer
          un tableau de bord efficace va bien au-delà de simplement glisser-déposer des graphiques. Il s'agit de raconter une
          histoire avec vos données et de fournir des insights actionnables.
        </p>

        <h2>Les Fondamentaux d'un Bon Dashboard</h2>
        <h3>1. Définir l'Objectif et l'Audience</h3>
        <p>Avant de commencer à créer votre dashboard, posez-vous ces questions essentielles :</p>
        <ul>
          <li><strong>Qui va utiliser ce dashboard ?</strong> (Direction, managers, analystes)</li>
          <li><strong>Quelles décisions doivent être prises ?</strong></li>
          <li><strong>Quelle fréquence de consultation ?</strong> (Temps réel, quotidien, mensuel)</li>
          <li><strong>Quel niveau de détail nécessaire ?</strong></li>
        </ul>

        <h3>2. Structure et Hiérarchie Visuelle</h3>
        <p>Un dashboard efficace guide naturellement l'œil de l'utilisateur vers les informations les plus importantes.</p>
        <ul>
          <li><strong>Règle des 5 Secondes</strong> : L'utilisateur doit comprendre l'information principale en moins de 5 secondes.</li>
          <li><strong>Hiérarchie Z ou F</strong> : Organisez vos éléments selon les patterns de lecture naturels.</li>
          <li><strong>Cohérence Visuelle</strong> : Utilisez une palette de couleurs cohérente et limitée (3-5 couleurs max).</li>
        </ul>

        <h2>Techniques Avancées de Visualisation</h2>
        <h3>Choix des Graphiques Appropriés</h3>
        <ul>
          <li><strong>Barres</strong> : Comparaisons</li>
          <li><strong>Lignes</strong> : Tendances temporelles</li>
          <li><strong>Secteurs</strong> : Proportions (max 5 segments)</li>
          <li><strong>Cartes</strong> : Données géographiques</li>
        </ul>

        <h2>Optimisation des Performances</h2>
        <blockquote>
          "Un dashboard lent est un dashboard inutile. L'optimisation des performances doit être une priorité dès la conception
          du modèle de données."
        </blockquote>
        <ul>
          <li><strong>Schéma en étoile</strong> : Privilégiez cette architecture pour les performances</li>
          <li><strong>Colonnes calculées vs Mesures</strong> : Utilisez les mesures DAX pour les calculs dynamiques</li>
          <li><strong>Agrégation des données</strong> : Pré-agréguez les données quand c'est possible</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Un tableau de bord Power BI efficace combine storytelling, performance et UX. En appliquant ces bonnes pratiques,
          vous transformerez vos données en outils de décision puissants.
        </p>
      </>
    ),
  },
  "fake-news-nlp": {
    title: "Détection de Fake News : Techniques de NLP Avancées",
    subtitle:
      "Exploration des algorithmes de traitement du langage naturel pour identifier automatiquement les fausses informations en ligne.",
    category: "Intelligence Artificielle",
    date: "05 Janvier 2024",
    readingTime: "7 min de lecture",
    tags: ["NLP", "Fake News", "Machine Learning"],
    image: "/image.jpg",
    content: (
      <>
        <h2>L'Enjeu des Fake News à l'Ère Numérique</h2>
        <p>
          Dans notre société hyperconnectée, la désinformation se propage plus rapidement que jamais. Les fake news représentent
          un défi majeur pour la démocratie, l'économie et la cohésion sociale. Heureusement, l'intelligence artificielle et le
          traitement du langage naturel (NLP) offrent des solutions prometteuses pour combattre ce fléau.
        </p>

        <h2>Comprendre la Nature des Fake News</h2>
        <p>Les fausses informations présentent des caractéristiques linguistiques distinctives :</p>
        <ul>
          <li><strong>Langage émotionnel excessif</strong> : Usage fréquent d'adjectifs superlatifs</li>
          <li><strong>Manque de sources fiables</strong> : Références vagues ou inexistantes</li>
          <li><strong>Structures syntaxiques particulières</strong> : Phrases courtes et percutantes</li>
          <li><strong>Biais cognitifs exploités</strong> : Confirmation bias, sensationnalisme</li>
        </ul>

        <h2>Techniques NLP pour la Détection</h2>
        <h3>1. Analyse Lexicale et Sémantique</h3>
        <ul>
          <li><strong>TF-IDF</strong> : Identification des termes discriminants</li>
          <li><strong>Word Embeddings</strong> : Word2Vec, GloVe pour capturer les relations sémantiques</li>
          <li><strong>Sentiment Analysis</strong> : Détection de la polarité émotionnelle</li>
        </ul>

        <h3>2. Modèles de Deep Learning</h3>
        <ul>
          <li><strong>LSTM et GRU</strong> : Capture des dépendances temporelles dans le texte</li>
          <li><strong>BERT et RoBERTa</strong> : Modèles basés sur l'attention pour une compréhension contextuelle</li>
          <li><strong>DistilBERT</strong> : Version allégée pour la production</li>
        </ul>

        <h2>Métriques d'Évaluation</h2>
        <ul>
          <li><strong>Précision</strong> : Éviter les faux positifs</li>
          <li><strong>Rappel</strong> : Détecter un maximum de fake news</li>
          <li><strong>F1-Score</strong> : Équilibre entre précision et rappel</li>
          <li><strong>AUC-ROC</strong> : Performance globale du classificateur</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          La détection automatique des fake news est un domaine en constante évolution. Grâce aux techniques NLP avancées, nous
          disposons désormais d'outils efficaces pour lutter contre la désinformation en ligne.
        </p>
      </>
    ),
  },
  "aws-migration-guide": {
    title: "Migration vers AWS : Guide Complet pour les Entreprises",
    subtitle:
      "Stratégies et étapes clés pour réussir votre migration cloud. De la planification au déploiement, découvrez les meilleures pratiques.",
    category: "Cloud Computing",
    date: "08 Janvier 2024",
    readingTime: "10 min de lecture",
    tags: ["AWS", "Migration", "Cloud Strategy"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Introduction</h2>
        <p>
          La migration vers le cloud AWS représente un tournant stratégique majeur pour les entreprises modernes. Cette
          transformation ne se limite pas à un simple transfert d'infrastructure, mais constitue une réinvention complète de
          l'architecture IT.
        </p>

        <h2>Pourquoi Migrer vers AWS ?</h2>
        <ul>
          <li><strong>Réduire les coûts</strong> : Élimination des investissements en infrastructure physique</li>
          <li><strong>Améliorer la scalabilité</strong> : Adaptation automatique aux variations de charge</li>
          <li><strong>Renforcer la sécurité</strong> : Conformité aux standards internationaux</li>
          <li><strong>Accélérer l'innovation</strong> : Accès à plus de 200 services cloud</li>
        </ul>

        <h2>Les 6 Stratégies de Migration (6 R's)</h2>
        <ul>
          <li><strong>Rehost</strong> : Lift and Shift, migration directe</li>
          <li><strong>Replatform</strong> : Optimisations mineures pour AWS</li>
          <li><strong>Refactor/Re-architect</strong> : Refonte cloud-native</li>
          <li><strong>Repurchase</strong> : Remplacement par des SaaS</li>
          <li><strong>Retain</strong> : Conservation temporaire</li>
          <li><strong>Retire</strong> : Décommissionnement</li>
        </ul>

        <h2>Outils AWS pour la Migration</h2>
        <ul>
          <li><strong>AWS Migration Hub</strong> : Tableau de bord centralisé</li>
          <li><strong>AWS SMS</strong> : Migration automatisée des serveurs virtuels</li>
          <li><strong>AWS DMS</strong> : Migration de bases de données</li>
          <li><strong>AWS DataSync</strong> : Transfert sécurisé de données</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          La migration vers AWS est un projet transformationnel qui nécessite une approche méthodique. En suivant les bonnes
          pratiques et en s'appuyant sur les outils AWS appropriés, votre entreprise peut réaliser une transition réussie vers
          le cloud.
        </p>
      </>
    ),
  },
  "developpeur-web-senegal": {
    title: "Développeur Web au Sénégal : Comment Choisir un Expert Local à Dakar",
    subtitle: "Vous cherchez un développeur web à Dakar ? Compétences à vérifier, technologies maîtrisées et avantages concrets de travailler avec un développeur full stack basé au Sénégal.",
    category: "Développement web",
    date: "29 Juillet 2026",
    readingTime: "7 min de lecture",
    tags: ["développeur web Dakar", "développeur web Sénégal", "développeur full stack Dakar", "Next.js", "React", "Laravel"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Pourquoi un développeur web au Sénégal ?</h2>
        <p>
          Faire appel à un développeur web au Sénégal, et plus particulièrement à Dakar, offre un rapport qualité-prix
          compétitif tout en bénéficiant d'une compréhension fine des besoins locaux. Un développeur full stack capable
          d'intervenir sur React, Next.js, Laravel ou Flutter peut accompagner votre projet de A à Z.
        </p>
        <h2>Création de sites web et applications mobiles</h2>
        <p>
          Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce ou d'une application mobile, un
          développeur web sénégalais peut vous proposer des solutions adaptées, modernes et évolutives.
        </p>
        <ul>
          <li>Sites web responsive et performants</li>
          <li>Applications mobiles Flutter et React Native</li>
          <li>CMS et back-office sur mesure</li>
          <li>Référencement SEO adapté au marché sénégalais</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Le Sénégal dispose d'un écosystème technologique dynamique. Collaborer avec un développeur web à Dakar,
          c'est opter pour proximité, réactivité et expertise technique.
        </p>
      </>
    ),
  },
  "data-scientist-senegal": {
    title: "Data Analyst et Data Scientist au Sénégal : Booster Vos Décisions",
    subtitle:
      "Exploitez la puissance de vos données avec un Data Analyst ou Data Scientist au Sénégal. Découvrez comment l'IA et la data science transforment les entreprises à Dakar.",
    category: "Data Science",
    date: "29 Juillet 2026",
    readingTime: "6 min de lecture",
    tags: ["Data Analyst Sénégal", "Data Scientist Sénégal", "intelligence artificielle", "machine learning", "Développement logiciel"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Data Analyst ou Data Scientist : quelle différence ?</h2>
        <p>
          Le Data Analyst transforme vos données brutes en insights actionnables, tandis que le Data Scientist conçoit
          des modèles prédictifs et des solutions d'intelligence artificielle. Ensemble, ils permettent de prendre des
          décisions éclairées et d'anticiper les tendances.
        </p>
        <h2>Applications concrètes au Sénégal</h2>
        <ul>
          <li>Segmentation client et scoring de crédit</li>
          <li>Prévisions de ventes et gestion des stocks</li>
          <li>Détection de fraudes et automatisation</li>
          <li>Chatbots et assistants intelligents</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Investir dans la data science et l'IA au Sénégal, c'est donner un avantage compétitif à votre entreprise
          grâce à des solutions sur mesure adaptées aux réalités locales.
        </p>
      </>
    ),
  },
  "consultant-power-bi-senegal": {
    title: "Consultant Power BI au Sénégal : Visualisez Vos Performances",
    subtitle:
      "Un consultant Power BI au Sénégal vous aide à concevoir des tableaux de bord interactifs pour piloter votre activité en toute simplicité.",
    category: "Data Science",
    date: "29 Juillet 2026",
    readingTime: "5 min de lecture",
    tags: ["consultant Power BI Sénégal", "Business Intelligence", "dashboard", "Data Analyst", "Sénégal"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Power BI au service de la décision</h2>
        <p>
          Power BI est l'outil de référence pour transformer des données complexes en visualisations claires. Un
          consultant Power BI accompagne les entreprises sénégalaises dans la modélisation, le nettoyage et la
          valorisation de leurs données.
        </p>
        <h2>Bénéfices pour votre entreprise</h2>
        <ul>
          <li>Tableaux de bord temps réel</li>
          <li>Suivi des indicateurs clés (KPI)</li>
          <li>Analyse des ventes, stocks et performances</li>
          <li>Partage sécurisé des rapports</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Faites appel à un consultant Power BI au Sénégal pour donner du sens à vos données et accélérer votre
          croissance.
        </p>
      </>
    ),
  },
  "developpeur-freelance-dakar": {
    title: "Développeur Freelance à Dakar : Tarif Journalier, Modalités et Contrat",
    subtitle: "Combien coûte un développeur freelance à Dakar, comment se déroule la collaboration et quelles garanties exiger ? Comparaison freelance, agence et salarié pour votre projet.",
    category: "Freelance",
    date: "28 Août 2026",
    readingTime: "8 min de lecture",
    tags: ["développeur freelance Dakar", "développeur freelance Sénégal", "freelance développeur web Dakar", "tarif journalier développeur Dakar", "freelance ou agence"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Pourquoi choisir un développeur freelance à Dakar ?</h2>
        <p>
          Le marché du développement web au Sénégal est en pleine expansion. De plus en plus d'entreprises
          et d'entrepreneurs font appel à un <strong>développeur freelance à Dakar</strong> pour la création
          de leur site internet ou application mobile. Mais quels sont les avantages concrets du freelancing
          par rapport à une agence traditionnelle ?
        </p>
        <ul>
          <li><strong>Coûts optimisés</strong> : un freelance développeur web à Dakar propose des tarifs plus compétitifs qu'une agence, sans les frais de structure</li>
          <li><strong>Communication directe</strong> : vous échangez directement avec la personne qui code votre projet, sans intermédiaire</li>
          <li><strong>Réactivité</strong> : un développeur freelance au Sénégal peut s'adapter rapidement à vos besoins et ajuster le cap en cours de projet</li>
          <li><strong>Flexibilité</strong> : disponibilité en soirée, week-end, selon vos contraintes</li>
        </ul>

        <h2>Comment identifier le meilleur développeur web à Dakar ?</h2>
        <p>
          Trouver le <strong>meilleur développeur web à Dakar</strong> nécessite de vérifier plusieurs critères
          essentiels avant de confier votre projet :
        </p>
        <h3>1. Le portfolio et les réalisations</h3>
        <p>
          Un bon développeur freelance au Sénégal doit pouvoir vous présenter ses projets antérieurs :
          sites vitrines, e-commerce, applications mobiles, plateformes métier. Examinez la qualité du design,
          la fluidité de la navigation et la rapidité de chargement.
        </p>
        <h3>2. La stack technique</h3>
        <p>
          Le développeur doit maîtriser les technologies modernes : React, Next.js, Vue.js, Node.js, Laravel,
          Flutter. Un développeur freelance à Dakar compétent saura vous conseiller la meilleure stack selon
          votre projet.
        </p>
        <h3>3. Les compétences en SEO</h3>
        <p>
          Un site web non référencé sur Google est invisible. Assurez-vous que votre freelance développeur web
          à Dakar intègre les bonnes pratiques SEO dès la conception : structure HTML sémantique, balises
          meta, optimisation des images, vitesse de chargement.
        </p>
        <h3>4. Le référencement local</h3>
        <p>
          Pour cibler la clientèle sénégalaise, votre développeur doit maîtriser le SEO local : inscription
          sur Google My Business, optimisation pour les recherches « développeur web Dakar » ou
          « création site web Sénégal ».
        </p>

        <h2>Développeur freelance Sénégal : les tarifs en 2026</h2>
        <p>
          Les tarifs d'un développeur freelance au Sénégal varient selon l'expérience et la complexité du
          projet :
        </p>
        <ul>
          <li><strong>Site vitrine</strong> : 150 000 à 500 000 FCFA</li>
          <li><strong>Site e-commerce</strong> : 400 000 à 1 500 000 FCFA</li>
          <li><strong>Application mobile</strong> : 800 000 à 3 000 000 FCFA</li>
          <li><strong>Plateforme sur mesure</strong> : à partir de 1 000 000 FCFA</li>
        </ul>

        <h2>Les avantages d'un freelance par rapport à une agence</h2>
        <table>
          <thead>
            <tr><th>Critère</th><th>Freelance</th><th>Agence</th></tr>
          </thead>
          <tbody>
            <tr><td>Prix</td><td>Plus abordable</td><td>Plus élevé</td></tr>
            <tr><td>Communication</td><td>Directe avec le dev</td><th>Via chef de projet</th></tr>
            <tr><td>Flexibilité</td><td>Très flexible</td><td>Processus rigide</td></tr>
            <tr><td>Délais</td><td>Rapides</td><td>Plus longs</td></tr>
            <tr><td>Expertise</td><td>Spécialisée</td><td>Multi-domaines</td></tr>
          </tbody>
        </table>

        <h2>Conclusion</h2>
        <p>
          Faire appel à un <strong>développeur freelance à Dakar</strong> est une excellente option pour les
          entreprises et entrepreneurs qui recherchent un rapport qualité-prix optimal, une communication
          directe et une grande flexibilité. En vérifiant le portfolio, la stack technique et les compétences
          SEO, vous pouvez trouver le meilleur développeur web au Sénégal pour votre projet.
        </p>
        <p>
          Vous avez un projet de site web ou d'application ? <Link href="/contact">Contactez-moi</Link> pour
          discuter de vos besoins et obtenir un devis gratuit.
        </p>
      </>
    ),
  },
  "agence-web-dakar": {
    title: "Agence Web à Dakar : Comment Choisir le Bon Prestataire au Sénégal",
    subtitle: "Agence web, entreprise informatique ou expert indépendant à Dakar ? Les critères concrets pour évaluer un prestataire, les pièges à éviter et les questions à poser avant de signer.",
    category: "Agences & prestataires",
    date: "28 Août 2026",
    readingTime: "7 min de lecture",
    tags: ["agence web Dakar", "agence développement web Dakar", "entreprise développement informatique Dakar", "agence digitale Dakar", "choisir prestataire web Sénégal"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Pourquoi faire appel à une agence web à Dakar ?</h2>
        <p>
          Dans un monde de plus en plus digital, avoir un site web professionnel n'est plus une option mais
          une nécessité. Faire appel à une <strong>agence web à Dakar</strong> présente de nombreux avantages
          pour les entreprises sénégalaises qui souhaitent développer leur présence en ligne.
        </p>
        <ul>
          <li><strong>Expertise pluridisciplinaire</strong> : une agence de développement web à Dakar réunit des designers, des développeurs, des experts SEO et des chefs de projet</li>
          <li><strong>Accompagnement complet</strong> : de la stratégie à la mise en ligne, en passant par le design et le référencement</li>
          <li><strong>Maintenance et support</strong> : une agence assure le suivi technique de votre site sur le long terme</li>
          <li><strong>Connaissance du marché local</strong> : une agence au Sénégal comprend les attentes des consommateurs locaux</li>
        </ul>

        <h2>Agence web vs entreprise de développement informatique à Dakar</h2>
        <p>
          Il existe une différence entre une <strong>agence web à Dakar</strong> et une
          <strong> entreprise de développement informatique à Dakar</strong> :
        </p>
        <ul>
          <li><strong>Agence web</strong> : spécialisée dans la création de sites internet, le design, le SEO et le marketing digital</li>
          <li><strong>Entreprise de développement informatique</strong> : plus axée sur le développement logiciel, les applications métier, l'infrastructure IT et l'intégration de systèmes</li>
        </ul>
        <p>
          Selon votre besoin (site vitrine, e-commerce, logiciel sur mesure), choisissez le bon type de
          prestataire. Pour un projet de petite ou moyenne envergure, un indépendant expérimenté peut
          aussi être une excellente alternative : comparez dans notre guide{" "}
          <Link href="/blog/developpeur-freelance-dakar/">développeur freelance à Dakar : tarifs, modalités et contrat</Link>.
        </p>

        <h2>Comment choisir la meilleure agence de développement web à Dakar ?</h2>
        <h3>1. Analysez le portfolio</h3>
        <p>
          Parcourez les sites déjà réalisés par l'agence. Vérifiez la qualité du design, l'ergonomie et la
          performance des sites.
        </p>
        <h3>2. Vérifiez les technologies utilisées</h3>
        <p>
          Une bonne agence web à Dakar doit maîtriser les technologies modernes : Next.js, React, Laravel,
          Flutter, WordPress, Shopify. Elle doit aussi être à l'aise avec le SEO et l'optimisation des
          performances.
        </p>
        <h3>3. Demandez des références clients</h3>
        <p>
          Les témoignages et avis clients sont un excellent indicateur de la fiabilité d'une agence de
          développement web au Sénégal.
        </p>
        <h3>4. Évaluez le niveau de support</h3>
        <p>
          Une agence sérieuse propose un contrat de maintenance, des mises à jour régulières et un support
          technique réactif.
        </p>

        <h2>Les services proposés par une agence web à Dakar</h2>
        <ul>
          <li>Création de sites vitrines et institutionnels</li>
          <li>Développement de boutiques e-commerce</li>
          <li>Applications mobiles iOS et Android</li>
          <li>Référencement naturel (SEO) et payant (Google Ads)</li>
          <li>Gestion des réseaux sociaux</li>
          <li>Maintenance et hébergement</li>
          <li>Audit et conseil digital</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Choisir la bonne <strong>agence de développement web à Dakar</strong> est crucial pour la réussite
          de votre projet digital. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une
          application métier, prenez le temps de comparer les prestataires, leurs réalisations et leurs
          tarifs.
        </p>
        <p>
          Besoin d'un accompagnement personnalisé ? <Link href="/contact">Contactez-moi</Link> pour échanger
          sur votre projet.
        </p>
      </>
    ),
  },
  "creation-site-web-dakar": {
    title: "Création de Site Web à Dakar et au Sénégal : le Guide Complet 2026",
    subtitle: "Créer un site web à Dakar ou faire développer un site internet au Sénégal ? Toutes les étapes, les types de sites, les délais et les bonnes pratiques pour réussir votre présence en ligne.",
    category: "Création de site web",
    date: "28 Août 2026",
    readingTime: "10 min de lecture",
    tags: ["création site web Dakar", "création site web Sénégal", "création site internet Dakar", "créer un site web à Dakar", "créer site vitrine Dakar", "faire développer un site internet au Sénégal"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Création de site web à Dakar : par où commencer ?</h2>
        <p>
          La <strong>création d'un site web à Dakar</strong> est une étape clé pour toute entreprise qui
          souhaite développer sa visibilité en ligne. Que vous soyez une PME, une startup ou un artisan,
          un site internet professionnel vous permet d'atteindre de nouveaux clients et de renforcer votre
          crédibilité.
        </p>

        <h2>Les différents types de sites web</h2>
        <h3>1. Le site vitrine</h3>
        <p>
          Un <strong>site vitrine à Dakar</strong> est idéal pour présenter votre entreprise, vos services et
          vos réalisations. C'est la solution la plus abordable et la plus rapide à mettre en place.
        </p>
        <ul>
          <li>Pages : Accueil, À propos, Services, Contact</li>
          <li>Design responsive et moderne</li>
          <li>Formulaire de contact intégré</li>
          <li>Référencement SEO de base</li>
        </ul>

        <h3>2. Le site e-commerce</h3>
        <p>
          Une boutique en ligne permet de vendre vos produits 24h/24 au Sénégal et à l'international.
          Fonctionnalités : panier, paiement en ligne (Wave, Orange Money, carte bancaire), gestion des
          stocks. Tous les détails dans le guide{" "}
          <Link href="/blog/site-ecommerce-dakar/">création de site e-commerce à Dakar</Link>.
        </p>

        <h3>3. La plateforme sur mesure</h3>
        <p>
          Réservations, annuaires, espaces membres, tableaux de bord… Une plateforme sur mesure répond à des
          besoins métier spécifiques.
        </p>

        <h2>Les étapes pour créer un site web à Dakar</h2>
        <h3>Étape 1 : Définir vos objectifs</h3>
        <p>
          Avant de <strong>créer un site web à Dakar</strong>, posez-vous les bonnes questions : quel est le
          but du site ? Qui est la cible ? Quelles fonctionnalités sont nécessaires ?
        </p>

        <h3>Étape 2 : Choisir un nom de domaine et un hébergement</h3>
        <p>
          Le nom de domaine est l'adresse de votre site (ex : monentreprise.sn). Privilégiez un nom court,
          mémorable et lié à votre activité. Pour l'hébergement, choisissez un serveur rapide et fiable.
        </p>

        <h3>Étape 3 : Concevoir le design</h3>
        <p>
          Le design doit refléter votre identité de marque : couleurs, typographie, logo. Un design
          professionnel et moderne inspire confiance aux visiteurs.
        </p>

        <h3>Étape 4 : Développer le site</h3>
        <p>
          C'est l'étape où le <strong>développeur web à Dakar</strong> intervient. Il code les pages, intègre
          les fonctionnalités et optimise les performances. Les technologies recommandées en 2026 :
          Next.js, React, Laravel, ou WordPress selon le budget.
        </p>

        <h3>Étape 5 : Optimiser le SEO</h3>
        <p>
          Pour que votre site apparaisse sur Google quand quelqu'un cherche « création site internet Sénégal »
          ou votre activité, le référencement est indispensable : balises meta, contenu optimisé, vitesse de
          chargement, version mobile.
        </p>

        <h3>Étape 6 : Mise en ligne et maintenance</h3>
        <p>
          Une fois le site développé et testé, il est mis en ligne. La maintenance régulière assure les mises
          à jour de sécurité et les évolutions.
        </p>

        <h2>Combien coûte la création d'un site web à Dakar ?</h2>
        <table>
          <thead>
            <tr><th>Type de site</th><th>Tarif estimé</th><th>Délai de livraison</th></tr>
          </thead>
          <tbody>
            <tr><td>Site vitrine (4-6 pages)</td><td>150 000 - 500 000 FCFA</td><td>2-3 semaines</td></tr>
            <tr><td>Site e-commerce</td><td>400 000 - 1 500 000 FCFA</td><td>4-6 semaines</td></tr>
            <tr><td>Plateforme sur mesure</td><td>À partir de 1 000 000 FCFA</td><td>6-12 semaines</td></tr>
          </tbody>
        </table>
        <p>
          Le prix dépend du nombre de pages, des fonctionnalités, du design et du niveau de personnalisation.
          Les tarifs détaillés sont disponibles dans l'article{" "}
          <Link href="/blog/prix-site-web-dakar/">prix création site web Dakar</Link>{" "}
          et via un <Link href="/devis/">devis gratuit sous 24h</Link>.
        </p>
        <p>
          Le paiement est flexible : <strong>Wave, Orange Money, virement bancaire ou espèces</strong>,
          avec possibilité de payer en plusieurs tranches (à la commande, à la maquette, à la livraison).
        </p>

        <h2>Où intervenir pour la création de votre site web à Dakar ?</h2>
        <p>
          Basé à Dakar, je me déplace ou travaille à distance selon votre préférence. J'accompagne des
          entreprises, commerces et institutions dans toute la région de Dakar — Plateau, Almadies,
          Sacré-Cœur, Ouakam, Yoff, Parcelles Assainies, Pikine, Guédiawaye, Rufisque, Diamniadio — ainsi
          que dans le reste du Sénégal (Thiès, Mbour, Saint-Louis, Kaolack, Ziguinchor…) et à
          l'international.
        </p>

        <h2>Pourquoi faire développer un site internet au Sénégal ?</h2>
        <p>
          <strong>Faire développer un site internet au Sénégal</strong> présente plusieurs avantages :
        </p>
        <ul>
          <li>Coûts compétitifs par rapport aux prestataires européens</li>
          <li>Compréhension du marché local et de la culture sénégalaise</li>
          <li>Disponibilité et proximité géographique — échanges possibles en français ou en wolof</li>
          <li>Intégration des moyens de paiement locaux (Wave, Orange Money, Free Money)</li>
          <li>Maîtrise des technologies de pointe (React, Next.js, Flutter)</li>
        </ul>

        <h2>Commander la création de votre site web à Dakar</h2>
        <p>
          Le plus rapide : un message sur{" "}
          <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer">
            WhatsApp (+221 77 378 48 14)
          </a>{" "}
          avec une description de votre projet. Je réponds sous 24h avec un premier avis et une
          fourchette de prix, puis nous planifions un appel ou une rencontre à Dakar si nécessaire.
        </p>
        <p>
          Vous pouvez aussi <Link href="/devis/">remplir le formulaire de devis</Link> — il prend
          deux minutes et me permet de vous répondre avec une estimation détaillée.
        </p>

        <h2>Questions fréquentes sur la création de site web à Dakar</h2>
        <h3>Combien de temps faut-il pour créer un site web à Dakar ?</h3>
        <p>
          Comptez 2 à 3 semaines pour un site vitrine, 4 à 6 semaines pour un e-commerce et 6 à 12
          semaines pour une plateforme sur mesure, à partir de la validation de la maquette et de la
          réception de vos contenus.
        </p>
        <h3>Peut-on payer par Wave ou Orange Money ?</h3>
        <p>
          Oui. J'accepte Wave, Orange Money, les virements bancaires et les espèces. Le paiement peut
          se faire en plusieurs tranches selon l'avancement du projet.
        </p>
        <h3>Le référencement sur Google est-il inclus ?</h3>
        <p>
          Oui, chaque site est livré avec les bases du SEO : balises optimisées, données structurées,
          sitemap, vitesse de chargement et configuration Google Search Console. Un accompagnement SEO
          avancé est possible en option.
        </p>
        <h3>Travaillez-vous avec des clients hors de Dakar ?</h3>
        <p>
          Oui, partout au Sénégal et à l'international, avec des points de suivi réguliers par
          téléphone ou en visio.
        </p>

        <h2>Conclusion</h2>
        <p>
          La <strong>création d'un site web à Dakar</strong> est un investissement rentable pour toute
          entreprise qui veut se développer. En suivant les étapes décrites dans ce guide et en choisissant
          le bon prestataire, vous obtiendrez un site professionnel, rapide et bien référencé sur Google.
        </p>
        <p>
          Prêt à créer votre site web ? Écrivez-moi sur{" "}
          <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer">WhatsApp</a>{" "}
          ou <Link href="/devis/">demandez un devis gratuit</Link> — réponse sous 24h.
        </p>
      </>
    ),
  },
  "site-ecommerce-dakar": {
    title: "Création de Site E-commerce à Dakar : Vendre en Ligne au Sénégal",
    subtitle:
      "Développeur site e-commerce à Dakar ou création de boutique en ligne au Sénégal ? Découvrez les solutions, les paiements mobiles (Wave, Orange Money) et les bonnes pratiques pour réussir votre e-commerce.",
    category: "E-commerce",
    date: "28 Août 2026",
    readingTime: "8 min de lecture",
    tags: ["développeur site e-commerce Dakar", "création boutique en ligne Dakar", "e-commerce Sénégal", "paiement en ligne", "Wave", "Orange Money"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Création de boutique en ligne à Dakar : un marché en pleine croissance</h2>
        <p>
          Le e-commerce explose au Sénégal. Avec plus de 10 millions d'utilisateurs d'internet et la démocratisation
          du mobile money (Wave, Orange Money, Free Money), <strong>créer une boutique en ligne à Dakar</strong>
          est une opportunité stratégique pour toute entreprise.
        </p>

        <h2>Pourquoi créer un site e-commerce à Dakar ?</h2>
        <ul>
          <li><strong>Vendre 24h/24</strong> : votre boutique est ouverte même quand vous dormez</li>
          <li><strong>Toucher toute la clientèle sénégalaise</strong> : Dakar, Thiès, Saint-Louis, et la diaspora</li>
          <li><strong>Réduire les coûts</strong> : pas de loyer commercial, moins de personnel</li>
          <li><strong>Accepter les paiements mobiles</strong> : Wave, Orange Money, Free Money, cartes bancaires</li>
          <li><strong>Suivre les ventes en temps réel</strong> : tableau de bord, statistiques, gestion des stocks</li>
        </ul>

        <h2>Les fonctionnalités essentielles d'un site e-commerce au Sénégal</h2>
        <h3>1. Catalogue de produits</h3>
        <p>
          Gestion des catégories, variantes (tailles, couleurs), photos multiples et descriptions optimisées SEO.
        </p>

        <h3>2. Panier et checkout</h3>
        <p>
          Un parcours d'achat fluide : ajout au panier, récapitulatif, saisie des informations de livraison et
          paiement en moins de 3 clics.
        </p>

        <h3>3. Paiements mobiles et bancaires</h3>
        <p>
          Au Sénégal, l'intégration des paiements mobiles est indispensable :
        </p>
        <ul>
          <li><strong>Wave</strong> : API de paiement, QR code, liens de paiement</li>
          <li><strong>Orange Money</strong> : paiement web, abonnements</li>
          <li><strong>Free Money</strong> : transfert et paiement en ligne</li>
          <li><strong>Cartes bancaires</strong> : Visa, Mastercard via Stripe ou Paystack</li>
          <li><strong>Paiement à la livraison</strong> : option appréciée par les clients sénégalais</li>
        </ul>

        <h3>4. Gestion des commandes et livraisons</h3>
        <p>
          Suivi des commandes, notifications par SMS ou email, intégration avec des services de livraison à
          Dakar (Yango Delivery, Paps, etc.).
        </p>

        <h3>5. SEO et marketing</h3>
        <p>
          Optimisation pour Google (fiches produits, balises, schema.org), newsletter, codes promo, programmes
          de fidélité.
        </p>

        <h2>Combien coûte la création d'un site e-commerce à Dakar ?</h2>
        <table>
          <thead>
            <tr><th>Type de boutique</th><th>Tarif estimé</th><th>Délai</th></tr>
          </thead>
          <tbody>
            <tr><td>Boutique simple (10-50 produits)</td><td>400 000 - 800 000 FCFA</td><td>3-5 semaines</td></tr>
            <tr><td>Boutique moyenne (50-200 produits)</td><td>800 000 - 1 500 000 FCFA</td><td>5-8 semaines</td></tr>
            <tr><td>Marketplace / sur mesure</td><td>À partir de 1 500 000 FCFA</td><td>8-16 semaines</td></tr>
          </tbody>
        </table>

        <h2>Technologies recommandées pour un e-commerce au Sénégal</h2>
        <ul>
          <li><strong>Next.js + Stripe/Paystack</strong> : solution moderne et performante</li>
          <li><strong>Shopify</strong> : rapide à déployer, idéal pour démarrer</li>
          <li><strong>WooCommerce (WordPress)</strong> : flexible et économique</li>
          <li><strong>Solution sur mesure</strong> : pour des besoins spécifiques (marketplace, abonnements)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          La <strong>création d'un site e-commerce à Dakar</strong> est un investissement stratégique pour
          toute entreprise qui veut profiter du boom du commerce en ligne au Sénégal. Avec l'intégration des
          paiements mobiles (Wave, Orange Money) et une bonne stratégie SEO, votre boutique en ligne peut
          générer des ventes dès le premier mois.
        </p>
        <p>
          Vous voulez créer votre boutique en ligne ? <Link href="/contact">Contactez-moi</Link> pour un devis
          détaillé.
        </p>
      </>
    ),
  },
  "prix-site-web-dakar": {
    title: "Prix Création Site Web à Dakar : Combien Ça Coûte en 2026 ?",
    subtitle:
      "Combien coûte la création d'un site web à Dakar ? Obtenez un devis pour votre site internet au Sénégal. Tarifs détaillés : site vitrine, e-commerce, application mobile, plateforme sur mesure.",
    category: "Tarifs & devis",
    date: "28 Août 2026",
    readingTime: "6 min de lecture",
    tags: ["prix création site web Dakar", "tarif site web Dakar", "coût site internet Sénégal", "devis site internet Sénégal", "budget site web Dakar"],
    image: "/image.jpg",
    content: (
      <>
        <h2>Prix création site web à Dakar : ce qu'il faut savoir</h2>
        <p>
          Le <strong>prix de la création d'un site web à Dakar</strong> varie considérablement selon le type
          de site, les fonctionnalités demandées et le niveau de personnalisation. Voici un guide complet des
          tarifs pratiqués au Sénégal en 2026.
        </p>

        <h2>Tarifs détaillés par type de site</h2>

        <h3>1. Site vitrine (150 000 - 500 000 FCFA)</h3>
        <p>
          Un site vitrine est idéal pour présenter votre entreprise en ligne. Il comprend généralement :
        </p>
        <ul>
          <li>4 à 6 pages (Accueil, Services, À propos, Contact, Blog)</li>
          <li>Design responsive et moderne</li>
          <li>Formulaire de contact</li>
          <li>Référencement SEO de base</li>
          <li>Mise en ligne et formation</li>
        </ul>

        <h3>2. Site e-commerce (400 000 - 1 500 000 FCFA)</h3>
        <p>
          Une boutique en ligne avec gestion des produits, panier, paiement (Wave, Orange Money, carte) et
          suivi des commandes. Le détail des tarifs par taille de catalogue est dans le guide{" "}
          <Link href="/blog/site-ecommerce-dakar/">site e-commerce à Dakar</Link>.
        </p>

        <h3>3. Application mobile (800 000 - 3 000 000 FCFA)</h3>
        <p>
          Application iOS et Android développée en Flutter ou React Native, avec backend et API. Le détail
          par type d'application est sur la page{" "}
          <Link href="/application-mobile-dakar/">création d'application mobile à Dakar</Link>.
        </p>

        <h3>4. Plateforme sur mesure (à partir de 1 000 000 FCFA)</h3>
        <p>
          Solution métier complexe : réservations, espaces membres, tableaux de bord, intégrations API.
        </p>

        <h2>Les facteurs qui influencent le prix</h2>
        <ul>
          <li><strong>Nombre de pages</strong> : plus de pages = plus de contenu à créer et optimiser</li>
          <li><strong>Design personnalisé</strong> : un design sur mesure coûte plus cher qu'un template</li>
          <li><strong>Fonctionnalités</strong> : paiement en ligne, espace membre, multilingue, etc.</li>
          <li><strong>SEO</strong> : l'optimisation pour Google ajoute du travail mais est indispensable</li>
          <li><strong>Maintenance</strong> : abonnement mensuel pour les mises à jour et le support</li>
          <li><strong>Urgence</strong> : un délai court peut impliquer un surcoût</li>
        </ul>

        <h2>Obtenir un devis pour votre site internet au Sénégal</h2>
        <p>
          Pour obtenir un <strong>devis précis pour votre site internet au Sénégal</strong>, il est recommandé
          de :
        </p>
        <ol>
          <li>Définir clairement vos besoins (type de site, pages, fonctionnalités)</li>
          <li>Préparer un cahier des charges si possible</li>
          <li>Demander des devis à plusieurs prestataires pour comparer</li>
          <li>Vérifier les réalisations et les références de chaque développeur</li>
          <li>Comparer les services inclus (SEO, maintenance, formation)</li>
        </ol>

        <h2>Faut-il choisir le moins cher ?</h2>
        <p>
          Attention : un site web à très bas prix peut vous coûter plus cher à long terme. Un site mal codé,
          lent ou non sécurisé nécessitera des corrections et une refonte. Privilégiez le rapport
          qualité-prix plutôt que le prix seul.
        </p>
        <blockquote>
          « Un bon site web est un investissement, pas une dépense. Il travaille pour vous 24h/24 et génère
          des clients pendant des années. »
        </blockquote>

        <h2>Questions fréquentes sur le prix d'un site web</h2>
        {priceFaqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}

        <h2>Conclusion</h2>
        <p>
          Le <strong>prix de création d'un site web à Dakar</strong> dépend de nombreux facteurs. En demandant
          un <strong>devis pour votre site internet au Sénégal</strong>, vous obtiendrez une estimation
          précise adaptée à votre projet. N'hésitez pas à comparer plusieurs offres pour trouver le meilleur
          rapport qualité-prix.
        </p>
        <p>
          Vous voulez un devis gratuit et sans engagement ? <Link href="/devis">Demandez votre devis ici</Link>.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/** Page commerciale pilier du cluster « création de site web à Dakar ». */
const PILLAR_SLUG = "creation-site-web-dakar";

/**
 * FAQ visible sur la page pilier. Le texte ci-dessous doit rester identique à
 * celui affiché dans le contenu de l'article (exigence Google pour FAQPage).
 */
const pillarFaqs = [
  {
    question: "Combien de temps faut-il pour créer un site web à Dakar ?",
    answer:
      "Comptez 2 à 3 semaines pour un site vitrine, 4 à 6 semaines pour un e-commerce et 6 à 12 semaines pour une plateforme sur mesure, à partir de la validation de la maquette et de la réception de vos contenus.",
  },
  {
    question: "Peut-on payer par Wave ou Orange Money ?",
    answer:
      "Oui. J'accepte Wave, Orange Money, les virements bancaires et les espèces. Le paiement peut se faire en plusieurs tranches selon l'avancement du projet.",
  },
  {
    question: "Le référencement sur Google est-il inclus ?",
    answer:
      "Oui, chaque site est livré avec les bases du SEO : balises optimisées, données structurées, sitemap, vitesse de chargement et configuration Google Search Console. Un accompagnement SEO avancé est possible en option.",
  },
  {
    question: "Travaillez-vous avec des clients hors de Dakar ?",
    answer:
      "Oui, partout au Sénégal et à l'international, avec des points de suivi réguliers par téléphone ou en visio.",
  },
];

/**
 * Articles liés, classés par nombre de mots-clés partagés.
 * Les catégories étant désormais uniques (une intention par page), c'est le
 * recouvrement de tags qui mesure le mieux la proximité réelle.
 * Objectif SEO : aucune page orpheline, chaque article reçoit des liens internes.
 */
function relatedArticles(slug: string, limit = 3) {
  const currentTags = new Set(articles[slug].tags.map((t) => t.toLowerCase()));
  return Object.entries(articles)
    .filter(([s]) => s !== slug)
    .map(([s, a]) => ({
      slug: s,
      title: a.title,
      category: a.category,
      readingTime: a.readingTime,
      shared: a.tags.filter((t) => currentTags.has(t.toLowerCase())).length,
    }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  const publishedTime = frenchDateToIso(article.date);
  return pageMetadata({
    title: `${article.title} - Samba SY`,
    description: article.subtitle,
    path: `/blog/${slug}/`,
    type: "article",
    keywords: article.tags,
    publishedTime,
    modifiedTime: publishedTime,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return notFound();

  const datePublished = frenchDateToIso(article.date);

  return (
    <article className="min-h-screen">
      <JsonLd
        data={[
          articleSchema({
            slug,
            title: article.title,
            description: article.subtitle,
            image: article.image,
            datePublished,
            tags: article.tags,
            section: article.category,
          }),
          breadcrumbSchema([
            { name: "Blog", path: "/blog/" },
            { name: article.title, path: `/blog/${slug}/` },
          ]),
          ...(slug === PILLAR_SLUG ? [faqSchema(pillarFaqs)] : []),
          ...(slug === PRICE_SLUG ? [faqSchema(priceFaqs)] : []),
        ]}
      />
      {/* Header */}
      <header className="relative overflow-hidden border-b border-border-color">
        <div
          className="t-diamond-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_85%_10%,black,transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-[920px] mx-auto px-5 pt-14 pb-14 lg:pt-20">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-text-muted mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-accent">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-secondary line-clamp-1">{article.title}</span>
          </nav>

          <p className="t-label"><b>{article.category}</b> {article.readingTime}</p>

          <h1 className="t-display text-4xl md:text-5xl lg:text-[3.6rem] !leading-[1.08] mt-6">{article.title}</h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">{article.subtitle}</p>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#8f8f8f]">
              <Image src="/portrait.webp" alt="Samba SY" width={48} height={48} className="object-cover object-top w-full h-full" />
            </div>
            <div>
              <p className="font-bold">Samba SY</p>
              <p className="text-sm text-text-muted">
                Développeur web & Data Scientist à Dakar · <time dateTime={datePublished}>{article.date}</time>
              </p>
            </div>
          </div>
        </div>
      </header>

      {article.image && (
        <div className="max-w-[1100px] mx-auto px-5 -mb-4 mt-12">
          <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden border border-border-color">
            <BlogCover slug={slug} title={article.title} category={article.category} />
            <div className="t-weave absolute bottom-0 left-0 right-0 z-10" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[760px] mx-auto px-5">
          <div className="prose prose-invert max-w-none article-body text-[1.06rem]">
            {article.content}
          </div>

          <div className="flex flex-wrap gap-2 mt-14 pt-8 border-t border-border-color">
            {article.tags.map((tag) => (
              <span key={tag} className="project-tech-span">{tag}</span>
            ))}
          </div>
        </div>

        <section className="max-w-[1100px] mx-auto px-5 mt-20">
          <p className="t-label"><b>À lire</b> ensuite</p>
          <h2 className="t-display text-3xl md:text-4xl mt-5 mb-10">
            Articles <em>liés.</em>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedArticles(slug).map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}/`}
                className="group block bg-dark-card border border-border-color rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--terracotta)]"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{related.category}</span>
                <h3 className="font-display text-xl mt-3 leading-snug">{related.title}</h3>
                <span className="text-xs text-text-muted mt-4 flex items-center justify-between">
                  {related.readingTime}
                  <i className="fas fa-arrow-right text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="max-w-[760px]">
            {/*
              Remontée vers la page pilier avec le mot-clé cible en texte d'ancre.
              C'est ce qui concentre le signal du cluster sur une seule page au
              lieu de le diluer entre six articles concurrents.
            */}
            {slug !== PILLAR_SLUG && (
              <p className="mt-8 text-text-secondary">
                Pour aller plus loin, consultez le guide de référence :{" "}
                <Link href={`/blog/${PILLAR_SLUG}/`} className="text-accent font-semibold underline underline-offset-4">
                  création de site web à Dakar et au Sénégal
                </Link>
                .
              </p>
            )}

            <p className="mt-4 text-text-secondary">
              Un projet en cours ? Découvrez{" "}
              <Link href="/services/" className="text-accent font-semibold underline underline-offset-4">
                mes services
              </Link>{" "}
              et{" "}
              <Link href="/projects/" className="text-accent font-semibold underline underline-offset-4">
                mes réalisations
              </Link>
              , ou{" "}
              <Link href="/devis/" className="text-accent font-semibold underline underline-offset-4">
                demandez un devis gratuit sous 24h
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      <section className="contact-cta">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2>Vous souhaitez en savoir plus ?</h2>
          <p>Contactez-moi pour discuter de votre projet et découvrir comment ces technologies peuvent transformer votre activité.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Prendre contact <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
