'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Preloader — écran de chargement « Teranga moderne ».
 *
 * Affiché uniquement à la première visite de la session (sessionStorage).
 * Le contenu réel est rendu immédiatement dessous (aucun blocage SEO) ;
 * le voile disparaît en rideau vers le haut.
 *
 * Un script inline dans app/layout.tsx ajoute la classe `preloader-done`
 * sur <html> pour les visites suivantes : l'overlay est masqué en CSS
 * avant même l'hydratation (zéro flash).
 */

const ROLES = [
  'Développeur Full Stack',
  'Data Scientist & Analyst',
  'Applications Mobiles',
  'Dakar · Sénégal',
] as const;

const TOTAL_DURATION = 3200; // ms
const ROLE_INTERVAL = 750; // ms
const STORAGE_KEY = 'sambasy:preloader-shown';

const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface PreloaderProps {
  children: React.ReactNode;
}

export default function Preloader({ children }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const rafId = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      // sessionStorage indisponible : on affiche quand même.
    }

    if (alreadyShown) {
      setIsVisible(false);
      return;
    }

    const total = prefersReducedMotion ? 400 : TOTAL_DURATION;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(100, (elapsed / total) * 100));

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

  // Bloque le scroll pendant l'affichage, sans bloquer le rendu du contenu réel.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const wordmark = ['S', 'a', 'm', 'b', 'a', ' ', 'S', 'Y'];

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
            className="preloader-overlay fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden bg-dark-bg text-text-primary"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: prefersReducedMotion ? 0.15 : 0.75,
              ease: EASE_CURTAIN,
            }}
          >
            {!prefersReducedMotion && <Ambient />}

            {/* Texture losange Teranga, très discrète */}
            <div
              className="t-diamond-bg pointer-events-none absolute inset-0 opacity-[0.05]"
              aria-hidden="true"
            />

            <motion.div
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-10 flex flex-col items-center px-6"
            >
              {/* Monogramme : lettres qui se révèlent une à une */}
              <div
                className="font-display flex max-w-full items-baseline overflow-hidden text-[clamp(2.5rem,13vw,4.5rem)] font-semibold tracking-tight"
                aria-label="Samba SY"
              >
                {wordmark.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={prefersReducedMotion ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15 + i * 0.045,
                      ease: EASE_OUT,
                    }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 + wordmark.length * 0.045 + 0.15 }}
                  className="inline-block text-[var(--terracotta)]"
                  aria-hidden="true"
                >
                  .
                </motion.span>
              </div>

              {/* Rôle rotatif */}
              <div className="mt-4 h-6 min-w-[260px] overflow-hidden text-center sm:min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="block text-xs font-semibold uppercase tracking-[0.22em] text-text-muted"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Barre de progression terracotta → ocre */}
              <div className="mt-8 flex w-56 items-center gap-3 sm:w-72">
                <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--ochre)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
                <span className="font-display w-9 text-right text-sm italic tabular-nums text-text-muted">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Halos de lumière terracotta/ocre en arrière-plan.
 * Animations sur transform/opacity uniquement — fluide sur mobile.
 */
function Ambient() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--terracotta)] opacity-[0.08] blur-3xl"
        animate={{ opacity: [0.05, 0.11, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] h-[320px] w-[320px] rounded-full bg-[var(--ochre)] opacity-[0.07] blur-3xl"
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute left-[-10%] top-[-15%] h-[280px] w-[280px] rounded-full bg-[var(--ocean)] opacity-[0.06] blur-3xl"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  );
}
