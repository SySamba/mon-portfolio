import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Date de dernière mise à jour du contenu des pages fixes.
 * À bumper manuellement lors d'une vraie mise à jour de contenu : un `new Date()`
 * ferait croire à Google que toutes les pages changent à chaque build, ce qui
 * décrédibilise le sitemap et fait ignorer les <lastmod>.
 */
const LAST_CONTENT_UPDATE = "2026-10-27";

type Route = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: Route[] = [
  { path: "/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 1 },
  { path: "/services/", lastModified: "2026-11-08", changeFrequency: "monthly", priority: 0.9 },

  // Pages de service ciblées (une intention commerciale par page)
  { path: "/application-mobile-dakar/", lastModified: "2026-11-08", changeFrequency: "monthly", priority: 0.9 },
  { path: "/logiciel-gestion-stock-senegal/", lastModified: "2026-11-08", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logiciel-gestion-scolaire-senegal/", lastModified: "2026-11-08", changeFrequency: "monthly", priority: 0.8 },
  { path: "/site-web-association-senegal/", lastModified: "2026-11-08", changeFrequency: "monthly", priority: 0.8 },
  { path: "/devis/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog/", lastModified: "2026-10-27", changeFrequency: "weekly", priority: 0.7 },

  // Articles : lastModified = dernière vraie modification (refonte + enrichissements d'octobre)
  { path: "/blog/prix-site-web-dakar/", lastModified: "2026-11-08", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog/creation-site-web-dakar/", lastModified: "2026-10-09", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog/agence-web-dakar/", lastModified: "2026-11-04", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog/site-ecommerce-dakar/", lastModified: "2026-10-27", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog/developpeur-freelance-dakar/", lastModified: "2026-10-27", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog/developpeur-web-senegal/", lastModified: "2026-10-27", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog/data-scientist-senegal/", lastModified: "2026-10-27", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog/consultant-power-bi-senegal/", lastModified: "2026-10-27", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog/ia-afrique/", lastModified: "2024-01-15", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/power-bi-dashboards/", lastModified: "2024-01-12", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/aws-migration-guide/", lastModified: "2024-01-08", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/fake-news-nlp/", lastModified: "2024-01-05", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
