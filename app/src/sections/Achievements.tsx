import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Code2, Shield, GraduationCap, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    items: [
      'Database of coastal government contacts',
      'CENEPRED partnership established',
      'Seminars conducted in Chimbote',
      'Survey responses collected',
    ],
  },
  {
    icon: Code2,
    title: 'Technical Development',
    items: [
      'Functional NetLogo model',
      'Tsunami data integration completed',
      'Routing algorithm implemented',
      'Short simulation time achieved',
    ],
  },
  {
    icon: Shield,
    title: 'Ethics and Governance',
    items: [
      'IRIDeS ethics approval obtained',
      'Informed consent protocols developed',
      'Data management procedures established',
      'Privacy protection measures implemented',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    items: [
      'International researcher exchange',
      'NetLogo training conducted',
      'Python integration workshops',
      'Knowledge transfer to local researchers',
    ],
  },
];

export function Achievements() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Key Achievements to Date
          </h2>
        </div>

        <div className={`stagger-children ${isVisible ? 'visible' : ''} grid md:grid-cols-2 gap-6`}>
          {achievements.map((category, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-8 shadow-card border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
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
