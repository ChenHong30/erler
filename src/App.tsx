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
             
             <a href="mailto:vvcheung@stu.xmu.edu.cn" className="hover:text-white transition-colors flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>Contact</a>
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
