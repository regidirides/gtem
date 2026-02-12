import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Globe, RefreshCw, CheckCircle2 } from 'lucide-react';

const impactAreas = [
  {
    icon: Zap,
    title: 'Short-term Impact',
    color: 'text-amber-500 bg-amber-50',
    items: [
      'Enhanced evacuation planning capacity in Peruvian coastal communities',
      'Evidence-based decision support for local governments',
      'Identification of critical vulnerabilities in evacuation infrastructure',
    ],
  },
  {
    icon: Globe,
    title: 'Long-term Vision',
    color: 'text-primary bg-primary/10',
    items: [
      'Scalable model applicable to tsunami-prone regions worldwide',
      'Standardized methodology for participatory evacuation planning',
      'Sustainable open-source tool maintained by research community',
      'Potential for commercial applications and consulting services',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Sustainability Strategy',
    color: 'text-green-500 bg-green-50',
    items: [
      'Open-source licensing for continued development',
      'GitHub repository for version control and community contributions',
      'Documentation enabling independent adoption',
      'Network of trained users across coastal Peru',
      'Integration pathway with national disaster risk reduction frameworks',
    ],
  },
];

export function Impact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Future
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Impact and Sustainability
          </h2>
        </div>

        <div className={`stagger-children ${isVisible ? 'visible' : ''} grid lg:grid-cols-3 gap-8`}>
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-400"
            >
              <div className={`w-14 h-14 ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                <area.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-4">{area.title}</h3>
              
              <ul className="space-y-3">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
