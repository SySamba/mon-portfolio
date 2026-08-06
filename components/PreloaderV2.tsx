'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

/**
 * Preloader — écran de chargement premium affiché uniquement
 * lors de la toute première visite de la session (sessionStorage).
 *
 * Usage (app/layout.tsx) :
 *
 *   <Preloader>{children}</Preloader>
 *
 * Le composant enveloppe le contenu de l'app : le contenu réel est
 * rendu immédiatement (bon pour le SEO, aucun blocage de rendu),
 * le voile de chargement est simplement superposé par-dessus puis
 * disparaît en fondu.
 */

const ROLES = [
  'Développeur Full Stack',
  'Data Scientist',
  'Data Analyst',
  'Mobile Developer',
] as const;

const TOTAL_DURATION = 6000; // ms — durée totale du preloader
const ROLE_INTERVAL = 1200; // ms — vitesse de rotation des intitulés de poste
const STORAGE_KEY = 'sambasy:preloader-shown';

interface PreloaderProps {
  children: React.ReactNode;
  /** Chemin du logo, à adapter selon votre projet (SVG recommandé). */
  logoSrc?: string;
}

export default function Preloader({ children, logoSrc = '/logo.svg' }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const rafId = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip silencieux si déjà affiché durant cette session (SPA nav incluse).
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      // sessionStorage indisponible (SSR strict, navigation privée bloquée…) : on affiche quand même.
    }

    if (alreadyShown) {
      setIsVisible(false);
      return;
    }

    const total = prefersReducedMotion ? 400 : TOTAL_DURATION;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / total) * 100);
      setProgress(pct);

      if (elapsed < total) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(STORAGE_KEY, 'true');
        } catch {
          /* no-op */
        }
        setIsVisible(false);
      }
    };

    rafId.current = requestAnimationFrame(tick);

    let roleTimer: ReturnType<typeof setInterval> | undefined;
    if (!prefersReducedMotion) {
      roleTimer = setInterval(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, ROLE_INTERVAL);
    }

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (roleTimer) clearInterval(roleTimer);
    };
  }, [prefersReducedMotion]);

  // Bloque le scroll pendant l'affichage, sans jamais bloquer le rendu du contenu réel.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <>
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="preloader"
            role="status"
            aria-live="polite"
            aria-label="Chargement du site en cours"
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1120] to-[#111827]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.6, ease: 'easeInOut' }}
          >
            {!prefersReducedMotion && <AmbientParticles />}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center px-6"
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image
                  src={logoSrc}
                  alt="Sambasy"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div className="mt-5 h-10 min-w-[260px] overflow-hidden text-center sm:min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="block text-base font-semibold tracking-wide text-white sm:text-lg"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="mt-7 h-[3px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-56">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              <span className="mt-2 text-xs tabular-nums text-slate-500">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Léger effet de lumière/particules en arrière-plan.
 * Volontairement discret : peu d'éléments, animations basées sur
 * transform/opacity (peu coûteuses), pour rester fluide sur mobile bas de gamme.
 */
function AmbientParticles() {
  const dots = Array.from({ length: 10 });

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* halo de lumière central */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 2 + (i % 3);
        const duration = 6 + (i % 4);
        const delay = (i % 5) * 0.4;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-sky-300/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
          />
        );
      })}
    </div>
  );
}
