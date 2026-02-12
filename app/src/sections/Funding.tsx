import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { DollarSign, Monitor, Plane, Building2 } from 'lucide-react';

const budgetItems = [
  { icon: Monitor, label: 'Equipment and software', amount: 1120, percentage: 7.4 },
  // { icon: Users, label: 'Personnel (students and interns)', amount: 2310, percentage: 15 },
  { icon: Plane, label: 'Travel (national and international)', amount: 6000, percentage: 40.0 },
  // { icon: Globe, label: 'Web design, hosting, and dissemination', amount: 540, percentage: 4 },
  { icon: Building2, label: 'Overhead', amount: 380, percentage: 2.6 },
];

function BudgetBar({ item, isVisible }: { item: typeof budgetItems[0]; isVisible: boolean }) {
  const count = useCountUp({ end: item.amount, duration: 2000, enabled: isVisible });
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <item.icon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-gray-700 font-medium">{item.label}</span>
        </div>
        <div className="text-right">
          <span className="font-bold text-navy-900">${count.toLocaleString()}</span>
          <span className="text-gray-400 text-sm ml-2">({item.percentage}%)</span>
        </div>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${item.percentage}%` : '0%',
            transitionDelay: `${budgetItems.indexOf(item) * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function Funding() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-md bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Funding
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">$15,000</p>
                  <p className="text-white/60">Total Grant (12 months)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <p className="text-white/80">
                  <strong className="text-white">Funding Organization:</strong> Coalition for Disaster Resilient Infrastructure (CDRI)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <p className="text-white/80">
                  <strong className="text-white">Program:</strong> CDRI Fellowship Program 2025-26
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Budget Breakdown */}
          <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-lg font-bold text-navy-900 mb-6">Budget Allocation</h3>
              {budgetItems.map((item, index) => (
                <BudgetBar key={index} item={item} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
