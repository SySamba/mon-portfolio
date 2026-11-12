import BlogContent from "@/components/BlogContent";
import SEOLocalSection from "@/components/SEOLocalSection";

import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog Samba SY - Articles IA Data Science | Insights Tech Dakar Sénégal",
  description:
    "Blog de Samba SY : articles experts sur l'Intelligence Artificielle, Data Science, Machine Learning, Cloud AWS et DevOps. Insights tech pour l'Afrique et conseils pratiques IA.",
  path: "/blog/",
  keywords: [
    "blog data science Sénégal",
    "blog intelligence artificielle Afrique",
    "prix site web Dakar",
    "agence web Dakar",
    "développeur freelance Dakar",
  ],
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog/#blog`,
  url: `${SITE_URL}/blog/`,
  name: "Blog Samba SY - Data Science, IA, SEO & Développement Web",
  description:
    "Articles et guides pratiques sur l'intelligence artificielle, la data science, le cloud, le développement web et le SEO au Sénégal.",
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema([{ name: "Blog", path: "/blog/" }])]} />
      <BlogContent />
      <SEOLocalSection page="blog" />
    </>
  );
}
