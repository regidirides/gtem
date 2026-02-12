import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Target, Users, Clock, DollarSign } from 'lucide-react';

const stats = [
  { icon: Clock, value: 12, suffix: '', label: 'Months Duration' },
  { icon: DollarSign, value: 15, suffix: 'K', label: 'Total Funding' },
  { icon: Users, value: 17, suffix: 'K+', label: 'Agents Simulated' },
  { icon: Target, value: 3, suffix: '', label: 'Research Phases' },
];

function StatCard({ icon: Icon, value, suffix, label, isVisible }: {
  icon: typeof Clock;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp({ end: value, duration: 2000, enabled: isVisible });
  
  return (
    <div className="card-hover bg-white rounded-xl p-6 shadow-card border border-gray-100">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-3xl font-bold text-navy-900 mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

export function Overview() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="overview" ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3">
            <div className={`reveal ${isVisible ? 'visible' : ''}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                About the Project
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Improving Tsunami Evacuation Planning
              </h2>
            </div>
            
            <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Global Tsunami Evacuation Model (GTEM) is a research initiative funded by 
                the Coalition for Disaster Resilient Infrastructure (CDRI) Fellowship Program 
                2025-26. Our mission is to bridge the gap between academic evacuation modeling 
                and practical disaster risk management at the local government level.
              </p>
            </div>
            
            <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
              <div className="bg-navy-900/5 border-l-4 border-primary rounded-r-lg p-6 mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  Key Research Question
                </p>
                <p className="text-navy-900 font-medium text-lg italic">
                  "How can tsunami evacuation models effectively be used in local government 
                  to improve evacuation planning and education?"
                </p>
              </div>
            </div>
            
            <div className={`reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
              <p className="text-gray-600 leading-relaxed">
                We aim to provide evacuation planners with a simple-to-use tool to assess tsunami 
                risk in small communities. The core of our proposal is to improve tsunami evacuation 
                models with features that incorporate feedback from local government planners. We 
                will provide local governments with an open-source platform, a dedicated web-based 
                manual and documentation, and the necessary case studies to guide the use of this 
                tool in effective tsunami evacuation planning, connecting academia and practitioners.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-2">
            <div className={`stagger-children ${isVisible ? 'visible' : ''} grid grid-cols-2 gap-4`}>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
