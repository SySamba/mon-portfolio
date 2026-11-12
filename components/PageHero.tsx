import type { ReactNode } from "react";

interface PageHeroProps {
  /** Petite étiquette au-dessus du titre, ex. « Services ». */
  eyebrow?: string;
  /** Titre (H1). Un <em> y est rendu en italique terracotta. */
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

/**
 * En-tête éditorial des pages intérieures (identité « Teranga moderne ») :
 * pas de photo de stock, typographie forte, motif de losanges et bande tissée.
 */
export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-color">
      <div
        className="t-diamond-bg absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_85%_20%,black,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="t-sun w-[420px] aspect-square -right-32 -top-48 opacity-90 hidden md:block" aria-hidden="true" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 pt-16 pb-16 lg:pt-24 lg:pb-20">
        {eyebrow && (
          <p className="t-label animate-fade-in-up">
            <b>Samba SY</b> {eyebrow}
          </p>
        )}
        <h1 className="t-display text-5xl sm:text-6xl lg:text-[5.2rem] mt-6 max-w-4xl animate-fade-in-up delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed animate-fade-in-up delay-2">
            {subtitle}
          </p>
        )}
        {children && <div className="animate-fade-in-up delay-3">{children}</div>}
      </div>
    </section>
  );
}
