import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCover from "@/components/BlogCover";

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
    image: "/3.png",
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
    title: "Développeur Web au Sénégal : Pourquoi Choisir un Expert Local ?",
    subtitle:
      "Vous cherchez un développeur web au Sénégal ? Découvrez les avantages de faire appel à un développeur full stack basé à Dakar pour la création de sites web et applications.",
    category: "Tech",
    date: "29 Juillet 2026",
    readingTime: "7 min de lecture",
    tags: ["développeur web Sénégal", "développeur web Dakar", "création site web", "développeur full stack", "Next.js", "React"],
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
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} - Samba SY`,
    description: article.subtitle,
    keywords: article.tags,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: `${article.title} - Samba SY`,
      description: article.subtitle,
      url: `/blog/${slug}/`,
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - Samba SY`,
      description: article.subtitle,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return notFound();

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="py-20 bg-dark-surface">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-accent">Accueil</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-text-secondary">{article.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full text-sm bg-primary text-white">{article.category}</span>
            <span className="text-sm text-text-muted flex items-center gap-2">
              <i className="fas fa-clock"></i> {article.readingTime}
            </span>
            <span className="text-sm text-text-muted flex items-center gap-2">
              <i className="fas fa-calendar"></i> {article.date}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl text-text-secondary leading-relaxed">{article.subtitle}</p>

          {article.image && (
            <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden border border-border-color mt-8">
              <BlogCover slug={slug} title={article.title} category={article.category} />
            </div>
          )}

          <div className="flex items-center gap-4 mt-8">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
              <Image src="/profil.png" alt="Samba SY" width={56} height={56} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="font-semibold">Samba SY</h3>
              <p className="text-sm text-text-muted">Expert en Data Science & IA</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="prose prose-invert max-w-none article-body">
            {article.content}
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border-color">
            {article.tags.map((tag) => (
              <span key={tag} className="project-tech-span">{tag}</span>
            ))}
          </div>

          <div className="mt-12 bg-dark-card border border-border-color rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Vous souhaitez en savoir plus ?</h3>
            <p className="text-text-secondary mb-6">
              Contactez-moi pour discuter de vos projets et découvrir comment ces technologies peuvent transformer votre activité.
            </p>
            <Link href="/contact" className="btn-primary">
              Prendre Contact
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
