import { TerminalBar } from './components/TerminalBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-bright selection:text-white">
      <TerminalBar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Certifications />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

