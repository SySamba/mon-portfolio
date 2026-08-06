"use client";

interface BlogCoverProps {
  slug: string;
  title: string;
  category: string;
  className?: string;
}

const patterns: Record<string, { bg: string; accent: string; icon: string; shapes: string }> = {
  "ia-afrique": {
    bg: "#0f172a",
    accent: "#6366f1",
    icon: "brain",
    shapes: `<circle cx="80" cy="80" r="60" stroke="#6366f1" stroke-width="2" fill="none" opacity="0.3"/>
             <path d="M80 40 C50 40 40 70 40 90 C40 120 60 140 80 140 C100 140 120 120 120 90 C120 70 110 40 80 40" fill="#6366f1" opacity="0.2"/>
             <path d="M80 70 L80 130 M60 90 L100 90 M65 75 L95 125 M95 75 L65 125" stroke="#6366f1" stroke-width="3" opacity="0.5"/>`,
  },
  "power-bi-dashboards": {
    bg: "#0f172a",
    accent: "#f59e0b",
    icon: "chart-bar",
    shapes: `<rect x="40" y="90" width="25" height="50" rx="4" fill="#f59e0b" opacity="0.8"/>
             <rect x="75" y="70" width="25" height="70" rx="4" fill="#f59e0b" opacity="0.6"/>
             <rect x="110" y="50" width="25" height="90" rx="4" fill="#f59e0b" opacity="0.4"/>
             <line x1="30" y1="150" x2="150" y2="150" stroke="#475569" stroke-width="2"/>`,
  },
  "aws-migration-guide": {
    bg: "#0f172a",
    accent: "#ff9900",
    icon: "cloud",
    shapes: `<path d="M50 110 C40 110 35 100 40 90 C42 75 60 70 70 80 C75 60 100 60 110 80 C125 70 135 90 130 100 C140 105 135 120 120 120 L55 120 C45 120 45 110 50 110" fill="#ff9900" opacity="0.25"/>
             <path d="M50 95 L80 75 L110 95 M80 75 L80 120" stroke="#ff9900" stroke-width="2" opacity="0.7"/>
             <rect x="70" y="120" width="20" height="15" fill="#ff9900" opacity="0.5"/>`,
  },
  "fake-news-nlp": {
    bg: "#0f172a",
    accent: "#10b981",
    icon: "newspaper",
    shapes: `<rect x="50" y="50" width="80" height="90" rx="6" fill="#10b981" opacity="0.15"/>
             <rect x="60" y="65" width="40" height="6" fill="#10b981" opacity="0.7"/>
             <rect x="60" y="80" width="60" height="4" fill="#10b981" opacity="0.5"/>
             <rect x="60" y="92" width="55" height="4" fill="#10b981" opacity="0.5"/>
             <rect x="60" y="104" width="45" height="4" fill="#10b981" opacity="0.5"/>
             <circle cx="130" cy="60" r="12" fill="#10b981" opacity="0.3"/>
             <path d="M124 60 L128 64 L136 56" stroke="#10b981" stroke-width="3" fill="none"/>`,
  },
  "docker-kubernetes-ml": {
    bg: "#0f172a",
    accent: "#2496ed",
    icon: "cube",
    shapes: `<rect x="60" y="70" width="60" height="60" rx="4" fill="#2496ed" opacity="0.15"/>
             <line x1="60" y1="95" x2="120" y2="95" stroke="#2496ed" stroke-width="2" opacity="0.6"/>
             <line x1="60" y1="115" x2="120" y2="115" stroke="#2496ed" stroke-width="2" opacity="0.6"/>
             <line x1="90" y1="70" x2="90" y2="130" stroke="#2496ed" stroke-width="2" opacity="0.6"/>
             <circle cx="140" cy="80" r="10" fill="#2496ed" opacity="0.3"/>
             <circle cx="140" cy="120" r="10" fill="#2496ed" opacity="0.3"/>
             <line x1="120" y1="80" x2="130" y2="80" stroke="#2496ed" stroke-width="2"/>
             <line x1="120" y1="120" x2="130" y2="120" stroke="#2496ed" stroke-width="2"/>`,
  },
  "etl-vs-elt": {
    bg: "#0f172a",
    accent: "#ec4899",
    icon: "database",
    shapes: `<rect x="50" y="60" width="30" height="30" rx="4" fill="#ec4899" opacity="0.3"/>
             <rect x="100" y="60" width="30" height="30" rx="4" fill="#ec4899" opacity="0.3"/>
             <rect x="75" y="110" width="30" height="30" rx="4" fill="#ec4899" opacity="0.3"/>
             <path d="M80 90 L90 110 M100 90 L90 110" stroke="#ec4899" stroke-width="2" opacity="0.7"/>
             <text x="60" y="80" fill="white" font-size="10" font-weight="bold">E</text>
             <text x="110" y="80" fill="white" font-size="10" font-weight="bold">T</text>
             <text x="85" y="130" fill="white" font-size="10" font-weight="bold">L</text>`,
  },
  "tendances-tech-2024": {
    bg: "#0f172a",
    accent: "#8b5cf6",
    icon: "rocket",
    shapes: `<path d="M90 50 L110 100 L90 95 L90 130 L70 95 L50 100 Z" fill="#8b5cf6" opacity="0.25" transform="rotate(45 80 90)"/>
             <circle cx="120" cy="60" r="6" fill="#8b5cf6" opacity="0.6"/>
             <circle cx="140" cy="80" r="4" fill="#8b5cf6" opacity="0.4"/>
             <circle cx="130" cy="110" r="5" fill="#8b5cf6" opacity="0.5"/>`,
  },
  "computer-vision-entreprise": {
    bg: "#0f172a",
    accent: "#06b6d4",
    icon: "eye",
    shapes: `<path d="M80 70 C60 70 45 90 45 100 C45 110 60 130 80 130 C100 130 115 110 115 100 C115 90 100 70 80 70" fill="#06b6d4" opacity="0.15"/>
             <circle cx="80" cy="100" r="18" fill="#06b6d4" opacity="0.3"/>
             <circle cx="80" cy="100" r="10" fill="#06b6d4" opacity="0.7"/>
             <rect x="40" y="60" width="25" height="25" rx="2" stroke="#06b6d4" stroke-width="2" fill="none" opacity="0.5"/>
             <rect x="95" y="115" width="25" height="25" rx="2" stroke="#06b6d4" stroke-width="2" fill="none" opacity="0.5"/>`,
  },
  "terraform-vs-cloudformation": {
    bg: "#0f172a",
    accent: "#22c55e",
    icon: "server",
    shapes: `<rect x="55" y="60" width="50" height="70" rx="4" fill="#22c55e" opacity="0.15"/>
             <line x1="55" y1="85" x2="105" y2="85" stroke="#22c55e" stroke-width="2" opacity="0.5"/>
             <line x1="55" y1="110" x2="105" y2="110" stroke="#22c55e" stroke-width="2" opacity="0.5"/>
             <circle cx="70" cy="72" r="4" fill="#22c55e" opacity="0.7"/>
             <circle cx="70" cy="97" r="4" fill="#22c55e" opacity="0.7"/>
             <circle cx="70" cy="122" r="4" fill="#22c55e" opacity="0.7"/>
             <text x="80" y="76" fill="#22c55e" font-size="8" opacity="0.9">{ }</text>
             <text x="80" y="101" fill="#22c55e" font-size="8" opacity="0.9">{ }</text>`,
  },
  "chatbot-python-streamlit": {
    bg: "#0f172a",
    accent: "#ef4444",
    icon: "robot",
    shapes: `<rect x="55" y="60" width="50" height="45" rx="8" fill="#ef4444" opacity="0.2"/>
             <circle cx="70" cy="80" r="5" fill="#ef4444" opacity="0.7"/>
             <circle cx="90" cy="80" r="5" fill="#ef4444" opacity="0.7"/>
             <rect x="70" y="95" width="20" height="4" rx="2" fill="#ef4444" opacity="0.5"/>
             <rect x="45" y="110" width="70" height="20" rx="4" fill="#ef4444" opacity="0.1"/>
             <path d="M115 70 L140 60 L140 80 Z" fill="#ef4444" opacity="0.3"/>`,
  },
  "cloud-migration": {
    bg: "#0f172a",
    accent: "#f97316",
    icon: "cloud-upload-alt",
    shapes: `<path d="M50 110 C40 110 35 100 40 90 C42 75 60 70 70 80 C75 60 100 60 110 80 C125 70 135 90 130 100 C140 105 135 120 120 120 L55 120 C45 120 45 110 50 110" fill="#f97316" opacity="0.25"/>
             <path d="M75 100 L105 100 L90 85" stroke="#f97316" stroke-width="3" fill="none" opacity="0.8"/>
             <path d="M75 105 L90 120" stroke="#f97316" stroke-width="3" fill="none" opacity="0.8"/>
             <rect x="70" y="95" width="15" height="25" fill="#f97316" opacity="0.3"/>`,
  },
  "developpeur-web-dakar": {
    bg: "#0f172a",
    accent: "#3b82f6",
    icon: "laptop-code",
    shapes: `<rect x="45" y="60" width="70" height="50" rx="4" fill="#3b82f6" opacity="0.15"/>
             <rect x="50" y="65" width="60" height="30" fill="#3b82f6" opacity="0.1"/>
             <text x="58" y="83" fill="#3b82f6" font-family="monospace" font-size="8" opacity="0.9">&lt;/&gt;</text>
             <rect x="80" y="110" width="40" height="25" rx="2" fill="#3b82f6" opacity="0.2"/>
             <circle cx="130" cy="70" r="8" fill="#3b82f6" opacity="0.3"/>`,
  },
  "ia-senegal": {
    bg: "#0f172a",
    accent: "#a855f7",
    icon: "brain",
    shapes: `<circle cx="90" cy="90" r="45" stroke="#a855f7" stroke-width="2" fill="none" opacity="0.3"/>
             <path d="M90 60 C65 60 60 85 60 100 C60 120 75 130 90 130 C105 130 120 120 120 100 C120 85 115 60 90 60" fill="#a855f7" opacity="0.2"/>
             <circle cx="75" cy="95" r="5" fill="#a855f7" opacity="0.6"/>
             <circle cx="105" cy="95" r="5" fill="#a855f7" opacity="0.6"/>
             <path d="M85 105 Q90 115 95 105" stroke="#a855f7" stroke-width="2" fill="none"/>`,
  },
  "power-bi-dakar": {
    bg: "#0f172a",
    accent: "#eab308",
    icon: "chart-pie",
    shapes: `<path d="M90 60 L90 90 L120 90 A30 30 0 0 0 90 60" fill="#eab308" opacity="0.7"/>
             <path d="M90 95 L90 130 A35 35 0 0 1 55 95" fill="#eab308" opacity="0.4"/>
             <rect x="40" y="120" width="25" height="25" rx="4" fill="#eab308" opacity="0.3"/>
             <circle cx="120" cy="120" r="10" fill="#eab308" opacity="0.5"/>`,
  },
};

export default function BlogCover({ slug, title, className }: BlogCoverProps) {
  const pattern = patterns[slug] || { bg: "#0f172a", accent: "#6366f1", icon: "newspaper", shapes: "" };

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="blogGrad-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${pattern.bg}" />
      <stop offset="100%" stop-color="${pattern.accent}" stop-opacity="0.35" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" fill="url(#blogGrad-${slug})" />
  <g transform="translate(10,10)">
    ${pattern.shapes}
  </g>
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
