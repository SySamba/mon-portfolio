"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-[99999]">
      <div className="max-w-[1240px] mx-auto px-5 h-[76px] flex items-center justify-between gap-6">
        <Link href="/" className="text-[1.65rem] leading-none" aria-label="Samba SY — accueil">
          <span className="logo-samba">Samba </span>
          <span className="logo-sy">SY</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link relative py-2 text-[0.8rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                isActive(link.href) ? "active text-text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/devis" className="btn-primary !py-2.5 !px-5 text-sm uppercase tracking-[0.08em]">
            Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="w-11 h-11 rounded-full border border-border-color flex items-center justify-center text-text-primary"
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-lg`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-dark-bg border-t border-border-color px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-lg font-bold uppercase tracking-[0.14em] py-3 border-b border-border-color ${isActive(link.href) ? "text-accent" : "text-text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/devis" onClick={() => setMobileOpen(false)} className="btn-primary justify-center mt-4 uppercase tracking-[0.08em]">
            Demander un devis <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>
      )}
      <div className="t-weave absolute left-0 right-0 -bottom-[3px] !h-[3px] opacity-90" aria-hidden="true" />
    </nav>
  );
}
