import ProjectsContent from "@/components/ProjectsContent";
import SEOLocalSection from "@/components/SEOLocalSection";

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
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projets - Samba SY | Développement Web, IA & Data Science au Sénégal",
    description:
      "Portfolio de Samba SY au Sénégal : projets de développement web, applications mobiles, data science, intelligence artificielle, Power BI et cloud. Développeur full stack à Dakar.",
    url: "/projects",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Samba SY | Développement Web, IA & Data Science au Sénégal",
    description:
      "Portfolio de Samba SY au Sénégal : projets de développement web, applications mobiles, data science, intelligence artificielle, Power BI et cloud. Développeur full stack à Dakar.",
    images: ["/profil.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsContent />
      <SEOLocalSection page="projects" />
    </>
  );
}
