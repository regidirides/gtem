import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero-coastal.jpg"
          alt="Coastal city aerial view"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            <Badge 
              className="hero-load mb-6 bg-gold/20 text-gold border-gold/30 hover:bg-gold/30"
            >
              CDRI Fellowship Program 2025-26
            </Badge>
            
            <h1 className="hero-load hero-load-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Global Tsunami
              <span className="block text-gradient-gold">Evacuation Model</span>
            </h1>
            
            <p className="hero-load hero-load-delay-2 text-xl text-white/90 mb-4 font-medium">
              Bridging academic research with practical disaster risk management
            </p>
            
            <p className="hero-load hero-load-delay-2 text-lg text-white/70 mb-8 leading-relaxed">
              An open-source platform helping coastal communities improve tsunami evacuation 
              planning through advanced agent-based simulation.
            </p>
            
            <div className="hero-load hero-load-delay-3 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#overview')}
                className="btn-hover bg-gold text-navy-900 hover:bg-gold-light font-semibold px-8"
              >
                Explore the Project
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#case-study')}
                className="btn-hover border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
              >
                View Case Study
              </Button>
            </div>
          </div>

          {/* Right Column - Stats/Visual */}
          <div className="hidden lg:block">
            <div className="hero-load hero-load-delay-4 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-gold mb-2">12</div>
                <div className="text-white/70 text-sm">Months Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-gold mb-2">17K+</div>
                <div className="text-white/70 text-sm">Agents Simulated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-gold mb-2">$15K</div>
                <div className="text-white/70 text-sm">Total Funding</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-gold mb-2">3</div>
                <div className="text-white/70 text-sm">Research Phases</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#overview')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-bounce-subtle"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
