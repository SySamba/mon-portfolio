"use client";

import Image from "next/image";
import { TERANGA_OVERLAY, TERANGA_PHOTO_FILTER } from "@/lib/teranga";

interface ServiceCoverProps {
  id: string;
  title: string;
  className?: string;
}

const covers: Record<string, { src: string }> = {
  ai: {
    src: "/img/1677442136019-21780ecad995-600.webp",
  },
  cloud: {
    src: "/img/1451187580459-43490279c0fa-600.webp",
  },
  data: {
    src: "/img/1551288049-bebda4e38f71-600.webp",
  },
  dev: {
    src: "/img/1498050108023-c5249f4df085-600.webp",
  },
  web: {
    src: "/img/1498050108023-c5249f4df085-600.webp",
  },
  ecommerce: {
    src: "/img/1556742049-0cfed4f6a45d-600.webp",
  },
  mobile: {
    src: "/img/1512941937669-90a1b58e7e9c-600.webp",
  },
};

export default function ServiceCover({ id, title, className }: ServiceCoverProps) {
  const cover = covers[id] || covers.web;

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src={cover.src}
        alt={title}
        fill
        sizes="400px"
        className="object-cover"
        style={{ filter: TERANGA_PHOTO_FILTER }}
      />
      <div
        className="absolute inset-0"
        style={{ background: TERANGA_OVERLAY, mixBlendMode: "multiply" }}
      />
    </div>
  );
}
