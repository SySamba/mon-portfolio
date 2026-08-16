import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://sambasy.com";

const routes = [
  "",
  "/projects/",
  "/about/",
  "/services/",
  "/blog/",
  "/contact/",
  "/devis/",
  "/blog/ia-afrique/",
  "/blog/power-bi-dashboards/",
  "/blog/fake-news-nlp/",
  "/blog/aws-migration-guide/",
  "/blog/developpeur-web-senegal/",
  "/blog/data-scientist-senegal/",
  "/blog/consultant-power-bi-senegal/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
