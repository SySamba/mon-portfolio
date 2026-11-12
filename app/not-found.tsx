import Link from "next/link";
import type { Metadata } from "next";

// L'export statique génère aussi /404/ et /_not-found/ qui répondent 200 :
// sans noindex, Google les traiterait comme des soft 404.
export const metadata: Metadata = {
  title: "Page introuvable - Samba SY",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[75vh] flex items-center">
      <div className="t-diamond-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="relative max-w-[1240px] mx-auto px-5 py-24 w-full">
        <p className="t-label"><b>404</b> Page introuvable</p>
        <h1 className="t-display text-6xl md:text-8xl mt-6">
          Cette page <em>s&apos;est perdue.</em>
        </h1>
        <p className="text-text-secondary mt-6 text-lg max-w-md">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
          <Link href="/projects" className="btn-secondary">
            Voir mes projets
          </Link>
        </div>
      </div>
    </section>
  );
}
