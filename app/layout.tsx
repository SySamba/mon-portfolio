import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sambasy.com"),
  title: "Samba SY - Développeur Web & Data Scientist au Sénégal | Dakar",
  description:
    "Samba SY, développeur web full stack, Data Scientist, Data Analyst et consultant Power BI au Sénégal. Création de sites web, applications mobiles, logiciels et solutions IA à Dakar.",
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
  authors: [{ name: "Samba SY", url: "https://sambasy.com" }],
  verification: {
    google: "e367de97be2ccb8d",
  },
  openGraph: {
    title: "Samba SY - Développeur Web & Data Scientist au Sénégal",
    description: "Développement web, Data Science, IA et Business Intelligence à Dakar, Sénégal.",
    url: "/",
    siteName: "Samba SY",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/profil.png", alt: "Samba SY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samba SY - Développeur Web & Data Scientist au Sénégal",
    description: "Développement web, Data Science, IA et Business Intelligence à Dakar, Sénégal.",
    images: ["/profil.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f23" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Samba SY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col bg-dark-bg text-text-primary pt-[70px]">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
