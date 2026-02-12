import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Map, Users, Route, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Flexible Geographic Input',
    description: 'Compatible with OpenStreetMap and official government datasets. Automated processing of road networks and building data with seamless integration of tsunami inundation maps.',
  },
  {
    icon: Users,
    title: 'Agent-Based Simulation',
    description: 'Behavioral modeling for decision-making and route choice with realistic evacuation timing and response patterns.',
  },
  {
    icon: Route,
    title: 'Scenario Analysis',
    description: 'Road network disruption assessment and multiple evacuation strategy comparison.',
  },
  {
    icon: BarChart3,
    title: 'Visualization and Analysis',
    description: 'Visualization with comprehensive evacuation time analysis. Bottleneck and congestion identification with detailed reporting and graphical outputs.',
  },
];

export function KeyFeatures() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-lg bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Key Features
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The GTEM model incorporates advanced capabilities for comprehensive evacuation planning and analysis.
          </p>
        </div>

        <div className={`stagger-children ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-6`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-400"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
