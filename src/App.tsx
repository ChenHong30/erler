import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TLDR } from './components/TLDR';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TLDR />
        <Methodology />
        <Results />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2026 ERLER Project. Published in Applied Soft Computing.</p>
          <div className="flex items-center gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
             <a 
               href="https://github.com" 
               target="_blank" 
               rel="noreferrer" 
               className="hover:text-white transition-colors"
               aria-label="GitHub"
             >
                <Github size={20} />
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
