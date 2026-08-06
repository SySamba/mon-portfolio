import React from "react";

interface SEOLocalSectionProps {
  page:
    | "home"
    | "services"
    | "about"
    | "projects"
    | "contact"
    | "devis"
    | "blog";
}

export default function SEOLocalSection({ page }: SEOLocalSectionProps) {
  switch (page) {
    case "home":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Développeur Web & Data Scientist à Dakar, Sénégal
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-text-secondary leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Pourquoi choisir un développeur web basé à Dakar ?
                </h3>
                <p>
                  Basé à Dakar, je travaille avec des entreprises au Sénégal et en Afrique de l’Ouest. Que vous soyez à Dakar, Thiès, Saint-Louis ou ailleurs, je propose des solutions web, IA et data adaptées au marché local et à vos contraintes budgétaires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Expert en création de sites web et applications
                </h3>
                <p>
                  Spécialisé en React, Next.js, Laravel et Flutter, je conçois des sites vitrines, des boutiques en ligne, des applications web et mobiles pour booster votre présence en ligne et attirer de nouveaux clients au Sénégal.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Votre avis compte
              </h3>
              <p className="text-text-secondary mb-4 max-w-2xl mx-auto">
                Vous avez collaboré avec moi ? Laissez un avis Google pour aider d’autres entreprises sénégalaises à trouver un développeur web de confiance à Dakar.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <i className="fab fa-google" />
                Laisser un avis Google
              </a>
            </div>
          </div>
        </section>
      );
    case "services":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Services de développement web et IA à Dakar
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-text-secondary leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Création de site web sur mesure
                </h3>
                <p>
                  Je réalise des sites web performants et référencés pour les entreprises sénégalaises : vitrines, e-commerce, plateformes métiers et dashboards. Chaque projet est optimisé pour le SEO local et l’expérience mobile.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Data Science et Business Intelligence
                </h3>
                <p>
                  Tableaux de bord Power BI, modèles de machine learning et analyse de données pour accompagner la prise de décision des entreprises au Sénégal et en Afrique francophone.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    case "about":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Parcours d’un développeur web passionné au Sénégal
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Diplômé en Master IA & Big Data et certifié AWS, je mets mon expérience de développeur full stack au service des entreprises du Sénégal et d’Afrique francophone. Mon objectif : transformer vos idées en solutions digitales concrètes, accessibles et évolutives.
            </p>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Une expertise technique au service des entreprises dakaroises
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Du développement web au cloud, en passant par la data et l’IA, j’accompagne les startups, PME et institutions dans leur transformation digitale à Dakar et au-delà.
            </p>
          </div>
        </section>
      );
    case "projects":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Projets récents : développement web, IA et Data au Sénégal
            </h2>
            <p className="text-text-secondary leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Découvrez des applications web, des systèmes de gestion et des solutions IA développées pour des clients au Sénégal. Chaque projet est pensé pour répondre à un besoin local avec une expérience utilisateur optimale et un code maintenable.
            </p>
            <h3 className="text-xl font-semibold text-text-primary text-center mb-3">
              Applications web et mobiles conçues pour le marché local
            </h3>
            <p className="text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
              De la gestion académique au e-commerce, en passant par les tableaux de bord et les outils de suivi, je livre des solutions digitales adaptées aux réalités du marché sénégalais.
            </p>
          </div>
        </section>
      );
    case "contact":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contactez un développeur web à Dakar
            </h2>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Disponible pour vos projets au Sénégal
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Vous avez un projet de site web, d’application mobile ou de data ? Contactez-moi pour un échange gratuit. Basé à Dakar, je réponds rapidement aux demandes au Sénégal et en Afrique de l’Ouest.
            </p>
          </div>
        </section>
      );
    case "devis":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Devis gratuit pour votre projet web ou IA
            </h2>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Tarifs adaptés aux entreprises sénégalaises
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Obtenez un devis personnalisé pour la création de votre site web, application ou solution data. Je propose des accompagnements flexibles pour les startups, PME et institutions au Sénégal.
            </p>
          </div>
        </section>
      );
    case "blog":
      return (
        <section className="py-16 bg-dark-surface border-t border-border-color">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Blog IA, Data Science et Développement Web
            </h2>
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Ressources pour les professionnels tech au Sénégal
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Articles et guides pratiques sur l’intelligence artificielle, le cloud, le développement web et la data au service des entreprises africaines. N’hésitez pas à consulter mes articles ou à me proposer des sujets.
            </p>
          </div>
        </section>
      );
    default:
      return null;
  }
}
