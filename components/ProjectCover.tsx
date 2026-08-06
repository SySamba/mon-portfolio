"use client";

interface ProjectCoverProps {
  id: string;
  title?: string;
  category?: string;
  className?: string;
}

const patterns: Record<string, { bg: string; accent: string; shapes: string }> = {
  "fake-news": {
    bg: "#0f172a",
    accent: "#ef4444",
    shapes: `<circle cx="60" cy="80" r="35" fill="none" stroke="#ef4444" stroke-width="3" opacity="0.6"/><path d="M85 55 L150 120" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/><path d="M85 120 L150 55" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/><rect x="100" y="70" width="50" height="30" rx="4" fill="#ef4444" opacity="0.2"/>`,
  },
  diabetes: {
    bg: "#0f172a",
    accent: "#22c55e",
    shapes: `<path d="M40 120 Q60 60 90 90 T140 70" stroke="#22c55e" stroke-width="3" fill="none"/><circle cx="90" cy="90" r="8" fill="#22c55e" opacity="0.7"/><rect x="50" y="130" width="20" height="30" rx="3" fill="#22c55e" opacity="0.3"/><rect x="80" y="120" width="20" height="40" rx="3" fill="#22c55e" opacity="0.5"/><rect x="110" y="110" width="20" height="50" rx="3" fill="#22c55e" opacity="0.4"/>`,
  },
  covid: {
    bg: "#0f172a",
    accent: "#06b6d4",
    shapes: `<path d="M40 120 Q70 80 100 100 T140 70" stroke="#06b6d4" stroke-width="3" fill="none"/><circle cx="100" cy="100" r="8" fill="#06b6d4" opacity="0.7"/><rect x="45" y="125" width="18" height="25" rx="3" fill="#06b6d4" opacity="0.4"/><rect x="75" y="115" width="18" height="35" rx="3" fill="#06b6d4" opacity="0.6"/><rect x="105" y="105" width="18" height="45" rx="3" fill="#06b6d4" opacity="0.5"/><rect x="135" y="95" width="18" height="55" rx="3" fill="#06b6d4" opacity="0.3"/>`,
  },
  "air-traffic": {
    bg: "#0f172a",
    accent: "#3b82f6",
    shapes: `<path d="M90 40 L110 80 L150 85 L120 105 L130 145 L90 120 L50 145 L60 105 L30 85 L70 80 Z" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="90" r="45" stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.4"/><path d="M60 90 L80 90 L90 75 L100 105 L120 90" stroke="#3b82f6" stroke-width="2" fill="none"/>`,
  },
  "sales-stock": {
    bg: "#0f172a",
    accent: "#f59e0b",
    shapes: `<rect x="40" y="70" width="22" height="80" rx="3" fill="#f59e0b" opacity="0.5"/><rect x="75" y="50" width="22" height="100" rx="3" fill="#f59e0b" opacity="0.7"/><rect x="110" y="90" width="22" height="60" rx="3" fill="#f59e0b" opacity="0.6"/><line x1="35" y1="130" x2="155" y2="130" stroke="#64748b" stroke-width="2"/><circle cx="140" cy="60" r="12" fill="#ef4444" opacity="0.3"/>`,
  },
  teranga: {
    bg: "#0f172a",
    accent: "#eab308",
    shapes: `<rect x="40" y="50" width="100" height="70" rx="6" fill="#eab308" opacity="0.15"/><circle cx="60" cy="70" r="4" fill="#ef4444"/><circle cx="70" cy="70" r="4" fill="#f59e0b"/><circle cx="80" cy="70" r="4" fill="#22c55e"/><rect x="50" y="85" width="60" height="6" rx="3" fill="#eab308" opacity="0.4"/><rect x="50" y="98" width="40" height="6" rx="3" fill="#eab308" opacity="0.3"/>`,
  },
  "cv-khombole": {
    bg: "#0f172a",
    accent: "#16a34a",
    shapes: `<rect x="50" y="45" width="80" height="100" rx="4" fill="#16a34a" opacity="0.15"/><rect x="60" y="60" width="60" height="8" rx="2" fill="#16a34a" opacity="0.4"/><rect x="60" y="78" width="40" height="6" rx="2" fill="#16a34a" opacity="0.3"/><rect x="60" y="92" width="50" height="6" rx="2" fill="#16a34a" opacity="0.3"/><circle cx="90" cy="120" r="15" fill="#16a34a" opacity="0.2"/><text x="83" y="125" fill="#16a34a" font-size="10" opacity="0.8">CV</text>`,
  },
  arbitres: {
    bg: "#0f172a",
    accent: "#f97316",
    shapes: `<circle cx="90" cy="70" r="25" stroke="#f97316" stroke-width="3" fill="none" opacity="0.6"/><rect x="75" y="100" width="30" height="45" rx="4" fill="#f97316" opacity="0.2"/><path d="M40 130 L70 120" stroke="#f97316" stroke-width="3" stroke-linecap="round"/><path d="M140 130 L110 120" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>`,
  },
  sencouche: {
    bg: "#0f172a",
    accent: "#ec4899",
    shapes: `<rect x="50" y="70" width="80" height="60" rx="6" fill="#ec4899" opacity="0.15"/><circle cx="75" cy="100" r="12" fill="#ec4899" opacity="0.3"/><rect x="95" y="90" width="25" height="6" rx="3" fill="#ec4899" opacity="0.5"/><rect x="95" y="103" width="18" height="6" rx="3" fill="#ec4899" opacity="0.4"/><path d="M60 60 L120 60" stroke="#ec4899" stroke-width="2" stroke-dasharray="4 2" opacity="0.6"/>`,
  },
  generic: {
    bg: "#0f172a",
    accent: "#6366f1",
    shapes: `<circle cx="90" cy="90" r="55" stroke="#6366f1" stroke-width="2" fill="none" opacity="0.3"/><rect x="60" y="70" width="60" height="40" rx="6" fill="#6366f1" opacity="0.15"/><circle cx="90" cy="90" r="10" fill="#6366f1" opacity="0.5"/>`,
  },
};

export default function ProjectCover({ id, title, className }: ProjectCoverProps) {
  const pattern = patterns[id] || patterns.generic;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="projectGrad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${pattern.bg}" />
        <stop offset="100%" stop-color="${pattern.accent}" stop-opacity="0.35" />
      </linearGradient>
    </defs>
    <rect width="180" height="180" fill="url(#projectGrad-${id})" />
    <g transform="translate(10,10)">${pattern.shapes}</g>
  </svg>`;

  return (
    <div
      aria-label={title || id}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
