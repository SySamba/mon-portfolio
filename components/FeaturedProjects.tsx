"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "@/components/ProjectModal";
import ProjectCover from "@/components/ProjectCover";
import ImageLightbox from "@/components/ImageLightbox";
import { projects as allProjects } from "@/components/ProjectsContent";

const featuredIds = [
  "fake-news",
  "diabetes",
  "covid",
  "porokhane",
  "service-mairie",
  "magueye-boye",
];

const projects = allProjects
  .filter((p) => featuredIds.includes(p.id))
  .map((p) => ({
    ...p,
    category: p.category === "web" || p.category === "e-commerce" ? "development" : "data-science",
    icon: "fa-eye",
  }))
  .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

const developmentProjects = projects.filter((p) => p.category === "development");
const dataScienceProjects = projects.filter((p) => p.category === "data-science");

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpen = (project: (typeof projects)[0]) => {
    if (project.id === "air-traffic") {
      setLightboxIndex(0);
      setLightboxOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-surface">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="section-title">Projets Phares</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.category}`}>
              <div className="project-image">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                ) : (
                  <ProjectCover id={project.id} title={project.title} />
                )}
                <div className="project-overlay">
                  <button
                    onClick={() => handleOpen(project)}
                    className="project-link"
                    aria-label={project.id === "air-traffic" ? "Voir les images du projet" : "Voir les détails du projet"}
                  >
                    <i className={`fas ${project.icon}`}></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {project.gallery && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                        className="relative h-12 w-full rounded-lg overflow-hidden border border-border-color hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={img}
                          alt={`Aperçu tableau de bord ${idx + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-primary">
            Voir Tous les Projets
          </Link>
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <ImageLightbox
        images={dataScienceProjects.find((p) => p.id === "air-traffic")?.gallery || []}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
