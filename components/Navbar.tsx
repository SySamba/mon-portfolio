"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-[99999] bg-[rgba(15,15,35,0.98)] dark:bg-[rgba(15,15,35,0.98)] shadow-[0_2px_20px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="logo-samba">Samba</span>
          <span className="logo-sy">SY</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-text-secondary hover:text-text-primary font-medium transition-all duration-300 relative py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/devis"
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <i className="fas fa-file-invoice-dollar text-sm group-hover:rotate-12 transition-transform" /> Demander un Devis
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-2xl text-white`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-dark-surface border-t border-border-color px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary hover:text-text-primary font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/devis"
            onClick={() => setMobileOpen(false)}
            className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
            <span className="relative flex items-center gap-2">
              <i className="fas fa-file-invoice-dollar text-sm" /> Demander un Devis
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
