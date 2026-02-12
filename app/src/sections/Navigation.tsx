import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Outputs', href: '#outputs' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-primary' : 'bg-white/20'
            }`}>
              <img src="/gtem/images/logo.png" alt="GTEM Logo" className="w-5 h-5 object-contain" />
            </div>
            <span className={`font-bold text-lg transition-colors ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}>
              GTEM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium link-hover transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                } hover:text-gold`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`btn-hover ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-navy-900'
                  : 'bg-white text-navy-900 hover:bg-white/90'
              }`}
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-navy-900' : 'text-white'}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary">
                    <img src="/gtem/images/logo.png" alt="GTEM Logo" className="w-5 h-5 object-contain" />
                  </div>
                  <span className="font-bold text-lg text-navy-900">GTEM</span>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-primary text-white hover:bg-navy-900 w-full"
                >
                  Get Involved
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
