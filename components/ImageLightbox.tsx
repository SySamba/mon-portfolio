"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageLightbox({ images, isOpen, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors z-20"
        aria-label="Fermer"
      >
        <i className="fas fa-times" />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors z-20"
          aria-label="Image précédente"
        >
          <i className="fas fa-chevron-left" />
        </button>
      )}

      <div
        className="relative w-full max-w-6xl h-[70vh] md:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={images[index]}
          src={images[index]}
          alt={`Aperçu ${index + 1} / ${images.length}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors z-20"
          aria-label="Image suivante"
        >
          <i className="fas fa-chevron-right" />
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
            aria-label={`Aller à l'image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
