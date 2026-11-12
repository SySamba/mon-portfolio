import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer relative bg-dark-surface">
      <div className="t-weave" aria-hidden="true" />
      <div className="max-w-[1240px] mx-auto px-5 pt-20 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 mb-16">
          <div>
            <Link href="/" className="text-4xl leading-none">
              <span className="logo-samba">Samba </span>
              <span className="logo-sy">SY</span>
            </Link>
            <p className="mt-5 text-text-secondary max-w-xs leading-relaxed">
              Développeur web, Data Scientist et ingénieur IA. Des produits numériques conçus à Dakar, pour le
              Sénégal et au-delà.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/in/samba-sy/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Samba SY">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/SySamba/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Samba SY">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/221773784814" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp Samba SY">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="t-label mb-5">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="footer-link">À Propos</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/projects" className="footer-link">Projets</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="t-label mb-5">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#dev" className="footer-link">Développement Web</Link></li>
              <li><Link href="/application-mobile-dakar/" className="footer-link">Application mobile</Link></li>
              <li><Link href="/logiciel-gestion-stock-senegal/" className="footer-link">Gestion de stock</Link></li>
              <li><Link href="/logiciel-gestion-scolaire-senegal/" className="footer-link">Gestion scolaire</Link></li>
              <li><Link href="/site-web-association-senegal/" className="footer-link">Site pour association</Link></li>
              <li><Link href="/services#ai" className="footer-link">Intelligence Artificielle</Link></li>
              <li><Link href="/services#data" className="footer-link">Data Analytics</Link></li>
              <li><Link href="/services#cloud" className="footer-link">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="t-label mb-5">Contact</h4>
            <div className="space-y-3 text-text-secondary">
              <a href="tel:+221773784814" className="footer-link flex items-center gap-3"><i className="fas fa-phone text-xs text-accent" aria-hidden="true"></i> +221 77 378 48 14</a>
              <a href="mailto:sambasy837@gmail.com" className="footer-link flex items-center gap-3"><i className="fas fa-envelope text-xs text-accent" aria-hidden="true"></i> sambasy837@gmail.com</a>
              <p className="flex items-center gap-3"><i className="fas fa-location-dot text-xs text-accent" aria-hidden="true"></i> Dakar, Sénégal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color pt-6 text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Samba SY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
