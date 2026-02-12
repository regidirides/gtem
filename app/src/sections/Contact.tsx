import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Users, HandshakeIcon, GraduationCap } from 'lucide-react';

const getImagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;
const erickmasPhoto = getImagePath('erickmas.jpeg');

/* const projectLinks = [
  { icon: BookOpen, label: 'Google Drive', href: 'https://drive.google.com/drive/u/0/folders/0AAMlpVaTOFmzUk9PVA' },
  { icon: ExternalLink, label: 'Overleaf Paper', href: 'https://www.overleaf.com/project/68f25bbef605531cb859d9f1' },
  { icon: ExternalLink, label: 'Overleaf Manual', href: 'https://www.overleaf.com/9635785238ngtqxbtkxksb#e6558b' },
]; */

const callToActions = [
  {
    icon: Users,
    title: 'For Local Governments',
    description: 'Interested in improving your community\'s tsunami evacuation planning? Contact us to participate in the project or access our tools.',
  },
  {
    icon: GraduationCap,
    title: 'For Researchers',
    description: 'Join our open-source community. Contribute to model development, share case studies, or collaborate on publications.',
  },
  {
    icon: HandshakeIcon,
    title: 'For Funding Organizations',
    description: 'Support the expansion of GTEM to additional regions and hazard types. Contact us for partnership opportunities.',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="section-lg bg-white">
      <div className="container-custom">
        <div className={`reveal ${isVisible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in improving your community's tsunami evacuation planning?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Info */}
          <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Principal Investigator</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gray-200">
                  <img 
                    src={erickmasPhoto} 
                    alt="Assoc. Prof. Erick Mas"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-lg">Assoc. Prof. Erick Mas</h4>
                  <p className="text-primary">Principal Investigator</p>
                  <p className="text-gray-500 text-sm">IRIDeS, Tohoku University</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-navy-900 text-sm truncate">mas@tohoku.ac.jp</p>
                </div>
              </div>
            </div>

            {/* Project Links */}
            {/* <div className="mt-6">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Project Links</h3>
              <div className="flex flex-wrap gap-3">
                {projectLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg text-gray-700 transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Column - CTAs */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4">
              {callToActions.map((cta, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <cta.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">{cta.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{cta.description}</p>
                    </div>
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
