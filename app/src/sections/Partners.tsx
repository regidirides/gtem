import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Building2, GraduationCap, Users, Landmark, HandshakeIcon } from 'lucide-react';

const getImagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

const erickmasPhoto = getImagePath('erickmas.jpeg');
const luismoyaPhoto = getImagePath('luismoya.jpeg');
const jheyderperezPhoto = getImagePath('jheyderperez.jpeg');
const shunichikoshimuraPhoto = getImagePath('shunichikoshimura.jpeg');

const partners = [
  {
    icon: Building2,
    name: 'IRIDeS',
    fullName: 'International Research Institute of Disaster Science',
    role: 'Lead Institution',
    location: 'Tohoku University, Sendai, Japan',
    url: 'https://irides.tohoku.ac.jp/eng/',
  },
  {
    icon: GraduationCap,
    name: 'PUCP',
    fullName: 'Pontificia Universidad Católica del Perú',
    role: 'Collaborating Institution',
    location: 'Lima, Peru',
    url: 'https://www.pucp.edu.pe/',
  },
  {
    icon: Landmark,
    name: 'CENEPRED',
    fullName: 'National Center for Estimation, Prevention and Reduction of Disaster Risk',
    role: 'Supporting Organization',
    location: 'Peru',
    url: 'https://aulavirtual.cenepred.gob.pe/',
  },
  {
    icon: Landmark,
    name: 'GRC',
    fullName: 'Gobierno Regional del Callao',
    role: 'Supporting Organization',
    location: 'Peru',
    url: 'https://web.regioncallao.gob.pe/',
  },
  {
    icon: HandshakeIcon,
    name: 'CDRI',
    fullName: 'Coalition for Disaster Resilient Infrastructure',
    role: 'Funding Organization',
    location: 'International',
    url: 'https://cdri.world/',
  },
];

const team = [
  { name: 'Assoc. Prof. Erick Mas', role: 'Principal Investigator', institution: 'IRIDeS, Tohoku University', photo: erickmasPhoto },
  { name: 'Assist. Prof. Luis Moya', role: 'Co-Investigator', institution: 'PUCP', photo: luismoyaPhoto },
  { name: 'MSc. Jheyder Perez', role: 'Research Associate', institution: 'PUCP', photo: jheyderperezPhoto },
  { name: 'Prof. Shunichi Koshimura', role: 'Mentor', institution: 'IRIDeS, Tohoku University', photo: shunichikoshimuraPhoto },
];

export function Partners() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-md bg-gray-50">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-12`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Project Partners
          </h2>
        </div>

        {/* Partner Cards */}
        <div className={`stagger-children ${isVisible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16`}>
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-white rounded-xl p-6 shadow-card border border-gray-100 text-center block transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <partner.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{partner.fullName}</p>
              <span className="inline-block bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                {partner.role}
              </span>
              <p className="text-gray-400 text-xs mt-2">{partner.location}</p>
            </a>
          ))}
        </div>

        {/* Team Section */}
        <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Core Team</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden bg-gray-200">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23ccc"/%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{member.name}</h4>
                    <p className="text-primary text-sm">{member.role}</p>
                    <p className="text-gray-400 text-xs mt-1">{member.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
