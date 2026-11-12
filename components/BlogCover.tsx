"use client";

import Image from "next/image";
import { TERANGA_OVERLAY, TERANGA_PHOTO_FILTER } from "@/lib/teranga";

interface BlogCoverProps {
  slug: string;
  title: string;
  category: string;
  className?: string;
}

const covers: Record<string, { src: string }> = {
  "ia-afrique": {
    src: "/img/1677442136019-21780ecad995-800.webp",
  },
  "power-bi-dashboards": {
    src: "/img/1551288049-bebda4e38f71-800.webp",
  },
  "aws-migration-guide": {
    src: "/img/1451187580459-43490279c0fa-800.webp",
  },
  "fake-news-nlp": {
    src: "/img/1585829365295-ab7cd400c167-800.webp",
  },
  "docker-kubernetes-ml": {
    src: "/img/1518770660439-4636190af475-800.webp",
  },
  "etl-vs-elt": {
    src: "/img/1543286386-2e659306cd6c-800.webp",
  },
  "tendances-tech-2024": {
    src: "/img/1518770660439-4636190af475-800.webp",
  },
  "computer-vision-entreprise": {
    src: "/img/1526374965328-7f61d4dc18c5-800.webp",
  },
  "terraform-vs-cloudformation": {
    src: "/img/1555066931-4365d14bab8c-800.webp",
  },
  "chatbot-python-streamlit": {
    src: "/img/1531746790731-6c087fecd65a-800.webp",
  },
  "developpeur-web-senegal": {
    src: "/img/1498050108023-c5249f4df085-800.webp",
  },
  "data-scientist-senegal": {
    src: "/img/1551288049-bebda4e38f71-800.webp",
  },
  "consultant-power-bi-senegal": {
    src: "/img/1551288049-bebda4e38f71-800.webp",
  },
  "developpeur-freelance-dakar": {
    src: "/img/1498050108023-c5249f4df085-800.webp",
  },
  "agence-web-dakar": {
    src: "/img/1547658719-da2b51169166-800.webp",
  },
  "creation-site-web-dakar": {
    src: "/img/1547658719-da2b51169166-800.webp",
  },
  "site-ecommerce-dakar": {
    src: "/img/1556742049-0cfed4f6a45d-800.webp",
  },
  "prix-site-web-dakar": {
    src: "/img/1554224155-6726b3ff858f-800.webp",
  },
};

export default function BlogCover({ slug, title, className }: BlogCoverProps) {
  const cover = covers[slug] || {
    src: "/img/1518770660439-4636190af475-800.webp",
  };

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image
        src={cover.src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
        style={{ filter: TERANGA_PHOTO_FILTER }}
      />
      {/* Bichromie Teranga commune à toutes les couvertures */}
      <div
        className="absolute inset-0"
        style={{ background: TERANGA_OVERLAY, mixBlendMode: "multiply" }}
      />
    </div>
  );
}
