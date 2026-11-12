export const SITE_URL = "https://sambasy.com";
export const SITE_NAME = "Samba SY";
export const OG_IMAGE = "/og-image.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const CONTACT = {
  telephone: "+221773784814",
  telephoneDisplay: "+221 77 378 48 14",
  email: "sambasy837@gmail.com",
  city: "Dakar",
  country: "SN",
};

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/samba-sy/",
  "https://github.com/SySamba/",
];

const abs = (path: string) => `${SITE_URL}${path}`;

export const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Samba SY",
  url: SITE_URL,
  image: abs("/image.jpg"),
  email: `mailto:${CONTACT.email}`,
  telephone: CONTACT.telephone,
  jobTitle: "Data Scientist, Data Analyst & Développeur Web Full Stack",
  description:
    "Data Scientist, Data Analyst, consultant SEO et développeur web full stack basé à Dakar, Sénégal. Création de sites web, applications mobiles, tableaux de bord Power BI et solutions d'intelligence artificielle.",
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressCountry: CONTACT.country,
  },
  knowsLanguage: ["fr", "en"],
  knowsAbout: [
    "Data Science",
    "Data Analyse",
    "Machine Learning",
    "Intelligence Artificielle",
    "Power BI",
    "Business Intelligence",
    "Développement web full stack",
    "React",
    "Next.js",
    "Laravel",
    "Flutter",
    "AWS Cloud",
    "DevOps",
    "Référencement SEO",
  ],
  sameAs: SOCIAL_PROFILES,
};

export const localBusinessSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "Samba SY - Développeur Web & Data Scientist Dakar",
  image: abs("/og-image.jpg"),
  logo: abs("/logo.png"),
  url: SITE_URL,
  telephone: CONTACT.telephone,
  email: CONTACT.email,
  priceRange: "$$",
  currenciesAccepted: "XOF, EUR, USD",
  paymentAccepted: "Virement bancaire, Wave, Orange Money, PayPal",
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressRegion: "Dakar",
    addressCountry: CONTACT.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 14.7167, longitude: -17.4677 },
  areaServed: [
    { "@type": "Country", name: "Sénégal" },
    { "@type": "City", name: "Dakar" },
    { "@type": "City", name: "Thiès" },
    { "@type": "City", name: "Saint-Louis" },
    { "@type": "Place", name: "Afrique de l'Ouest" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  founder: { "@id": `${SITE_URL}/#person` },
  description:
    "Développeur web full stack, Data Scientist, Data Analyst et consultant Power BI / SEO au Sénégal. Création de sites web, applications mobiles, logiciels métiers et solutions IA à Dakar.",
  sameAs: SOCIAL_PROFILES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Samba SY",
    itemListElement: [
      "Création de site web vitrine",
      "Création de site e-commerce",
      "Développement d'application mobile",
      "Développement de logiciel métier",
      "Tableaux de bord Power BI & Business Intelligence",
      "Data Science & Intelligence Artificielle",
      "Référencement SEO",
      "Cloud AWS & DevOps",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, areaServed: "Sénégal" },
    })),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr-FR",
  description:
    "Portfolio de Samba SY : Data Scientist, Data Analyst, consultant SEO et développeur web full stack à Dakar, Sénégal.",
  publisher: { "@id": `${SITE_URL}/#person` },
};

/** Graphe global injecté sur toutes les pages (identité de l'entité pour Google). */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, localBusinessSchema, websiteSchema],
};

const FRENCH_MONTHS: Record<string, string> = {
  janvier: "01",
  février: "02",
  fevrier: "02",
  mars: "03",
  avril: "04",
  mai: "05",
  juin: "06",
  juillet: "07",
  août: "08",
  aout: "08",
  septembre: "09",
  octobre: "10",
  novembre: "11",
  décembre: "12",
  decembre: "12",
};

/** Convertit une date affichée en français ("28 Août 2026") en date ISO 8601 pour schema.org. */
export function frenchDateToIso(date: string): string {
  const [day, month, year] = date.trim().split(/\s+/);
  const mm = FRENCH_MONTHS[month?.toLowerCase()];
  if (!mm || !year) return date;
  return `${year}-${mm}-${day.padStart(2, "0")}`;
}

/** Fil d'Ariane structuré. `trail` = [{ name, path }], la racine est ajoutée automatiquement. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(article: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  tags?: string[];
  section?: string;
}) {
  const url = abs(`/blog/${article.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: article.title,
    description: article.description,
    image: article.image.startsWith("http") ? article.image : abs(article.image),
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "fr-FR",
    keywords: article.tags?.join(", "),
    articleSection: article.section,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

/** Métadonnées Open Graph / Twitter cohérentes, à réutiliser dans chaque page. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const image = opts.image ?? OG_IMAGE;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      siteName: SITE_NAME,
      type: opts.type ?? "website",
      locale: "fr_FR",
      images: [
        {
          url: image,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: opts.title,
        },
      ],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
