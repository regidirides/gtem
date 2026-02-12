import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    number: '01',
    icon: Users,
    title: 'Stakeholder Engagement',
    duration: 'Aug 2025 - Nov 2025',
    items: [
      'Identification and contact with coastal local governments across Peru',
      'Design and distribution of comprehensive questionnaires',
      'Interviews with evacuation planners and disaster risk management officers',
      'Analysis of current practices, needs, and constraints',
    ],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Model Development',
    duration: 'Dec 2025 - Mar 2026',
    items: [
      'Review and enhancement of existing NetLogo-based evacuation model',
      'Integration of stakeholder feedback into model features',
      'Development of user-friendly interfaces',
      'Implementation of open data source compatibility',
      'Enhancement of agent-based features (demographics, decision-making, pathfinding)',
    ],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Validation and Deployment',
    duration: 'Apr 2026 - Jul 2026',
    items: [
      'Case studies in target coastal communities',
      'Model verification and validation',
      'Development of comprehensive documentation and tutorials',
      'Launch of web portal with model repository',
      'Training workshops for local government users',
    ],
  },
];

export function Methodology() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="methodology" ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Our Methodology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A participatory approach structured in three main phases, ensuring stakeholder 
            feedback drives model development
          </p>
        </div>

        {/* Phases */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-gold to-primary" />
          
          <div className={`stagger-children ${isVisible ? 'visible' : ''} grid lg:grid-cols-3 gap-8`}>
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-card border-l-4 border-primary hover:border-gold transition-colors duration-400"
              >
                {/* Phase Number Badge */}
                <div className="absolute -top-4 left-8 w-12 h-12 bg-primary group-hover:bg-gold rounded-full flex items-center justify-center text-white font-bold transition-colors duration-400 shadow-lg">
                  {phase.number}
                </div>
                
                <div className="pt-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <phase.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{phase.title}</h3>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {phase.duration}
                  </span>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
