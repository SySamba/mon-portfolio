import ProjectsContent from "@/components/ProjectsContent";
import SEOLocalSection from "@/components/SEOLocalSection";
import JsonLd from "@/components/JsonLd";
import {
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  breadcrumbSchema,
} from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - Samba SY | Développement Web, IA & Data Science au Sénégal",
  description:
    "Portfolio de Samba SY au Sénégal : projets de développement web, applications mobiles, data science, intelligence artificielle, Power BI et cloud. Développeur full stack à Dakar.",
  keywords: [
    "développeur web Sénégal",
    "développeur full stack Sénégal",
    "création site web Sénégal",
    "création application mobile Sénégal",
    "Data Scientist Sénégal",
    "Data Analyst Sénégal",
    "intelligence artificielle Sénégal",
    "consultant Power BI Sénégal",
    "projets Data Science Sénégal",
    "Samba SY",
  ],
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "Projets - Samba SY | Développement Web, IA & Data Science au Sénégal",
    description:
      "Portfolio de Samba SY au Sénégal : projets de développement web, applications mobiles, data science, intelligence artificielle, Power BI et cloud. Développeur full stack à Dakar.",
    url: "/projects/",
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: "Projets réalisés par Samba SY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Samba SY | Développement Web, IA & Data Science au Sénégal",
    description:
      "Portfolio de Samba SY au Sénégal : projets de développement web, applications mobiles, data science, intelligence artificielle, Power BI et cloud. Développeur full stack à Dakar.",
    images: [OG_IMAGE],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Projets", path: "/projects/" }])} />
      <ProjectsContent />
      <SEOLocalSection page="projects" />
    </>
  );
}
