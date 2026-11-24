'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Preloader — « orbe Teranga ».
 *
 * Séquence inspirée d'une animation logo : une sphère lumineuse
 * terracotta/ocre se matérialise, tourne sur elle-même comme une pièce,
 * puis se rétracte en monogramme devant le logotype « Samba SY. ».
 *
 * Affiché uniquement à la première visite de la session (sessionStorage).
 * Le contenu réel est rendu dessous (aucun blocage SEO) ; le voile part
 * en rideau vers le haut. La classe `preloader-done` (posée par le script
 * inline du layout) le masque avant hydratation aux visites suivantes.
 */

const ROLES = [
  'Développeur Full Stack',
  'Data Scientist & Analyst',
  'Applications Mobiles',
  'Dakar · Sénégal',
] as const;

const TOTAL_DURATION = 3600; // ms
const ROLE_INTERVAL = 900; // ms
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
  const [wmWidth, setWmWidth] = useState(0);
  const wmRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  // Mesure le logotype (invisible mais en layout) pour centrer l'orbe
  // seule au départ, puis la laisser glisser quand le texte apparaît.
  useLayoutEffect(() => {
    if (wmRef.current) setWmWidth(wmRef.current.offsetWidth + 20);
  }, []);

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

  const wordmark = ['S', 'a', 'm', 'b', 'a', ' ', 'S', 'Y', '.'];

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
            className="preloader-overlay fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden bg-[#16110d]"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: prefersReducedMotion ? 0.15 : 0.75,
              ease: EASE_CURTAIN,
            }}
          >
            {/* Texture losange Teranga, très discrète */}
            <div
              className="t-diamond-bg pointer-events-none absolute inset-0 opacity-[0.04] invert"
              aria-hidden="true"
            />
            {!prefersReducedMotion && <Ambient />}

            <motion.div
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-10 flex flex-col items-center px-6"
            >
              {/* Lockup : orbe → monogramme + logotype */}
              <div
                className="flex h-[150px] items-center sm:h-[170px]"
                style={{ perspective: 900 }}
              >
                {/* Onde de choc à l'apparition de l'orbe */}
                {!prefersReducedMotion && (
                  <motion.span
                    className="pointer-events-none absolute rounded-full border-2 border-[var(--ochre)]"
                    style={{ width: 170, height: 170 }}
                    initial={{ scale: 0.4, opacity: 0.9 }}
                    animate={{ scale: 2.1, opacity: 0 }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                    aria-hidden="true"
                  />
                )}

                {/* L'orbe : matérialisation → rotation pièce → rétractation */}
                <motion.div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 168,
                    height: 168,
                    background:
                      'radial-gradient(circle at 34% 30%, #f6c46b 0%, #e0a43a 34%, #c8553d 72%, #8f3a26 100%)',
                    boxShadow:
                      '0 0 55px rgba(224,164,58,.65), 0 0 130px rgba(200,85,61,.45), inset 0 0 26px rgba(120,40,20,.45)',
                  }}
                  initial={prefersReducedMotion ? { scale: 0.34 } : { scale: 0, rotateY: 0, x: wmWidth / 2 }}
                  animate={
                    prefersReducedMotion
                      ? { scale: 0.34 }
                      : {
                          scale: [0, 1.12, 1, 1, 0.34],
                          rotateY: [0, 0, 720, 720],
                          x: [wmWidth / 2, wmWidth / 2, wmWidth / 2, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.2 }
                      : { duration: 2.7, times: [0, 0.18, 0.62, 1], ease: 'easeInOut' }
                  }
                >
                  {/* Anneau interne façon pièce */}
                  <span
                    className="absolute rounded-full border border-[rgba(255,248,239,.35)]"
                    style={{ inset: 12 }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-display font-semibold text-[#fff8ef]"
                    style={{ fontSize: 58, textShadow: '0 2px 14px rgba(80,20,10,.5)' }}
                  >
                    SY
                  </span>
                </motion.div>

                {/* Logotype : apparaît une fois l'orbe rétractée */}
                <div className="ml-4 overflow-hidden sm:ml-6">
                  <div
                    ref={wmRef}
                    className="font-display flex items-baseline text-[clamp(2.1rem,9vw,3.4rem)] font-semibold tracking-tight text-[#f4ede1]"
                    aria-label="Samba SY"
                  >
                    {wordmark.map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={prefersReducedMotion ? false : { y: '115%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: prefersReducedMotion ? 0 : 1.9 + i * 0.04,
                          ease: EASE_OUT,
                        }}
                        className={`inline-block${letter === '.' ? ' text-[var(--terracotta)]' : ''}`}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rôle rotatif */}
              <div className="mt-2 h-6 min-w-[260px] overflow-hidden text-center sm:min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#a89a88]"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Barre de progression terracotta → ocre */}
              <div className="mt-8 flex w-56 items-center gap-3 sm:w-72">
                <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--ochre)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
                <span className="font-display w-9 text-right text-sm italic tabular-nums text-[#a89a88]">
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
 * Halo chaud derrière l'orbe + quelques étincelles.
 * Animations sur transform/opacity uniquement — fluide sur mobile.
 */
function Ambient() {
  const sparks = Array.from({ length: 8 });
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--terracotta)] blur-3xl"
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.12, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ochre)] blur-3xl"
        animate={{ opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      {sparks.map((_, i) => {
        const angle = (i / sparks.length) * Math.PI * 2;
        const dist = 120 + (i % 3) * 40;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 block h-[3px] w-[3px] rounded-full bg-[var(--ochre)]"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist,
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 1.4, delay: 0.25 + i * 0.06, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
}
