"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="t-play group absolute left-1/2 bottom-0 z-10 flex items-center gap-3 rounded-full bg-[#fbf7ef]/95 pl-2 pr-5 py-2 shadow-xl backdrop-blur text-[#1c1a16]"
        aria-label="Voir ma présentation vidéo (1 minute)"
      >
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--terracotta)] text-[#fff8ef]">
          <span className="t-play-ring absolute inset-0 rounded-full" aria-hidden="true" />
          <i className="fas fa-play text-sm translate-x-[1px]" aria-hidden="true" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-xs font-extrabold uppercase tracking-[0.12em]">Ma présentation</span>
          <span className="block text-[11px] text-[#595247]">Vidéo · 1 min</span>
        </span>
      </button>

      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Présentation vidéo de Samba SY"
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in-up"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer la vidéo"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="t-weave" aria-hidden="true" />
              <video
                src="/video/presentation-samba-sy.mp4"
                poster="/video/presentation-poster.jpg"
                className="block w-full aspect-video bg-black"
                controls
                autoPlay
                playsInline
                preload="none"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#25d366] hover:!bg-[#1ebe5b] uppercase tracking-[0.08em] text-sm">
                <i className="fab fa-whatsapp" aria-hidden="true" /> Discuter sur WhatsApp
              </a>
              <a href="/devis/" className="btn-secondary !text-white !border-white/40 uppercase tracking-[0.08em] text-sm">
                Demander un devis
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
