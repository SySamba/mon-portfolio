import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/PreloaderV2";
import {
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
  siteGraph,
} from "@/lib/seo";

const FONT_AWESOME_CSS =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

// Applique le thème avant le premier rendu : évite le flash et permet de ne
// plus masquer la page pendant l'hydratation (gain direct sur le LCP).
const THEME_INIT =
  "(function(){try{var t=localStorage.getItem('theme')||'light';" +
  "var d=document.documentElement;d.setAttribute('data-theme',t);" +
  "d.classList.toggle('dark',t==='dark')}catch(e){}})()";

// Masque le préchargeur dès le premier rendu s'il a déjà été affiché
// durant cette session (évite tout flash avant l'hydratation React).
const PRELOADER_INIT =
  "(function(){try{if(sessionStorage.getItem('sambasy:preloader-shown')==='true')" +
  "document.documentElement.classList.add('preloader-done')}catch(e){}})()";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Samba SY - Data Analyst, Data Scientist & SEO au Sénégal | Développeur Web Dakar",
  applicationName: SITE_NAME,
  description:
    "Samba SY, Data Analyst, Data Scientist, SEO et développeur web full stack au Sénégal. Création de sites web, applications mobiles, logiciels et solutions IA à Dakar.",
  keywords: [
    "développeur web Sénégal",
    "développeur web Dakar",
    "développeur full stack Sénégal",
    "création site web Sénégal",
    "création application mobile Sénégal",
    "consultant Power BI Sénégal",
    "Data Analyst Sénégal",
    "Data Scientist Sénégal",
    "intelligence artificielle Sénégal",
    "développement logiciel Sénégal",
    "développeur Laravel Sénégal",
    "développeur React Sénégal",
    "développeur Next.js Sénégal",
    "développeur Flutter Sénégal",
    "référencement SEO Sénégal",
    "Samba SY",
  ],
  authors: [{ name: "Samba SY", url: SITE_URL }],
  creator: "Samba SY",
  publisher: "Samba SY",
  category: "technology",
  alternates: { canonical: "/" },
  verification: {
    google: "e367de97be2ccb8d",
  },
  openGraph: {
    title: "Samba SY - Développeur Web & Data Scientist au Sénégal",
    description: "Développement web, Data Science, IA et Business Intelligence à Dakar, Sénégal.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: "Samba SY - Data Scientist & Développeur Web Full Stack à Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samba SY - Développeur Web & Data Scientist au Sénégal",
    description: "Développement web, Data Science, IA et Business Intelligence à Dakar, Sénégal.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Samba SY",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1517" },
    { media: "(prefers-color-scheme: light)", color: "#f5efe4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_INIT }} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        {/*
          Font Awesome est chargé en dehors du chemin critique : servi depuis un
          domaine tiers, il bloquait le premier rendu de chaque page.
          media="print" rend la feuille non bloquante, puis on la réactive une
          fois téléchargée (avec repli <noscript>).
        */}
        <link
          id="fa-css"
          rel="stylesheet"
          href={FONT_AWESOME_CSS}
          media="print"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          suppressHydrationWarning
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('fa-css');if(!l)return;" +
              "var a=function(){l.media='all'};" +
              "if(l.sheet)a();else l.addEventListener('load',a)})()",
          }}
        />
        <noscript>
          <link rel="stylesheet" href={FONT_AWESOME_CSS} crossOrigin="anonymous" />
        </noscript>
      </head>
      <body className="t-grain min-h-full flex flex-col bg-dark-bg text-text-primary pt-[76px]">
        <JsonLd data={siteGraph} />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            <Preloader>{children}</Preloader>
          </main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
