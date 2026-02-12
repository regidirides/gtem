import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Overview } from './sections/Overview';
import { Partners } from './sections/Partners';
import { Methodology } from './sections/Methodology';
import { KeyFeatures } from './sections/KeyFeatures';
import { CaseStudy } from './sections/CaseStudy';
import { Timeline } from './sections/Timeline';
import { Achievements } from './sections/Achievements';
import { Outputs } from './sections/Outputs';
import { Impact } from './sections/Impact';
import { Funding } from './sections/Funding';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <Partners />
        <Methodology />
        <KeyFeatures />
        <CaseStudy />
        <Timeline />
        <Achievements />
        <Outputs />
        <Impact />
        <Funding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
