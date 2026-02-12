import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Laptop, BookOpen, GraduationCap } from 'lucide-react';

const outputCategories = [
  {
    icon: Laptop,
    title: 'Software Deliverables',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    items: [
      'Open-source GTEM Model (NetLogo & Python-based)',
      'Web Portal with documentation and downloads',
      'User Manual for non-expert users',
      'Case Study Repository with templates',
    ],
  },
  {
    icon: BookOpen,
    title: 'Scientific Publications topics',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    items: [
      'State of evacuation planning in Peru',
      'Participatory model development methodology',
      'Chimbote case study findings',
      'Technical model documentation',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training Materials',
    color: 'bg-green-50 text-green-600 border-green-200',
    items: [
      'Video tutorials on model usage',
      'Step-by-step implementation guides',
      'Workshop presentation materials',
      'Data preparation templates',
    ],
  },
];

export function Outputs() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="outputs" ref={ref} className="section-lg bg-gray-50">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Expected Outputs
          </h2>
        </div>

        <div className={`stagger-children ${isVisible ? 'visible' : ''} grid lg:grid-cols-3 gap-8`}>
          {outputCategories.map((category, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
            >
              {/* Header */}
              <div className={`p-6 border-b ${category.color}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/80`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${category.color}`}>
                        <span className="text-xs font-bold">{itemIndex + 1}</span>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
