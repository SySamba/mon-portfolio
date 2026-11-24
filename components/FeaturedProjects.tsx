"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "@/components/ProjectModal";
import ProjectCover from "@/components/ProjectCover";
import ImageLightbox from "@/components/ImageLightbox";
import { projects as allProjects } from "@/components/ProjectsContent";

// Sélection mixte (web + IA/Data), en alternance pour varier la grille.
// Mon Trajet JOJ passe en premier : projet phare de l'année (JOJ Dakar 2026).
const featuredIds = [
  "montrajetjoj",
  "fake-news",
  "mairie-khombole",
  "air-traffic",
  "vending-senegal",
  "carte-electorale",
];

const isWeb = (category: string) => category.split(" ").some((c) => c === "web" || c === "e-commerce");

const projects = allProjects
  .filter((p) => featuredIds.includes(p.id))
  .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpen = (project: (typeof projects)[0]) => {
    if (project.id === "air-traffic" && project.gallery?.length) {
      setLightboxOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="t-label"><b>03</b> Réalisations</p>
            <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6">
              Projets <em>phares.</em>
            </h2>
          </div>
          <Link href="/projects" className="btn-secondary self-start md:self-auto">
            Tous les projets <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className={`group flex flex-col bg-dark-card border rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[color-mix(in_srgb,var(--terracotta)_50%,transparent)] ${
                  project.id === "montrajetjoj"
                    ? "border-[color-mix(in_srgb,var(--terracotta)_45%,transparent)]"
                    : "border-border-color"
                }`}
              >
                {/* Capture dans un cadre de navigateur */}
                <button
                  onClick={() => handleOpen(project)}
                  className="block text-left p-3 pb-0"
                  aria-label={`Voir les détails du projet ${project.title}`}
                >
                  {/* Capture dans une maquette laptop sur bureau */}
                  <div className="relative aspect-[16/11] rounded-[14px] overflow-hidden border border-border-color">
                    {project.image ? (
                      <Image
                        src={`/projects/mocks/${project.id}.webp`}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      />
                    ) : (
                      <ProjectCover id={project.id} title={project.title} />
                    )}
                    {project.id === "montrajetjoj" && (
                      <span className="absolute top-3 left-3 z-10 text-[10px] font-extrabold uppercase tracking-[0.14em] px-2.5 py-1.5 rounded-full bg-[var(--terracotta)] text-[#fff8ef] shadow-[var(--shadow-md)]">
                        Projet phare · JOJ Dakar 2026
                      </span>
                    )}
                  </div>
                </button>

                {/* Texte : hauteurs alignées d'une carte à l'autre */}
                <div className="flex flex-col flex-1 p-6 pt-5 border-t border-border-color">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    {isWeb(project.category) ? "Développement web" : project.category.includes("dashboard") ? "Data & BI" : project.category === "data" ? "Data" : "Intelligence artificielle"}
                  </p>
                  {/* Titre court : « Vending Sénégal - Distributeurs… » → « Vending Sénégal » */}
                  <h3 className="font-display text-[1.45rem] leading-snug font-normal mt-2 line-clamp-2 sm:min-h-[2lh]">
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border-color text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 sm:h-14 flex items-end justify-between">
                    <button
                      onClick={() => handleOpen(project)}
                      className="text-sm font-bold text-text-primary inline-flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      Voir le projet
                      <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="t-arrow !w-9 !h-9 text-text-secondary hover:!bg-[var(--terracotta)] hover:!border-[var(--terracotta)] hover:text-[#fff8ef] transition-colors"
                        aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
                      >
                        <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <ImageLightbox
        images={projects.find((p) => p.id === "air-traffic")?.gallery || []}
        isOpen={lightboxOpen}
        initialIndex={0}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
