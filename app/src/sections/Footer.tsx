import { Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Outputs', href: '#outputs' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src="/gtem/images/logo.png" alt="GTEM Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-xl">GTEM</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Making advanced evacuation modeling accessible to coastal communities worldwide.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Tohoku University, Sendai, Japan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <strong className="text-white">Assoc. Prof. Erick Mas</strong><br />
                Principal Investigator
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">mas@tohoku.ac.jp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              2025 GTEM Project. Funded by CDRI Fellowship Program.
            </p>
            <p className="text-gray-600 text-sm">
              A collaboration between IRIDeS and PUCP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
