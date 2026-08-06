import BlogContent from "@/components/BlogContent";

export const metadata = {
  title: "Blog Samba SY - Articles IA Data Science | Insights Tech Dakar Sénégal",
  description:
    "Blog de Samba SY : articles experts sur l'Intelligence Artificielle, Data Science, Machine Learning, Cloud AWS et DevOps. Insights tech pour l'Afrique et conseils pratiques IA.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Samba SY - Articles IA Data Science | Insights Tech Dakar Sénégal",
    description:
      "Blog de Samba SY : articles experts sur l'Intelligence Artificielle, Data Science, Machine Learning, Cloud AWS et DevOps. Insights tech pour l'Afrique et conseils pratiques IA.",
    url: "/blog",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Samba SY - Articles IA Data Science | Insights Tech Dakar Sénégal",
    description:
      "Blog de Samba SY : articles experts sur l'Intelligence Artificielle, Data Science, Machine Learning, Cloud AWS et DevOps. Insights tech pour l'Afrique et conseils pratiques IA.",
    images: ["/profil.png"],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
