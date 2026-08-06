import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border-t border-border-color pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="logo-samba">Samba</span>
              <span className="logo-sy">SY</span>
            </Link>
            <p className="mt-3 text-text-secondary">Expert en Data Science, IA et Cloud Computing</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/samba-sy/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Samba SY">
                <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/SySamba/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Samba SY">
                <i className="fab fa-github text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="footer-link">À Propos</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/projects" className="footer-link">Projets</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#ai" className="footer-link">Intelligence Artificielle</Link></li>
              <li><Link href="/services#cloud" className="footer-link">Cloud & DevOps</Link></li>
              <li><Link href="/services#data" className="footer-link">Data Analytics</Link></li>
              <li><Link href="/services#dev" className="footer-link">Développement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-text-secondary">
              <p className="flex items-center gap-2"><i className="fas fa-phone text-sm"></i> +221 77 378 48 14</p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-sm"></i> sambasy837@gmail.com</p>
              <p className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-sm"></i> Dakar, Sénégal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border-color pt-6 mt-10 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Samba SY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
