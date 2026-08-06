"use client";

interface ServiceCoverProps {
  id: string;
  title: string;
  className?: string;
}

const covers: Record<string, { bg: string; accent: string; shapes: string }> = {
  ai: {
    bg: "#0f172a",
    accent: "#8b5cf6",
    shapes: `<circle cx="90" cy="90" r="50" stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.3"/><circle cx="70" cy="85" r="6" fill="#8b5cf6" opacity="0.8"/><circle cx="110" cy="85" r="6" fill="#8b5cf6" opacity="0.8"/><path d="M85 105 Q90 115 95 105" stroke="#06b6d4" stroke-width="2" fill="none"/><path d="M50 75 L40 60 M130 75 L140 60 M50 105 L40 120 M130 105 L140 120" stroke="#8b5cf6" stroke-width="2" opacity="0.6"/>`,
  },
  cloud: {
    bg: "#0f172a",
    accent: "#06b6d4",
    shapes: `<path d="M55 110 C45 110 40 100 45 90 C48 75 65 70 75 80 C80 60 105 60 115 80 C130 70 140 90 135 100 C145 105 140 120 125 120 L60 120 C50 120 50 110 55 110" fill="#06b6d4" opacity="0.25"/><path d="M80 100 L110 100 L95 85" stroke="#06b6d4" stroke-width="3" fill="none" opacity="0.8"/><path d="M80 105 L95 120" stroke="#06b6d4" stroke-width="3" fill="none" opacity="0.8"/>`,
  },
  data: {
    bg: "#0f172a",
    accent: "#10b981",
    shapes: `<rect x="50" y="70" width="25" height="80" rx="4" fill="#10b981" opacity="0.6"/><rect x="85" y="50" width="25" height="100" rx="4" fill="#10b981" opacity="0.8"/><rect x="120" y="90" width="25" height="60" rx="4" fill="#10b981" opacity="0.5"/><line x1="40" y1="130" x2="155" y2="130" stroke="#64748b" stroke-width="2"/>`,
  },
  web: {
    bg: "#0f172a",
    accent: "#3b82f6",
    shapes: `<rect x="45" y="55" width="90" height="60" rx="6" fill="#3b82f6" opacity="0.15"/><rect x="50" y="65" width="80" height="40" fill="#3b82f6" opacity="0.1"/><circle cx="55" cy="60" r="2" fill="#ef4444"/><circle cx="62" cy="60" r="2" fill="#f59e0b"/><circle cx="69" cy="60" r="2" fill="#22c55e"/><text x="60" y="88" fill="#3b82f6" font-family="monospace" font-size="8" opacity="0.9">&lt;/&gt;</text>`,
  },
  ecommerce: {
    bg: "#0f172a",
    accent: "#f59e0b",
    shapes: `<rect x="55" y="70" width="70" height="45" rx="6" fill="#f59e0b" opacity="0.15"/><circle cx="75" cy="95" r="10" stroke="#f59e0b" stroke-width="2" fill="none" opacity="0.7"/><path d="M85 95 L110 95" stroke="#f59e0b" stroke-width="2"/><circle cx="115" cy="95" r="3" fill="#f59e0b" opacity="0.8"/>`,
  },
  mobile: {
    bg: "#0f172a",
    accent: "#ec4899",
    shapes: `<rect x="75" y="45" width="40" height="80" rx="8" stroke="#ec4899" stroke-width="2" fill="none" opacity="0.7"/><rect x="80" y="55" width="30" height="55" fill="#ec4899" opacity="0.1"/><circle cx="95" cy="120" r="3" fill="#ec4899" opacity="0.6"/>`,
  },
};

export default function ServiceCover({ id, title, className }: ServiceCoverProps) {
  const cover = covers[id] || covers.web;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="serviceGrad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${cover.bg}" />
        <stop offset="100%" stop-color="${cover.accent}" stop-opacity="0.35" />
      </linearGradient>
    </defs>
    <rect width="180" height="180" fill="url(#serviceGrad-${id})" />
    <g transform="translate(0,0)">${cover.shapes}</g>
  </svg>`;

  return (
    <div
      aria-label={title}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
