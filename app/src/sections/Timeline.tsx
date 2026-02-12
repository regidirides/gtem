import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const quarters = [
  {
    quarter: 'Q1',
    period: 'Aug - Oct 2025',
    title: 'Foundation Phase',
    status: 'completed',
    milestones: [
      'Contact list compilation',
      'Ethics committee approval (IRIDeS)',
      'Questionnaire design and testing',
      'Initial stakeholder engagement',
    ],
  },
  {
    quarter: 'Q2',
    period: 'Nov 2025 - Jan 2026',
    title: 'Engagement Phase',
    status: 'completed',
    milestones: [
      'CENEPRED partnership established',
      'Questionnaire distribution nationwide',
      'Model development initiated',
      'International collaboration (Japan-Peru visit)',
    ],
  },
  {
    quarter: 'Q3',
    period: 'Feb - Apr 2026',
    title: 'Development Phase',
    status: 'in-progress',
    milestones: [
      'Model feature enhancement',
      'Case study data collection',
      'Scientific paper drafting',
    ],
  },
  {
    quarter: 'Q4',
    period: 'May - Jul 2026',
    title: 'Validation Phase',
    status: 'upcoming',
    milestones: [
      'Case study implementation',
      'Documentation finalization',
      'Web portal launch',
      'Final reporting and dissemination',
    ],
  },
];

export function Timeline() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-lg bg-gray-50">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Project Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Project Timeline
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            August 2025 - July 2026 (12 months)
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          
          <div className="space-y-8 lg:space-y-0">
            {quarters.map((item, index) => {
              const isLeft = index % 2 === 0;
              const StatusIcon = item.status === 'completed' ? CheckCircle2 : 
                                item.status === 'in-progress' ? Clock : Circle;
              const statusColor = item.status === 'completed' ? 'text-green-500 bg-green-50 border-green-200' :
                                 item.status === 'in-progress' ? 'text-amber-500 bg-amber-50 border-amber-200' :
                                 'text-gray-400 bg-gray-50 border-gray-200';
              
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${index} ${isVisible ? 'visible' : ''} lg:grid lg:grid-cols-2 lg:gap-8 relative`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'}`}>
                    <div className={`bg-white rounded-xl p-6 shadow-card border border-gray-100 hover:shadow-lg transition-shadow ${
                      item.status === 'in-progress' ? 'ring-2 ring-amber-200' : ''
                    }`}>
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${statusColor}`}>
                          <StatusIcon className="w-4 h-4" />
                          {item.quarter}
                        </span>
                        <span className="text-gray-400 text-sm">{item.period}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                      
                      <ul className={`space-y-2 ${isLeft ? 'lg:text-right' : ''}`}>
                        {item.milestones.map((milestone, mIndex) => (
                          <li key={mIndex} className={`flex items-center gap-2 text-gray-600 text-sm ${
                            isLeft ? 'lg:flex-row-reverse' : ''
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              item.status === 'completed' ? 'bg-green-400' :
                              item.status === 'in-progress' ? 'bg-amber-400' :
                              'bg-gray-300'
                            }`} />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'in-progress' ? 'bg-amber-500' :
                      'bg-gray-300'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
