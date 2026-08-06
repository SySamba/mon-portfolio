"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";

interface ProjectDetail {
  title: string;
  description: string;
  fullDescription?: string;
  image?: string;
  category?: string;
  badge?: string;
  year?: string;
  client?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  architecture?: string[];
  features?: string[];
  link?: string;
  articleLink?: string;
  gallery?: string[];
  tech?: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-dark-card border border-border-color rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        {project.image && (
          <div
            className="relative h-48 md:h-64 w-full overflow-hidden rounded-t-2xl cursor-pointer group"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        <div className="p-6 md:p-8">
          {!project.image && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-surface text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <i className="fas fa-times"></i>
            </button>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                {project.badge}
              </span>
            )}
            {project.year && <span className="text-sm text-text-muted">{project.year}</span>}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-12">{project.title}</h2>

          {(project.client || project.role) && (
            <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm text-text-secondary">
              {project.client && (
                <div className="flex items-center gap-2">
                  <i className="fas fa-building text-accent"></i>
                  <span><strong className="text-text-primary">Client :</strong> {project.client}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2">
                  <i className="fas fa-user-tie text-accent"></i>
                  <span><strong className="text-text-primary">Rôle :</strong> {project.role}</span>
                </div>
              )}
            </div>
          )}

          <p className="text-text-secondary leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          {project.challenge && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Problématique</h3>
              <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <p className="text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Fonctionnalités clés</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-text-secondary">
                    <i className="fas fa-check text-accent text-sm"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Architecture & Technologies</h3>
              <ul className="space-y-2">
                {project.architecture.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary">
                    <i className="fas fa-layer-group text-accent text-sm mt-1"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <div className="mb-6 bg-dark-surface rounded-xl p-5 border border-border-color">
              <h3 className="text-lg font-semibold mb-3">Résultats</h3>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-2 text-text-secondary">
                    <i className="fas fa-chart-line text-accent text-sm mt-1"></i>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-span">{t}</span>
                ))}
              </div>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Aperçus</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setLightboxIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="relative rounded-lg h-36 w-full border border-border-color overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    <Image
                      src={img}
                      alt={`Aperçu ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-4 border-t border-border-color">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fas fa-external-link-alt"></i> Voir le projet
              </a>
            )}
            {project.articleLink && (
              <Link href={project.articleLink} className="btn-secondary">
                <i className="fas fa-book-open"></i> Lire l'article
              </Link>
            )}
            {!project.link && !project.articleLink && (
              <button onClick={onClose} className="btn-secondary">
                Fermer
              </button>
            )}
          </div>
        </div>
      </div>

      <ImageLightbox
        images={project.gallery?.length ? project.gallery : project.image ? [project.image] : []}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
