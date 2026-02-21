import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Users, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

const keyFacts = [
  { icon: MapPin, label: 'Location', value: 'Puerto Chimbote, Ancash Region, Peru' },
  { icon: Users, label: 'Population', value: '~17,000 in study area' },
  { icon: Clock, label: 'Tsunami Arrival', value: '23-25 minutes' },
];

const objectives = [
  'Provide evacuation time estimates',
  'Identify critical evacuation routes',
  'Assess vulnerability of road network',
  'Provide actionable recommendations to local authorities',
];

export function CaseStudy() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const videoPlayerUrl = `${import.meta.env.BASE_URL}video-player.html`;

  const handleOpenVideo = () => {
    window.open(videoPlayerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-study" ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className={`reveal ${isVisible ? 'visible' : ''}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Chimbote, Peru
              </h2>
            </div>

            <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Historical Context:</strong> Coastal city with significant tsunami risk. 
                  The 1996 event resulted in 12 fatalities, highlighting the critical need for 
                  improved evacuation planning.
                </p>
              </div>
            </div>

            {/* Key Facts */}
            <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
              <h3 className="font-semibold text-navy-900 mb-4">Key Facts</h3>
              <div className="space-y-3 mb-8">
                {keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{fact.label}</p>
                      <p className="font-medium text-navy-900">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className={`reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
              <h3 className="font-semibold text-navy-900 mb-4">Study Objectives</h3>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <button
              type="button"
              onClick={handleOpenVideo}
              className="relative w-full text-left"
              aria-label="Open Chimbote case study video in a new tab"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./images/chimbote.jpg"
                  alt="Chimbote coastal city aerial view"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 shadow-md">
                  Click to watch video
                </span>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">30s</p>
                    <p className="text-gray-500 text-sm">Simulation Time</p>
                  </div>
                </div>
              </div>

              {/* Floating Agents Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">17,000</p>
                  <p className="text-gray-500 text-xs">Agents Simulated</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
