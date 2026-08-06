import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, image, children }: PageHeroProps) {
  return (
    <section className="page-hero relative overflow-hidden py-24 lg:py-32">
      <Image
        src={image}
        alt=""
        fill
        priority
        aria-hidden
        sizes="100vw"
        className="page-hero-img object-cover"
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-grid" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-5 page-hero-title">{title}</h1>
        {subtitle && (
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
